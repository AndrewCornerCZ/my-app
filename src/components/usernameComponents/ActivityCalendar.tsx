'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { useSession } from 'next-auth/react'
import ActivityParticipantsModal from './ActivityParticipantsModal'
import type { Icon, IconOptions } from 'leaflet'
import { useMemo } from 'react'


const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then(mod => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)

interface UserSport {
  sportId: number
  color?: string | null
}

interface ActivityWithSport {
  id: number
  date: string | Date
  starttime: string
  endtime: string
  description: string | null
  sportId: number
  userId: number
  latitude: number | null
  longitude: number | null
  publicity: string
  user: {
    id: number
    username: string
  }
  sport: {
    name: string
  }
  participants?: {
    id: number
    activityId: number
    userId: number
    role: string
  }[]
}

interface ActivityCalendarProps {
  initialActivities: ActivityWithSport[]
  userSports: UserSport[]
  userId: number
}

interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  activities: ActivityWithSport[]
}

export default function ActivityCalendar({
  initialActivities,
  userSports,
  userId
}: ActivityCalendarProps) {
  const [activities] = useState(initialActivities)
  const [participantingActivities, setParticipatingActivities] = useState<ActivityWithSport[]>([])
  const [currentDate, setCurrentDate] = useState(new Date())
  const [days, setDays] = useState<CalendarDay[]>([])
  const [selectedActivities, setSelectedActivities] =
    useState<ActivityWithSport[] | null>(null)
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityWithSport | null>(null)
  const [markerIcon, setMarkerIcon] = useState<Icon<IconOptions> | undefined>(undefined)
  const [canJoinMap, setCanJoinMap] = useState<
    Record<number, { allowed: boolean; reason?: string; checked: boolean }>
  >({})
  const [joiningMap, setJoiningMap] = useState<Record<number, boolean>>({})
  const [participantsModalOpen, setParticipantsModalOpen] = useState(false)
  const { data: session } = useSession()

   const mergedActivities = useMemo<ActivityWithSport[]>(() => {
    
    const map = new Map<number, ActivityWithSport>()
    console.log('participantingActivities', participantingActivities);
    activities.forEach(act => {
      map.set(act.id, act)
    })

    participantingActivities.forEach(act => {
      if (!map.has(act.id)) {
        map.set(act.id, act)
      }
    })

    return Array.from(map.values())
  }, [activities, participantingActivities])

useEffect(() => {
  findParticipatingActivities()
}, [])
  useEffect(() => {
    import('leaflet').then(L => {
      const icon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
      setMarkerIcon(icon)
    })
  }, [])
  const findParticipatingActivities = async () => {
    try {
      const res = await fetch(`/api/activities/${userId}/findattending`)
      if (!res.ok) throw new Error("Failed to load participants")
      const json = await res.json()
      console.log(json);
      setParticipatingActivities(json)
    } catch (e) {
      console.error(e)
    }
  } 
  
  // Přepočet duration v minutách mezi start a end
function getActivityDurationMinutes(act: ActivityWithSport) {
  const [sh, sm] = act.starttime.split(':').map(Number)
  const [eh, em] = act.endtime.split(':').map(Number)
  return (eh * 60 + em) - (sh * 60 + sm)
}

// Seřazení aktivit podle měsíce YYYY-MM
function getMonthlyStats() {
  const map: Record<string, number> = {}
  mergedActivities.forEach(act => {
    const month = new Date(act.date).toISOString().slice(0, 7) // "YYYY-MM"
    map[month] = (map[month] || 0) + getActivityDurationMinutes(act)
  })
  return Object.entries(map).map(([month, totalMinutes]) => ({ month, totalMinutes }))
}

// Výběr badge podle počtu minut
function getBadge(totalMinutes: number) {
  if (totalMinutes >= 30 * 60) return 'gold'   // 30+ hodin
  if (totalMinutes >= 20 * 60) return 'silver' // 20+ hodin
  if (totalMinutes >= 10 * 60 ) return 'bronze'// 10+ hodin
  return 'none'
}
  useEffect(() => {
    const generateCalendarGrid = () => {
      const year = currentDate.getFullYear()
      const month = currentDate.getMonth()
      const firstDayOfMonth = new Date(year, month, 1)
      const startDate = new Date(firstDayOfMonth)
      startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay())

      const dayArray: CalendarDay[] = []
      for (let i = 0; i < 42; i++) {
        const date = new Date(startDate)
        date.setDate(startDate.getDate() + i)

        const activitiesForDay = mergedActivities.filter(act => {
          const actDate = new Date(act.date)
          return (
            actDate.getFullYear() === date.getFullYear() &&
            actDate.getMonth() === date.getMonth() &&
            actDate.getDate() === date.getDate()
          )
        })



        dayArray.push({
          date,
          isCurrentMonth: date.getMonth() === month,
          activities: activitiesForDay,
        })
      }

      setDays(dayArray)
    }

    generateCalendarGrid()
  }, [currentDate, mergedActivities, userSports])

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    )
  }

  const handleDayClick = (date: Date) => {

    const activitiesForDay = mergedActivities.filter(
      act => new Date(act.date).toDateString() === date.toDateString()
    )
    setSelectedActivities(activitiesForDay.length ? activitiesForDay : null)
    setSelectedActivity(
      activitiesForDay.length === 1 ? activitiesForDay[0] : null
    )
    setParticipantsModalOpen(false) // Reset participants modal
  }

  const checkCanJoin = async (activityId: number) => {
    if (canJoinMap[activityId]?.checked) return
    try {
      const res = await fetch(`/api/activities/${activityId}/can-join`)
      if (res.ok) {
        setCanJoinMap(prev => ({
          ...prev,
          [activityId]: { allowed: true, checked: true },
        }))
      } else {
        const json = await res.json().catch(() => ({}))
        setCanJoinMap(prev => ({
          ...prev,
          [activityId]: {
            allowed: false,
            reason: json?.message,
            checked: true,
          },
        }))
      }
    } catch (e) {
      console.error('checkCanJoin error', e)
      setCanJoinMap(prev => ({
        ...prev,
        [activityId]: {
          allowed: false,
          reason: 'Network error',
          checked: true,
        },
      }))
    }
  }

  const handleJoin = async (activityId: number) => {
    setJoiningMap(prev => ({ ...prev, [activityId]: true }))
    try {
      const res = await fetch(`/api/activities/${activityId}/join`, {
        method: 'POST',
      })
      if (res.ok) {
        setCanJoinMap(prev => ({
          ...prev,
          [activityId]: { allowed: false, reason: 'Joined', checked: true },
        }))
      } else {
        const json = await res.json().catch(() => ({}))
        setCanJoinMap(prev => ({
          ...prev,
          [activityId]: {
            allowed: false,
            reason: json?.message ?? 'Failed to join',
            checked: true,
          },
        }))
      }
    } catch (e) {
      console.error('checkCanJoin error', e)
      setCanJoinMap(prev => ({
        ...prev,
        [activityId]: {
          allowed: false,
          reason: 'Network error',
          checked: true,
        },
      }))
    } finally {
      setJoiningMap(prev => ({ ...prev, [activityId]: false }))
    }
  }

  useEffect(() => {
    if (!selectedActivities) return
    selectedActivities.forEach(act => checkCanJoin(act.id))
  }, [selectedActivities])

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="px-3 py-1 bg-zinc-700 rounded hover:bg-zinc-600"
          >
            &lt;
          </button>
          <h3 className="text-xl font-semibold text-white">
            {currentDate.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </h3>
          <button
            onClick={handleNextMonth}
            className="px-3 py-1 bg-zinc-700 rounded hover:bg-zinc-600"
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-400 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map(({ date, isCurrentMonth }, index) => (
            <div
              key={index}
              onClick={() => handleDayClick(date)}
              className={`w-full aspect-square rounded-md cursor-pointer flex items-center justify-center transition-colors ${
                !isCurrentMonth ? 'text-gray-600' : 'text-white'
              }`}
              style={{
                backgroundColor: isCurrentMonth ? '#4a4a52' : '#3a3a40',
              }}
              title={date.toLocaleDateString()}
            >
              <div className="flex flex-col items-center">
                <span className="text-xs">{date.getDate()}</span>
                <div className="flex space-x-1 mt-1">
                  {days[index].activities?.slice(0, 4).map((act, i) => {
                    const sportInfo = userSports.find(
                      us => us.sportId === act.sportId
                    )
                    const dotColor = sportInfo?.color || '#3b82f6'
                    return (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: dotColor }}
                      />
                    )
                  })}
                  {days[index].activities &&
                    days[index].activities.length > 4 && (
                      <span className="text-[10px] text-gray-200">
                        +{days[index].activities.length - 4}
                      </span>
                    )}
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className="mt-6 bg-zinc-800 p-4 rounded-lg shadow">
            <h3 className="text-white font-semibold mb-2">Monthly Progress & Badges</h3>
            {getMonthlyStats().map(stat => {
  const badge = getBadge(stat.totalMinutes)
  
  // extrahuj měsíc z "YYYY-MM" formátu
  const statMonthNumber = Number(stat.month.split('-')[1]) // "2025-11" -> 11
  const currentMonthNumber = currentDate.getMonth() + 1 // getMonth() vrací 0-11, takže +1
  
  if (statMonthNumber === currentMonthNumber) {
    return (
      <div key={stat.month} className="flex items-center gap-2 mb-2">
        <span className="w-20 text-gray-300">{stat.month}</span>
        <div className="w-full bg-zinc-700 h-4 rounded overflow-hidden">
          <div
            className={`h-4 ${
              badge === 'gold'
                ? 'bg-yellow-400'
                : badge === 'silver'
                  ? 'bg-gray-400'
                  : 'bg-amber-700'
            }`}
            style={{
              width: `${Math.min(stat.totalMinutes / 600 * 100, 100)}%`,
            }}
          />
        </div>
        <p className="text-xs text-white text-center">
          {Math.floor(stat.totalMinutes / 60)}h {stat.totalMinutes % 60}m
        </p>
        <span className="text-xs text-white ml-2 capitalize">{badge}</span>
      </div>
    )
  }
})}
          </div>
        

        {selectedActivities && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-auto"
            onClick={() => {
              setSelectedActivities(null)
              setSelectedActivity(null)
            }}
          >
            <div
              className="bg-zinc-800 p-6 rounded-lg shadow-xl w-full max-w-3xl mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h4 className="font-bold text-white mb-3">
                {new Date(selectedActivities[0].date).toLocaleDateString()} —{' '}
                {selectedActivities.length}{' '}
                {selectedActivities.length === 1 ? 'activity' : 'activities'}
              </h4>
              <div className="space-y-4 max-h-[70vh] overflow-auto pr-2">
                {selectedActivities.map(act => (
                  <div key={act.id} className="bg-zinc-900 p-3 rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-white font-semibold mb-1">
                          @{act.user.username}
                        </p>
                        <p className="text-sm text-gray-300 font-semibold">
                          {act.sport.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          From: {String(act.starttime)} — To:{' '}
                          {String(act.endtime)}
                        </p>
                        {act.description && (
                          <p className="text-xs text-gray-400 mt-1">
                            Notes: {act.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {act.latitude != null &&
                      act.longitude != null &&
                      markerIcon && (
                        <div className="mt-3 h-48 rounded overflow-hidden">
                          <MapContainer
                            key={`map-${act.id}-${act.latitude}-${act.longitude}`}
                            center={[Number(act.latitude), Number(act.longitude)]}
                            zoom={13}
                            style={{ height: '100%', width: '100%' }}
                          >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker
                              position={[
                                Number(act.latitude),
                                Number(act.longitude),
                              ]}
                              icon={markerIcon}
                            >
                              <Popup>Activity Location</Popup>
                            </Marker>
                          </MapContainer>
                        </div>
                      )}

                    <div className="mt-3 flex items-center gap-3 flex-wrap">
                      <p className="text-xs text-gray-400">
                        Privacy: {act.publicity}
                      </p>

                      {/* Show participants button if user is owner */}
                        {session?.user?.id &&
                          Number(session.user.id) === act.userId  &&
                          act.publicity !== 'private' && (
                            <button
                        onClick={() => {
                        setSelectedActivity(act)
                        setParticipantsModalOpen(true)
                        }}
                              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs text-white"
                        >
                            👥 Manage Participants
                            </button>
                          )}
                      {/* Join controls for non-owners */}
                      {session?.user?.id &&
                      Number(session.user.id) !== act.userId ? (
                        canJoinMap[act.id]?.checked ? (
                          canJoinMap[act.id].allowed ? (
                            <button
                              className="px-3 py-1 bg-emerald-600 rounded text-xs text-white"
                              disabled={joiningMap[act.id]}
                              onClick={() => handleJoin(act.id)}
                            >
                              {joiningMap[act.id] ? 'Joining...' : 'Join'}
                            </button>
                          ) : (
                            <div className="text-xs text-gray-400">
                              {canJoinMap[act.id].reason}
                            </div>
                          )
                        ) : (
                          <button
                            className="px-3 py-1 bg-zinc-700 rounded text-xs text-white"
                            onClick={() => checkCanJoin(act.id)}
                          >
                            Check join
                          </button>
                        )
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
        {selectedActivity && selectedActivity?.publicity !== 'private' && (
        <ActivityParticipantsModal
          activityId={selectedActivity.id}
          ownerId={selectedActivity.userId}
          isOpen={participantsModalOpen}
          onClose={() => {
          setParticipantsModalOpen(false)
          setSelectedActivity(null) // při zavření modal také zrušíme selectedActivity
        }}
        />
      )}
    </>
  )
}