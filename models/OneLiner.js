// import mongoose from "mongoose";

// const oneLinerSchema = new mongoose.Schema(
//   {
//     type: {
//       type: String,
//       required: true, // balvikas or computer
//     },
//     question: {
//       type: String,
//       required: true,
//     },
//     answer: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const OneLiner = mongoose.model("OneLiner", oneLinerSchema);

// export default OneLiner;

import mongoose from "mongoose";

const oneLinerSchema = new mongoose.Schema(
  {
    type: {
      type: String, // balvikas or computer
      required: true,
    },
    topic: {
      type: String, // Bal Vikas 1, Bal Vikas 2
      required: true,
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
