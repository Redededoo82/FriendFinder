//dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

//set up express and use body-parsing middleware
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//defining external routes
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

//listen function

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
