import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as url from "url";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import videoRoute from "./routes/video.js";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

//App
const app = express();

//DB
import "./db/mongoose.js";

//Middlewares
app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/video", videoRoute);

export { app };
