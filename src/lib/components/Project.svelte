<script lang="ts">
	import type { Writable } from 'svelte/store';
	import projectsInfo from '$lib/projects-info.ts';
	import ProjectLink from '$lib/components/ProjectLink.svelte';
	import type { ProjectInfo } from '$lib/projects-info.ts';
	import SvelteMarkdown from 'svelte-markdown';

	export let idStore: Writable<number>;

	let project: ProjectInfo;
	idStore.subscribe((id: number) => {
		project = projectsInfo[id];
	});
</script>

<div class="w-full pb-28 md:pb-0">
	<div class="flex flex-col items-center w-full">
		<h1 class="text-4xl mt-5">{project.name}</h1>
	</div>
	<div class="mx-5 sm:mx-10">
		<div class="mt-2">
			{#if project.markdowned?.description === true}
				<SvelteMarkdown source={project.description} />
			{:else}
				<p>{project.description}</p>
			{/if}
		</div>
		<div class="mt-2">
			{#if project.markdowned?.longDescriptionText === true}
				<SvelteMarkdown source={project.longDescription.text} />
			{:else}
				<p>{project.longDescription.text}</p>
			{/if}
		</div>
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
							{:else if technology.markdowned?.name === true}
								<SvelteMarkdown source={technology.name} />
								<style lang="postcss">
									p {
										@apply inline;
									}
								</style>
							{:else}
								{technology.name}
							{/if}
							{#if technology.description !== undefined}
								{#if technology.markdowned?.description === true}
									- <SvelteMarkdown source={technology.description} />.
									<style lang="postcss">
										p {
											@apply inline;
										}
									</style>
								{:else}
									- {technology.description}.
								{/if}
							{/if}
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
		<h2 class="text-2xl mt-5 font-bold">Links:</h2>
		{#key project.name}
			{#each Object.entries(project.links) as [name, exists]}
				{#if exists}
					<ProjectLink projectName={project.name} linkName={name} />
				{/if}
			{/each}
		{/key}
		<div class="mt-4">
			{#if project.longDescription.additional}
				{#if project.markdowned?.additional === true}
					<SvelteMarkdown source={project.longDescription.additional} />
				{:else}
					{project.longDescription.additional}
				{/if}
			{/if}
		</div>

		<style lang="postcss">
			em {
				@apply italic;
			}
			strong {
				@apply font-bold;
			}
			a {
				@apply link-primary;
			}
			code {
				@apply font-mono;
			}

			ul {
				@apply list-disc list-inside;
			}
			li {
				@apply mt-2;
			}
		</style>
	</div>
</div>
