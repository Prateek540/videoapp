import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoutes from "./routes/users.js";
import CommentRoutes from "./routes/comments.js";
import VideoRoutes from "./routes/videos.js";
import AuthRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB.");
    })
    .catch((error) => {
      console.log(error);
    });
};

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", UserRoutes);
app.use("/api/comments", CommentRoutes);
app.use("/api/videos", VideoRoutes);
app.use("/api/auth", AuthRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong.";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8000, () => {
  connect();
  console.log("Connected to Server.");
});
