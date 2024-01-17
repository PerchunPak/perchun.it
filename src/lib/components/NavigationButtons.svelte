<script lang="ts">
	import Icon from '@iconify/svelte';
	import { currentProjectIndex } from '$lib/stores.js';
	import projectsInfo from '$lib/projects-info.js';

	let isFirstProject: boolean;
	currentProjectIndex.subscribe((v) => (isFirstProject = v === 0));
	let isLastProject: boolean;
	currentProjectIndex.subscribe((v) => (isLastProject = v === projectsInfo.length - 1));
</script>

<div class="flex justify-between mt-3">
	<button
		type="button"
		on:click={() => currentProjectIndex.update((v) => v - 1)}
		disabled={isFirstProject}
		class="btn-icon btn-icon-lg variant-filled"
	>
		<Icon icon="mdi:arrow-left" />
	</button>
	<button
		type="button"
		on:click={() => currentProjectIndex.update((v) => v + 1)}
		disabled={isLastProject}
		class="btn-icon btn-icon-lg variant-filled"
	>
		<Icon icon="mdi:arrow-right" />
	</button>
</div>
