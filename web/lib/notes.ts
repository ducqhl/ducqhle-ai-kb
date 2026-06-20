import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Concept, GraphData, MindNode, Topic } from "./types";

// web/ lives inside the vault root (david-braino/). Topics are sibling folders.
const VAULT_DIR = process.env.NOTES_DIR
  ? path.resolve(process.env.NOTES_DIR)
  : path.resolve(process.cwd(), "..");

const IGNORE = new Set([
  "web",
  "node_modules",
  ".git",
  ".obsidian",
  ".claude",
  ".agents",
  ".claudian",
]);

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** strip the "01 - " numeric prefix and .md extension → display title */
function titleFromFilename(file: string): string {
  return file.replace(/\.md$/i, "").replace(/^\s*\d+\s*-\s*/, "").trim();
}

function firstHeading(body: string): string | undefined {
  const m = body.match(/^#\s+(.+)$/m);
  return m?.[1]?.trim();
}

/** pull the prose under a "## Section" heading (until next ## or end) */
function section(body: string, name: string): string | undefined {
  const re = new RegExp(`##\\s+${name}\\b[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, "i");
  const m = body.match(re);
  const txt = m?.[1]?.trim();
  return txt ? txt.replace(/^>\s?/gm, "").trim() : undefined;
}

function wikilinks(body: string): string[] {
  const out = new Set<string>();
  const re = /\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body))) {
    const name = m[1].trim();
    if (name) out.add(name);
  }
  return [...out];
}

function isTopicDir(dir: string): boolean {
  if (!fs.statSync(dir).isDirectory()) return false;
  const entries = fs.readdirSync(dir);
  return (
    entries.some((e) => /MOC.*\.md$/i.test(e)) ||
    entries.includes("Concepts")
  );
}

let _cache: { topics: Topic[]; concepts: Concept[] } | null = null;

function build() {
  if (_cache) return _cache;
  const topics: Topic[] = [];
  const concepts: Concept[] = [];

  let topLevel: string[] = [];
  try {
    topLevel = fs.readdirSync(VAULT_DIR);
  } catch {
    topLevel = [];
  }

  for (const entry of topLevel) {
    if (IGNORE.has(entry) || entry.startsWith(".")) continue;
    const dir = path.join(VAULT_DIR, entry);
    let topicDir = false;
    try {
      topicDir = isTopicDir(dir);
    } catch {
      continue;
    }
    if (!topicDir) continue;

    const topicName = entry;
    const topicSlug = slugify(topicName);

    // MOC
    let mocBody: string | undefined;
    for (const f of fs.readdirSync(dir)) {
      if (/MOC.*\.md$/i.test(f)) {
        mocBody = matter(fs.readFileSync(path.join(dir, f), "utf8")).content;
        break;
      }
    }

    // Concepts
    const conceptsDir = path.join(dir, "Concepts");
    const conceptFiles = fs.existsSync(conceptsDir)
      ? fs.readdirSync(conceptsDir).filter((f) => f.endsWith(".md")).sort()
      : [];

    conceptFiles.forEach((file, i) => {
      const full = path.join(conceptsDir, file);
      const { content } = matter(fs.readFileSync(full, "utf8"));
      const title = firstHeading(content) || titleFromFilename(file);
      const orderMatch = file.match(/^\s*(\d+)/);
      concepts.push({
        slug: slugify(title),
        title,
        topic: topicName,
        topicSlug,
        order: orderMatch ? parseInt(orderMatch[1], 10) : i,
        body: content,
        eli5: section(content, "ELI5"),
        remember: section(content, "Remember"),
        links: wikilinks(content),
        linkSlugs: [],
        source: section(content, "Source"),
      });
    });

    topics.push({
      slug: topicSlug,
      name: topicName,
      mocBody,
      conceptCount: conceptFiles.length,
    });
  }

  // resolve wikilinks → slugs (match by normalized title)
  const byTitle = new Map(concepts.map((c) => [c.title.toLowerCase(), c.slug]));
  for (const c of concepts) {
    c.linkSlugs = c.links
      .map((l) => byTitle.get(l.toLowerCase()))
      .filter((s): s is string => !!s && s !== c.slug);
  }

  _cache = { topics, concepts };
  return _cache;
}

export function getTopics(): Topic[] {
  return build().topics.sort((a, b) => a.name.localeCompare(b.name));
}

export function getConcepts(): Concept[] {
  return build().concepts;
}

export function getTopic(slug: string): Topic | undefined {
  return build().topics.find((t) => t.slug === slug);
}

export function getConceptsForTopic(topicSlug: string): Concept[] {
  return build()
    .concepts.filter((c) => c.topicSlug === topicSlug)
    .sort((a, b) => a.order - b.order);
}

export function getConcept(slug: string): Concept | undefined {
  return build().concepts.find((c) => c.slug === slug);
}

/** concepts that link TO the given concept */
export function getBacklinks(slug: string): Concept[] {
  return build().concepts.filter((c) => c.linkSlugs.includes(slug));
}

export function getGraph(): GraphData {
  const { concepts } = build();
  const ids = new Set(concepts.map((c) => c.slug));
  const links: GraphData["links"] = [];
  for (const c of concepts) {
    for (const t of c.linkSlugs) {
      if (ids.has(t)) links.push({ source: c.slug, target: t });
    }
  }
  return {
    nodes: concepts.map((c) => ({ id: c.slug, label: c.title, topic: c.topic })),
    links,
  };
}

export function hasContent(): boolean {
  return build().concepts.length > 0;
}

/**
 * Build a Mind Elixir tree.
 * - no arg  → root "braino" → topics → their concepts
 * - topicSlug → root = topic → its concepts → their outgoing wikilinks
 */
export function getMindMap(topicSlug?: string): MindNode {
  const { topics, concepts } = build();

  if (topicSlug) {
    const topic = topics.find((t) => t.slug === topicSlug);
    const kids = getConceptsForTopic(topicSlug);
    return {
      id: `topic:${topicSlug}`,
      topic: topic?.name ?? topicSlug,
      kind: "root",
      expanded: true,
      children: kids.map((c) => ({
        id: c.slug,
        slug: c.slug,
        topic: `${String(c.order).padStart(2, "0")} ${c.title}`,
        kind: "concept",
        expanded: true,
        children: c.linkSlugs
          .map((s) => concepts.find((x) => x.slug === s))
          .filter((x): x is Concept => !!x)
          .map((x) => ({
            id: `${c.slug}->${x.slug}`,
            slug: x.slug,
            topic: x.title,
            kind: "concept" as const,
          })),
      })),
    };
  }

  return {
    id: "root",
    topic: "braino",
    kind: "root",
    expanded: true,
    children: topics.map((t) => ({
      id: `topic:${t.slug}`,
      topic: t.name,
      kind: "topic",
      expanded: true,
      children: getConceptsForTopic(t.slug).map((c) => ({
        id: c.slug,
        slug: c.slug,
        topic: `${String(c.order).padStart(2, "0")} ${c.title}`,
        kind: "concept" as const,
      })),
    })),
  };
}
