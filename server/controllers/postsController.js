import prisma from "../prisma/index.js";

export async function postsGet(req, res, next) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        public: true,
      },
      include: {
        author: {
          include: {
            user: true,
          },
        },
      },
    });
    res.json(posts);
  } catch (err) {
    next(err);
  }
}

export async function postsPost(req, res, next) {
  const { authorId, title, description, text } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        authorId: Number(authorId),
        title,
        description,
        text,
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
}

export async function postGet(req, res, next) {
  const { postId } = req.params;
  try {
    const post = await prisma.post.findUniqueOrThrow({
      where: {
        id: Number(postId),
      },
      include: {
        author: {
          include: {
            user: true,
          },
        },
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
}

export async function postPut(req, res, next) {
  const { postId } = req.params;
  const { title, description, text, postPublic } = req.body;
  try {
    const post = await prisma.post.update({
      data: {
        title,
        description,
        text,
        public: Boolean(postPublic),
      },
      where: {
        id: Number(postId),
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
}
