const { Router } = require("express");
const { isUser } = require("../controllers/authMiddleware");
const {
  commentsGet,
  commentsPost,
  commentPut,
  commentDelete,
} = require("../controllers/commentsController");
const router = Router({ mergeParams: true });

router.get("/", commentsGet);
router.post("/", isUser, commentsPost);

// TODO: replace with isCommentAuthor
router.put("/:commentId", isUser, commentPut);
router.delete("/:commentId", isUser, commentDelete);

module.exports = router;
