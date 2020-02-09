import Phaser from 'phaser'
import io from "socket.io-client";

const socket = io('http://0.0.0.0:4001');

socket.on("test", function(data) {
  console.error("test", data);
});

socket.on("test2", function(data) {
  console.error("test2", data);
});

new Phaser.Game({
  width: 800,
  height: 400,
})

console.error('hep!!')