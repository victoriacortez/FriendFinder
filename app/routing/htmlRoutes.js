var http = require('http');
var express = require ('express');
var path = require("path");
var bodyParser = require('body-parser')
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

{
  "name":"Ariel",
  "photo":"http://vignette2.wikia.nocookie.net/littlemermaid/images/5/52/Ariel.jpg",
  "scores":[
     3,
     1,
     4,
     1,
     4,
   ]
},
{
  "name":"Cinderella",
  "photo":"http://vignette4.wikia.nocookie.net/disney/images/4/44/Cinderella_Photo.jpg/",
  "scores":[
     4,
     2,
     2,
     2,
     2,
   ]
},
{
  "name":"Aurora",
  "photo":"https://img.clipartfest.com/22ec03043b283dba467bcdc7b35da283_print-clipart-panda-free-clipart-sleeping-beauty_1000-1000.jpeg",
  "scores":[
     2,
     3,
     5,
     3,
     5,
   ]
},
{
  "name":"Snow White",
  "photo":"http://vignette3.wikia.nocookie.net/disney/images/d/d2/599936-snow_white1_large.jpg",
  "scores":[
     5,
     5,
     1,
     4,
     3,
   ]
},
{
  "name":"Belle",
  "photo":"http://vignette4.wikia.nocookie.net/disney/images/b/b6/Belle_Xmas_3.jpg",
  "scores":[
     1,
     4,
     1,
     5,
     1,
   ]
},

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.listen(PORT, function(){
  console.log("App listening on PORT" + 3000)
})



