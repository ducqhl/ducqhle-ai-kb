import { marked } from "marked";
import { getConcepts, slugify } from "./notes";

marked.setOptions({ gfm: true, breaks: false });

/**
 * Render note markdown to HTML, rewriting [[wikilinks]] into real anchors.
 * Unresolved links render as dimmed spans (the link target doesn't exist yet).
 */
export function renderMarkdown(body: string): string {
  const byTitle = new Map(getConcepts().map((c) => [c.title.toLowerCase(), c.slug]));

  const withLinks = body.replace(
    /\[\[([^\]|#]+)(?:[#|]([^\]]*))?\]\]/g,
    (_all, rawTarget: string, alias?: string) => {
      const target = rawTarget.trim();
      const label = (alias?.trim() || target).replace(/\|/g, "");
      const slug = byTitle.get(target.toLowerCase()) || slugify(target);
      const exists = byTitle.has(target.toLowerCase());
      return exists
        ? `<a class="wikilink" href="/concept/${slug}/">${label}</a>`
        : `<span class="wikilink-dead" title="not written yet">${label}</span>`;
    }
  );

  return marked.parse(withLinks) as string;
}
