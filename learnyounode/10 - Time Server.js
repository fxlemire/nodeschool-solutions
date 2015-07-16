var net = require('net');

function formatTwoDigits(number) {
	if (number < 10) {
		number = "0" + number;
	}

	return number;
}

var server = net.createServer(function(socket) {
	var today = new Date();
	var year = today.getFullYear();
	var month = formatTwoDigits(today.getMonth() + 1);
	var date = formatTwoDigits(today.getDate());
	var hours = formatTwoDigits(today.getHours());
	var minutes = formatTwoDigits(today.getMinutes());
	var timeString = year + "-" + month + "-" + date + " " + hours + ":" + minutes + '\n';

	socket.end(timeString);
});

server.listen(process.argv[2]);
