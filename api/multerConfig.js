import multer from "multer";

//Multer
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "assets/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
export { upload };
