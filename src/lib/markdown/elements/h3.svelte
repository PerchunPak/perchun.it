<script lang="ts">
	let { children, level: _, ...rest } = $props();
</script>

<h3 {...rest} class="mb-5 h3">{@render children?.()}</h3>
