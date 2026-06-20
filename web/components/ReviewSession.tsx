"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { dueSlugs, getCard, grade, type Grade } from "@/lib/srs";

export interface RecallItem {
  slug: string;
  title: string;
  topic: string;
  eli5?: string;
  remember?: string;
}

const BTNS: { g: Grade; label: string; cls: string }[] = [
  { g: "again", label: "Again", cls: "border-red-400/40 text-red-300 hover:bg-red-400/10" },
  { g: "hard", label: "Hard", cls: "border-star-deep/50 text-star-soft hover:bg-star/10" },
  { g: "good", label: "Good", cls: "border-signal-dim/50 text-signal hover:bg-signal/10" },
  { g: "easy", label: "Easy", cls: "border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10" },
];

export function ReviewSession({ items }: { items: RecallItem[] }) {
  const bySlug = useMemo(() => new Map(items.map((i) => [i.slug, i])), [items]);
  const [queue, setQueue] = useState<string[]>([]);
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [mode, setMode] = useState<"due" | "all" | null>(null);
  const [done, setDone] = useState(0);

  useEffect(() => {
    const due = dueSlugs().filter((s) => bySlug.has(s));
    if (due.length) {
      setQueue(due);
      setMode("due");
    } else {
      setMode(null);
    }
  }, [bySlug]);

  function startAll() {
    setQueue(items.map((i) => i.slug));
    setPos(0);
    setRevealed(false);
    setDone(0);
    setMode("all");
  }

  function rate(g: Grade) {
    const slug = queue[pos];
    grade(slug, g);
    setDone((d) => d + 1);
    setRevealed(false);
    if (pos + 1 < queue.length) {
      setPos(pos + 1);
    } else {
      setQueue([]);
      setMode("finished" as never);
    }
  }

  if (mode === null) {
    return (
      <div className="rounded-lg border border-ink-600 bg-ink-700/40 p-10 text-center">
        <div className="mb-3 font-display text-3xl text-signal">{"[ ]"}</div>
        <h2 className="font-display text-xl font-semibold text-parchment">
          Queue empty — nothing due
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-parchment/55">
          <span className="text-parchment/30">{"// "}</span>
          cards reschedule after each review. Come back later, or run a free study pass.
        </p>
        {items.length > 0 && (
          <button
            onClick={startAll}
            className="mt-5 rounded-lg border border-star/50 bg-star/10 px-5 py-2.5 text-xs text-star-soft transition-colors hover:bg-star/20"
          >
            study --all {items.length} →
          </button>
        )}
      </div>
    );
  }

  if (queue.length === 0) {
    return (
      <div className="rounded-lg border border-ink-600 bg-ink-700/40 p-10 text-center">
        <div className="mb-3 font-display text-3xl text-token-str">✓</div>
        <h2 className="font-display text-xl font-semibold text-parchment">
          Session complete — {done} reviewed
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-parchment/55">
          <span className="text-parchment/30">{"// "}</span>
          each card rescheduled by how well you recalled it.
        </p>
        <button
          onClick={startAll}
          className="mt-5 rounded-lg border border-ink-500 px-5 py-2.5 text-xs text-parchment/60 hover:border-star/50 hover:text-star-soft"
        >
          run another pass →
        </button>
      </div>
    );
  }

  const item = bySlug.get(queue[pos])!;
  const card = getCard(item.slug);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-parchment/40">
        <span>
          {mode === "due" ? "due queue" : "free study"} · {pos + 1}/{queue.length}
        </span>
        <span>{card ? `${card.reps} prior reps` : "new card"}</span>
      </div>

      <div className="min-h-[320px] rounded-lg border border-ink-600 bg-ink-900/40 p-8 md:p-10">
        <div className="text-[0.7rem] text-signal">
          <span className="text-parchment/30">{"// "}</span>{item.topic} · recall this
        </div>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-parchment md:text-3xl">
          {item.title}
        </h2>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="mt-8 w-full rounded-2xl border border-dashed border-ink-500/60 py-8 font-mono text-sm uppercase tracking-widest text-parchment/45 transition-colors hover:border-star/40 hover:text-star-soft"
          >
            Try to recall it · then reveal ↓
          </button>
        ) : (
          <div className="mt-6 space-y-5">
            {item.eli5 && (
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-widest text-star-deep">
                  ELI5
                </div>
                <p className="mt-1 font-body text-lg leading-relaxed text-parchment/85">
                  {item.eli5.replace(/[#*`>]/g, "")}
                </p>
              </div>
            )}
            {item.remember && (
              <blockquote className="rounded-r-xl border-l-4 border-star bg-star/10 px-4 py-3 font-body italic text-parchment/90">
                {item.remember.replace(/[#*`>]/g, "")}
              </blockquote>
            )}
            <Link
              href={`/concept/${item.slug}/`}
              className="inline-block font-mono text-xs uppercase tracking-widest text-signal hover:text-parchment"
            >
              open full note →
            </Link>
          </div>
        )}
      </div>

      {revealed && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {BTNS.map(({ g, label, cls }) => (
            <button
              key={g}
              onClick={() => rate(g)}
              className={`rounded-xl border bg-ink-800/60 py-3 font-mono text-xs uppercase tracking-wider transition-colors ${cls}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
