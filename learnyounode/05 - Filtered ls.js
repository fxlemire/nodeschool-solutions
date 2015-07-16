var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
	if (process.argv[3]) {
		list = list.filter(function(fileName) {
			var fileNameSplit = fileName.split('.');
			return fileNameSplit.length > 1 ? fileNameSplit[fileNameSplit.length - 1] === process.argv[3] : false;
		})
	}

	for (var i = 0; i < list.length; ++i) {
		console.log(list[i]);
	}
});
