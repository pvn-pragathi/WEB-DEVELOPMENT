const request = require("request");
const assert = require("assert");
const _ = require("lodash");
const express = require("express");
const app = express();
app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const ejs = require("ejs");
app.set('view engine', 'ejs');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nameDB");

app.listen(8000, function() {
    console.log("Server started on port 8000");
  });
  
app.get("/",function(req,res){
    res.send("HELLO");
  });

























