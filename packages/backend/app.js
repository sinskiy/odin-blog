require("dotenv").config();
const cors = require("cors");

const express = require("express");
const rootRouter = require("./routes");
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", rootRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err });
});

app.listen(
  process.env.PORT,
  () =>
    process.env.NODE_ENV === "development" &&
    console.log("http://localhost:3000")
);
