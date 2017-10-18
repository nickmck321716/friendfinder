// Dpendencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creating an express server
var app = express(); 

//listening port
var PORT = process.env.PORT || 3000; 

// BodyParseing the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// routes
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
