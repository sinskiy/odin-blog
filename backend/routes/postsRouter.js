const { Router } = require("express");
const { isUser } = require("../controllers/authMiddleware");
const router = Router();

router.get("/", isUser);

module.exports = router;
