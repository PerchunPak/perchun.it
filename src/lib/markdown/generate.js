/* Generate all those dump files in ./elements */

import * as fs from 'fs';

/*
  first element is HTML element name, second is styles to apply

  if type is string, it is equal to `[value, value]`
*/
const elements = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	['a', 'anchor'],
	['ol', 'list-decimal list-inside space-y-1'],
	['ul', 'list-disc list-inside space-y-1'],
	'blockquote',
	'pre',
	'code',
	'kbd',
	'del',
	'ins'
];

for (let element of elements) {
	if (typeof element === 'string') element = [element, element];

	const additionalStyles = element[0].startsWith('h') ? ' mb-5' : '';
	fs.writeFile(
		`./src/lib/markdown/elements/${element[0]}.svelte`,
		`<${element[0]} {...$$props} class="${element[1]}${additionalStyles}">
\t<slot />
</${element[0]}>
`,
		(err) => {
			if (err) console.log(err);
		}
	);
}
