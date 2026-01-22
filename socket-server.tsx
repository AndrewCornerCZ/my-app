'use client'

import { useEffect, useRef } from 'react'

export default function Socket() {
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    ws.current = new WebSocket(
      'pleasing-love-production-1ecc.up.railway.app'
    )

    ws.current.onmessage = (event) => {
      console.log('WS:', event.data)
    }

    return () => ws.current?.close()
  }, [])

  return <div>WebSocket connected</div>
}
