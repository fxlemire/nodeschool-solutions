var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
	var countryCounts = {};

	function writeThrough(data, encoding, next) {
		countryCounts[data.country] = ++countryCounts[data.country] || 1;
		next();
	};

	function endThrough(done) {
		counter.setCounts(countryCounts);
		done();
	};

	var stream = through(writeThrough, endThrough);

	return duplexer(stream, counter);
};
