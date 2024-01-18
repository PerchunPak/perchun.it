import projectsInfo, { type ProjectInfo } from '$lib/projects-info';
import * as fs from 'fs';

function parseProject(project: ProjectInfo, slug: string): string {
	let result = '';

	result += '<script lang="ts">\n';
	result += `\timport Icon from '@iconify/svelte';\n`;
	result += '</script>\n\n';

	result += `# ${project.name}\n\n`;
	result += project.description.replaceAll('\n', '\n\n') + '\n\n';
	result += '### Technologies that I have used here:\n\n';

	if (project.technologies) {
		for (const technology of project.technologies) {
			if (typeof technology === 'string') {
				result += `- ${technology}\n`;
				continue;
			}

			result += '- ';
			if (technology.link) result += '[';
			result += technology.name;
			if (technology.link) result += `](${technology.link})`;

			if (technology.description) result += ` - ${technology.description}`;
			result += '\n';
		}
	}

	if (project.links.github || project.links.readTheDocs) {
		result += '\n### Links\n';

		for (const [linkName, isSet] of Object.entries(project.links)) {
			if (!isSet) continue;

			let humanLinkName: string;
			if (linkName === 'github') humanLinkName = 'Check the GitHub!';
			else if (linkName === 'readTheDocs') humanLinkName = 'See ReadTheDocs!';
			else throw Error('unknown link type: ' + linkName);

			result += `\n<a href="https://s.perchun.it/${slug}/${linkName.toLowerCase()}" class="btn variant-filled">\n`;
			result += `\t<Icon icon="${linkName === 'github' ? 'mdi:github' : 'simple-icons:readthedocs'}" />\n`;
			result += `\t${humanLinkName}\n`;
			result += `</a>\n`;
		}
	}

	if (project.additionalDescription) result += '\n' + project.additionalDescription;

	return result + '\n';
}

for (const project of projectsInfo.values()) {
	const slug = project.name === 'This site!' ? 'perchun.it' : project.name;

	try {
		fs.mkdirSync(`./src/routes/${slug}`);
	} catch (err) {
		// @ts-expect-error not happening
		if (err.code !== 'EEXIST') throw err;
	}

	fs.writeFile(`./src/routes/${slug}/+page.mdx`, parseProject(project, slug), (err) => {
		if (err) console.log(err);
	});
}
