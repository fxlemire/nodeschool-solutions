var tar = require('tar');
var parser = tar.Parse();
parser.on('entry', function (e) {
	if (e.type === 'File') {
		var path = e.path.split('/');
		var name = path[path.length - 1];
		console.log(name);
	}
});
var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(parser);
