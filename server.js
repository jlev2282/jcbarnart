//reqiure the dependencies necessary to create server

var express = require("express");
var bodyParser = require("body-parser");

//configure express

var app = express();

//setup the ports for local and deployed usage

var PORT = process.env.PORT || 2207;

//build in body-parser

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));
//parse application/json
app.use(bodyParser.json());

//build out Routing options

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//setup app to listen for calls

app.listen(PORT, function() {
    console.log("JCBarnArt reporting for duty on PORT: " + PORT);
});