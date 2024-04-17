import Video from "../model/video.js";
import User from "../model/user.js";

//Create Video

export const CreateVideo = async (req, res) => {
  try {
    const file = req.files["file1"][0];
    const videofile = req.files["file2"][0];

    if (!file && !videofile) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    if (!User.isValidFile(file) && !User.isValidVideo(videofile)) {
      return res.status(400).json({ error: "Invalid file type or size." });
    }

    const { path: path1 } = file;
    const { path: path2 } = videofile;

    const video = new Video({
      userId: req.params.id,
      title: req.body.title,
      imgURL: path1,
      videoURL: path2,
      description: req.body.description,
    });
    const savedVideo = await video.save();
    res.status(200).send(savedVideo);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get all videos

export const GetAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("userId");
    const updatedVideos = [];
    videos.map((video) => {
      const { __v, ...other } = video._doc;
      updatedVideos.push(other);
    });
    res.status(200).send(updatedVideos);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get all videos of a user by id

export const GetAllVideosUser = async (req, res) => {
  try {
    const videos = await Video.find({ userId: req.params.id }).populate(
      "userId"
    );
    const updatedVideos = [];
    videos.map((video) => {
      const { __v, ...other } = video._doc;
      updatedVideos.push(other);
    });
    res.status(200).send(updatedVideos);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get Video by id

export const GetVideoById = async (req, res) => {
  try {
    const video = await Video.findOne({ _id: req.params.id }).populate(
      "userId"
    );
    res.status(200).send(video);
  } catch (error) {
    res.status(500).send(error);
  }
};
