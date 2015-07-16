var through = require('through2');
var trumpet = require('trumpet')();

var upperStream = through(function(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
});

var stream = trumpet.select('.loud').createStream();
stream.pipe(upperStream).pipe(stream);

process.stdin.pipe(trumpet).pipe(process.stdout);
