var sum = 0;

for (var i = 2; i < process.argv.length; ++i) {
	var number = Number(process.argv[i]);

	if (!isNaN(number)) {
		sum += number;
	}
}

console.log(sum);
