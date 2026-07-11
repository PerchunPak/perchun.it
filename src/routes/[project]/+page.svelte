<script lang="ts">
	import type { Component } from 'svelte';
	import Icon from '@iconify/svelte';
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
{:else}
	<div class="flex h-full">
		<div class="m-auto">
			<Icon icon="mdi:loading" class="h-16 w-16 animate-spin" />
		</div>
	</div>
{/if}
