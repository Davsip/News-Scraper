// import { mongo } from "mongoose";

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
//Luis
var PORT = 3000;

var app = express();


app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/test",
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set("view engine","handlebars");

const routes = require("./controller/newsController.js");

app.use(routes)


 



app.listen(PORT, () => {
    console.log(`app running on port ${PORT}!`);
});






