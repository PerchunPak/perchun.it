import { currentProjectIndex } from '$lib/stores';
import { type ProjectMetadata, projectsMetadata } from '$lib/projects-metadata';

export function load({ params }): { index: number; project: ProjectMetadata } {
	const newProjectIndex = projectsMetadata.findIndex((project) => {
		return project.slug === params.project;
	});

	currentProjectIndex.set(newProjectIndex);
	return { index: newProjectIndex, project: projectsMetadata[newProjectIndex] };
}
