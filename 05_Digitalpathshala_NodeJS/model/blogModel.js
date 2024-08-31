const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  subTitle: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
