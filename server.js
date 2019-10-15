
//dependencies 

var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

//set up express, port, and use body-parsing middleware
var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// setting up routes
 require("./app/routes/apiRoutes")(app);
 require("./app/routes/htmlRoutes")(app);

 //listen function logs ('serverside') when our server starts listening for client requests.
 app.listen(port, function() {
    console.log("App listening on http://localhost:" + port);
  });
