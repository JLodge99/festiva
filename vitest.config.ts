import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		// Define projects for the workspace
		projects: [
			// Utils package - Node.js environment for utility functions
			{
				name: 'utils',
				root: './packages/utils',
				environment: 'node',
				globals: true,
				include: ['src/**/*.{test,spec}.{js,ts}'],
			},
			// Queries package - Node.js environment for API client helpers
			{
				name: 'queries',
				root: './packages/queries',
				environment: 'node',
				globals: true,
				include: ['src/**/*.{test,spec}.{js,ts}'],
			},
			// Webapp - Use the existing webapp vitest config
			'./webapp/vitest.config.ts',
		],
	},
});