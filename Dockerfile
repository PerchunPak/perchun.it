FROM oven/bun:1.4-slim AS deps

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

FROM oven/bun:1.4-slim AS build

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY vite.config.ts tsconfig.json ./
COPY static/ static/
COPY src/ src/
# for sentry auto version
COPY .git/ .git/
# An ARG (not ENV) is visible to `RUN` but does not stay in the image
ARG SENTRY_AUTH_TOKEN
RUN bun run build

FROM node:26-slim AS final

WORKDIR /app
COPY package.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build

ENTRYPOINT ["node", "./build/index.js"]
