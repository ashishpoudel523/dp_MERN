/*kunai sensitive file like .env jhukkera GitHub ma upload vayo vane 
cache clear garna lai
git rm --cached filename
Ani feri push garni, tyo file hatxa hai ta*/

require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./database/index.js");
const Blog = require("./model/blogModel.js");

const app = express();

//use this middleware to make nodejs understand the data coming from postman is in json format
app.use(express.json());

const { multer, storage } = require("./middleware/multerConfig.js");
const upload = multer({ storage: storage });
const fs = require("fs");

connectToDatabase();

app.get("/blog/home", (req, res) => {
  // res.writeHead(200, { "Content-Type": "plain/html" });
  res.status(200).json({
    message: "This is home page",
  });
  //res.end(`Hello Ashish`);
});

//CREATE / POST OPERATION
app.post("/blog/create", upload.single("image"), async (req, res) => {
  //output: undefined aauxa because nodejs didn't understand that data is coming in json, so, app.use(express.json()) use garni mathi hai ta

  //yo chai object destructuring gareko hai
  //cost title = req.body.title ko satta ma yesto hai ta
  const { title, subTitle, description } = req.body;
  console.log(req.body);
  const { filename } = req.file;
  console.log(req.file);

  //server-side validation
  if (!title || !description || !filename || !subTitle) {
    return res.status(400).json({
      message: "Please provide title, subTitle, description, image",
    });
  }

  await Blog.create({
    //COLUMN NAME: variable FROM JSON, key ra value ko name same xa vane yeuta matrai lekhna ni milxa
    //column name ra variable name same xa vane, yeuta matrai lekhda ni hunxa
    title,
    subTitle,
    description,
    image: filename,
  });

  res.status(200).json({
    message: "Api hit Success/ CREATED",
  });
});

/*
REST API vs RESTful API
REST API = 
post - /createBlog
get - /getBlogs
get - /getBlog/{id}
delete - /deleteBlog/{id}

RESTful API = 
post - /blogs
get - /blogs
get - /blogs/:id
delete - /blogs/:id
*/

//READ / GET ALL OPERATION
app.get("/blog", async (req, res) => {
  const blogs = await Blog.find(); //returns array
  res.status(200).json({
    message: "Blogs fetched successfully",
    data: blogs,
  });
});

//GET BY ID
app.get("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id); //returns an object

  if (!blog) {
    //if pachi else xaina vane, 'return' rakhdi halni
    return res.status(400).json({
      message: "No data found",
    });
  }
  res.status(200).json({
    message: "Data with the id fetched successfully",
    data: blog,
  });
});

//UPDATE / PATCH OPERATION
app.patch("/blog/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { title, subTitle, description } = req.body;
  let imageName;
  if (req.file) {
    imageName = req.file.filename;
    const blog = await Blog.findById(id);
    const oldImageName = blog.image;

    //for file handling
    fs.unlink(`./storage/${oldImageName}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file deleted");
      }
    });
  }
  await Blog.findByIdAndUpdate(id, {
    title: title,
    subTitle: subTitle,
    description: description,
    image: imageName,
  });
  res.status(200).json({
    message: "The Blog Updated successfully",
  });
});

//DELETE OPERATION
app.delete("/blog/:id", async (req, res) => {
  //const id = req.params.id
  const { id } = req.params;
  const blog = await Blog.findById(id);
  const imageName = blog.image;

  //for file handling
  fs.unlink(`./storage/${imageName}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
  await Blog.findByIdAndDelete(id);
  res.status(200).json({
    message: "Blog of that id deleted successfully",
  });
});

//giving permission to read files inside storage folder using middleware
app.use(express.static("./storage"));

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running successfully on http://localhost:${process.env.PORT}`
  );
});
