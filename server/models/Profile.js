// Profile model
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: String,
  title: String,
  image: String,
  about: String,
  education: [
    {
      degree: String,
      institute: String,
      result: String,
      certificates: [String]
    }
  ],
  projects: [
    {
      title: String,
      desc: String
    }
  ]
});

export default mongoose.model("Profile", profileSchema);
