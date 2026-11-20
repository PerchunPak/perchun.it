import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';

// If you add custom handlers, combine them with `sequence(sentryHandle(), ...)` from `@sveltejs/kit/hooks`.
export const handle = sentryHandle();

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
