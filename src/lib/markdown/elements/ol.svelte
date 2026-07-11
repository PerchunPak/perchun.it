<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLOlAttributes } from 'svelte/elements';

	let { children, class: className, ...rest }: HTMLOlAttributes & { children: Snippet } = $props();
</script>

<ol {...rest} class={['list-inside list-decimal space-y-1', className]}>{@render children()}</ol>
