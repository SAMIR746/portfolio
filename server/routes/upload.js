// Upload routes
import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + file.originalname)
});

const upload = multer({ storage });
const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  res.json({ path: `/uploads/${req.file.filename}` });
});

export default router;
