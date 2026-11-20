<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { currentProjectIndex } from '#lib/current-project.svelte.ts';
	import { projectsMetadata } from '#lib/projects-metadata.ts';

	function onkeydown(event: KeyboardEvent) {
		if (event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;

		let offset: number;
		switch (event.key) {
			case 'a':
			case 'ArrowLeft':
				offset = -1;
				break;
			case 'd':
			case 'ArrowRight':
				offset = 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		const target = projectsMetadata[currentProjectIndex() + offset];
		if (target) goto(resolve('/[project=project]', { project: target.slug }));
	}
</script>

<svelte:window {onkeydown} />
