# CLAUDE.md — david-braino Obsidian Vault

## Purpose

Personal AI/ML knowledge base. User (David Le, software engineer) learns AI concepts by building structured Obsidian notes. Claude acts as architect + research assistant — not just answering questions but building lasting note structures.

## Vault Layout

```
/Users/ducqhle/Documents/Google Drive/Obsidian/
├── david-braino/          ← Claude Code working dir (this repo)
├── Software Engineer/     ← existing SE notes (React, .NET, JWT, etc.)
├── David Le/              ← personal/life notes
├── Restaff/               ← work project notes
└── Industry/              ← industry research
```

AI/ML learning lives in `david-braino/` subfolders, one per topic (e.g. `LTSM/` for LSTM).

## Note Architecture: Recall Stack

Every new AI topic follows this structure:

```
<TOPIC>/
├── <TOPIC> MOC.md              ← Map of Content (hub, entry point)
├── <TOPIC> Mind Map.excalidraw.md  ← visual overview
└── Concepts/
    ├── 01 - <concept>.md
    ├── 02 - <concept>.md
    └── ...
```

**MOC contains:** topic overview, FIO mnemonic (Find → Identify → Organize), links to all Concept notes, Recall Stack checklist.

**Each Concept note template:**
```markdown
# <Concept Name>

## ELI5
<Feynman-style one paragraph, no jargon>

## Core Concept
<precise technical explanation>

## Formula / Code
<math block or code snippet>

## Connections
- [[related note]]

## Remember
> <one-sentence retention cue>
```

Rules:
- One concept per file (atomic)
- Numbered files (`01 -`, `02 -`) to enforce reading order
- `[[wikilinks]]` between related concepts
- Feynman ELI5 always comes first — understand before formalizing

## Folder Naming

Keep typos stable once linked (e.g. `LTSM/` not `LSTM/`) — renaming breaks `[[wikilinks]]`.

## Skills Available (Project Scope)

| Skill | Use when |
|---|---|
| `/academic-researcher` | finding papers, sourcing claims |
| `/academic-paper` | writing structured academic content |
| `/academic-paper-reviewer` | reviewing note accuracy |
| `/deep-research` | multi-source deep dives on AI topics |
| `/academic-research-writer` | IEEE-style references, citations |
| `/latex-paper-en` | math-heavy notation |
| `/discover-research` | finding new papers/resources |
| `/watch-video` | learn from a YouTube video → Recall Stack notes (yt-dlp captions) |

## When Claude Adds a New AI Topic

1. Create `<TOPIC>/` folder under `david-braino/`
2. Create MOC first — topic summary + reading order
3. Create Excalidraw mind map scaffold (5 branches: Problem, Architecture, Key Concepts, Math, Variants)
4. Create numbered Concept notes, each self-contained
5. Cross-link with `[[wikilinks]]`
6. Use `/deep-research` or `/academic-researcher` to source claims

## Current AI Topics

| Folder | Status | Source |
|---|---|---|
| `LTSM/` | In progress | Colah's LSTM blog (2015) |
| `Neural Networks/` | In progress | 3Blue1Brown — "But what is a neural network?" (Deep Learning ch.1) |

## Knowledge Website (`web/`)

Next.js static site that renders all vault notes into a recall-optimized knowledge base
styled like a **code editor** (Tokyo-Night IDE theme: tab-bar nav, status bar, monospace
everywhere, `// comment` section headers). It is the publish target at the end of the
learning workflow.

- **Reads** sibling topic folders (any dir with a `* MOC.md` or `Concepts/`), parsing the
  Concept-note section headings (`## ELI5`, `## Core Concept`, `## Formula / Code`,
  `## Connections`, `## Source`, `## Remember`) and `[[wikilinks]]`. Keep headings exact or
  pages render thin.
- **Features:** Atlas (topics/concepts as files/modules), Mind Map (Mind Elixir tree —
  global `/map` + per-topic embed, click a leaf to open the note), Graph (force-graph of
  wikilinks + per-page backlinks), Review (spaced-repetition, SM-2-lite, localStorage).
- **Run:** `cd web && npm run dev` (live, http://localhost:3000) · `npm run build` (static
  export → `web/out/`, host anywhere incl. Vercel).
- **Docker:** `cd web && docker compose up --build -d` → http://localhost:8080 (multi-stage
  node-build → nginx serve, ~52 MB). Build context is the vault root so notes bake in;
  rebuild to publish new notes.
- **Stack:** Next 14 App Router, TS, Tailwind, JetBrains Mono + Fira Code (coder fonts),
  `mind-elixir` for mindmaps, `react-force-graph-2d` for the graph. Theme colors are
  remapped onto the legacy tailwind names (`ink`/`parchment`/`star`/`signal`) in
  `tailwind.config.ts`. Data layer in `web/lib/notes.ts` (`getMindMap()` builds the tree);
  no DB — markdown is the source of truth.
- `web/node_modules`, `.next`, `out` are gitignored.

## User Preferences

- ELI5 first, formalism second
- Atomic notes over long documents
- Visual mind maps alongside text
- Cross-links between concepts
- Recall cues at end of every note
