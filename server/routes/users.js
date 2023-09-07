import express from "express";
import {
  deleteUser,
  getUser,
  like,
  subscribe,
  unlike,
  unsubscribe,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Update user
router.put("/:id", verifyToken, updateUser);

//Delete user
router.delete("/:id", verifyToken, deleteUser);

//Get a user
router.get("/find/:id", getUser);

//Subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

//Unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

//Like a video
router.put("/like/:videoId", verifyToken, like);

//Dislike a video
router.put("/dislike/:videoId", verifyToken, unlike);

export default router;
