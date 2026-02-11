import {
  createOneLiner,
  getOneLiners,
  getTopics,
} from "../controllers/oneLinerController.js";

router.post("/new", createOneLiner);

// 🆕 get topics
router.get("/topics", getTopics);

// get questions by type + topic
router.get("/", getOneLiners);
