const express = require("express");
// const fetch = require("node-fetch");
// import fetch from "node-fetch";

const routes = express.Router();
const data = require("../controllers/weatherRoute.js");
const postCity = routes.post("/city", (req, res, next) => {
  //   res.render("index");
  city = req.body.city;
  console.log(city);
  res.redirect("/city");
});
const getCity = routes.get("/city", (req, res, next) => {
  //   res.render("index");
  //   const city = req.body.city;
  console.log(city);
  console.log(data(city));
  res.render("weather", {
    city: city,
  });
});

module.exports = { postCity, getCity };
