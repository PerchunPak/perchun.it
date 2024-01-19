<script lang="ts">
	import { Avatar, AppRail, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { projectsMetadata } from '$lib/projects-metadata';
	import { currentProjectIndex } from '$lib/stores';
	import NavigationButtons from '$lib/components/NavigationButtons.svelte';

	let selectedProjectInSidebar: string = projectsMetadata[0].name;
	$: currentProjectIndex.set(
		projectsMetadata.findIndex((v) => v.name === selectedProjectInSidebar)
	);
	currentProjectIndex.subscribe((v) => (selectedProjectInSidebar = projectsMetadata[v].name));
</script>

<AppRail width="w-fit max-w-[30rem]" class="p-4">
	<div>
		<div class="flex mb-4">
			<Avatar src="/avatar.png" width="w-32" rounded="rounded-xl" />
			<p class="text-xl ml-5 text-surface-500-400-token">she/her</p>
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
			I often find that technologies used in project often can say more about it, than its README. I
			also find a small satisfaction in connecting a lot of different technologies, libraries and
			frameworks together to create one, quite messy, but working piece of art. This is why I list
			technologies on the site, as well as link to docs and GitHub.
		</p>
	</div>
	<ListBox class="mt-10">
		{#each projectsMetadata as project}
			<ListBoxItem bind:group={selectedProjectInSidebar} name="medium" value={project.name}>
				{project.name}
			</ListBoxItem>
		{/each}
	</ListBox>
	<NavigationButtons />
</AppRail>
