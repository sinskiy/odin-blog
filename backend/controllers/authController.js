const bcrypt = require("bcryptjs");
const prisma = require("../prisma");

async function signupPost(req, res, next) {
  const { username, password } = req.body;
  try {
    const previousUser = await getUserByUsername(username);
    if (previousUser !== null) {
      return res.status(400).json({
        message: "Username already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username, hashedPassword);

    res.json(user);
  } catch (err) {
    //  TODO: set up error route
    next(err);
  }
}
async function getUserByUsername(username) {
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
}
async function createUser(username, password) {
  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  return user;
}

function isUser(req, res, next) {
  if (!req.user) {
    res.sendStatus(403);
  }
  next();
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
    //  TODO: set up error route
    next(err);
  }
}

module.exports = { signupPost, isUser };
