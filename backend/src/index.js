import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import { app, server, io } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

const FRONTEND_URL = process.env.FRONTEND_URL || "https://textory.vercel.app";

app.use(
  cors({
    origin: [FRONTEND_URL, "https://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use("*all", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route - Not Found",
  });
});

server.listen(PORT, () => {
  console.log("Server is running or PORT:", PORT);
  connectDB();
});
