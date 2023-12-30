<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Project from '$lib/components/Project.svelte';
	import { currentProjectIndex } from '$lib/stores.ts';
</script>

<div class="flex">
	<div class="max-w-[20%] min-w-[20%]">
		<Sidebar />
	</div>
	<Project idStore={currentProjectIndex} />
</div>
