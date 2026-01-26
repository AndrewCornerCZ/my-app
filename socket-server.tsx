'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [status, setStatus] = useState('connecting')

  useEffect(() => {
  const socket = new WebSocket(
  "wss://pleasing-love-production-1ecc.up.railway.app"
  );

    socket.onopen = () => {
      console.log('🟢 WS connected')
      setStatus('connected')
    }

    socket.onmessage = (e) => {
      console.log('📩 WS message:', e.data)
    }

    socket.onerror = (e) => {
      console.error('🔴 WS error', e)
      setStatus('error')
    }

    socket.onclose = () => {
      console.log('🟡 WS closed')
      setStatus('closed')
    }

    return () => socket.close()
  }, [])

  return (
  
  <div>
    <h1>WebSocket test</h1>
    <p>Status: {status}</p>
  </div>
)

}
