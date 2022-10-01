const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const homeRoutes = require("./routes/homeRoute.js");
const weatherRoutes = require("./routes/weatherRoute.js");

app.use(homeRoutes);
app.use(weatherRoutes.postCity);
app.use(weatherRoutes.getCity);

app.listen(5432);
