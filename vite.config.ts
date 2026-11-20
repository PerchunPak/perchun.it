import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { sentrySvelteKit } from '@sentry/sveltekit/vite';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			org: 'perchunpak',
			project: 'new-perchun-it',
			authToken: process.env.SENTRY_AUTH_TOKEN
		}),
		tailwindcss(),
		mdsvex({
			extensions: ['.mdx'],
			templates: { default: '#lib/markdown/Layout.svelte' },
			components: '#lib/markdown/elements.ts'
		}),
		sveltekit({
			extensions: ['.svelte', '.mdx'],
			adapter: adapter(),
			tracing: { server: true },
			inspector: true
		})
	]
});
