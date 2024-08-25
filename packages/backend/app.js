require("dotenv").config();

const express = require("express");
const rootRouter = require("./routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", rootRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(
  process.env.PORT,
  () =>
    process.env.NODE_ENV === "development" &&
    console.log("http://localhost:3000")
);
