/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

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
		// Global coverage configuration
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html', 'lcov'],
			reportsDirectory: './coverage',
			exclude: [
				'node_modules/**',
				'dist/**',
				'build/**',
				'coverage/**',
				'**/*.config.{js,ts}',
				'**/*.setup.{js,ts}',
				'**/*.test.{js,ts,tsx}',
				'**/*.spec.{js,ts,tsx}',
				'**/test/**',
				'**/tests/**',
			],
			include: [
				'packages/*/src/**/*.{js,ts}',
				'webapp/src/**/*.{js,ts,tsx}',
			],
			all: true,
			lines: 80,
			functions: 80,
			branches: 80,
			statements: 80,
		},
	},
})