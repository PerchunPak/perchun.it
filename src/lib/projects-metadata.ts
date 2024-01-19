export interface ProjectMetadata {
	name: string;
	slug: string;
}

function construct(args: { name: string; slug?: string }): ProjectMetadata {
	if (args.slug === undefined) args.slug = args.name;

	return args as ProjectMetadata;
}

export const projectsMetadata: ProjectMetadata[] = [
	construct({ name: 'mcstatus' }),
	construct({ name: 'pinger-bot' }),
	construct({ name: 'czech-plus' }),
	construct({ name: 'python-template' }),
	construct({ name: 'This site!', slug: 'perchun.it' }),
	construct({ name: 'the-war-tracker-bot' })
];
