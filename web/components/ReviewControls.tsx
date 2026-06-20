"use client";
import { useEffect, useState } from "react";
import { getCard, grade, resetCard, type Grade, type SrsCard } from "@/lib/srs";

const DAY = 86_400_000;

function nextLabel(c: SrsCard | undefined): string {
  if (!c) return "not tracked";
  const days = Math.round((c.due - Date.now()) / DAY);
  if (days <= 0) return "due now";
  if (days === 1) return "due tomorrow";
  if (days < 30) return `due in ${days}d`;
  return `due in ${Math.round(days / 30)}mo`;
}

const BTNS: { g: Grade; label: string; cls: string }[] = [
  { g: "again", label: "Again", cls: "border-red-400/40 text-red-300 hover:bg-red-400/10" },
  { g: "hard", label: "Hard", cls: "border-star-deep/50 text-star-soft hover:bg-star/10" },
  { g: "good", label: "Good", cls: "border-signal-dim/50 text-signal hover:bg-signal/10" },
  { g: "easy", label: "Easy", cls: "border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10" },
];

export function ReviewControls({ slug, onGraded }: { slug: string; onGraded?: () => void }) {
  const [card, setCard] = useState<SrsCard | undefined>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCard(getCard(slug));
  }, [slug]);

  if (!mounted) return null;

  return (
    <div className="rounded-2xl border border-ink-600/70 bg-ink-700/50 p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-widest text-parchment/50">
        <span>Spaced recall</span>
        <span className="text-star-soft">{nextLabel(card)}</span>
      </div>
      <p className="mb-3 font-body text-sm text-parchment/70">
        Recall it from memory first — then rate how it felt.
      </p>
      <div className="grid grid-cols-4 gap-2">
        {BTNS.map(({ g, label, cls }) => (
          <button
            key={g}
            onClick={() => {
              setCard(grade(slug, g));
              onGraded?.();
            }}
            className={`rounded-lg border bg-ink-800/60 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${cls}`}
          >
            {label}
          </button>
        ))}
      </div>
      {card && (
        <button
          onClick={() => {
            resetCard(slug);
            setCard(undefined);
          }}
          className="mt-3 font-mono text-[0.65rem] uppercase tracking-widest text-parchment/35 hover:text-parchment/70"
        >
          reset card · {card.reps} reps
        </button>
      )}
    </div>
  );
}
