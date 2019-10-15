
//dependencies 

var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

//set up express, PORT, and use body-parsing middleware
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// setting up routes
 require("./app/routes/apiRoutes")(app);
 require("./app/routes/htmlRoutes")(app);

 //listen function logs ('serverside') when our server starts listening for client requests.
 app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
