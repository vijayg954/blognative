import mongoose from "mongoose";

const oneLinerSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true, // balvikas or computer
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const OneLiner = mongoose.model("OneLiner", oneLinerSchema);

export default OneLiner;
