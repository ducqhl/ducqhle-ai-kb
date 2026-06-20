import { getConcepts } from "@/lib/notes";
import { ReviewSession, type RecallItem } from "@/components/ReviewSession";
import { Reveal } from "@/components/Reveal";

export default function ReviewPage() {
  const items: RecallItem[] = getConcepts().map((c) => ({
    slug: c.slug,
    title: c.title,
    topic: c.topic,
    eli5: c.eli5,
    remember: c.remember,
  }));

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <Reveal>
        <div>
          <p className="text-xs text-parchment/40">
            <span className="text-token-num">npm</span> run recall{" "}
            <span className="text-parchment/30">// SM-2-lite</span>
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-parchment">
            <span className="text-star">function</span> review()
          </h1>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <ReviewSession items={items} />
      </Reveal>
    </div>
  );
}
