<script lang="ts">
	import { Avatar, AppRail, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { getContext } from 'svelte';
	import type { Readable } from 'svelte/store';
	import { type ProjectMetadata, projectsMetadata } from '$lib/projects-metadata';
	import NavigationButtons from '$lib/components/NavigationButtons.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	const currentProjectIndex = getContext<Readable<number>>('currentProjectIndex');

	let selectedProjectInSidebar: string = projectsMetadata[0].name;
	currentProjectIndex.subscribe((v) => (selectedProjectInSidebar = projectsMetadata[v].name));

	function navigateToProject(name: string) {
		if (!browser) return;
		goto('/' + (projectsMetadata.find((v) => v.name === name) as ProjectMetadata).slug);
	}
	$: navigateToProject(selectedProjectInSidebar);
</script>

<AppRail width="w-fit max-w-[30rem]" class="p-4">
	<div>
		<div class="mb-4 flex">
			<Avatar src="/avatar.webp" width="w-32" rounded="rounded-xl" alt="My avatar" />
			<p class="text-surface-500-400-token ml-5 text-xl">she/her</p>
		</div>
		<p>
			Hello there! I'm 16 years old Junior+ Backend/Software developer from
			<a href="https://s.perchun.it/ukraine" class="anchor">Ukraine 🇺🇦</a>.
		</p>
		<p class="mt-2 block">
			Below you can find some of my main projects. Worth noting that all my work is open-source and
			everything is available on
			<a href="https://github.com/PerchunPak" class="anchor">my GitHub</a>.
		</p>
		<p class="mt-2 block">
			I often find that technologies used in a project can say more about it, than its README. I
			also find a small satisfaction in connecting a lot of different technologies, libraries and
			frameworks together to create one, quite messy, but working piece of art. This is why I list
			technologies on the site, as well as links to docs and GitHub.
		</p>
	</div>
	<p class="mt-6 hidden xl:block">
		Tip: you can use
		<kbd class="kbd">&larr;︎</kbd> /
		<kbd class="kbd">&rarr;︎</kbd>
		and
		<kbd class="kbd">A</kbd> /
		<kbd class="kbd">D</kbd>
		to switch between projects.
	</p>
	<ListBox class="mt-6 xl:mt-3">
		{#each projectsMetadata as project}
			<a href="/{project.slug}" class="!font-normal">
				<ListBoxItem bind:group={selectedProjectInSidebar} name="medium" value={project.name}>
					{project.name}
				</ListBoxItem>
			</a>
		{/each}
	</ListBox>
	<div class="sticky bottom-0 mt-3 w-full">
		<div class="variant-filled-surface p-2 rounded-token">
			<NavigationButtons />
		</div>
	</div>
</AppRail>
