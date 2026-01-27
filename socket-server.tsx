import { WebSocketServer } from 'ws'
import http from 'http'

const PORT = process.env.PORT || 3001

const server = http.createServer()

const wss = new WebSocketServer({ server })

wss.on('connection', (ws) => {
  console.log('🟢 Client connected')

  ws.send('Hello from Railway WS server 👋')

  ws.on('message', (msg) => {
    console.log('📩 Received:', msg.toString())
  })
})

server.listen(PORT, () => {
  console.log(`🚀 WebSocket server running on port ${PORT}`)
})
