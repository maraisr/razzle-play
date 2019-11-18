module.exports = {
	plugins: [
		{
			name: 'typescript',
			options: {
				useBabel: false,
				forkTsChecker: {
					tslint: null,
				},
			},
		},
	],
};
