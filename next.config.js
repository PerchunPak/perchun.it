const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  sentry: {
    tunnelRoute: "/bugs-report",
  },
};

module.exports = withSentryConfig(
  nextConfig,
  { silent: true },
  { hideSourceMaps: false },
);
