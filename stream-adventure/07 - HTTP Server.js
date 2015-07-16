var http = require('http');
var through = require('through2');

var write = function(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
};

var upperStream = through(write);

http.createServer(function(request, response) {
	if (request.method === 'POST') {
		response.writeHead(200);
		request.pipe(upperStream).pipe(response);
	} else {
		response.writeHead(400);
		response.end();
	}
}).listen(process.argv[2]);
