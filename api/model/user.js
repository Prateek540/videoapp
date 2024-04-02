import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    subscribers: {
      type: Array,
      default: [],
    },
    subscribed: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
      max: 50,
      default: "",
    },
  },
  { timeStamps: true }
);

userSchema.statics.isValidFile = function (file) {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  const maxFileSize = 1024 * 1024 * 5; // 5MB

  return allowedTypes.includes(file.mimetype) && file.size <= maxFileSize;
};

userSchema.statics.isValidVideo = function (file) {
  const allowedTypes = ["video/mp4", "video/mpeg", "video/quicktime"];
  const maxFileSize = 1024 * 1024 * 10; // 10MB

  return allowedTypes.includes(file.mimetype) && file.size <= maxFileSize;
};

const User = mongoose.model("User", userSchema);

export default User;
