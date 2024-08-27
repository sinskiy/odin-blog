import { Router } from "express";
import { authGet } from "../controllers/authController.js";
import {
  postsGet,
  postsPost,
  postGet,
  postPut,
  postDelete,
} from "../controllers/postsController.js";
import commentsRouter from "./commentsRouter.js";
const router = Router();
router.use("/:postId/comments", commentsRouter);

router.get("/", postsGet);
router.post("/", authGet, postsPost);

router.get("/:postId", postGet);

// TODO: replace with isAuthor
router.put("/:postId", authGet, postPut);
router.delete("/:postId", authGet, postDelete);

export default router;
