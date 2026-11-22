import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { sentrySvelteKit } from '@sentry/sveltekit/vite';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourcemaps: { upload: false, delete: false },
			telemetry: false
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
			// Defaults to the build time, which makes builds not reproducible
			version: { name: process.env.SENTRY_RELEASE },
			tracing: { server: true },
			inspector: true
		})
	]
});
