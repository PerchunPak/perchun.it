import { currentProjectIndex } from "$lib/stores";
import { projectsMetadata } from "$lib/projects-metadata";

function extractProjectFromUrl(url: string | null): string | null {
  if (url === null) return null;
  
  const parts = url.split("/")
  if (parts.length === 2) {
		return parts[1];
	}

  return null;
}

export function load({ route: { id: routeId } }): void {
  const projectSlug = extractProjectFromUrl(routeId)
  if (projectSlug === null) return;

	currentProjectIndex.set(
		projectsMetadata.findIndex((project) => {
			return project.slug === projectSlug;
		})
	);
}
