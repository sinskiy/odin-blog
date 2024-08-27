import { Router } from "express";
import { authGet } from "../controllers/authController.js";
import {
  commentsGet,
  commentsPost,
} from "../controllers/commentsController.js";
const router = Router({ mergeParams: true });

router.get("/", commentsGet);
router.post("/", authGet, commentsPost);

export default router;
