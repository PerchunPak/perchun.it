import { projectsMetadata } from '$lib/projects-metadata';

export async function load({ params }): Promise<void> {
	const newProject = projectsMetadata.find((project) => {
		return project.slug === params.project;
	});
	if (newProject === undefined) return;

	// preload mdx file; this function activates when a user hovers over a link to a page
	await import(`../../lib/markdown/projects/${newProject.slug}.mdx`);
}
