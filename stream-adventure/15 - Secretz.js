var crypto = require('crypto');
var tar = require('tar');
var through = require('through2');
var zlib = require('zlib');

var decipherStream = crypto.createDecipher(process.argv[2], process.argv[3]);
var gunzipStream = zlib.createGunzip();
var parserStream = tar.Parse();

parserStream.on('entry', function (e) {
	if (e.type === 'File') {
		var hashStream = crypto.createHash('md5', { encoding: 'hex' });

		function writeThrough(buffer, encoding, next) {
			next();
		}

		function endThrough(done) {
			this.push(" " + e.path + "\n");
			done();
		}

		e.pipe(hashStream).pipe(process.stdout);
		e.pipe(through(writeThrough, endThrough)).pipe(process.stdout);
	}
});

process.stdin.pipe(decipherStream).pipe(gunzipStream).pipe(parserStream);
