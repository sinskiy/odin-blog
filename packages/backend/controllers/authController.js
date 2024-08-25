const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("../prisma");

async function loginPost(req, res, next) {
  const { username, password } = req.body;
  try {
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(400).json({ error: "Incorrect username." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Incorrect password." });
    }
    const token = loginSign(user);
    res.json({ token: token });
  } catch (err) {
    next(err);
  }
}
function loginSign(user) {
  const token = jwt.sign(user, process.env.SECRET);
  return token;
}

async function signupPost(req, res, next) {
  const { username, password } = req.body;
  try {
    const previousUser = await getUserByUsername(username);
    if (previousUser !== null) {
      return res.status(400).json({
        error: "Username already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username, hashedPassword);

    res.json(user);
  } catch (err) {
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

module.exports = { loginPost, signupPost };
