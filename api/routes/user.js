import express from "express";
import {
  GetAllUsers,
  GetAuthStatus,
  getUserByUsername,
} from "../controllers/user.js";
const router = express.Router();

//Get profile authentication status
router.get("/getAuthStatus", GetAuthStatus);

//Get All users
router.get("/getAllUsers", GetAllUsers);

//get user by username
router.get("/getUserByUsername/:username", getUserByUsername);

export default router;
