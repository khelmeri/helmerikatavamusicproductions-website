import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    artist: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    songUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const song = mongoose.models.song || mongoose.model("song", songSchema);

export default song;
