import io from 'socket.io-client'

export default function setupSocket(game) {
  const g = game
  const socket = io('http://0.0.0.0:4001')

  socket.on('you-are-connected', function() {
    console.error('You are connected!')
  })

  socket.on('someone-else-connected', function() {
    console.error('Someone else connected!')
  })
}
