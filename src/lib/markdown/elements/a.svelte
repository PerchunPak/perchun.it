<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, href, ...rest }: HTMLAnchorAttributes = $props();
</script>

<!-- Markdown links are written as plain URLs, mostly external, so there is no route to resolve(). -->
<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a {...rest} {href} class="anchor" target={href?.startsWith('/') ? '_self' : '_blank'}>
	{@render children?.()}
</a>
