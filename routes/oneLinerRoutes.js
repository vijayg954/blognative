import express from "express";
import {
  createOneLiner,
  getOneLiners,
} from "../controllers/oneLinerController.js";

const router = express.Router();

router.post("/new", createOneLiner);
router.get("/", getOneLiners);

export default router;
