// Data routes
import express from "express";
import Profile from "../models/Profile.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET profile data
router.get("/", async (req, res) => {
  const data = await Profile.findOne();
  res.json(data);
});

// POST update profile (protected)
router.post("/update", auth, async (req, res) => {
  const updated = await Profile.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
});

export default router;
