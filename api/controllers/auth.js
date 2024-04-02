import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.js";

//Register
export const Register = async (req, res) => {
  try {
    const file1 = req.files["file1"][0];
    const file2 = req.files["file2"][0];

    if (!file1 || !file2) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    if (!User.isValidFile(file1) && !User.isValidFile(file2)) {
      return res.status(400).json({ error: "Invalid file type or size." });
    }

    const { path: path1 } = file1;
    const { path: path2 } = file2;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      req.body.password.toString(),
      salt
    );

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      profilePicture: path1,
      coverPicture: path2,
      description: req.body.description,
    });
    await newUser.save();

    jwt.sign(
      { id: newUser._id, username: req.body.username },
      process.env.SECRET,
      {},
      (err, token) => {
        if (err) return res.status(400).send(err);
        res.cookie("token", token).status(200).send({
          id: newUser._id,
          username: req.body.username,
        });
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

//Login

export const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not found.");
    }
    const validPassword = await bcrypt.compare(
      req.body.password.toString(),
      user.password
    );
    if (!validPassword) {
      return res.status(404).send("Password is incorrect");
    }
    jwt.sign(
      { id: user._id, username: user.username },
      process.env.SECRET,
      {},
      (err, token) => {
        if (err) return res.status(400).send(err);
        res.cookie("token", token).status(200).send({
          id: user._id,
          username: user.username,
        });
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

//Logout

export const Logout = async (req, res) => {
  try {
    res.cookie("token", "").status(200).send("Logged Out.");
  } catch (error) {
    res.status(500).send(error);
  }
};
