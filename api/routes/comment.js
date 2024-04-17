import express from "express";
import { CreateComment, GetComment } from "../controllers/comment.js";
const router = express.Router();
import { authentication } from "../middleware/authentication.js";

//Create Comment

router.post("/createComment/:userId/:videoId", authentication, CreateComment);

//Get Comment by videoId

router.get("/getComment/:videoId", GetComment);

export default router;
