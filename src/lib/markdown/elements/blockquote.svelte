<script lang="ts">
	let { children, ...rest } = $props();
</script>

<blockquote {...rest} class="blockquote">{@render children?.()}</blockquote>
