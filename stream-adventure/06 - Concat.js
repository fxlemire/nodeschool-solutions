var concat = require('concat-stream');
function reverse(str) { console.log(str.toString().split('').reverse().join('')); }
process.stdin.pipe(concat(reverse));
