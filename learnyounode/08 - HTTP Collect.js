var http = require('http');

http.get(process.argv[2], function(response) {
	var chars = "";

	response.setEncoding('utf8');

	response.on('data', function(data) {
		chars += data
	});

	response.on('end', function() {
		console.log(chars.length);
		console.log(chars);
	});
});
