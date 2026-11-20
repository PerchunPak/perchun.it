<script lang="ts">
	let { children, level: _, ...rest } = $props();
</script>

<h4 {...rest} class="mb-5 h4">{@render children?.()}</h4>
