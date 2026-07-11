<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { useProjectNavigation } from '$lib/project-navigation';
	import { projectsMetadata } from '$lib/projects-metadata';

	const navigation = useProjectNavigation();

	function navigate(offset: -1 | 1): void {
		const project = projectsMetadata[navigation.currentIndex + offset];
		if (project) void goto(resolve('/[project]', { project: project.slug }));
	}

	function onKeyDown(event: KeyboardEvent) {
		if (event.repeat) return;

		if (event.key === 'a' || event.key === 'ArrowLeft') {
			event.preventDefault();
			navigate(-1);
		} else if (event.key === 'd' || event.key === 'ArrowRight') {
			event.preventDefault();
			navigate(1);
		}
	}
</script>

<svelte:window onkeydown={onKeyDown} />
