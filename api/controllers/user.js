import User from "../model/user.js";
import jwt from "jsonwebtoken";

//Get Authentication status of user

export const GetAuthStatus = async (req, res) => {
  try {
    const { token } = req.cookies;
    jwt.verify(token, process.env.SECRET, {}, (err, info) => {
      if (err) return res.status(200).json(null);
      res.status(200).json(info);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get all Users

export const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    const updatedUsers = [];
    users.map((user) => {
      const { _id, username, email, profilePicture, subscribers, description } =
        user;
      updatedUsers.push({
        _id,
        username,
        email,
        profilePicture,
        subscribers,
        description,
      });
    });
    res.status(200).send(updatedUsers);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get user by username

export const getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const { password, __v, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).send(error);
  }
};
