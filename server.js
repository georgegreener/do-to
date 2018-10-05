var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/do-to";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});


app.use(express.static("public"));

// app.get("/", function(req, res) {
//     // res.sendFile(path.join(__dirname, "./public/index.html"));
//     res.send("to-do");
// });

app.listen(PORT, function() {
    console.log("This is Dr. Frasier Crane... I'm listening...\nPort: " + PORT);
  });