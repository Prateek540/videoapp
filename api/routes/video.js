import express from "express";
import {
  CreateVideo,
  GetAllVideos,
  GetAllVideosUser,
  GetVideoById,
} from "../controllers/video.js";
import { authentication } from "../middleware/authentication.js";
const router = express.Router();
import { upload } from "../multerConfig.js";

//Create Video
router.post(
  "/createVideo/:id",
  authentication,
  upload.fields([{ name: "file1" }, { name: "file2" }]),
  CreateVideo
);

//Get All Videos
router.get("/getAllVideos", GetAllVideos);

//Get All Videos of user by id

router.get("/getAllVideosUser/:id", authentication, GetAllVideosUser);

//Get video by id
router.get("/getVideoById/:id", authentication, GetVideoById);

export default router;
