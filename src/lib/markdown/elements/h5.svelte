<script lang="ts">
	let { children, level: _, ...rest } = $props();
</script>

<h5 {...rest} class="mb-5 h5">{@render children?.()}</h5>
