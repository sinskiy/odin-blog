import { Router } from "express";
import { authGet } from "../controllers/authController.js";
import {
  commentsGet,
  commentsPost,
  commentPut,
  commentDelete,
} from "../controllers/commentsController.js";
const router = Router({ mergeParams: true });

router.get("/", commentsGet);
router.post("/", authGet, commentsPost);

// TODO: replace with isCommentAuthor
router.put("/:commentId", authGet, commentPut);
router.delete("/:commentId", authGet, commentDelete);

export default router;
