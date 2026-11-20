import { defineParams } from '@sveltejs/kit/params';
import { projectIndex } from '#lib/projects-metadata.ts';

export const params = defineParams({
	project: (param) => (projectIndex(param) === -1 ? undefined : param)
});
