import { Router } from "express";
import { authGet } from "../controllers/authController.js";
import {
  postsGet,
  postsPost,
  postGet,
  postPut,
  postDelete,
  postPublicityPatch,
} from "../controllers/postsController.js";
import commentsRouter from "./commentsRouter.js";
const router = Router();
router.use("/:postId/comments", commentsRouter);

router.get("/", postsGet);
router.post("/", authGet, postsPost);

router.get("/:postId", postGet);

// TODO: extend authGet
router.put("/:postId", authGet, postPut);
router.delete("/:postId", authGet, postDelete);
router.patch("/:postId/publicity", authGet, postPublicityPatch);

export default router;
