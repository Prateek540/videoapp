import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
    max: 50,
    default: "",
  },
});

videoSchema.virtual("videos", {
  ref: "Video",
  localField: "_id",
  foreignField: "videoId",
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
