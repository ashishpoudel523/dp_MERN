const express = require("express");
const router = express.Router();

const { createBlog, editBlog, home } = require("../controller/blogController");

router.route("/create").get(createBlog);
router.route("/edit").get(editBlog);
router.route("/home").get(home);

module.exports = router;
