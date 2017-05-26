const readline = require('readline');
const fs = require('fs-extra');

var object = {};
var path;
var name;

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: '>'
});

rl.prompt();

rl.on('line', (input) => {
	input = input.split(' ');

	if (input[0] === 'add') {
		Object.defineProperty(object, input[1], {
			value: input[2],
			enumerable: true
		});

		console.log('Property added as: ' + JSON.stringify(object));
	} else if (input[0] === 'path_set') {
		if (input[1] === 'pwd') {
			path = __dirname;

		} else if (input[1] === 'up') {
			path = path.split('/');
			path.splice(path.length - 1, 1);
			path = path.join('/');

		} else if (input[1] === 'concat') {
			path = path + '/' + input[2];

		} else {
			path = input[1];
		}

		console.log('Updated path: ' + path);

	} else if (input[0] === 'path_get') {
		console.log('Path is currently ' + path + '/' + name);

	} else if (input[0] === 'name') {
		name = input[1];
		console.log('Name updated to: ' + name);

	} else if (input[0] === 'output') {
		console.log('Writing JSON file to ' + path + '/' + name + '...');
		fs.outputJsonSync(path + '/' + name, object);
		console.log('File write complete!');
	}

	rl.prompt();
});
