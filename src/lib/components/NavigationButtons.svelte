<script lang="ts">
	import Icon from '@iconify/svelte';
	import { nextProject, previousProject, projectsMetadata } from '$lib/projects-metadata';
	import { getContext } from 'svelte';
	import type { Readable } from 'svelte/store';

	const currentProjectIndex = getContext<Readable<number>>('currentProjectIndex');

	let isFirstProject: boolean;
	currentProjectIndex.subscribe((v) => (isFirstProject = v === 0));
	let isLastProject: boolean;
	currentProjectIndex.subscribe((v) => (isLastProject = v === projectsMetadata.length - 1));
</script>

<div class="flex justify-between">
	<button
		type="button"
		on:click={() => previousProject($currentProjectIndex)}
		disabled={isFirstProject}
		class="btn-icon btn-icon-lg variant-filled"
		aria-label="Previous project"
	>
		<Icon icon="mdi:arrow-left" />
	</button>
	<button
		type="button"
		on:click={() => nextProject($currentProjectIndex)}
		disabled={isLastProject}
		class="btn-icon btn-icon-lg variant-filled"
		aria-label="Next project"
	>
		<Icon icon="mdi:arrow-right" />
	</button>
</div>
