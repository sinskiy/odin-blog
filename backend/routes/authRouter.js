const { Router } = require("express");
const { signupPost } = require("../controllers/authController");
const router = Router();

router.post("/signup", signupPost);

module.exports = router;
