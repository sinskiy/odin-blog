import { Router } from "express";
import {
  signupPost,
  loginPost,
  authGet,
  userGet,
} from "../controllers/authController.js";
const router = Router();

router.post("/signup", signupPost);
router.post("/login", loginPost);
router.get("/", authGet, userGet);

export default router;
