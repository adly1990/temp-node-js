const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/test.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(result);
	writeFile("./content/test2.txt", "Hello World3333", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log("done with this task");
	});
});

console.log("starting next task");
