import type { ResolvedPathname } from '$app/types';
import { page } from '$app/state';
import { resolve } from '$app/paths';
import { projectIndex, projectsMetadata } from '#lib/projects-metadata.ts';

/** Index of the project in the URL, or 0 on pages without one (such as `/`). */
export function currentProjectIndex(): number {
	return Math.max(projectIndex(page.params.project), 0);
}

/** Link to the project at `index`, or `undefined` when there is no such project. */
export function projectHref(index: number): ResolvedPathname | undefined {
	const project = projectsMetadata[index];
	return project && resolve('/[project=project]', { project: project.slug });
}
