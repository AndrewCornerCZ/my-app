'use client'
import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
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

function InvalidateSizeOnMount() {
  const map = useMap()
  useEffect(() => {
    requestAnimationFrame(() => map.invalidateSize())
  }, [map])
  return null
}

export default function MapComponent({ latitude, longitude, zoom = 13 }: MapComponentProps) {
  const center: [number, number] = [Number(latitude), Number(longitude)]

  return (
    <div className="h-64 w-full rounded overflow-hidden">
      <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <InvalidateSizeOnMount />
        <Marker position={center} icon={markerIcon}>
          <Popup>Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}