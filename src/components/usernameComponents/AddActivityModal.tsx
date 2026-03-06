'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import 'leaflet/dist/leaflet.css'
import type { Map, Marker, Icon, LeafletMouseEvent } from 'leaflet'
import Geolocation from './Geolocation'

interface UserSport {
  userId: number
  sportId: number
  sport: { name: string }
}

interface AddActivityModalProps {
  userSports: UserSport[]
}

const PRIVACY_OPTIONS = [
  { value: 'public', label: 'Public', icon: '🌍' },
  { value: 'friends', label: 'Friends only', icon: '👥' },
  { value: 'private', label: 'Private', icon: '🔒' },
]

export default function AddActivityModal({ userSports }: AddActivityModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSportId, setSelectedSportId] = useState(() =>
    userSports && userSports.length > 0 ? String(userSports[0].sportId) : ''
  )
  const [starttime, setStartTime] = useState('')
  const [endtime, setEndTime] = useState('')
  const [description, setDescription] = useState('')
  const [privacy, setPrivacy] = useState('public')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [isClient, setIsClient] = useState(false)

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map | null>(null)
  const markerRef = useRef<Marker | null>(null)
  const markerIconRef = useRef<Icon | null>(null)
  const LRef = useRef<typeof import('leaflet') | null>(null)

  useEffect(() => {
    setIsClient(true)
    import('leaflet').then(L => {
      LRef.current = L
      markerIconRef.current = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })
    })
  }, [])

  useEffect(() => {
    if (!isOpen || !isClient || !mapContainerRef.current || !LRef.current) return
    const L = LRef.current
    if (!mapRef.current) {
      const map = L.map(mapContainerRef.current, { center: [51.505, -0.09], zoom: 6 })
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap',
      }).addTo(map)
      map.on('click', (e: LeafletMouseEvent) => {
        setLocation({ lat: e.latlng.lat, lng: e.latlng.lng })
      })
      mapRef.current = map
    } else {
      mapRef.current.setView([51.505, -0.09], 6)
    }
    return () => {
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null }
    }
  }, [isOpen, isClient])

  useEffect(() => {
    if (!mapRef.current || !location || !LRef.current) return
    const L = LRef.current
    if (markerRef.current) mapRef.current.removeLayer(markerRef.current)
    if (markerIconRef.current) {
      markerRef.current = L.marker([location.lat, location.lng], { icon: markerIconRef.current }).addTo(mapRef.current)
    }
    mapRef.current.setView([location.lat, location.lng], 13)
  }, [location])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sportId: Number(selectedSportId),
          starttime, endtime, description,
          date: new Date(date),
          latitude: location?.lat,
          longitude: location?.lng,
          publicity: privacy,
        }),
      })
      setIsOpen(false)
      setLocation(null)
      router.refresh()
    } catch {
      setError('Failed to add activity. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => { setIsOpen(false); setLocation(null) }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-teal-900/40 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
        Log Activity
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl bg-gray-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 flex-shrink-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-0.5">Track</p>
            <h2 className="text-lg font-extrabold text-white">Log New Activity</h2>
          </div>
          <button onClick={handleClose} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-6 py-5">
          {error && (
            <div className="mb-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sport */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Sport</label>
                <select
                  value={selectedSportId}
                  onChange={e => setSelectedSportId(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                >
                  {userSports.map(us => (
                    <option key={us.sportId} value={us.sportId} className="bg-gray-900">{us.sport.name}</option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                />
              </div>

              {/* Start time */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Start Time</label>
                <input
                  type="time"
                  value={starttime}
                  onChange={e => setStartTime(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                />
              </div>

              {/* End time */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">End Time</label>
                <input
                  type="time"
                  value={endtime}
                  onChange={e => setEndTime(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Privacy pills */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Privacy</label>
              <div className="flex gap-2">
                {PRIVACY_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPrivacy(opt.value)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-xs font-medium transition-all duration-200 ${
                      privacy === opt.value
                        ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span>{opt.icon}</span> {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Notes (optional)</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={3}
                placeholder="How did it go?"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 resize-none"
              />
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500">Location</label>
                <Geolocation onLocate={(lat, lng) => setLocation({ lat, lng })} />
              </div>
              <div
                ref={mapContainerRef}
                className="rounded-xl overflow-hidden border border-white/10"
                style={{ height: '200px', width: '100%', background: '#1f2937' }}
              />
              {location ? (
                <p className="text-xs text-teal-500 mt-1.5">
                  📍 {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              ) : (
                <p className="text-xs text-gray-600 mt-1.5">Click on the map to set location</p>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10 flex-shrink-0">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white text-sm font-medium transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit as never}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-teal-900/40 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Logging...
              </>
            ) : 'Log Activity'}
          </button>
        </div>
      </div>
    </div>
  )
}