const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = withSentryConfig(
  nextConfig,
  { silent: true },
  { hideSourceMaps: false },
);
