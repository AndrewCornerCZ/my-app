'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import type { Icon, IconOptions } from 'leaflet'

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
const Circle = dynamic(
  () => import('react-leaflet').then(mod => mod.Circle),
  { ssr: false }
)

interface ActivityMarker {
  id: number
  latitude: number
  longitude: number
  sport: {
    id: number
    name: string
  }
  description: string
  starttime: string
  endtime: string
  date: string
  publicity: string
  user: {
    username: string
  }
}

interface Sport {
  id: number
  name: string
}

export default function ActivitiesMapPage() {
  const [userLocation, setUserLocation] = useState<{
    lat: number
    lng: number
  } | null>(null)
  const [activities, setActivities] = useState<ActivityMarker[]>([])
  const [userIcon, setUserIcon] = useState<Icon<IconOptions> | undefined>(undefined)
  const [allActivities, setAllActivities] = useState<ActivityMarker[]>([])
  const [loading, setLoading] = useState(true)
  const [markerIcon, setMarkerIcon] = useState<Icon<IconOptions> | undefined>(undefined)
  const [radius, setRadius] = useState(10)
  const [selectedSports, setSelectedSports] = useState<number[]>([])
  const [availableSports, setAvailableSports] = useState<Sport[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [dateFilter] = useState<string | null>(() => {
  // výchozí: dnešní datum ve formátu yyyy-mm-dd -> znamená "od dneška"
  const today = new Date();
  return today.toISOString().split('T')[0];
});

  // Load marker icon
// Load marker icons
useEffect(() => {
  import('leaflet').then(L => {

    // default blue icon (pro aktivity)
    const defaultIcon = new L.Icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    })

    // red icon for user
    const redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    })

    setMarkerIcon(defaultIcon)
    setUserIcon(redIcon)
  })
}, [])



  // Get user location and load activities
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation not supported')
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setUserLocation({ lat: latitude, lng: longitude })
        fetchActivitiesNearby(latitude, longitude, 10)
      },
      error => {
        console.error('Geolocation error:', error)
        // Default to Prague if geolocation fails
        setUserLocation({ lat: 50.0755, lng: 14.4378 })
        fetchActivitiesNearby(50.0755, 14.4378, 10)
      }
    )
  }, [])

  const fetchActivitiesNearby = async (
    lat: number,
    lng: number,
    rad: number
  ) => {
    setLoading(true)
    try {
      const res = await fetch(
        `/api/activities/nearby?lat=${lat}&lng=${lng}&radius=${rad}`
      )
      if (res.ok) {
        const data = await res.json()
        setAllActivities(data.activities)

        // Extract unique sports
        const sports = Array.from(
          new Map(
            data.activities.map((a: ActivityMarker) => [a.sport.id, a.sport])
          ).values()
        ) as Sport[]
        setAvailableSports(sports)
        
        // Apply initial filters
        applyFilters(data.activities, [])
      }
    } catch (error) {
      console.error('Error fetching nearby activities:', error)
    } finally {
      setLoading(false)
    }
  }
  const applyFilters = (
  activitiesToFilter: ActivityMarker[],
  sportIds: number[],
  dateFilterValue: string | null = dateFilter
) => {
  let filtered = activitiesToFilter;

  // sport filtry
  if (sportIds.length > 0) {
    filtered = filtered.filter(a => sportIds.includes(a.sport.id));
  }

  // date filtrace: pokud je nastaven dateFilterValue => zachovat jen aktivity s date >= dateFilterValue
  if (dateFilterValue) {
    const filterDate = new Date(dateFilterValue);
    filtered = filtered.filter(a => {
      // normalizace: některá data mohou být v UTC nebo bez času -> porovnávej jen YYYY-MM-DD
      const actDate = new Date(a.date);
      // porovnání bez času: nastav oba na 00:00
      const actYMD = new Date(actDate.getFullYear(), actDate.getMonth(), actDate.getDate());
      const filterYMD = new Date(filterDate.getFullYear(), filterDate.getMonth(), filterDate.getDate());
      return actYMD >= filterYMD;
    });
  }

  setActivities(filtered);
}


  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius)
    if (userLocation) {
      fetchActivitiesNearby(userLocation.lat, userLocation.lng, newRadius)
      setSelectedSports([]) // Reset sport filters
    }
  }

  const handleSportToggle = (sportId: number) => {
    const newSelected = selectedSports.includes(sportId)
      ? selectedSports.filter(id => id !== sportId)
      : [...selectedSports, sportId]

    setSelectedSports(newSelected)
    applyFilters(allActivities, newSelected)
  }

  const handleRefresh = () => {
    if (userLocation) {
      fetchActivitiesNearby(userLocation.lat, userLocation.lng, radius)
    }
  }

  if (!userLocation || !markerIcon) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-zinc-900">
        <div className="text-white text-center">
          <p className="mb-2">Loading map...</p>
          <p className="text-sm text-gray-400">
            {loading
              ? 'Fetching your location and nearby activities'
              : 'Getting map ready'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex flex-col bg-zinc-900">
      {/* Header */}
      <div className="bg-zinc-800 border-b border-zinc-700 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Activities Near Me</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
          >
            ⚙️ Filters
          </button>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded"
          >
            {loading ? 'Loading...' : '🔄 Refresh'}
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-zinc-800 border-b border-zinc-700 p-4 space-y-4">
          {/* Radius Slider */}
          <div>
            <label className="text-white block mb-2">
              Distance: <span className="font-bold">{radius}km</span>
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={radius}
              onChange={e => handleRadiusChange(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-gray-400 flex justify-between mt-1">
              <span>1km</span>
              <span>50km</span>
            </div>
          </div>
          {/* Sport Filters */}
          <div>
            <label className="text-white block mb-2">Sports:</label>
            <div className="flex flex-wrap gap-2">
              {availableSports.map(sport => (
                <button
                  key={sport.id}
                  onClick={() => handleSportToggle(sport.id)}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    selectedSports.includes(sport.id)
                      ? 'bg-blue-600 text-white'
                      : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                  }`}
                >
                  {sport.name}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {selectedSports.length > 0 && (
            <button
              onClick={() => {
                setSelectedSports([])
                applyFilters(allActivities, [])
              }}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Clear sport filters
            </button>
          )}
        </div>
      )}
     

      {/* Map Container */}
      <div className="flex-1 relative">
        <MapContainer
          center={[userLocation.lat, userLocation.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* User Location */}
          <Marker
          position={[userLocation.lat, userLocation.lng]}
          icon={userIcon}
          >

            <Popup>Your Location</Popup>
          </Marker>

          {/* Radius Circle */}
          <Circle
            center={[userLocation.lat, userLocation.lng]}
            radius={radius * 1000}
            pathOptions={{
              color: 'blue',
              fillColor: 'blue',
              fillOpacity: 0.1,
              weight: 2,
            }}
          />

          {/* Activity Markers */}
          {activities.map(activity => (
            <Marker
              key={activity.id}
              position={[activity.latitude, activity.longitude]}
              icon={markerIcon}
            >
              <Popup>
                <div className="min-w-48">
                  <a href={`/userprofile/${activity.user.username}`} className="font-bold focus:outline-none focus:ring-0">{activity.sport.name} by @{activity.user.username}</a>
                  <p className="text-sm">Description: {activity.description}</p>
                  <p className="text-xs text-gray-600"> Date: 
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                  <p className="text-xs text-gray-600">
                    Time: 
                    {activity.starttime} - {activity.endtime}
                  </p>
                  <p className="text-xs">
                    <span className="inline-block px-2 py-1 bg-gray-200 rounded mt-1">
                      {activity.publicity}
                    </span>
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Activities Count */}
        <div className="absolute bottom-4 left-4 bg-zinc-800 text-white px-4 py-2 rounded shadow-lg">
          <p className="font-semibold">
            {activities.length} activities within {radius}km
          </p>
          {selectedSports.length > 0 && (
            <p className="text-xs text-gray-400">
              {availableSports.length - selectedSports.length} sports hidden
            </p>
          )}
        </div>
      </div>

      {/* No Activities Message */}
      {!loading && activities.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-zinc-800 text-white px-6 py-4 rounded shadow-lg">
            <p>
              {allActivities.length === 0
                ? `No activities found within ${radius}km`
                : 'No activities match your filters'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}