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

connectToDatabase();

app.get("/api/home", (req, res) => {
  res.writeHead(200, { "Content-Type": "plain/html" });
  res.end(`Hello Ashish`).json({
    message: "This is homepage.",
  });
});

app.get("/api/about", (req, res) => {
  res.json({
    message: "Its about page",
  });
});

/*
app.post("/api/blog", upload.single("image"), async (req, res) => {
  //output: undefined because nodejs didn't understand that data is coming in json, so, app.use(express.json()) use garni

  //yo chai object destructuring gareko hai
  //cost title = req.body.title ko satta ma yesto hai ta
  const { title, subTitle, description, image } = req.body;

  //server-side validation
  if (!title || !description || !image || !subTitle) {
    return res.status(400).json({
      message: "Please provide title, subTitle, description, image",
    });
  }

  // console.log(title, subTitle, description, image);
  await Blog.create({
    //COLUMN NAME: variable FROM JSON
    //key ra value ko name same xa vane yeuta matrai lekhna ni milxa
    title: title,
    //column name ra variable name same xa vane, yeuta matrai lekhda ni hunxa
    subTitle,
    description,
    image,
  });
  res.status(200).json({
    message: "Blog successfully created.",
  });
});
*/

app.post("/api", upload.single("image"), (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Api hit Success",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running successfully`);
});
