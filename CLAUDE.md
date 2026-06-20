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

## User Preferences

- ELI5 first, formalism second
- Atomic notes over long documents
- Visual mind maps alongside text
- Cross-links between concepts
- Recall cues at end of every note
