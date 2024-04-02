import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

commentSchema.virtual("user", {
  ref: "User",
  localField: "_id",
  foreignField: "userId",
});

commentSchema.virtual("video", {
  ref: "Video",
  localField: "_id",
  foreignField: "videoId",
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
