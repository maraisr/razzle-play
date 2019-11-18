import { hydrate } from 'react-dom';

import { App } from './App';
import { createElement } from 'react';

hydrate(createElement(App), document.getElementById('app'));

// @ts-ignore
if (module.hot) {
	// @ts-ignore
	module.hot.accept();
}
