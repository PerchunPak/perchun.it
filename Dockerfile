FROM node:18 AS base

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
WORKDIR /app

RUN npm install -g pnpm@8.6.x

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

FROM base AS build

RUN pnpm install

COPY svelte.config.js tsconfig.json tailwind.config.ts postcss.config.cjs vite.config.ts ./
COPY static/ static/
COPY src/ src/
# for sentry auto version
COPY .git/ .git/
RUN pnpm build

FROM node:18-slim AS final

WORKDIR /app
COPY package.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=build /app/build ./build

ENTRYPOINT ["node", "./build/index.js"]
