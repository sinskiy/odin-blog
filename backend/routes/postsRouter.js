const { Router } = require("express");
const { isUser } = require("../controllers/authMiddleware");
const {
  postsGet,
  postsPost,
  postGet,
  postPut,
  postDelete,
} = require("../controllers/postsController");
const commentsRouter = require("../routes/commentsRouter");
const router = Router();
router.use("/:postId/comments", commentsRouter);

router.get("/", postsGet);
router.post("/", isUser, postsPost);

router.get("/:postId", postGet);

// TODO: replace with isAuthor
router.put("/:postId", isUser, postPut);
router.delete("/:postId", isUser, postDelete);

module.exports = router;
