var http = require('http');
var url = require('url');

http.createServer(function(request, response) {
	if (request.method === 'POST') {
		response.on('data', function(data) {
			console.log("Please do a GET request.");
		});
	} else {
		var PARSETIME = "/api/parsetime";
		var UNIXTIME = "/api/unixtime";
		
		var parsedUrl = url.parse(request.url, true);

		if (parsedUrl.pathname === PARSETIME || parsedUrl.pathname === UNIXTIME) {
			var iso = parsedUrl.query.iso;
			var date = new Date(iso);

			var jsonResponse = parsedUrl.pathname === PARSETIME ? {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()} : {"unixtime": date.getTime()};

			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify(jsonResponse));
		} else {
			response.writeHead(400);
			response.end();
		}
	}
}).listen(process.argv[2]);
