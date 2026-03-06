'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import { useSession } from 'next-auth/react'
import ActivityParticipantsModal from './ActivityParticipantsModal'
import type { Icon, IconOptions } from 'leaflet'
import { useMemo } from 'react'

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

interface UserSport { sportId: number; color?: string | null }
interface ActivityWithSport {
  id: number; date: string | Date; starttime: string; endtime: string
  description: string | null; sportId: number; userId: number
  latitude: number | null; longitude: number | null; publicity: string
  user: { id: number; username: string }
  sport: { name: string }
  participants?: { id: number; activityId: number; userId: number; role: string }[]
}
interface ActivityCalendarProps {
  initialActivities: ActivityWithSport[]
  userSports: UserSport[]
  userId: number
}
interface CalendarDay { date: Date; isCurrentMonth: boolean; activities: ActivityWithSport[] }

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function getActivityDurationMinutes(act: ActivityWithSport) {
  const [sh, sm] = act.starttime.split(':').map(Number)
  const [eh, em] = act.endtime.split(':').map(Number)
  return (eh * 60 + em) - (sh * 60 + sm)
}

function getBadge(totalMinutes: number) {
  if (totalMinutes >= 30 * 60) return { label: 'Gold', color: 'text-yellow-400', bg: 'bg-yellow-400' }
  if (totalMinutes >= 20 * 60) return { label: 'Silver', color: 'text-gray-300', bg: 'bg-gray-300' }
  if (totalMinutes >= 10 * 60) return { label: 'Bronze', color: 'text-amber-600', bg: 'bg-amber-600' }
  return null
}

export default function ActivityCalendar({ initialActivities, userSports, userId }: ActivityCalendarProps) {
  const [activities] = useState(initialActivities)
  const [participatingActivities, setParticipatingActivities] = useState<ActivityWithSport[]>([])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [days, setDays] = useState<CalendarDay[]>([])
  const [selectedActivities, setSelectedActivities] = useState<ActivityWithSport[] | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<ActivityWithSport | null>(null)
  const [markerIcon, setMarkerIcon] = useState<Icon<IconOptions> | undefined>(undefined)
  const [canJoinMap, setCanJoinMap] = useState<Record<number, { allowed: boolean; reason?: string; checked: boolean }>>({})
  const [joiningMap, setJoiningMap] = useState<Record<number, boolean>>({})
  const [participantsModalOpen, setParticipantsModalOpen] = useState(false)
  const { data: session } = useSession()

  const mergedActivities = useMemo<ActivityWithSport[]>(() => {
    const map = new Map<number, ActivityWithSport>()
    activities.forEach(act => map.set(act.id, act))
    participatingActivities.forEach(act => { if (!map.has(act.id)) map.set(act.id, act) })
    return Array.from(map.values())
  }, [activities, participatingActivities])

  useEffect(() => { findParticipatingActivities() }, [])

  useEffect(() => {
    import('leaflet').then(L => {
      setMarkerIcon(new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41], iconAnchor: [12, 41],
      }))
    })
  }, [])

  const findParticipatingActivities = async () => {
    try {
      const res = await fetch(`/api/activities/${userId}/findattending`)
      if (!res.ok) throw new Error('Failed')
      setParticipatingActivities(await res.json())
    } catch (e) { console.error(e) }
  }

  // Monthly stats
  const monthlyStats = useMemo(() => {
    const map: Record<string, number> = {}
    mergedActivities.forEach(act => {
      const month = new Date(act.date).toISOString().slice(0, 7)
      map[month] = (map[month] || 0) + getActivityDurationMinutes(act)
    })
    return Object.entries(map).map(([month, totalMinutes]) => ({ month, totalMinutes }))
  }, [mergedActivities])

  const currentMonthStats = monthlyStats.find(s => {
    const [y, m] = s.month.split('-').map(Number)
    return y === currentDate.getFullYear() && m === currentDate.getMonth() + 1
  })

  useEffect(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    // Start from Monday
    const startDate = new Date(firstDay)
    const dow = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
    startDate.setDate(startDate.getDate() - dow)

    const dayArray: CalendarDay[] = []
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      const activitiesForDay = mergedActivities.filter(act => {
        const d = new Date(act.date)
        return d.getFullYear() === date.getFullYear() && d.getMonth() === date.getMonth() && d.getDate() === date.getDate()
      })
      dayArray.push({ date, isCurrentMonth: date.getMonth() === month, activities: activitiesForDay })
    }
    setDays(dayArray)
  }, [currentDate, mergedActivities])

  const handleDayClick = (date: Date) => {
    const acts = mergedActivities.filter(act => new Date(act.date).toDateString() === date.toDateString())
    setSelectedActivities(acts.length ? acts : null)
    setSelectedActivity(acts.length === 1 ? acts[0] : null)
    setParticipantsModalOpen(false)
  }

