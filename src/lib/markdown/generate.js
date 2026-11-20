/* Generates the element components in ./elements, run from the project root. */

import * as fs from 'node:fs';

/*
  First element is the HTML element name, second is the classes to apply.
  A plain string is shorthand for `[value, value]`.

  `h1` (centred) and `a` (picks `target`) are written by hand.
*/
const elements = [
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	['ol', 'list-decimal list-inside space-y-1'],
	['ul', 'list-disc list-inside space-y-1'],
	'blockquote',
	'pre',
	'code',
	'kbd'
];

for (let element of elements) {
	if (typeof element === 'string') element = [element, element];
	const [name, classes] = element;

	// mdsvex passes headings a `level` prop, which must not end up as an HTML attribute.
	const isHeading = /^h\d$/.test(name);
	const props = isHeading ? '{ children, level: _, ...rest }' : '{ children, ...rest }';
	const extraClasses = isHeading ? ' mb-5' : '';

	fs.writeFileSync(
		`./src/lib/markdown/elements/${name}.svelte`,
		`<script lang="ts">
\tlet ${props} = $props();
</script>

<${name} {...rest} class="${classes}${extraClasses}">{@render children?.()}</${name}>
`
	);
}
