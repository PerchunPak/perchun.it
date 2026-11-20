<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import NavigationButtons from '#lib/components/NavigationButtons.svelte';
	import { currentProjectIndex, projectHref } from '#lib/current-project.svelte.ts';
	import { projectsMetadata } from '#lib/projects-metadata.ts';

	const current = $derived(currentProjectIndex());
</script>

<nav class="flex h-full w-fit max-w-120 flex-col overflow-y-auto bg-surface-200-800 p-4">
	<div>
		<Avatar class="mb-4 size-32 rounded-xl shadow-2xl">
			<Avatar.Image src="/avatar.webp" alt="My avatar" />
			<Avatar.Fallback>PP</Avatar.Fallback>
		</Avatar>
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
	<ul class="mt-6 space-y-1 xl:mt-3">
		{#each projectsMetadata as project, index (project.slug)}
			<li>
				<a
					href={projectHref(index)}
					class={[
						'block rounded-base px-4 py-2',
						index === current ? 'preset-filled-primary-500' : 'hover:preset-tonal'
					]}
					aria-current={index === current ? 'page' : undefined}
				>
					{project.name}
				</a>
			</li>
		{/each}
	</ul>
	<div class="sticky bottom-0 mt-3 w-full">
		<div class="rounded-container preset-filled-surface-500 p-2">
			<NavigationButtons />
		</div>
	</div>
</nav>
