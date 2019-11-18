import { createServer } from 'http';
import { renderToNodeStream } from 'react-dom/server';
import { createElement } from 'react';
import { App } from './App';

const port = process.env.PORT || 8080;

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const htmlStart = `<html><head><link rel="stylesheet" href="${assets.client.css}"/></head><body><div id="app">`;
const htmlEnd = `</div> <script src="${assets.client.js}" defer></script></body></html>`;

export default createServer((_req, res) => {

	const appTree = renderToNodeStream(createElement(App));

	res.write(htmlStart);

	appTree.pipe(res, { end: false });

	appTree.on('end', () => {
		res.write(htmlEnd);
		res.end();
	});

}).listen(port, () => {
	console.log(`success ${port}`);
});
