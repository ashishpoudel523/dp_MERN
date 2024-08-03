const express = require("express");
const app = express();
// const { createBlog, editBlog, home } = require("./controller/blogController");
const port = process.env.PORT || 3000;
const blogRoute = require("./routes/blogRoute");

app.set("view engine", "ejs");

// app.get("/create", createBlog);

//middleware
app.use("/blog/", blogRoute);

app.listen(3000, () => {
  console.log("Hi");
});
