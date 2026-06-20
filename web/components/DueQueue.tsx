"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { stats } from "@/lib/srs";

export function DueQueue() {
  const [s, setS] = useState({ tracked: 0, due: 0, known: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const refresh = () => setS(stats());
    refresh();
    window.addEventListener("braino-srs-change", refresh);
    return () => window.removeEventListener("braino-srs-change", refresh);
  }, []);

  if (!mounted) return null;

  return (
    <Link
      href="/review/"
      className="group flex items-center justify-between rounded-lg border border-star-deep/40 bg-gradient-to-br from-star/10 to-transparent p-5 shadow-card transition-colors hover:border-star/60"
    >
      <div>
        <div className="text-[0.7rem] text-star-soft">
          <span className="text-parchment/30">$ </span>recall --due
        </div>
        <div className="mt-1 font-display text-xl font-semibold text-parchment">
          {s.due > 0
            ? `${s.due} concept${s.due > 1 ? "s" : ""} due for review`
            : "queue empty — nothing due"}
        </div>
        <div className="mt-1 text-xs text-parchment/45">
          <span className="text-signal">{s.tracked}</span> tracked ·{" "}
          <span className="text-token-str">{s.known}</span> committed to memory
        </div>
      </div>
      <span className="font-display text-2xl text-star transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
