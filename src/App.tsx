import '@autoguru/overdrive/dist/theme/core.scss';
import '@autoguru/overdrive/dist/theme/tokens/render.scss';
import '@autoguru/overdrive/dist/overdrive.css';
import { request } from 'graphql-request';

const API = 'https://countries.trevorblades.com/';
const fetcher = query => request(API, query);

import React, { Suspense } from 'react';

import useSWR from 'swr';

export const App = () => {
	return <Suspense fallback={'yes...'}>
		<Test/>
	</Suspense>;
};

const Test = () => {

	const { data } = useSWR(`
	query {
		countries {
			code
			name
		}
	}
	`, fetcher, { suspense: true });

	return !data ? <p>loading...</p> : <ul>
		{data.countries.map(({ name, code }) => <li key={code}>{name}</li>)}
	</ul>;
};
