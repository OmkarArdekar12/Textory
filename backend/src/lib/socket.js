import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const FRONTEND_URL = process.env.FRONTEND_URL || "https://textory.vercel.app";

const io = new Server(server, {
  cors: {
    origin: [FRONTEND_URL],
    credentials: true,
  },
});

export function getRecieverSocketId(userId) {
  return userSocketMap[userId];
}

const userSocketMap = {}; //online users - {userId(key):socket.id(value)}

io.on("connection", (socket) => {
  //console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap)); //broadcast to all connected users

  socket.on("disconnect", () => {
    //console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
