<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getContext } from 'svelte';
	import type { Readable } from 'svelte/store';
	import { projectsMetadata } from '$lib/projects-metadata';

	const currentProjectIndex = getContext<Readable<number>>('currentProjectIndex');

	let isFirstProject: boolean;
	currentProjectIndex.subscribe((v) => (isFirstProject = v === 0));
	let isLastProject: boolean;
	currentProjectIndex.subscribe((v) => (isLastProject = v === projectsMetadata.length - 1));

	let previousProjectLink: string | undefined;
	currentProjectIndex.subscribe((v) => (previousProjectLink = '/' + projectsMetadata[v - 1]?.slug));
	let nextProjectLink: string | undefined;
	currentProjectIndex.subscribe((v) => (nextProjectLink = '/' + projectsMetadata[v + 1]?.slug));
</script>

<div class="flex justify-between">
	<a
		type="button"
		href={previousProjectLink}
		class="variant-filled btn-icon btn-icon-lg"
		class:btn-disabled={isFirstProject}
		aria-label="Previous project"
	>
		<Icon icon="mdi:arrow-left" />
	</a>
	<a
		type="button"
		href={nextProjectLink}
		class="variant-filled btn-icon btn-icon-lg"
		class:btn-disabled={isLastProject}
		aria-label="Next project"
	>
		<Icon icon="mdi:arrow-right" />
	</a>
</div>
