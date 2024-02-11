<script lang="ts">
	import Icon from '@iconify/svelte';
	import { currentProjectIndex } from '$lib/stores.js';
	import { projectsMetadata } from '$lib/projects-metadata';

	let isFirstProject: boolean;
	currentProjectIndex.subscribe((v) => (isFirstProject = v === 0));
	let isLastProject: boolean;
	currentProjectIndex.subscribe((v) => (isLastProject = v === projectsMetadata.length - 1));
</script>

<div class="flex justify-between">
	<button
		type="button"
		on:click={() => currentProjectIndex.update((v) => v - 1)}
		disabled={isFirstProject}
		class="btn-icon btn-icon-lg variant-filled"
		aria-label="Previous project"
	>
		<Icon icon="mdi:arrow-left" />
	</button>
	<button
		type="button"
		on:click={() => currentProjectIndex.update((v) => v + 1)}
		disabled={isLastProject}
		class="btn-icon btn-icon-lg variant-filled"
		aria-label="Next project"
	>
		<Icon icon="mdi:arrow-right" />
	</button>
</div>
