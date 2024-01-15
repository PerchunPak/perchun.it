<script lang="ts">
	import { Avatar, AppRail, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	let currentProject: string = 'mcstatus';
</script>

<AppRail width="w-full md:w-[35rem] 2xl:w-[30rem]" class="p-4">
	<div>
		<div class="flex mb-4">
			<Avatar src="/avatar.png" width="w-32" rounded="rounded-xl" />
			<div class="ml-5 grid">
				<p class="text-xl text-surface-500-400-token">she/her</p>
				<p class="text-sm">
					Contact me at
					<a class="anchor" href="mailto:hi@perchun.it">hi@perchun.it</a>
				</p>
			</div>
		</div>
		<p>
			Hello there! I'm 16 years old Junior+ Backend/Software developer from
			<a href="https://s.perchun.it/ukraine" class="anchor">Ukraine 🇺🇦</a>.<br />
			Below you can find some of my main projects. They're all available on
			<a href="https://s.perchun.it/github" class="anchor">my GitHub</a>!
		</p>
		<p class="mt-2 block">
			I often find that technologies used in project often can say more about it, than its README. I
			also find a small satisfaction in connecting a lot of different technologies, libraries and
			frameworks together to create one, quite messy, but working piece of art. This is why I list
			technologies on the site, as well as link to docs and GitHub.
		</p>
	</div>
	<ListBox class="mt-10">
		{#each ['mcstatus', 'pinger-bot', 'czech-plus', 'python-template', 'This site!', 'the-war-tracker-bot'] as projectName}
			<ListBoxItem bind:group={currentProject} name="medium" value={projectName}
				>{projectName}</ListBoxItem
			>
		{/each}
	</ListBox>
</AppRail>
