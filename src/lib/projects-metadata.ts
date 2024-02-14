import { goto } from '$app/navigation';

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

export function nextProject(currentIndex: number): Promise<void> | null {
	if (currentIndex === projectsMetadata.length - 1) {
		return null;
	}
	return goto(`/${projectsMetadata[currentIndex + 1].slug}`);
}

export function previousProject(currentIndex: number): Promise<void> | null {
	if (currentIndex === 0) {
		return null;
	}
	return goto(`/${projectsMetadata[currentIndex - 1].slug}`);
}
