import projectsInfo from '$lib/projects-info.ts';
import { error } from '@sveltejs/kit';

export function load({ params }): void {
	if (
		projectsInfo.find(
			(project) => (project.name === 'This site!' ? 'perchun.it' : project.name) === params.project
		) === undefined
	) {
		throw error(404, { message: 'Project not found' });
	}
}
