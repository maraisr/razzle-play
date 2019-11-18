const { transform } = require('@swc/core');

transform(`

type Thing = 'red';
const test: Thing = {};

`).then((output) => {
	console.log(output.code);
});
