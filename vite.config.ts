import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const sentryAuthToken = process.env.SENTRY_AUTH_TOKEN;

export default defineConfig({
	plugins: [
		tailwindcss(),
		sentrySvelteKit({
			autoUploadSourceMaps: Boolean(sentryAuthToken),
			...(sentryAuthToken
				? {
						org: 'perchunpak',
						project: 'new-perchun-it',
						authToken: sentryAuthToken
					}
				: {})
		}),
		sveltekit()
	]
});
