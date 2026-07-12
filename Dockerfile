FROM node:26 AS base

ARG SENTRY_AUTH_TOKEN
WORKDIR /app

RUN npm install -g pnpm@11.11.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --prod --frozen-lockfile

FROM base AS build

RUN pnpm install --frozen-lockfile

COPY svelte.config.js tsconfig.json vite.config.ts ./
COPY static/ static/
COPY src/ src/
# for sentry auto version
COPY .git/ .git/
RUN pnpm build

FROM node:26-slim AS final

WORKDIR /app
COPY package.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=build /app/build ./build

ENTRYPOINT ["node", "./build/index.js"]
