# syntax=docker/dockerfile:1
# Build context MUST be the vault root (david-braino/) so topic note folders are
# available at build time:
#   docker build -f web/Dockerfile -t braino-web .
#
# ---- stage 1: build the static site from the vault's markdown ----
FROM node:20-alpine AS build
WORKDIR /app/web

# install deps first (cached layer)
COPY web/package.json web/package-lock.json* ./
RUN npm ci

# bring in the web source + the vault notes (everything not .dockerignored)
WORKDIR /app
COPY . .

# cwd during build = /app/web ; notes.ts reads NOTES_DIR (vault root = /app)
WORKDIR /app/web
ENV NOTES_DIR=/app
RUN npm run build   # → /app/web/out (static export)

# ---- stage 2: serve the static export with nginx ----
FROM nginx:1.27-alpine AS runtime
COPY web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web/out /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1
