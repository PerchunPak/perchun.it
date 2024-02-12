import { derived, type Readable } from 'svelte/store';
import { page } from '$app/stores';
import { projectsMetadata } from '$lib/projects-metadata';

export const currentProjectIndex: Readable<number> = derived(page, ($page) => {
	if ($page.route.id === null) {
		throw new Error('No route id');
	}

	const projectSlug = $page.url.pathname.split('/')[1];
	if (!projectSlug) return 0;

	return projectsMetadata.findIndex((project) => project.slug === projectSlug);
});
