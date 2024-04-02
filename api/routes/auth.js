import express from "express";
import { Login, Logout, Register } from "../controllers/auth.js";
import { authentication } from "../middleware/authentication.js";
const router = express.Router();
import { upload } from "../multerConfig.js";

//Register
router.post(
  "/register",
  upload.fields([{ name: "file1" }, { name: "file2" }]),
  Register
);
//Login
router.post("/login", Login);
//Logout
router.post("/logout", authentication, Logout);

export default router;
