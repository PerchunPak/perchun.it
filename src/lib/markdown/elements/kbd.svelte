<script lang="ts">
	let { children, ...rest } = $props();
</script>

<kbd {...rest} class="kbd">{@render children?.()}</kbd>
