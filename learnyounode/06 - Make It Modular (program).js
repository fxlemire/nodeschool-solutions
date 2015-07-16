var ls = require('./06\ -\ Make\ It\ Modular\ \(module\).js');

ls(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		console.error("There was an error: ", err);
	} else {
		for (var i = 0; i < data.length; ++i) {
			console.log(data[i]);
		}
	}
})
