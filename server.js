const express = require('express')
const http = require('http')
const env = process.env.NODE_ENV

const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 40510 })

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('received: %s', message)
  })

  // notify player that they connected
  ws.send('you are connected')
})

// our localhost port
let port = 4001

const app = express()

if (env === 'production') {
  port = 1337
  app.use(express.static(__dirname + '/dist'))
}

// our server instance
const server = http.createServer(app)

server.listen(port, () => console.log(`Listening on port ${port}`))
