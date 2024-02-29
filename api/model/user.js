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

userSchema.virtual("videos", {
  ref: "Video",
  localField: "_id",
  foreignField: "userId",
});

userSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "userId",
});

const User = mongoose.model("User", userSchema);

export default User;
