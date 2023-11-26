import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;
