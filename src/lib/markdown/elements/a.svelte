<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { resolve } from '$app/paths';

	let {
		children,
		href,
		class: className,
		target,
		rel,
		...rest
	}: HTMLAnchorAttributes & { children: Snippet } = $props();
	const external = $derived(Boolean(href && !href.startsWith('/') && !href.startsWith('#')));
	const resolvedHref = $derived(
		href && !external && href.startsWith('/') ? resolve(href as `/${string}`) : href
	);
</script>

<a
	{...rest}
	href={resolvedHref}
	class={['anchor', className]}
	target={external ? '_blank' : target}
	rel={external ? 'noreferrer' : rel}
>
	{@render children()}
</a>
