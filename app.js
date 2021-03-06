//// APPLICATION NAME  ////
// "Application tagline" //

// external requirements
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require('express-session');
var mongoose = require("mongoose");

// internal requirements & route files
var index = require("./routes/index");

// app creation & configuration
var app = express();

var PORT = process.env.PORT || 3000;
var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

// routes
app.get('/', index.home);

// connections
mongoose.connect(mongoURI);
app.listen(PORT, function() {
  console.log("Application running on port:", PORT);
});
