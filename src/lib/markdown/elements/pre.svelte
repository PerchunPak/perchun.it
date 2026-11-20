<script lang="ts">
	let { children, ...rest } = $props();
</script>

<pre {...rest} class="pre">{@render children?.()}</pre>
