'use client'

import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

export default function MapReadyFix() {
  const map = useMap()
  useEffect(() => {
    // ensure leaflet recalculates size when the map becomes visible
    requestAnimationFrame(() => map.invalidateSize())
  }, [map])
  return null
}