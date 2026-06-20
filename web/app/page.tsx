import Link from "next/link";
import { getTopics, getConcepts } from "@/lib/notes";
import { Reveal } from "@/components/Reveal";
import { DueQueue } from "@/components/DueQueue";

export default function Home() {
  const topics = getTopics();
  const conceptCount = getConcepts().length;

  return (
    <div className="space-y-12">
      <Reveal>
        <section className="pt-4">
          {/* terminal prompt */}
          <div className="rounded-lg border border-ink-600 bg-ink-900/70 p-5 shadow-card">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-token-str">braino@vault</span>
              <span className="text-parchment/30">:</span>
              <span className="text-signal">~</span>
              <span className="text-parchment/40">$</span>
              <span className="text-parchment/90">learn --from videos --recall spaced</span>
              <span className="inline-block h-4 w-2 animate-blink bg-star align-middle" />
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.15] tracking-tight text-parchment md:text-5xl">
              Every concept is a{" "}
              <span className="text-star">file</span>.
              <br />
              Every <span className="text-signal">[[wikilink]]</span>, an import.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-parchment/55">
              <span className="text-parchment/30">{"// "}</span>
              notes flow in from videos, get distilled to atoms, wired by{" "}
              <code className="text-signal">[[wikilinks]]</code>, then scheduled for recall
              so they actually compile into memory.
            </p>
          </div>
        </section>
      </Reveal>

      {conceptCount > 0 ? (
        <>
          <Reveal delay={0.1}>
            <DueQueue />
          </Reveal>

          <Reveal delay={0.18}>
            <section>
              <div className="mb-5 flex items-baseline justify-between">
                <h2 className="font-display text-lg font-semibold text-parchment">
                  <span className="text-star">import</span> &#123;{" "}
                  <span className="text-signal">topics</span> &#125;
                </h2>
                <span className="text-xs text-parchment/40">
                  {topics.length} module{topics.length === 1 ? "" : "s"} · {conceptCount}{" "}
                  concept{conceptCount === 1 ? "" : "s"}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map((t, i) => (
                  <Link
                    key={t.slug}
                    href={`/topic/${t.slug}/`}
                    className="group relative overflow-hidden rounded-lg border border-ink-600 bg-ink-700/40 p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-star/50 hover:shadow-glow"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-center gap-2 text-xs text-parchment/40">
                      <span className="text-token-num">▸</span>
                      <span className="truncate">{t.slug}/</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-parchment group-hover:text-star-soft">
                      {t.name}
                    </h3>
                    <p className="mt-2 text-xs text-parchment/45">
                      <span className="text-token-str">{t.conceptCount}</span> concept
                      {t.conceptCount === 1 ? "" : "s"} indexed
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>
        </>
      ) : (
        <Reveal delay={0.1}>
          <section className="rounded-lg border border-dashed border-ink-500 bg-ink-700/30 p-10 text-center">
            <div className="mb-3 font-display text-3xl text-star">{"{ }"}</div>
            <h2 className="font-display text-xl font-semibold text-parchment">
              No modules indexed — yet
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-parchment/55">
              <span className="text-parchment/30">{"// "}</span>
              feed a YouTube video to{" "}
              <code className="text-signal">/watch-video</code>. It distills the talk into
              Recall Stack notes, and they appear here as new files.
            </p>
          </section>
        </Reveal>
      )}
    </div>
  );
}
