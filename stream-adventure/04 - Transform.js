var through = require('through2');

var write = function(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
};

var end = function(done) {
	done();
};

var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);
