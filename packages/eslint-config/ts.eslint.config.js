import { default as eslint, default as pluginJs } from '@eslint/js';
import prettierlint from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },
	eslint.configs.recommended,
	prettierlint,
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];
