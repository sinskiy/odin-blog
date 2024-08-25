const { Router } = require("express");
const { isUser } = require("../controllers/authMiddleware");
const {
  postsGet,
  postsPost,
  postGet,
  postPut,
  postDelete,
} = require("../controllers/postsController");
const router = Router();

router.get("/", postsGet);
router.post("/", isUser, postsPost);

router.get("/:postId", postGet);

// TODO: replace with isAuthor
router.put("/:postId", isUser, postPut);
router.delete("/:postId", isUser, postDelete);

module.exports = router;
