import { currentProjectIndex } from '$lib/stores.ts';
import projectsInfo from '$lib/projects-info.ts';

export function load({ params }): void {
	currentProjectIndex.set(
		projectsInfo.findIndex((project) => {
			return (project.name === 'This site!' ? 'perchun.it' : project.name) === params.project;
		})
	);
}
