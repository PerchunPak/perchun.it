<script lang="ts">
	import type { Writable } from "svelte/store";
	import projectsInfo from '$lib/projects-info.ts';
	import ProjectLink from '$lib/components/ProjectLink.svelte';
	import type { ProjectInfo } from '$lib/projects-info.ts';

	export let idStore: Writable<number>;

	let project: ProjectInfo
	idStore.subscribe((id: number) => {
		project = projectsInfo[id];
	});
</script>

<div class="w-full">
	<div class="flex flex-col items-center w-full">
		<h1 class="text-4xl mt-5">{project.name}</h1>
	</div>
	<div class="mx-10">
		<p class="mt-3">{project.description}</p>
		<p class="mt-2">{project.longDescription.text}</p>
		{#if project.longDescription.technologies !== undefined}
			<h2 class="text-2xl mt-5 font-bold">Technologies that I have used here:</h2>
			<ul class="list-disc list-inside">
				{#each project.longDescription.technologies as technology}
					<li class="mt-2">
						{#if typeof technology === 'string'}
							{technology}
						{:else}
							{#if technology.link !== undefined}
								<a class="link-primary" href={technology.link}>{technology.name}</a>
							{:else}
								{technology.name}
							{/if}
							{#if technology.description !== undefined}
								- {technology.description}.
							{/if}
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
		<h2 class="text-2xl mt-5 font-bold">Links:</h2>
		{#each Object.entries(project.links) as [name, exists]}
			{#if exists}
				<ProjectLink projectName={project.name} linkName={name} />
			{/if}
		{/each}
		{#if project.longDescription.additional}
			{project.longDescription.additional}
		{/if}
	</div>
</div>
