
var express = require ('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
//next define a var for port
var PORT = 3000;
//request and response objects are passed through the handleRequests

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.listen(PORT, function(){
  console.log("App listening on PORT" + 3000)
})


