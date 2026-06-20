import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getConcepts,
  getConcept,
  getBacklinks,
  getConceptsForTopic,
} from "@/lib/notes";
import { renderMarkdown } from "@/lib/markdown";
import { Reveal } from "@/components/Reveal";
import { ReviewControls } from "@/components/ReviewControls";

export function generateStaticParams() {
  return getConcepts().map((c) => ({ slug: c.slug }));
}

export default function ConceptPage({ params }: { params: { slug: string } }) {
  const concept = getConcept(params.slug);
  if (!concept) notFound();

  const backlinks = getBacklinks(concept.slug);
  const forward = concept.linkSlugs
    .map((s) => getConcept(s))
    .filter((c): c is NonNullable<typeof c> => !!c);

  const siblings = getConceptsForTopic(concept.topicSlug);
  const idx = siblings.findIndex((c) => c.slug === concept.slug);
  const prev = idx > 0 ? siblings[idx - 1] : undefined;
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : undefined;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="space-y-6">
        <Reveal>
          <div className="text-xs text-parchment/40">
            <Link
              href={`/topic/${concept.topicSlug}/`}
              className="hover:text-star"
            >
              ▸ {concept.topicSlug}
            </Link>
            <span className="text-parchment/25"> / </span>
            <span className="text-parchment/60">{concept.slug}.md</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <article
            className="prose-note rounded-lg border border-ink-600 bg-ink-900/40 p-5 md:p-8"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(concept.body) }}
          />
        </Reveal>

        <Reveal delay={0.12}>
          <nav className="flex items-stretch justify-between gap-3">
            {prev ? (
              <Link
                href={`/concept/${prev.slug}/`}
                className="flex-1 rounded-lg border border-ink-600 bg-ink-700/40 p-3 transition-colors hover:border-star/50"
              >
                <div className="text-[0.7rem] text-parchment/40">← prev</div>
                <div className="text-sm font-medium text-parchment">{prev.title}</div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                href={`/concept/${next.slug}/`}
                className="flex-1 rounded-lg border border-ink-600 bg-ink-700/40 p-3 text-right transition-colors hover:border-star/50"
              >
                <div className="text-[0.7rem] text-parchment/40">next →</div>
                <div className="text-sm font-medium text-parchment">{next.title}</div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </nav>
        </Reveal>
      </div>

      <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
        <Reveal delay={0.1}>
          <ReviewControls slug={concept.slug} />
        </Reveal>

        {(forward.length > 0 || backlinks.length > 0) && (
          <Reveal delay={0.16}>
            <div className="rounded-lg border border-ink-600 bg-ink-700/40 p-4">
              {forward.length > 0 && (
                <div className="mb-4">
                  <h3 className="mb-2 text-[0.7rem] text-signal">
                    <span className="text-parchment/30">{"// "}</span>imports →
                  </h3>
                  <ul className="space-y-1">
                    {forward.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/concept/${c.slug}/`}
                          className="text-sm text-signal hover:text-parchment"
                        >
                          → {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {backlinks.length > 0 && (
                <div>
                  <h3 className="mb-2 text-[0.7rem] text-star-soft">
                    <span className="text-parchment/30">{"// "}</span>imported by ←
                  </h3>
                  <ul className="space-y-1">
                    {backlinks.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/concept/${c.slug}/`}
                          className="text-sm text-star-soft hover:text-parchment"
                        >
                          ← {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        )}
      </aside>
    </div>
  );
}
