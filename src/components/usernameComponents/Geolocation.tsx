"use client"
import { useState } from "react";

type Props = {
  onLocate: (lat: number, lng: number) => void
}

export default function Geolocation({ onLocate }: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pos, setPos] = useState<{ lat: number; lng: number } | null>(null)

  const handleGet = () => {
    if (!navigator.geolocation) {
      setError('Geolokace není v tomto prohlížeči podporována.')
      return
    }
    setError(null)
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const lat = p.coords.latitude
        const lng = p.coords.longitude
        setPos({ lat, lng })
        onLocate(lat, lng) // předáme location parentu - mapa se podle toho remountne
        setLoading(false)
      },
      (e) => {
        setError(e.message)
        setLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  }

  return (
    <div className="mb-2">
      <button
        type="button"
        className="px-3 py-1 bg-zinc-700 text-white rounded"
        onClick={handleGet}
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Use My Location'}
      </button>

      {pos && (
        <div className="text-xs text-gray-400 mt-1">
          📍 {pos.lat.toFixed(4)}, {pos.lng.toFixed(4)}
        </div>
      )}

      {error && <div className="text-xs text-red-400 mt-1">{error}</div>}
    </div>
  )
}