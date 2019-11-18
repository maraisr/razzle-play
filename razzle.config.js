module.exports = {
	plugins: [
		{
			name:'scss',
			options: {
				modules: true
			}
		},
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
