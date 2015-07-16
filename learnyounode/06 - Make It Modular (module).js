module.exports = function(dir, ext, callback) {
	var fs = require('fs');

	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}

		if (ext && ext.length > 0) {
			list = list.filter(function(fileName) {
				var fileNameSplit = fileName.split('.');
				return fileNameSplit.length > 1 ? fileNameSplit[fileNameSplit.length - 1] === ext : false;
			})
		}

		callback(null, list);
	})
}
