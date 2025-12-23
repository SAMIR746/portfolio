// User model
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true } // hashed later if needed
});

export default mongoose.model("User", userSchema);
