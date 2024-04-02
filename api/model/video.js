import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    min: 6,
    max: 50,
    default: "",
  },
  imgURL: {
    type: String,
    default: "",
  },
  videoURL: {
    type: String,
    default: "",
  },
  likes: {
    type: Array,
    default: [],
  },
  views: {
    type: Array,
    default: [],
  },
  description: {
    type: String,
    min: 6,
    max: 100,
    default: "",
  },
});

videoSchema.virtual("user", {
  ref: "User",
  localField: "_id",
  foreignField: "userId",
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
