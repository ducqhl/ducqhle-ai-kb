# braino · web

The **Observatory** — a static site that turns the Obsidian vault's Recall Stack notes
into a memory-friendly knowledge site. Every concept is a star; every `[[wikilink]]` is a
line in the constellation.

## Run

```bash
cd web
npm install        # first time
npm run dev        # live preview at http://localhost:3000 (auto-reloads as notes change)
npm run build      # static export → web/out/  (host anywhere; Vercel-ready)
```

No database. It reads markdown straight from the sibling topic folders in the vault root.

## How it sources notes

`lib/notes.ts` scans the vault root (`..`, override with `NOTES_DIR`) for any folder that
contains a `* MOC.md` file or a `Concepts/` directory. For each it reads the MOC and the
numbered concept notes, extracting these sections (headings must be exact):

```
## ELI5
## Core Concept
## Formula / Code
## Connections
## Source
## Remember
```

`[[wikilinks]]` are resolved by concept **title** → used to build the concept graph and
per-page backlinks.

## Features

- **Atlas** (`/`) — topics and concepts, plus tonight's review count.
- **Constellation** (`/graph`) — force-directed graph of all concepts wired by wikilinks.
- **Review** (`/review`) — spaced repetition (SM-2-lite). Recall the title, reveal the
  ELI5 + Remember cue, rate Again/Hard/Good/Easy. Schedule lives in `localStorage`.
- Per-concept page shows the full note, prev/next reading order, "links to" + "linked from",
  and an inline spaced-recall card.

## Docker deploy

Static export served by nginx. The build runs **inside** the image, so the vault's note
folders must be in the build context → context is the **vault root** (`..`).

```bash
# from web/  (compose sets context to the vault root for you)
docker compose up --build -d        # → http://localhost:8080
docker compose down                 # stop

# or plain docker, from the VAULT ROOT (david-braino/):
docker build -f web/Dockerfile -t braino-web .
docker run -d --name braino-web -p 8080:80 braino-web
```

- Multi-stage: `node:20-alpine` builds the export → `nginx:1.27-alpine` serves it (~52 MB image).
- `NOTES_DIR=/app` points the data layer at the copied vault root during build.
- `nginx.conf` handles `trailingSlash` routes, immutable `_next/static` caching, gzip, and a
  real 404 (styled export 404 page).
- To publish new notes: rebuild the image (notes are baked in at build time). Re-run the
  `/watch-video` workflow, then `docker compose up --build -d`.

## Stack

Next.js 14 (App Router, static export) · TypeScript · Tailwind ·
fonts: Fraunces / Newsreader / JetBrains Mono · graph: react-force-graph-2d ·
motion: framer-motion · markdown: marked + gray-matter.

> Notes added by `/watch-video` (or the `video-learner` agent) appear here automatically on
> the next `npm run dev` reload or `npm run build`.
