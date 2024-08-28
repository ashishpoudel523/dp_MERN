require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/index.js");

const app = express();

connectToDatabase();

app.get("/api", (req, res) => {
  res.writeHead(200, { "Content-Type": "html" });
  res.end(`Hello Ashish`).json({
    message: "This is homepage.",
  });
  //   console.log(req);
});

app.get("/api/about", (req, res) => {
  res.json({
    message: "Its about page",
  });
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running successfully`);
});
