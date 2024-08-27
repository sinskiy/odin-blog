import prisma from "../prisma/index.js";

async function commentsGet(req, res, next) {
  const { postId } = req.params;
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId: Number(postId),
      },
      include: {
        user: true,
      },
    });
    res.json(comments);
  } catch (err) {
    next(err);
  }
}

async function commentsPost(req, res, next) {
  const { postId } = req.params;
  const { userId, text } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: {
        text: text,
        postId: Number(postId),
        userId: Number(userId),
      },
    });
    res.json(comment);
  } catch (err) {
    next(err);
  }
}

async function commentPut(req, res, next) {
  const { commentId } = req.params;
  const { text } = req.body;
  try {
    const comment = await prisma.comment.update({
      data: {
        text: text,
      },
      where: {
        id: Number(commentId),
      },
    });
    res.json(comment);
  } catch (err) {
    next(err);
  }
}

async function commentDelete(req, res, next) {
  const { commentId } = req.params;
  try {
    const comment = await prisma.comment.delete({
      where: {
        id: Number(commentId),
      },
    });
    res.json(comment);
  } catch (err) {
    next(err);
  }
}

export { commentsGet, commentsPost, commentPut, commentDelete };
