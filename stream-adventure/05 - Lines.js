var isOdd = true;

var split = require('split');
var through = require('through2');

var write = function(buffer, encoding, next) {
	var data = buffer.toString();
	data = isOdd ? data.toLowerCase() : data.toUpperCase();

	isOdd = !isOdd;
	this.push(data + '\n');
	next();
};

var stream = through(write);

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
