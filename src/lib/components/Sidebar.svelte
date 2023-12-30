<script lang="ts">
	import projectsInfo from '$lib/projects-info.ts';
</script>

<div class="bg-base-200 h-full min-h-screen">
	<!-- bio -->
	<div class="p-3">
		<img
			src="/avatar.png"
			width="150"
			height="150"
			alt="My avatar"
			class="bg-white rounded-[2rem]"
		/>
		<p class="pt-4">
			Hello there! I'm 16 years old Junior+ Backend/Software developer from
			<a href="https://s.perchun.it/ukraine" class="link-primary">Ukraine</a>.<br />
			Below you can find some of my main projects. They're all available on
			<a href="https://s.perchun.it/github" class="link-primary">my GitHub</a>!
		</p>
	</div>
	<!-- project list -->
	<div class="mt-10">
		<ul class="list-disc list-inside p-3">
			{#each projectsInfo as project}
				<li>
					{project.name}
					{#if project.name === 'czech-plus'}
						<span class="float-right text-accent text-xl">{'<=='}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<!-- navigation -->
	<div class="absolute bottom-0 w-1/5">
		<div class="flex justify-between m-3">
			<button class="btn bg-base-300 text-4xl w-20 h-20 text-center">{'<'}</button>
			<button class="btn bg-base-300 text-4xl w-20 h-20 text-center">{'>'}</button>
		</div>
	</div>
</div>
