import prisma from "../prisma/index.js";

export async function commentsGet(req, res, next) {
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

export async function commentsPost(req, res, next) {
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
