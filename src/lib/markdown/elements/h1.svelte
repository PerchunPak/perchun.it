<script lang="ts">
	let { children, level: _, ...rest } = $props();
</script>

<div class="flex w-full flex-col items-center">
	<h1 {...rest} class="mb-5 h1">{@render children?.()}</h1>
</div>
