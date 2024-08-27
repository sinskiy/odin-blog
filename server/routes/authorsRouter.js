import { Router } from "express";
import { authorPostsGet } from "../controllers/authorsController.js";
const router = Router();

router.get("/:authorId", authorPostsGet);

export default router;
