---
name: watch-video
description: Watch a YouTube video and turn it into Recall Stack notes in the david-braino Obsidian vault. Fetches captions with yt-dlp, then builds a MOC + atomic Concept notes following CLAUDE.md. Triggers on "watch this video", "learn from this YouTube", a YouTube URL, "add this talk to my notes".
---

# watch-video

Turn a YouTube video into lasting knowledge-base notes. Captions in → Recall Stack out.

## When to use

User drops a YouTube URL and wants the content studied + saved to the vault. Single video at a time.

## Workflow

### 1. Fetch transcript
Run the bundled script from the vault root:

```bash
python3 .claude/skills/watch-video/get_transcript.py "<URL>"
```

- Output starts with `TITLE / CHANNEL / URL / DURATION`, then `---`, then `[mm:ss] line` rows.
- Exit code **3** = no English captions. STOP. Tell user; do NOT invent a transcript. Offer Whisper transcription as a future add-on.
- Add `--no-timestamps` for prose-only feed (default keeps timestamps — useful for citing moments).

### 2. Decide topic + folder
- Map the video to ONE topic folder under `david-braino/` (e.g. a transformers talk → `Transformers/`).
- New topic → create `<TOPIC>/` (keep folder typo-stable once linked, per CLAUDE.md).
- Existing topic → add Concept notes into its `Concepts/`, extend the MOC. Do not duplicate.
- Confirm folder name with user if ambiguous.

### 3. Extract concepts
- Read the full transcript. Pull out **atomic concepts** — one idea each.
- Skip filler, sponsor reads, intros. Keep technical substance.
- Note good timestamps for key moments (cite as `[mm:ss]` in notes).

### 4. Build Recall Stack (follow CLAUDE.md exactly)
Per topic:

```
<TOPIC>/
├── <TOPIC> MOC.md
├── <TOPIC> Mind Map.excalidraw.md   (scaffold: Problem, Architecture, Key Concepts, Math, Variants)
└── Concepts/
    ├── 01 - <concept>.md
    ├── 02 - <concept>.md
    └── ...
```

**MOC** = overview + FIO mnemonic + links to every Concept + Recall Stack checklist + a `## Source` line with video title + URL.

**Each Concept note:**
```markdown
# <Concept Name>

## ELI5
<Feynman, one paragraph, no jargon>

## Core Concept
<precise technical explanation>

## Formula / Code
<math or code; omit block if none>

## Connections
- [[related note]]

## Source
> <Video Title> [mm:ss] — <URL>

## Remember
> <one-sentence retention cue>
```

Rules: ELI5 first. One concept per file. Numbered `01 -`, `02 -`. `[[wikilinks]]` between related concepts and back to the MOC.

### 5. Cross-link + report
- Wikilink new concepts to existing vault notes where relevant (search before linking).
- Update `CLAUDE.md` "Current AI Topics" table if a new topic was added.

### 6. Publish to the website
The `web/` Next.js site renders all vault notes into a recall-optimized "Observatory" site
(concept graph, backlinks, spaced-repetition review). The site parses the exact section
headings above — keep them intact or pages render thin.
- Live preview (auto-reloads as notes change): `cd web && npm run dev` → http://localhost:3000
- Static publish (host anywhere / Vercel): `cd web && npm run build` → output in `web/out/`
- Report: folder, files created, concept count, and that the site is updated.

## Accuracy guardrails
- Source claims only from the transcript. If the video states something dubious, flag it, don't launder it.
- Need to verify or deepen? Use `/academic-researcher` or `/deep-research`.
- No captions = no notes. Never fabricate.

## Notes
- Requires `yt-dlp` (installed via Homebrew). Update with `brew upgrade yt-dlp` if fetch breaks.
- Script restricts to English caption tracks to avoid HTTP 429 from the auto-translate cascade.
