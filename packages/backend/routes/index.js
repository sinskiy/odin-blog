const { Router } = require("express");
const authRouter = require("./authRouter");
const postsRouter = require("./postsRouter");
const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/posts", postsRouter);

module.exports = rootRouter;
