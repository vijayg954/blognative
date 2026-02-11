import express from "express";
import {
  createQuiz,
  getQuizList,
  getQuizById,
} from "../controllers/quizController.js";

const router = express.Router();

router.post("/new", createQuiz);
router.get("/", getQuizList);
router.get("/:id", getQuizById);

export default router;
