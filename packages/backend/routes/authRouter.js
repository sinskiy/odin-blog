const { Router } = require("express");
const { signupPost, loginPost } = require("../controllers/authController");
const router = Router();

router.post("/login", loginPost);
router.post("/signup", signupPost);

module.exports = router;
