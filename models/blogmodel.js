// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema({
//   title: String,
//   category:String,
//   description: String,
//     timestamps: true,

// });

// const Blog = mongoose.model("Blog", blogSchema);
// export default Blog;


import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);


const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
