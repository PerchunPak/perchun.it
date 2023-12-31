<script lang="ts">
	import { shortcut } from '$lib/shortcut.ts';
	import { currentProjectIndex } from '$lib/stores.js';
	import projectsInfo from '$lib/projects-info.js';

	let isFirstProject: boolean;
	currentProjectIndex.subscribe((v) => (isFirstProject = v === 0));
	let isLastProject: boolean;
	currentProjectIndex.subscribe((v) => (isLastProject = v === projectsInfo.length - 1));
</script>

<nav class="flex justify-between m-3">
	<button
		class="btn bg-base-300 text-4xl w-20 h-20 text-center"
		class:btn-disabled={isFirstProject}
		use:shortcut={{ code: 'ArrowLeft' }}
		use:shortcut={{ code: 'KeyA' }}
		on:click={() => currentProjectIndex.update((v) => v - 1)}>{'<'}</button
	>
	<button
		class="btn bg-base-300 text-4xl w-20 h-20 text-center"
		class:btn-disabled={isLastProject}
		use:shortcut={{ code: 'ArrowRight' }}
		use:shortcut={{ code: 'KeyD' }}
		on:click={() => currentProjectIndex.update((v) => v + 1)}>{'>'}</button
	>
</nav>
