import preactLint from '@festiva/eslint-config/preact.eslint.config.js';

export default [
	...preactLint,
	{
		rules: {
			'react/no-unknown-property': [
				'error',
				{
					ignore: ['cmdk-input-wrapper'],
				},
			],
		},
	},
];
