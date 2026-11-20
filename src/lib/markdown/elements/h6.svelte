<script lang="ts">
	let { children, level: _, ...rest } = $props();
</script>

<h6 {...rest} class="mb-5 h6">{@render children?.()}</h6>
