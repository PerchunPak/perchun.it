<script lang="ts">
	import Icon from '@iconify/svelte';
	import { resolve } from '$app/paths';
	import { useProjectNavigation } from '$lib/project-navigation';
	import { projectsMetadata } from '$lib/projects-metadata';

	const navigation = useProjectNavigation();
	const isFirstProject = $derived(navigation.currentIndex === 0);
	const isLastProject = $derived(navigation.currentIndex === projectsMetadata.length - 1);
	const previousProjectLink = $derived(projectsMetadata[navigation.currentIndex - 1]?.slug);
	const nextProjectLink = $derived(projectsMetadata[navigation.currentIndex + 1]?.slug);
</script>

<div class="flex justify-between">
	<a
		type="button"
		href={previousProjectLink ? resolve('/[project]', { project: previousProjectLink }) : undefined}
		class="preset-filled btn-icon btn-icon-2xl rounded-full"
		class:btn-disabled={isFirstProject}
		aria-disabled={isFirstProject}
		tabindex={isFirstProject ? -1 : undefined}
		aria-label="Previous project"
	>
		<Icon icon="mdi:arrow-left" />
	</a>
	<a
		type="button"
		href={nextProjectLink ? resolve('/[project]', { project: nextProjectLink }) : undefined}
		class="preset-filled btn-icon btn-icon-2xl rounded-full"
		class:btn-disabled={isLastProject}
		aria-disabled={isLastProject}
		tabindex={isLastProject ? -1 : undefined}
		aria-label="Next project"
	>
		<Icon icon="mdi:arrow-right" />
	</a>
</div>
