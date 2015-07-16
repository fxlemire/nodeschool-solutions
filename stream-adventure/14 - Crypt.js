var crypto = require('crypto');

var decipherStream = crypto.createDecipher('aes256', process.argv[2]);
process.stdin.pipe(decipherStream).pipe(process.stdout);
