var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
	var genreCollection;

	function writeThrough(data, encoding, next) {
		if (data.length === 0) {
			return next();
		}

		var data = JSON.parse(data);

		if (data.type === "genre") {
			if (genreCollection) {
				this.push(JSON.stringify(genreCollection) + '\n');
			}

			genreCollection = {
				name: data.name,
				books: []
			}
		} else {
			genreCollection.books.push(data.name);
		}

		next();
	}

	function endThrough(done) {
		this.push(JSON.stringify(genreCollection) + '\n');
		done();
	}

	return combine(
		split(), // read newline-separated json,
		through(writeThrough, endThrough), // group books into genres,
		zlib.createGzip()// then gzip the output
	);
};
