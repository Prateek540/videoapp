import express from "express";
import {
  addVideo,
  deleteVideo,
  getVideo,
  updateVideo,
  addView,
  trend,
  random,
  sub,
  getByTag,
  search,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyToken, addVideo);

//Update
router.put("/:id", verifyToken, updateVideo);

//Delete
router.delete("/:id", verifyToken, deleteVideo);

//Get
router.get("/find/:id", getVideo);

//View increase
router.put("/view/:id", addView);

//Get trending videos
router.get("/trend", trend);

//Get random videos
router.get("/random", random);

//subscribed channel videos
router.get("/subscription", verifyToken, sub);

//Get videos by tags
router.get("/tags", getByTag);

//Get videos by title search
router.get("/search", search);

export default router;
