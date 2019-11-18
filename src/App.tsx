import '@autoguru/overdrive/dist/theme/core.scss';
import '@autoguru/overdrive/dist/theme/tokens/render.scss';
import '@autoguru/overdrive/dist/overdrive.css';
import { request } from 'graphql-request';

const API = 'https://api.graph.cool/simple/v1/movies';
const fetcher = query => request(API, query);

import React from 'react';

import { Suspense } from 'react';
import { Stack, Text } from '@autoguru/overdrive';
import useSWR from 'swr';

export const App = () => {
	return <Suspense fallback={'loading...'}>
		<Test/>
	</Suspense>;
};

const Test = () => {

	const { data } = useSWR(`
	query {
		allMovies {
			title
		}
	}
	`, fetcher, { suspense: true });

	console.log(data);

	return <Stack>
		<Text>

		</Text>
	</Stack>;
};
