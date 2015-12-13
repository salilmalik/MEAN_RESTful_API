
var express = require('express');
var app = express(); 
var bodyParser = require('body-parser'); 
var morgan = require('morgan'); 
var mongoose = require('mongoose');
var config = require('./config');
var path = require('path');


app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers',
			'X-Requested-With,content-type, Authorization');
	next();
});


app.use(morgan('dev'));


app.use(express.static(__dirname + '/public'));


var apiRoutes = require('./app/routes/categoryapi')(app, express);
app.use('/api/category', apiRoutes);

var apiRoutes = require('./app/routes/questionapi')(app, express);
app.use('/api/question', apiRoutes);


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/index.html'));
});
mongoose.connect('mongodb://meanrestfulapi:kuchbhi77@ds029615.mongolab.com:29615/meanrestfulapi');

mongoose.connection.on("open", function(ref) {
  console.log("Connected to mongo server.");

});

mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});

app.listen(config.port);
console.log('Magic happens on port ' + config.port);