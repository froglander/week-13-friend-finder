process.env.PWD = process.cwd();
// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//app.use(express.static('app/public'));
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/public', express.static(process.env.PWD + '/public'));
// app.use('/public', express.static(path.join(process.env.PWD, 'public')));

//app.use('/images',express.static(path.join(__dirname, 'public/assets/images')));
//app.use('/css',express.static(path.join(__dirname, 'public/assets/css')));

// app.use(express.static(__dirname + '/public'));
// app.use('/static', express.static(__dirname + '/public'));

console.log("dirname:", __dirname);

// Points the server to a series of 'route' files
// that give the server a map of how to respond when users
// visit or request data from various urls
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);







// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
