import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';
import svelte from 'eslint-plugin-svelte';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { configs as tsConfigs, parser as tsParser } from 'typescript-eslint';

export default defineConfig(
	globalIgnores(['build/', '.svelte-kit/', 'package/', 'bun.lock']),
	js.configs.recommended,
	tsConfigs.recommended,
	svelte.configs.recommended,
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	prettier,
	svelte.configs.prettier,
	{
		languageOptions: {
			parserOptions: { extraFileExtensions: ['.svelte'] },
			globals: { ...globals.browser, ...globals.node }
		},
		settings: {
			'import-x/resolver-next': [createTypeScriptImportResolver()]
		},
		rules: {
			'import-x/order': 'warn',
			'import-x/no-unresolved': 'off',
			// Lets components drop props by destructuring them away, as in `let { level: _, ...rest } = $props()`.
			'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }]
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: { projectService: true, parser: tsParser }
		}
	}
);
