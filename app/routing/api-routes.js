// GET route to /api/friends to display JSON data
// POST route to /api/friends handles incoming survey results and compatibility logic

var friendData = require('../data/friends.js');
var fs = require('fs'); 


module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendData);
	});

	app.post('/api/friends', function(req, res) {
		// handles survey results
		console.log(req.body);

		friendData.push(req.body);

		console.log(friendData);

		// write data to file
		//fs.writeFile('../data/friends.js', friendData);

	});
};