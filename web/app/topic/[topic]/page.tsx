import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getTopics,
  getTopic,
  getConceptsForTopic,
  getMindMap,
} from "@/lib/notes";
import { renderMarkdown } from "@/lib/markdown";
import { Reveal } from "@/components/Reveal";
import { ConceptCard } from "@/components/ConceptCard";
import { MindMap } from "@/components/MindMap";

export function generateStaticParams() {
  return getTopics().map((t) => ({ topic: t.slug }));
}

export default function TopicPage({ params }: { params: { topic: string } }) {
  const topic = getTopic(params.topic);
  if (!topic) notFound();
  const concepts = getConceptsForTopic(topic.slug);
  const mind = getMindMap(topic.slug);

  return (
    <div className="space-y-10">
      <Reveal>
        <div>
          <Link
            href="/"
            className="text-xs text-parchment/40 transition-colors hover:text-star"
          >
            ← cd ~/atlas
          </Link>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-parchment md:text-4xl">
            <span className="text-token-num">▸</span> {topic.name}
            <span className="text-parchment/30">/</span>
          </h1>
          <p className="mt-2 text-xs text-parchment/45">
            <span className="text-signal">{concepts.length}</span> concept
            {concepts.length === 1 ? "" : "s"}{" "}
            <span className="text-parchment/30">// reading order below</span>
          </p>
        </div>
      </Reveal>

      {concepts.length > 0 && (
        <Reveal delay={0.06}>
          <section>
            <h2 className="mb-3 text-xs text-parchment/45">
              <span className="text-token-num">cat</span> {topic.slug}/mindmap
            </h2>
            <MindMap data={mind} height={420} />
          </section>
        </Reveal>
      )}

      {topic.mocBody && (
        <Reveal delay={0.1}>
          <article
            className="prose-note rounded-lg border border-ink-600 bg-ink-900/40 p-5 md:p-7"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(topic.mocBody) }}
          />
        </Reveal>
      )}

      <Reveal delay={0.14}>
        <section>
          <h2 className="mb-4 font-display text-lg font-semibold text-parchment">
            <span className="text-star">export</span> concepts[]
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {concepts.map((c) => (
              <ConceptCard key={c.slug} concept={c} />
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
