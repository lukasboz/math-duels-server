const express = require('express');

const app = express();
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");
const roomUtility =  require('./utility/rooms');
const { getRandomId } = require('./utility/randomId');


const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});

io.on("connection", (socket) => {
    console.log(`${socket.id} has connected!`);
    socket.emit("lobbyUpdate", roomUtility.getRooms());

    socket.on("disconnect", () => {
        console.log("User " + socket.id + " has disconnected.");
    })

    socket.on("createRoom", (msg) => {
        console.log(`${socket.id} has created a room!`);
        console.log(`Name: ${msg.name}, Public: ${msg.scope}`)
        roomUtility.createRoom(msg.name, msg.scope, getRandomId());
        io.emit("lobbyUpdate", roomUtility.getRooms());
    })

    socket.on("getLobbies", (callback) => {
        callback(roomUtility.getRooms());
    })
});

server.listen(3000, () => {
    console.log("Server is ready!!!!!");
})