var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('dotenv').config();

var port = process.env.PORT || 5050;

//Set view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.listen(port, function(req, res){
    console.log("App listening on port " + port);
});
