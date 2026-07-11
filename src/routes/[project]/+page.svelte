<script lang="ts">
	import type { Component } from 'svelte';
	import { useProjectNavigation } from '$lib/project-navigation';
	import { projectsMetadata } from '$lib/projects-metadata';

	const navigation = useProjectNavigation();
	let PageContents = $state<Component>();

	$effect(() => {
		const project = projectsMetadata[navigation.currentIndex];
		PageContents = undefined;
		void import(`../../lib/markdown/projects/${project.slug}.mdx`).then((module) => {
			if (projectsMetadata[navigation.currentIndex].slug === project.slug) {
				PageContents = module.default;
			}
		});
	});
</script>

{#if PageContents}
	<PageContents />
{/if}
