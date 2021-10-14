const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.login.jwt;

  if (token) {
    jwt.verify(token);
  } else {
    res.redirect("/user");
  }
};
