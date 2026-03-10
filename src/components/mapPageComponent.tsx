'use client'

import { useEffect, useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import type { Icon, IconOptions } from 'leaflet'

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })
const Circle = dynamic(() => import('react-leaflet').then(mod => mod.Circle), { ssr: false })

interface ActivityMarker {
  id: number
  latitude: number
  longitude: number
  sport: { id: number; name: string, emoji: string }
  description: string
  starttime: string
  endtime: string
  date: string
  publicity: string
  user: { username: string }
}

interface Sport {
  id: number
  name: string
  emoji: string
}

function relativeDate(dateStr: string) {
  const date = new Date(dateStr)
  const now = new Date()
  const diffDays = Math.round(
    (date.getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()) / 86400000
  )
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Tomorrow'
  if (diffDays > 1 && diffDays < 7) return `In ${diffDays} days`
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' })
}

// Funkce na vytvoření emoji markeru
const createEmojiMarker = (emoji: string) => {
  return new Promise<Icon<IconOptions>>((resolve) => {
    import('leaflet').then(L => {
      const canvas = document.createElement('canvas')
      canvas.width = 41
      canvas.height = 41
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        // Bílý kruh na pozadí
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(20.5, 15, 12, 0, Math.PI * 2)
        ctx.fill()
        
        // Teal border
        ctx.strokeStyle = '#14b8a6'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(20.5, 15, 12, 0, Math.PI * 2)
        ctx.stroke()
        
        // Emoji text
        ctx.font = 'bold 20px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(emoji, 20.5, 15)
      }

      const iconUrl = canvas.toDataURL('image/png')
      const icon = new L.Icon({
        iconUrl,
        iconSize: [41, 41],
        iconAnchor: [20.5, 41],
        popupAnchor: [0, -41],
      })
      resolve(icon)
    })
  })
}

