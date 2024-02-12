import { goto } from '$app/navigation';
import { currentProjectIndex } from '$lib/stores';
import { get } from 'svelte/store';

export interface ProjectMetadata {
	name: string;
	slug: string;
}

function construct(args: { name: string; slug?: string }): ProjectMetadata {
	if (args.slug === undefined) args.slug = args.name.toLowerCase();

	return args as ProjectMetadata;
}

export const projectsMetadata: ProjectMetadata[] = [
	construct({ name: 'mcstatus' }),
	construct({ name: 'StatusMC' }),
	construct({ name: 'pinger-bot' }),
	construct({ name: 'czech-plus' }),
	construct({ name: 'python-template' }),
	construct({ name: 'This site!', slug: 'perchun.it' }),
	construct({ name: 'the-war-tracker-bot' }),
	construct({ name: 'Other projects', slug: 'other' })
];

export function nextProject(): Promise<void> | null {
	const currentIndex = get(currentProjectIndex);
	if (currentIndex === projectsMetadata.length - 1) {
		return null;
	}
	return goto(`/${projectsMetadata[get(currentProjectIndex) + 1].slug}`);
}

export function previousProject(): Promise<void> | null {
	const currentIndex = get(currentProjectIndex);
	if (currentIndex === 0) {
		return null;
	}
	return goto(`/${projectsMetadata[get(currentProjectIndex) - 1].slug}`);
}
