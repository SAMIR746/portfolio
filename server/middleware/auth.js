// Auth middleware
import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ msg: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.status(403).json({ msg: "Invalid token" });
    next();
  });
}
