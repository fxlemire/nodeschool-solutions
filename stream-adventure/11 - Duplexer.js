var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function(cmd, arg) {
	var command = spawn(cmd, arg);
	return duplexer(command.stdin, command.stdout);
};
