import express from "express";
import { GetAllUsers, GetUserById } from "../controllers/user.js";
import { authentication } from "../middleware/authentication.js";
const router = express.Router();

//Get All users
router.get("/getAllUsers", authentication, GetAllUsers);

//get user by id
router.get("/getUserById/:id", authentication, GetUserById);

export default router;
