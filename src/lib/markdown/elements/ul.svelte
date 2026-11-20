<script lang="ts">
	let { children, ...rest } = $props();
</script>

<ul {...rest} class="list-inside list-disc space-y-1">{@render children?.()}</ul>