const checkCanJoin = async (activityId: number) => {
  if (canJoinMap[activityId]?.checked) return
  try {
    const res = await fetch(`/api/activities/${activityId}/can-join`)
    if (res.ok) {
      setCanJoinMap(prev => ({ ...prev, [activityId]: { allowed: true, checked: true } }))
    } else {
      const json = await res.json().catch(() => ({}))
      setCanJoinMap(prev => ({ ...prev, [activityId]: { allowed: false, reason: json?.message, checked: true } }))
    }
  } catch {
    setCanJoinMap(prev => ({ ...prev, [activityId]: { allowed: false, reason: 'Network error', checked: true } }))
  }
}

  const handleJoin = async (activityId: number) => {
    setJoiningMap(prev => ({ ...prev, [activityId]: true }))
    try {
      const res = await fetch(`/api/activities/${activityId}/join`, { method: 'POST' })
      const json = res.ok ? {} : await res.json().catch(() => ({}))
      setCanJoinMap(prev => ({ ...prev, [activityId]: { allowed: false, reason: res.ok ? 'Joined' : json?.message ?? 'Failed', checked: true } }))
    } catch { setCanJoinMap(prev => ({ ...prev, [activityId]: { allowed: false, reason: 'Network error', checked: true } })) }
    finally { setJoiningMap(prev => ({ ...prev, [activityId]: false })) }
  }

  useEffect(() => {
    if (!selectedActivities) return
    selectedActivities.forEach(act => checkCanJoin(act.id))
  }, [selectedActivities])

  const today = new Date()
  const badge = currentMonthStats ? getBadge(currentMonthStats.totalMinutes) : null

  return (
    <>
      <div className="space-y-4">
        {/* Calendar header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
            className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <h3 className="text-white font-bold text-sm">
            {currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </h3>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
            className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Weekday labels */}
        <div className="grid grid-cols-7 text-center">
          {WEEKDAYS.map(day => (
            <div key={day} className="text-xs text-gray-600 font-medium py-1">{day}</div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map(({ date, isCurrentMonth, activities: acts }, index) => {
            const isToday = date.toDateString() === today.toDateString()
            return (
              <button
                key={index}
                onClick={() => handleDayClick(date)}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all duration-150 ${
                  isToday
                    ? 'bg-teal-500/20 border border-teal-500/40'
                    : isCurrentMonth
                    ? 'bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/8'
                    : 'border border-transparent'
                }`}
              >
                <span className={`text-xs leading-none ${
                  isToday ? 'text-teal-300 font-bold' : isCurrentMonth ? 'text-white' : 'text-gray-700'
                }`}>
                  {date.getDate()}
                </span>
                {acts.length > 0 && (
                  <div className="flex gap-0.5 flex-wrap justify-center max-w-full px-0.5">
                    {acts.slice(0, 3).map((act, i) => {
                      const sportInfo = userSports.find(us => us.sportId === act.sportId)
                      return (
                        <span key={i} className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: sportInfo?.color || '#2dd4a0' }} />
                      )
                    })}
                    {acts.length > 3 && <span className="text-gray-500" style={{ fontSize: '8px' }}>+{acts.length - 3}</span>}
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Monthly progress */}
        {currentMonthStats && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">This Month</p>
              {badge && <span className={`text-xs font-bold ${badge.color}`}>{badge.label}</span>}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${badge?.bg || 'bg-teal-500'}`}
                  style={{ width: `${Math.min(currentMonthStats.totalMinutes / 600 * 100, 100)}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0">
                {Math.floor(currentMonthStats.totalMinutes / 60)}h {currentMonthStats.totalMinutes % 60}m
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1.5">
              Goal: 10h Bronze · 20h Silver · 30h Gold
            </p>
          </div>
        )}
      </div>

      {/* Day detail modal */}
      {selectedActivities && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => { setSelectedActivities(null); setSelectedActivity(null) }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-xl bg-gray-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 flex-shrink-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-0.5">
                  {new Date(selectedActivities[0].date).toLocaleDateString('en-US', { weekday: 'long' })}
                </p>
                <h3 className="text-lg font-extrabold text-white">
                  {new Date(selectedActivities[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                  <span className="text-gray-500 font-normal text-sm ml-2">· {selectedActivities.length} {selectedActivities.length === 1 ? 'activity' : 'activities'}</span>
                </h3>
              </div>
              <button
                onClick={() => { setSelectedActivities(null); setSelectedActivity(null) }}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Activities */}
            <div className="overflow-y-auto flex-1 px-6 py-4 space-y-3">
              {selectedActivities.map(act => {
                const sportInfo = userSports.find(us => us.sportId === act.sportId)
                const joinState = canJoinMap[act.id]
                const isOwner = session?.user?.id && Number(session.user.id) === act.userId

                return (
                  <div key={act.id} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    {/* Activity header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: sportInfo?.color || '#2dd4a0' }} />
                        <div>
                          <p className="text-white font-semibold text-sm">{act.sport.name}</p>
                          <p className="text-teal-400 text-xs">@{act.user.username}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-lg flex-shrink-0">
                        {act.starttime}–{act.endtime}
                      </span>
                    </div>

                    {act.description && (
                      <p className="text-gray-400 text-xs mb-3">{act.description}</p>
                    )}

                    {/* Map */}
                    {act.latitude != null && act.longitude != null && markerIcon && (
                      <div className="mb-3 h-40 rounded-xl overflow-hidden border border-white/10">
                        <MapContainer
                          key={`map-${act.id}-${act.latitude}-${act.longitude}`}
                          center={[Number(act.latitude), Number(act.longitude)]}
                          zoom={13}
                          style={{ height: '100%', width: '100%' }}
                        >
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          <Marker position={[Number(act.latitude), Number(act.longitude)]} icon={markerIcon}>
                            <Popup>Activity Location</Popup>
                          </Marker>
                        </MapContainer>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                        act.publicity === 'public'
                          ? 'bg-teal-500/10 border-teal-500/20 text-teal-400'
                          : act.publicity === 'friends'
                          ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                          : 'bg-gray-500/10 border-gray-500/20 text-gray-400'
                      }`}>
                        {act.publicity === 'public' ? '🌍' : act.publicity === 'friends' ? '👥' : '🔒'} {act.publicity}
                      </span>

                      {isOwner && act.publicity !== 'private' && (
                        <button
                          onClick={() => { setSelectedActivity(act); setParticipantsModalOpen(true) }}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-xs font-medium transition-all duration-200"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                          </svg>
                          Participants
                        </button>
                      )}

                      {session?.user?.id && Number(session.user.id) !== act.userId && (
                        joinState?.checked ? (
                          joinState.allowed ? (
                            <button
                              onClick={() => handleJoin(act.id)}
                              disabled={joiningMap[act.id]}
                              className="px-3 py-1 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-medium hover:bg-teal-500/25 disabled:opacity-50 transition-all duration-200"
                            >
                              {joiningMap[act.id] ? 'Joining…' : 'Join'}
                            </button>
                          ) : (
                            <span className="text-xs text-gray-500">{joinState.reason}</span>
                          )
                        ) : (
                          <button
                            onClick={() => checkCanJoin(act.id)}
                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white text-xs font-medium transition-all duration-200"
                          >
                            Check availability
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {selectedActivity && selectedActivity?.publicity !== 'private' && (
        <ActivityParticipantsModal
          activityId={selectedActivity.id}
          ownerId={selectedActivity.userId}
          isOpen={participantsModalOpen}
          onClose={() => { setParticipantsModalOpen(false); setSelectedActivity(null) }}
        />
      )}
    </>
  )
}