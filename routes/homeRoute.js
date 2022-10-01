const express = require("express");

const routes = express.Router();

module.exports = routes.get("/", (req, res, next) => {
  res.render("index");
});
