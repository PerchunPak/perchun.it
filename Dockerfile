FROM oven/bun:1 AS base

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --prod

FROM base AS build

RUN bun install

COPY svelte.config.js tsconfig.json tailwind.config.ts postcss.config.cjs vite.config.ts ./
COPY static/ static/
COPY src/ src/
# for sentry auto version
COPY .git/ .git/
RUN bun run build

FROM oven/bun:1-slim AS final

WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY --from=build /app/build ./build

ENTRYPOINT ["bun", "./build/index.js"]
