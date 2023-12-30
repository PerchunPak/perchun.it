<script lang="ts">
	import { shortcut } from '$lib/shortcut.ts';
	import projectsInfo from '$lib/projects-info.ts';
	import { currentProjectIndex } from '$lib/stores.ts';

	let isFirstProject: boolean;
	currentProjectIndex.subscribe((v) => (isFirstProject = v === 0));
	let isLastProject: boolean;
	currentProjectIndex.subscribe((v) => (isLastProject = v === projectsInfo.length - 1));
</script>

<div class="bg-base-200 h-full min-h-screen">
	<!-- bio -->
	<div class="p-3">
		<img
			src="/avatar.png"
			width="150"
			height="150"
			alt="My avatar"
			class="mb-4 bg-white rounded-[2rem]"
		/>
		<p>
			Hello there! I'm 16 years old Junior+ Backend/Software developer from
			<a href="https://s.perchun.it/ukraine" class="link-primary">Ukraine</a>.<br />
			Below you can find some of my main projects. They're all available on
			<a href="https://s.perchun.it/github" class="link-primary">my GitHub</a>!
		</p>
		<p class="mt-2">
			I often find that technologies used in project often can say more about it, that its README. I also find a small
			satisfaction in connecting a lot of different technologies, libraries and frameworks together to create one, quite
			messy, but working piece of art. This is why I list technologies on the site, as well as link to docs and GitHub.
		</p>
	</div>
	<!-- project list -->
	<div class="mt-10">
		<ul class="list-disc list-inside p-3">
			{#each projectsInfo as project, index}
				<li>
					{project.name}
					{#if index === $currentProjectIndex}
						<span class="float-right text-accent text-xl">{'<=='}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<!-- navigation -->
	<div class="absolute bottom-0 w-1/5">
		<div class="flex justify-between m-3">
			<button
				class="btn bg-base-300 text-4xl w-20 h-20 text-center"
				class:btn-disabled={isFirstProject}
				use:shortcut={{ code: 'ArrowLeft' }}
				use:shortcut={{ code: 'KeyA' }}
				on:click={() => currentProjectIndex.update((v) => v - 1)}>{'<'}</button
			>
			<button
				class="btn bg-base-300 text-4xl w-20 h-20 text-center"
				class:btn-disabled={isLastProject}
				use:shortcut={{ code: 'ArrowRight' }}
				use:shortcut={{ code: 'KeyD' }}
				on:click={() => currentProjectIndex.update((v) => v + 1)}>{'>'}</button
			>
		</div>
	</div>
</div>
