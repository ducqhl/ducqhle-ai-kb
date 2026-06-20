"use client";
// Lightweight spaced-repetition scheduler (SM-2-lite). Pure client, localStorage.

export type Grade = "again" | "hard" | "good" | "easy";

export interface SrsCard {
  slug: string;
  ease: number; // multiplier
  intervalDays: number;
  due: number; // epoch ms
  reps: number;
  lapses: number;
  updated: number;
}

const KEY = "braino-srs-v1";
const DAY = 86_400_000;

function load(): Record<string, SrsCard> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function save(all: Record<string, SrsCard>) {
  localStorage.setItem(KEY, JSON.stringify(all));
  window.dispatchEvent(new Event("braino-srs-change"));
}

export function getCard(slug: string): SrsCard | undefined {
  return load()[slug];
}

export function allCards(): SrsCard[] {
  return Object.values(load());
}

export function dueSlugs(now = Date.now()): string[] {
  return allCards()
    .filter((c) => c.due <= now)
    .sort((a, b) => a.due - b.due)
    .map((c) => c.slug);
}

/** "new" = never reviewed. due-soon counts those due within the window. */
export function stats(now = Date.now()) {
  const cards = allCards();
  return {
    tracked: cards.length,
    due: cards.filter((c) => c.due <= now).length,
    known: cards.filter((c) => c.intervalDays >= 21).length,
  };
}

export function grade(slug: string, g: Grade): SrsCard {
  const all = load();
  const prev: SrsCard =
    all[slug] ||
    { slug, ease: 2.3, intervalDays: 0, due: Date.now(), reps: 0, lapses: 0, updated: 0 };

  let { ease, intervalDays, reps, lapses } = prev;

  switch (g) {
    case "again":
      lapses += 1;
      ease = Math.max(1.3, ease - 0.2);
      intervalDays = 0; // ~10 min → treat as due now-ish (same session)
      break;
    case "hard":
      ease = Math.max(1.3, ease - 0.15);
      intervalDays = intervalDays ? Math.max(1, intervalDays * 1.2) : 1;
      break;
    case "good":
      intervalDays = intervalDays ? intervalDays * ease : 1;
      break;
    case "easy":
      ease = ease + 0.15;
      intervalDays = intervalDays ? intervalDays * ease * 1.3 : 3;
      break;
  }
  reps += 1;
  const next: SrsCard = {
    slug,
    ease,
    intervalDays,
    reps,
    lapses,
    due: Date.now() + (g === "again" ? DAY / 144 : intervalDays * DAY),
    updated: Date.now(),
  };
  all[slug] = next;
  save(all);
  return next;
}

export function resetCard(slug: string) {
  const all = load();
  delete all[slug];
  save(all);
}
