import mongoose from "mongoose";

const textSchema = new mongoose.Schema(
  {
    text1: {
      type: String,
    },
    text2: {
      type: String,
    },
    text3: {
      type: String,
    },
    text4: {
      type: String,
    },
    text5: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const text = mongoose.models.text || mongoose.model("text", textSchema);

export default text;
