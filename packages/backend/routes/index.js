const { Router } = require("express");
const authRouter = require("./authRouter");
const postsRouter = require("./postsRouter");
const commentsRouter = require("./commentsRouter");
const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/posts", postsRouter);
rootRouter.use("/comments", commentsRouter);

module.exports = rootRouter;
