'use client'

import React, { useEffect, useRef, useState } from "react"
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const markerIcon = typeof window !== 'undefined' ? new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
}) : undefined

export default function MapPicker({ lat, lng, onChange, zoom = 13 }: { lat?: number; lng?: number; onChange: (lat: number, lng: number) => void; zoom?: number }) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)
  const markerInstance = useRef<L.Marker | null>(null)
  const [isReady, setIsReady] = useState(false)

  // Inicializace mapy - spustí se jen jednou
  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return

    try {
      // Vytvoř novou mapu
      mapInstance.current = L.map(mapContainer.current).setView([lat ?? 50.08, lng ?? 14.44], zoom)

      // Přidej tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstance.current)

      // Kliknutí na mapu
      mapInstance.current.on('click', (e: L.LeafletMouseEvent) => {
        onChange(e.latlng.lat, e.latlng.lng)
      })

      setIsReady(true)
    } catch (e) {
      console.error('Map error:', e)
    }

    // CLEANUP - Odstraň mapu když se komponenta unmountuje
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, []) // Jen jednou!

  // Aktualizace markeru když se změní poloha
  useEffect(() => {
    if (!mapInstance.current || !isReady || lat === undefined || lng === undefined) return

    // Odstraň starý marker
    if (markerInstance.current) {
      markerInstance.current.remove()
    }

    // Přidej nový marker
    if (markerIcon) {
      markerInstance.current = L.marker([lat, lng], { icon: markerIcon }).addTo(mapInstance.current)
    }

    // Centruj mapu
    mapInstance.current.setView([lat, lng], zoom)
  }, [lat, lng, zoom, isReady])

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => onChange(coords.latitude, coords.longitude),
        () => alert("Could not get your location")
      )
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg lg:rounded-xl p-2 lg:p-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 lg:mb-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Location</p>
        <div className="flex gap-2">
          <button type="button" onClick={getCurrentLocation}
            className="text-xs px-2.5 py-1 lg:py-1.5 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-400 hover:bg-teal-500/25 transition-all duration-200 whitespace-nowrap">
            Use My Location
          </button>
          <button type="button" onClick={() => onChange(50.08, 14.44)}
            className="text-xs px-2.5 py-1 lg:py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-500 hover:text-white transition-all duration-200 whitespace-nowrap">
            Clear
          </button>
        </div>
      </div>
      <div 
        ref={mapContainer} 
        className="h-40 lg:h-48 w-full rounded-lg lg:rounded-xl overflow-hidden border border-white/10"
      />
      <p className="mt-2 text-xs text-gray-600">
        {lat && lng ? `${lat.toFixed(5)}, ${lng.toFixed(5)}` : 'Click on the map to set location'}
      </p>
    </div>
  )
}