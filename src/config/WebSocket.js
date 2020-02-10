export default function setupSocket(game) {
  const env = process.env.NODE_ENV

  const ws = new WebSocket('ws://localhost:40510')

  ws.onopen = function() {
    console.log('websocket is connected ...')
    ws.send('connected')
  }

  ws.onmessage = function(evt) {
    console.log('client received: ' + evt.data)
  }
}
