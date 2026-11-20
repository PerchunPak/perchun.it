<script lang="ts">
	let { children, level: _, ...rest } = $props();
</script>

<h2 {...rest} class="mb-5 h2">{@render children?.()}</h2>
