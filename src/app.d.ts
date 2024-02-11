// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import type { ProjectMetadata } from '$lib/projects-metadata';

declare global {
	declare namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface PageState {
			project: ProjectMetadata;
		}
	}
}

export {};
