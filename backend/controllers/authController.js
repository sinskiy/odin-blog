const prisma = require("../prisma");

async function signupPost(req, res, next) {}

function isUser(req, res, next) {
  if (!req.user) {
    res.sendStatus(403);
  }
  next();
}

async function isAuthor(req, res, next) {
  if (!req.user) {
    res.sendStatus(403);
  }

  const { postId } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
    });
    // TODO: finish later (post.authors doesn't show up)
    // if (post.)
  } catch (err) {
    //  TODO: set up error page
    next(err);
  }
}

module.exports = { signupPost, isUser };
