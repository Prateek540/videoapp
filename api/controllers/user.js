import User from "../model/user.js";

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

//Get user by id

export const GetUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    const { password, __v, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).send(error);
  }
};
