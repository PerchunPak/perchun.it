<script lang="ts">
	import { Avatar, Navigation } from '@skeletonlabs/skeleton-svelte';
	import { resolve } from '$app/paths';
	import { useProjectNavigation } from '$lib/project-navigation';
	import { projectsMetadata } from '$lib/projects-metadata';
	import NavigationButtons from '$lib/components/NavigationButtons.svelte';

	let { onnavigate }: { onnavigate?: () => void } = $props();
	const navigation = useProjectNavigation();
</script>

<Navigation layout="sidebar" class="h-full w-fit max-w-[30rem] overflow-y-auto p-4">
	<Navigation.Header>
		<div class="mb-4 flex">
			<Avatar class="size-32 rounded-xl shadow-2xl">
				<Avatar.Image src="/avatar.webp" alt="My avatar" class="rounded-xl" />
				<Avatar.Fallback class="rounded-xl">PP</Avatar.Fallback>
			</Avatar>
		</div>
		<p>
			Hello there! I'm 18 years old Backend/Software developer from
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
	</Navigation.Header>
	<p class="mt-6 hidden xl:block">
		Tip: you can use
		<kbd class="kbd">&larr;︎</kbd> /
		<kbd class="kbd">&rarr;︎</kbd>
		and
		<kbd class="kbd">A</kbd> /
		<kbd class="kbd">D</kbd>
		to switch between projects.
	</p>
	<Navigation.Content class="mt-6 xl:mt-3">
		<Navigation.Menu>
			{#each projectsMetadata as project (project.slug)}
				<Navigation.TriggerAnchor
					href={resolve('/[project]', { project: project.slug })}
					onclick={onnavigate}
					aria-current={projectsMetadata[navigation.currentIndex]?.slug === project.slug
						? 'page'
						: undefined}
					class="font-normal! {projectsMetadata[navigation.currentIndex]?.slug === project.slug
						? 'preset-filled rounded-full'
						: 'hover:preset-tonal-surface'}"
				>
					<Navigation.TriggerText>{project.name}</Navigation.TriggerText>
				</Navigation.TriggerAnchor>
			{/each}
		</Navigation.Menu>
	</Navigation.Content>
	<Navigation.Footer class="sticky bottom-0 mt-3 w-full">
		<div class="preset-filled-surface-100-900 rounded-base p-2">
			<NavigationButtons />
		</div>
	</Navigation.Footer>
</Navigation>
