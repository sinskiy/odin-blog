import prisma from "../prisma/index.js";

export async function authorPostsGet(req, res, next) {
  const { authorId } = req.params;
  try {
    const author = await prisma.post.findMany({
      where: {
        authorId: Number(authorId),
      },
    });
    res.json(author);
  } catch (err) {
    next(err);
  }
}
