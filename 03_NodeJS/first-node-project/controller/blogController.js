exports.createBlog = (req, res) => {
  res.render("create");
};

exports.editBlog = (req, res) => {
  res.render("edit");
};

exports.home = (req, res) => {
  res.render("home");
};
