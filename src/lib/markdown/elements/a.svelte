<!-- eslint-disable-next-line svelte/valid-compile -->
<a {...$$props} class="anchor" target={$$props.href.startsWith('/') ? '_self' : '_blank'}>
	<slot />
</a>
