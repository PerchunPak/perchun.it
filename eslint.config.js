import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { configs as tsConfigs, parser as tsParser } from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

export default defineConfig(
	{
		ignores: [
			'**/.DS_Store',
			'node_modules/**',
			'build/**',
			'.svelte-kit/**',
			'package/**',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
			'result'
		]
	},
	js.configs.recommended,
	tsConfigs.recommended,
	svelte.configs.recommended,
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		settings: {
			'import-x/resolver-next': [createTypeScriptImportResolver()]
		},
		rules: {
			'import-x/no-unresolved': 'off',
			'import-x/order': 'warn'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				extraFileExtensions: ['.svelte'],
				parser: tsParser,
				svelteConfig
			}
		}
	},
	{
		files: ['src/lib/markdown/Layout.svelte'],
		rules: {
			'no-import-assign': 'off'
		}
	},
	{
		files: ['src/lib/markdown/elements/a.svelte', 'src/routes/+layout.svelte'],
		rules: {
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	prettier
);
