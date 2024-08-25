require("dotenv").config();

const express = require("express");
const rootRouter = require("./routes");
const app = express();

app.use("/api", rootRouter);

app.listen(
  process.env.PORT,
  () =>
    process.env.NODE_ENV === "development" &&
    console.log("http://localhost:3000")
);
