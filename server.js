var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var port = process.env.port || 3000;

express().use(bodyParser.urlencoded({ extended: true }));

express().use(bodyParser.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/do-to";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

express().listen(port, function() {
    console.log("This is Dr. Frasier Crane... I'm listening...\nPort: " + port);
  });