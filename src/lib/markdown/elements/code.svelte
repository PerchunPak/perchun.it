<script lang="ts">
	let { children, ...rest } = $props();
</script>

<code {...rest} class="code">{@render children?.()}</code>
