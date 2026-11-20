<script lang="ts">
	let { children, ...rest } = $props();
</script>

<ol {...rest} class="list-inside list-decimal space-y-1">{@render children?.()}</ol>
