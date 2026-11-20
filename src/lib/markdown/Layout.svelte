<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="m-5 mb-10 space-y-2">
	{@render children()}
</div>
