'use client'
import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapComponentProps {
  latitude: number
  longitude: number
  zoom?: number
}

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function MapComponent({ latitude, longitude, zoom = 13 }: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // Inicializuj mapu jen když není
    if (!mapInstance.current) {
      try {
        mapInstance.current = L.map(mapContainer.current).setView(
          [Number(latitude), Number(longitude)],
          zoom
        )

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(mapInstance.current)
      } catch (e) {
        console.error('Map init error:', e)
      }
    }

    // Aktualizuj marker a view
    if (mapInstance.current) {
      // Odstraň starý marker
      if (markerRef.current) {
        markerRef.current.remove()
      }

      // Přidej nový marker
      markerRef.current = L.marker([Number(latitude), Number(longitude)], { icon: markerIcon })
        .bindPopup('Location')
        .addTo(mapInstance.current)

      // Aktualizuj view
      mapInstance.current.setView([Number(latitude), Number(longitude)], zoom)
    }

    return () => {
      // Cleanup se provede jen na unmount
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [latitude, longitude, zoom])

  return <div ref={mapContainer} className="h-64 w-full rounded overflow-hidden" style={{ height: '100%', width: '100%' }} />
}