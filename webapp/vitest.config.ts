import { defineConfig } from 'vitest/config';
import path from 'path';
import preact from '@preact/preset-vite';

export default defineConfig({
	plugins: [preact()],
	resolve: {
		// react-router-dom specifies "module" field in package.json for ESM entry
		// if it's not mapped, it uses the "main" field which is CommonJS that redirects to CJS preact
		mainFields: ['module'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './test.setup.ts',
		css: true,
	},
});
