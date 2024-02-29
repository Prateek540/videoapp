import express from "express";
import {
  CreateVideo,
  GetAllVideos,
  GetVideoById,
} from "../controllers/video.js";
import { authentication } from "../middleware/authentication.js";
const router = express.Router();

//Create Video
router.post("/createVideo/:id", authentication, CreateVideo);

//Get All Videos
router.get("/getAllVideos", authentication, GetAllVideos);

//Get video by id
router.get("/getVideoById/:id", authentication, GetVideoById);

export default router;
