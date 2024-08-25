require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

app.listen(
  process.env.PORT,
  () =>
    process.env.NODE_ENV === "development" &&
    console.log("http://localhost:3000")
);
