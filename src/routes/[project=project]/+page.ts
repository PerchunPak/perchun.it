import type { Component } from 'svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	// Runs on hover too (data-sveltekit-preload-data), so the document is ready on click.
	const document: { default: Component } = await import(
		`../../lib/markdown/projects/${params.project}.mdx`
	);
	return { content: document.default };
};
