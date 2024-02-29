import jwt from "jsonwebtoken";

export const authentication = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET, {}, async (err, info) => {
    if (err) return res.status(401).send("User not authenticated");
    next();
  });
};
