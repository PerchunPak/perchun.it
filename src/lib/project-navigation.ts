import { getContext, setContext } from 'svelte';

export interface ProjectNavigationContext {
	readonly currentIndex: number;
}

const PROJECT_NAVIGATION_CONTEXT = Symbol('project-navigation');

export function provideProjectNavigation(context: ProjectNavigationContext): void {
	setContext(PROJECT_NAVIGATION_CONTEXT, context);
}

export function useProjectNavigation(): ProjectNavigationContext {
	return getContext<ProjectNavigationContext>(PROJECT_NAVIGATION_CONTEXT);
}
