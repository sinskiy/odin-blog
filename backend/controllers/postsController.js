const prisma = require("../prisma");

async function postsGet(req, res, next) {
  try {
    const posts = await prisma.post.findMany({
      include: { authors: true },
    });
    res.json(posts);
  } catch (err) {
    next(err);
  }
}

async function postsPost(req, res, next) {
  const { authorsIds, title, description, text } = req.body;
  try {
    const authors = await prisma.author.findMany({
      where: {
        id: { in: authorsIds },
      },
    });
    const post = await prisma.post.create({
      data: {
        title,
        description,
        text,
        authors: authors,
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
}

async function postGet(req, res, next) {
  const { id } = req.body;
  try {
    const post = await prisma.post.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
}

async function postPut(req, res, next) {
  const { id, title, description, text } = req.body;
  try {
    const post = await prisma.post.update({
      data: {
        title,
        description,
        text,
      },
      where: {
        id: id,
      },
    });
    res.json(post);
  } catch (err) {
    next(err);
  }
}

async function postDelete(req, res, next) {
  const { id } = req.body;
  try {
    const post = await prisma.post.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { postsGet, postsPost, postGet, postPut, postDelete };
