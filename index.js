const express = require('express');
const socket = require('socket.io');

// Setup App
const app = express();

// Server configuration
const server = app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})

// Static File
app.use(express.static("public"))

// Socket Configuration
const io = socket(server);

// Triggered on socket connection initiation
io.on("connection",(socket)=>{
    console.log("Client connection established through socket - "+socket.id);

    // Listen to chat event
    socket.on("chat",(data)=>{
        console.log(data)
        io.sockets.emit("chat",data)
    })

    // Listen to typing event
    socket.on("typing",(data)=>{
        socket.broadcast.emit("typing",data)
    })
})