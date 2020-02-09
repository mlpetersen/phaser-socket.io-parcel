const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

// our localhost port
const port = 4001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

// This is what the socket.io syntax is like, we will work this later
io.on("connection", socket => {
  console.log("User connected");

  socket.emit("test", Math.random());
  socket.broadcast.emit("test2", Math.random());

  socket.on("disconnect", () => {
    socket.emit("test", 'user disconnected');
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
