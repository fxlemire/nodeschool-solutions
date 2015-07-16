var http = require('http');

var websiteNumber = 2;
var website = process.argv[websiteNumber++];

var printData = function(response) {
	var chars = "";

	response.setEncoding('utf8');

	response.on('data', function(data) {
		chars += data;
	});

	response.on('end', function() {
		console.log(chars);
		website = process.argv[websiteNumber++];
		if (website) {
			http.get(website, printData)
		}
	});
};

http.get(website, printData);
