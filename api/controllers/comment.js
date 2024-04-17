import Comment from "../model/comment.js";

//Create Comment

export const CreateComment = async (req, res) => {
  try {
    const comment = new Comment({
      userId: req.params.userId,
      videoId: req.params.videoId,
      text: req.body.text,
    });
    const savedComment = await comment.save();
    res.status(200).send(savedComment);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get all comments by videoId

export const GetComment = async (req, res) => {
  try {
    const comments = await Comment.find({
      videoId: req.params.videoId,
    }).populate("userId");
    const updatedComments = [];
    comments.map((comment) => {
      const { __v, ...other } = comment._doc;
      updatedComments.push(other);
    });
    res.status(200).send(updatedComments);
  } catch (error) {
    res.status(500).send(error);
  }
};
