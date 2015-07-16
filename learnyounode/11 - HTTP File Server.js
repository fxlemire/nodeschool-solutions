var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
	var file = fs.createReadStream(process.argv[3]);
	file.pipe(response);
}).listen(process.argv[2]);
