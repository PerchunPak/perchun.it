import adapter from 'svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({ extensions: ['.mdx'], layout: 'src/lib/markdown/Layout.svelte' })
	],

	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter()
	}
};
export default config;
