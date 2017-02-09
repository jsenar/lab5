var data = require("../data.json");

exports.addFriend = function(req, res) {    
	name =req.query.name;
	description = req.query.description;
	imageURL = "http://lorempixel.com/400/400";
	friend = {"name": name,  "description":  description , 
				"imageURL":   imageURL };

	data.friends.push(friend); 
 }