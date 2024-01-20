import { handleErrorWithSentry } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  enabled: import.meta.env.PROD,
  dsn: 'https://5db59bfd06d1657b961bc70482a936a5@o4504254006689792.ingest.sentry.io/4506596167385088',
  tracesSampleRate: 1.0,
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
