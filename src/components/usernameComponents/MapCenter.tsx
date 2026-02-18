'use client'

import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

interface MapCenterProps {
  center: [number, number]
  zoom?: number
}

export default function MapCenter({ center, zoom }: MapCenterProps) {
  const map = useMap()

  useEffect(() => {
    map.setView(center, zoom ?? map.getZoom())
  }, [map, center, zoom])

  return null
}
