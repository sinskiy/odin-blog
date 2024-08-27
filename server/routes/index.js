import { Router } from "express";
import authRouter from "./authRouter.js";
import postsRouter from "./postsRouter.js";
import commentsRouter from "./commentsRouter.js";
import authorsRouter from "./authorsRouter.js";
const router = Router();

router.use("/auth", authRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/authors", authorsRouter);

export default router;
