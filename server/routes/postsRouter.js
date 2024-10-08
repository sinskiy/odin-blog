import { Router } from "express";
import { authGet } from "../controllers/authController.js";
import {
  postsGet,
  postsPost,
  postGet,
  postPut,
} from "../controllers/postsController.js";
import commentsRouter from "./commentsRouter.js";
const router = Router();
router.use("/:postId/comments", commentsRouter);

router.get("/", postsGet);
router.post("/", authGet, postsPost);

router.get("/:postId", postGet);

router.put("/:postId", authGet, postPut);

export default router;
