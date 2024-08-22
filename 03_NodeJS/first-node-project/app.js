const express = require("express");
const app = express();
// const { createBlog, editBlog, home } = require("./controller/blogController");
const port = process.env.PORT || 3000;
const blogRoute = require("./routes/blogRoute");
const { blogs } = require("./model/index");
require("./model/index");

app.set("view engine", "ejs");

const { multer, storage } = require("./middleware/multerConfig");
const upload = multer({ storage: storage });

//request from client react or view
app.use(express.json());

//for monolithic architecture
app.use(express.urlencoded({ extended: true }));

// app.get("/create", createBlog);

//middleware
app.use("/blog/", blogRoute);

app.post("/blog", async (req, res) => {
  //destructuring
  const { title, subtitle, description } = req.body;
  console.log(title, subtitle, description);
  //since it takes time to insert data in table, we should use async await
  await blogs.create({
    //table column : value
    title,
    subTitle: subtitle,
    description,
  });
  res.redirect("/blog/home");
});

app.listen(port, () => {
  console.log(`Server started at https://localhost:${port}`);
});
