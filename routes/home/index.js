const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { adminAuthenticated } = require("../../helpers/authentication");

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});

router.get("/home", adminAuthenticated, (req, res) => {
  res.render("home/index.handlebars", {
    user: req.user
  });
});

router.get("/log", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