export default function ActivitiesMapPage() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [activities, setActivities] = useState<ActivityMarker[]>([])
  const [allActivities, setAllActivities] = useState<ActivityMarker[]>([])
  const [userIcon, setUserIcon] = useState<Icon<IconOptions> | undefined>(undefined)
  const [markerIcons, setMarkerIcons] = useState<Map<number, Icon<IconOptions>>>(new Map())
  const [loading, setLoading] = useState(true)
  const [radius, setRadius] = useState(10)
  const [selectedSports, setSelectedSports] = useState<number[]>([])
  const [availableSports, setAvailableSports] = useState<Sport[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)
  const [selectedActivity, setSelectedActivity] = useState<ActivityMarker | null>(null)
  const [dateFilter] = useState<string | null>(() => new Date().toISOString().split('T')[0])

  useEffect(() => {
    import('leaflet').then(L => {
      setUserIcon(new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41], iconAnchor: [12, 41],
      }))
    })
  }, [])

  // Vytvořit markery pro všechny sporty
  useEffect(() => {
    const createMarkers = async () => {
      const newMarkerIcons = new Map<number, Icon<IconOptions>>()
      for (const sport of availableSports) {
        if (!markerIcons.has(sport.id)) {
          const icon = await createEmojiMarker(sport.emoji)
          newMarkerIcons.set(sport.id, icon)
        }
      }
      if (newMarkerIcons.size > 0) {
        setMarkerIcons(prev => new Map([...prev, ...newMarkerIcons]))
      }
    }
    createMarkers()
  }, [availableSports])

  useEffect(() => {
    if (!navigator.geolocation) {
      setUserLocation({ lat: 50.0755, lng: 14.4378 })
      fetchActivitiesNearby(50.0755, 14.4378, 10)
      return
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserLocation({ lat: coords.latitude, lng: coords.longitude })
        fetchActivitiesNearby(coords.latitude, coords.longitude, 10)
      },
      () => {
        setUserLocation({ lat: 50.0755, lng: 14.4378 })
        fetchActivitiesNearby(50.0755, 14.4378, 10)
      }
    )
  }, [])

  const fetchActivitiesNearby = async (lat: number, lng: number, rad: number) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/activities/nearby?lat=${lat}&lng=${lng}&radius=${rad}`)
      if (res.ok) {
        const data = await res.json()
        setAllActivities(data.activities)
        const sports = Array.from(
          new Map(data.activities.map((a: ActivityMarker) => [a.sport.id, a.sport])).values()
        ) as Sport[]
        setAvailableSports(sports)
        applyFilters(data.activities, [], dateFilter)
      }
    } catch (err) {
      console.error('Error fetching activities:', err)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = (
    activitiesToFilter: ActivityMarker[],
    sportIds: number[],
    dateFilterValue: string | null = dateFilter
  ) => {
    let filtered = activitiesToFilter
    if (sportIds.length > 0) filtered = filtered.filter(a => sportIds.includes(a.sport.id))
    if (dateFilterValue) {
      const filterDate = new Date(dateFilterValue)
      filtered = filtered.filter(a => {
        const d = new Date(a.date)
        return new Date(d.getFullYear(), d.getMonth(), d.getDate()) >=
          new Date(filterDate.getFullYear(), filterDate.getMonth(), filterDate.getDate())
      })
    }
    setActivities(filtered)
  }

  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius)
    if (userLocation) {
      fetchActivitiesNearby(userLocation.lat, userLocation.lng, newRadius)
      setSelectedSports([])
    }
  }

  const handleSportToggle = (sportId: number) => {
    const newSelected = selectedSports.includes(sportId)
      ? selectedSports.filter(id => id !== sportId)
      : [...selectedSports, sportId]
    setSelectedSports(newSelected)
    applyFilters(allActivities, newSelected)
  }

  const mapKey = useMemo(() => {
    if (!userLocation) return 'map'
    return `map-${userLocation.lat.toFixed(4)}-${userLocation.lng.toFixed(4)}`
  }, [userLocation?.lat, userLocation?.lng])

  // Loading screen
  if (!userLocation || !userIcon) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden">
        <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-teal-700 opacity-20 blur-3xl" />
        <div className="pointer-events-none fixed -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-900 opacity-20 blur-3xl" />
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-900/40 animate-pulse">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold">Loading map...</p>
            <p className="text-gray-500 text-sm mt-1">Fetching your location and nearby activities</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-950">

      {/* ── Header ── */}
      <div className="relative z-20 flex items-center justify-between px-5 py-3 bg-gray-950/95 backdrop-blur-md border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-teal-700 rounded-xl flex items-center justify-center shadow shadow-teal-900/40">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 leading-none mb-0.5">Explore</p>
            <h1 className="text-white font-extrabold text-sm leading-none">Activities Near Me</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSidebar(s => !s)}
            className={`hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
              showSidebar
                ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
            </svg>
            List
          </button>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
              showFilters
                ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-teal-500/30'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
            </svg>
            Filters
            {selectedSports.length > 0 && (
              <span className="w-4 h-4 rounded-full bg-teal-500 text-white text-xs flex items-center justify-center font-bold">
                {selectedSports.length}
              </span>
            )}
          </button>

          <button
            onClick={() => { if (userLocation) fetchActivitiesNearby(userLocation.lat, userLocation.lng, radius) }}
            disabled={loading}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold shadow shadow-teal-900/40 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
            </svg>
            {loading ? 'Loading...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* ── Filters Panel ── */}
      {showFilters && (
        <div className="relative z-20 bg-gray-950/95 backdrop-blur-md border-b border-white/10 px-5 py-4 space-y-4 flex-shrink-0">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Distance</label>
              <span className="text-sm font-bold text-teal-400">{radius} km</span>
            </div>
            <input type="range" min="1" max="100" value={radius}
              onChange={e => handleRadiusChange(Number(e.target.value))}
              className="w-full accent-teal-500" />
            <div className="flex justify-between text-xs text-gray-600 mt-1"><span>1 km</span><span>100 km</span></div>
          </div>

          {availableSports.length > 0 && (
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500 block mb-2">Sports</label>
              <div className="flex flex-wrap gap-2">
                {availableSports.map(sport => (
                  <button key={sport.id} onClick={() => handleSportToggle(sport.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-200 ${
                      selectedSports.includes(sport.id)
                        ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}>
                    {sport.emoji} {sport.name}
                  </button>
                ))}
                {selectedSports.length > 0 && (
                  <button onClick={() => { setSelectedSports([]); applyFilters(allActivities, []) }}
                    className="px-3 py-1.5 rounded-xl border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-500/10 transition-all duration-200">
                    Clear
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Main: sidebar + map ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        {showSidebar && (
          <aside className="hidden lg:flex flex-col w-72 border-r border-white/10 bg-gray-950/95 backdrop-blur-md overflow-hidden flex-shrink-0">
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between flex-shrink-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Nearby</p>
                <p className="text-white font-bold text-sm">{activities.length} activities</p>
              </div>
              <span className="text-xs text-gray-600 bg-white/5 border border-white/10 px-2 py-1 rounded-lg">{radius} km</span>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
              {activities.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-32 text-center">
                  <p className="text-gray-600 text-sm">No activities found</p>
                  <p className="text-gray-700 text-xs mt-1">Try adjusting filters</p>
                </div>
              ) : (
                activities.map(activity => (
                  <button
                    key={activity.id}
                    onClick={() => setSelectedActivity(selectedActivity?.id === activity.id ? null : activity)}
                    className={`w-full text-left px-3 py-3 rounded-2xl border transition-all duration-200 ${
                      selectedActivity?.id === activity.id
                        ? 'bg-teal-500/15 border-teal-500/40'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl leading-none mt-0.5">{activity.sport.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-xs truncate">{activity.sport.name}</p>
                        <p className="text-teal-400 text-xs">@{activity.user.username}</p>
                        {activity.description && (
                          <p className="text-gray-500 text-xs mt-1 line-clamp-2">{activity.description}</p>
                        )}
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className={`text-xs font-medium ${
                            relativeDate(activity.date) === 'Today' ? 'text-teal-400' :
                            relativeDate(activity.date) === 'Tomorrow' ? 'text-yellow-400' : 'text-gray-500'
                          }`}>
                            {relativeDate(activity.date)}
                          </span>
                          <span className="text-gray-700">·</span>
                          <span className="text-gray-500 text-xs">{activity.starttime}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </aside>
        )}

        {/* Map */}
        <div className="flex-1 relative">
          <MapContainer
            key={mapKey}
            center={[userLocation.lat, userLocation.lng]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
              <Popup><div className="text-sm font-semibold">📍 Your Location</div></Popup>
            </Marker>

            <Circle
              center={[userLocation.lat, userLocation.lng]}
              radius={radius * 1000}
              pathOptions={{ color: '#2dd4a0', fillColor: '#2dd4a0', fillOpacity: 0.08, weight: 2 }}
            />

            {activities.map(activity => {
              const sportIcon = markerIcons.get(activity.sport.id)
              return (
                <Marker 
                  key={activity.id} 
                  position={[activity.latitude, activity.longitude]} 
                  icon={sportIcon}
                >
                  <Popup>
                    <div className="min-w-52 text-sm space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{activity.sport.emoji}</span>
                        <div>
                          <p className="font-bold text-gray-900">{activity.sport.name}</p>
                          <a href={`/userprofile/${activity.user.username}`} className="text-teal-600 text-xs hover:underline">
                            @{activity.user.username}
                          </a>
                        </div>
                      </div>
                      {activity.description && (
                        <p className="text-gray-600 text-xs leading-relaxed">{activity.description}</p>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 pt-1 border-t border-gray-100">
                        <span>📅 {relativeDate(activity.date)}</span>
                        <span>·</span>
                        <span>⏰ {activity.starttime}–{activity.endtime}</span>
                      </div>
                      <span className="inline-block px-2 py-0.5 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-xs font-medium">
                        {activity.publicity}
                      </span>
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MapContainer>

          {/* Count badge */}
          <div className="absolute bottom-4 left-4 z-10 bg-gray-950/90 backdrop-blur-md border border-white/10 text-white px-4 py-2.5 rounded-2xl shadow-xl">
            <p className="text-sm font-semibold">
              <span className="text-teal-400">{activities.length}</span> activities within <span className="text-teal-400">{radius} km</span>
            </p>
            {selectedSports.length > 0 && (
              <p className="text-xs text-gray-500 mt-0.5">{selectedSports.length} filter{selectedSports.length > 1 ? 's' : ''} active</p>
            )}
          </div>

          {/* Selected activity card */}
          {selectedActivity && (
            <div className="absolute bottom-4 right-4 z-10 w-72 bg-gray-950/95 backdrop-blur-md border border-teal-500/30 text-white rounded-2xl shadow-2xl p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedActivity.sport.emoji}</span>
                  <div>
                    <p className="font-bold text-sm">{selectedActivity.sport.name}</p>
                    <a href={`/userprofile/${selectedActivity.user.username}`} className="text-teal-400 text-xs hover:text-teal-300">
                      @{selectedActivity.user.username}
                    </a>
                  </div>
                </div>
                <button onClick={() => setSelectedActivity(null)} className="text-gray-600 hover:text-white transition-colors mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              {selectedActivity.description && (
                <p className="text-gray-400 text-xs leading-relaxed mb-2">{selectedActivity.description}</p>
              )}
              <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-white/10">
                <span className={relativeDate(selectedActivity.date) === 'Today' ? 'text-teal-400 font-medium' : ''}>
                  {relativeDate(selectedActivity.date)}
                </span>
                <span>·</span>
                <span>{selectedActivity.starttime}–{selectedActivity.endtime}</span>
                <span className="ml-auto px-2 py-0.5 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-full text-xs">
                  {selectedActivity.publicity}
                </span>
              </div>
            </div>
          )}

          {/* No activities */}
          {!loading && activities.length === 0 && (
            <div className="absolute inset-0 flex items-end justify-center pb-20 pointer-events-none z-10">
              <div className="bg-gray-950/90 backdrop-blur-md border border-white/10 text-white px-6 py-4 rounded-2xl shadow-xl text-center">
                <p className="font-semibold text-sm">
                  {allActivities.length === 0 ? `No activities found within ${radius} km` : 'No activities match your filters'}
                </p>
                <p className="text-xs text-gray-500 mt-1">Try increasing the radius or clearing filters</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}