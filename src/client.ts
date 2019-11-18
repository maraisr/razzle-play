import { createRoot } from 'react-dom';

import { App } from './App';
import { createElement } from 'react';

createRoot(document.getElementById('app'))
	.render(createElement(App));

// @ts-ignore
if (module.hot) {
	// @ts-ignore
	module.hot.accept();
}
