import { Router } from "express";
import { authorPostsGet } from "../controllers/authorsController.js";
const router = Router();

router.post("/:authorId", authorPostsGet);

export default router;
