import express from "express";
import {
  GetAllUsers,
  GetAuthStatus,
  getUserByUsername,
} from "../controllers/user.js";
import { authentication } from "../middleware/authentication.js";
const router = express.Router();

//Get profile authentication status
router.get("/getAuthStatus", GetAuthStatus);

//Get All users
router.get("/getAllUsers", authentication, GetAllUsers);

//get user by id
router.get("/getUserByUsername/:username", authentication, getUserByUsername);

export default router;
