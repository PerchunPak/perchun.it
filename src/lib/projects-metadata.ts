export interface ProjectMetadata {
	name: string;
	slug: string;
}

function construct({ name, slug }: { name: string; slug?: string }): ProjectMetadata {
	return { name, slug: slug ?? name.toLowerCase() };
}

export const projectsMetadata: readonly ProjectMetadata[] = [
	construct({ name: 'nixpkgs' }),
	construct({ name: 'mcstatus' }),
	construct({ name: 'StatusMC' }),
	construct({ name: 'pinger-bot' }),
	construct({ name: 'czech-plus' }),
	construct({ name: 'python-template' }),
	construct({ name: 'This site!', slug: 'perchun.it' }),
	construct({ name: 'the-war-tracker-bot' }),
	construct({ name: 'Other projects', slug: 'other' })
];

export function projectIndex(slug: string | undefined): number {
	return projectsMetadata.findIndex((project) => project.slug === slug);
}
