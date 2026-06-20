import Link from "next/link";
import type { Concept } from "@/lib/types";

export function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <Link
      href={`/concept/${concept.slug}/`}
      className="group block rounded-lg border border-ink-600 bg-ink-700/40 p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-star/50 hover:shadow-glow"
    >
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="flex items-center gap-2 text-parchment/40">
          <span className="text-token-num">{String(concept.order).padStart(2, "0")}</span>
          <span className="text-parchment/30">{concept.slug}.md</span>
        </span>
        <span className="text-parchment/35">
          <span className="text-signal">{concept.linkSlugs.length}</span> import
          {concept.linkSlugs.length === 1 ? "" : "s"}
        </span>
      </div>
      <h3 className="mt-2 font-display text-base font-semibold text-parchment transition-colors group-hover:text-star-soft">
        {concept.title}
      </h3>
      {concept.eli5 && (
        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-parchment/55">
          <span className="text-parchment/30">{"// "}</span>
          {concept.eli5.replace(/[#*`>]/g, "")}
        </p>
      )}
    </Link>
  );
}
