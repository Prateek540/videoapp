import Video from "../model/video.js";

//Create Video

export const CreateVideo = async (req, res) => {
  try {
    const video = new Video({
      userId: req.params.id,
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
    const videos = await Video.find();
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
    const video = await Video.findOne({ _id: req.params.id });
    res.status(200).send(video);
  } catch (error) {
    res.status(500).send(error);
  }
};
