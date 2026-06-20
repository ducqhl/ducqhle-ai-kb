"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "atlas.tsx", match: (p: string) => p === "/" || p.startsWith("/topic") || p.startsWith("/concept") },
  { href: "/map/", label: "mindmap.json", match: (p: string) => p.startsWith("/map") },
  { href: "/graph/", label: "graph.dot", match: (p: string) => p.startsWith("/graph") },
  { href: "/review/", label: "review.md", match: (p: string) => p.startsWith("/review") },
];

export function NavBar() {
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-20 border-b border-ink-600 bg-ink-900/85 backdrop-blur-md">
      {/* window title bar */}
      <div className="flex items-center gap-3 border-b border-ink-600/60 px-4 py-2 md:px-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-token-err/80" />
          <span className="h-3 w-3 rounded-full bg-token-warn/80" />
          <span className="h-3 w-3 rounded-full bg-token-str/80" />
        </div>
        <Link href="/" className="group ml-2 flex items-baseline gap-2 text-sm">
          <span className="text-parchment/40">~/</span>
          <span className="font-semibold text-star">braino</span>
          <span className="text-parchment/30 group-hover:text-signal">— knowledge as code</span>
        </Link>
        <span className="ml-auto hidden items-center gap-1.5 text-xs text-parchment/35 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-token-str" />
          UTF-8
        </span>
      </div>

      {/* editor tab strip */}
      <nav className="flex items-stretch overflow-x-auto px-2">
        {TABS.map((t) => {
          const active = t.match(pathname);
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs transition-colors ${
                active
                  ? "border-star bg-ink-700/60 text-parchment"
                  : "border-transparent text-parchment/45 hover:bg-ink-700/30 hover:text-parchment/80"
              }`}
            >
              <span className={active ? "text-star" : "text-parchment/30"}>◆</span>
              {t.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
