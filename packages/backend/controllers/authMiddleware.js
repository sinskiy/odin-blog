const jwt = require("jsonwebtoken");

function isUser(req, res, next) {
  const bearerHeader = req.get("Authorization");
  const [bearer, token] = bearerHeader.split(" ");
  try {
    const user = jwt.verify(token, process.env.SECRET);
    if (user) {
      next();
    }
  } catch (err) {
    res.sendStatus(401);
  }
}

async function isAuthor(req, res, next) {
  if (!req.user) {
    return res.sendStatus(403);
  }

  const { postId } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(postId),
      },
    });
    // TODO: finish later
    // * post.authors doesn't show up
    // * if (post.)
  } catch (err) {
    next(err);
  }
}

module.exports = { isUser };
