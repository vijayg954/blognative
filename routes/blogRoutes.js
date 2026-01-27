import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
} from "../controllers/blogcontroller.js";

const router = express.Router();

router.route("/blog/new").post( createBlog);
router.route("/blogs").get(getBlogs);
router.route("/blog/:id").get(getBlogById).put( updateBlog).delete( deleteBlog);

export default router;
