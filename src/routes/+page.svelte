<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Project from '$lib/components/Project.svelte';
	import { currentProjectIndex } from '$lib/stores.ts';
</script>

<div class="flex">
	<div class="w-full md:w-[35rem] 2xl:w-96">
		<Sidebar />
	</div>
	<div class="hidden md:contents">
		<Project idStore={currentProjectIndex} />
	</div>
</div>
