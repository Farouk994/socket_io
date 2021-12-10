const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("../router");

const app = express();
const server = http.createServer(app);

// io has built in methods that can bw used like 'connection', 'disconnect'
// create a connection with server
const io = socketio(server);

// create connection with socket
io.on("connection", (socket) => {
   console.log("We have been connected!!");
   socket.on("disconnect", () => {
      console.log("User has left");
   });
});

// Routes 
app.use(router);

// Listen to Port
server.listen(PORT, () => {
   console.log(`Running on Port ${PORT} `);
});
