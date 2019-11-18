import { createServer } from 'http';

const port = process.env.PORT || 8080;

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export default createServer((_req, res) => {

	res.write(`<html><head><link rel="stylesheet" href="${assets.client.css}"/></head><body><div id="app">loading...</div> <script src="${assets.client.js}" defer></script></body></html>`);
	res.end();

}).listen(port, () => {
	console.log(`success ${port}`);
});
