export interface Concept {
  slug: string;
  title: string;
  topic: string;
  topicSlug: string;
  order: number;
  /** raw markdown body (after frontmatter strip) */
  body: string;
  eli5?: string;
  remember?: string;
  /** titles this concept links to via [[wikilinks]] */
  links: string[];
  /** slugs resolved from links (only those that exist) */
  linkSlugs: string[];
  source?: string;
}

export interface Topic {
  slug: string;
  name: string;
  mocBody?: string;
  conceptCount: number;
}

export interface GraphNode {
  id: string; // concept slug
  label: string;
  topic: string;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

/** Mind Elixir node shape (recursive). */
export interface MindNode {
  id: string;
  topic: string;
  /** concept slug for click-through navigation (absent on root/topic nodes) */
  slug?: string;
  /** node kind for styling */
  kind?: "root" | "topic" | "concept";
  expanded?: boolean;
  children?: MindNode[];
}
