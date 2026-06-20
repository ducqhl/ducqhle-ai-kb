"use client";
import { usePathname } from "next/navigation";

export function StatusBar() {
  const pathname = usePathname() || "/";
  const lang =
    pathname.startsWith("/review") ? "markdown" :
    pathname.startsWith("/graph") ? "graphviz" :
    pathname.startsWith("/map") ? "json" : "typescript";

  return (
    <footer className="sticky bottom-0 z-20 flex items-center gap-4 border-t border-ink-600 bg-star-deep/90 px-4 py-1 text-[0.7rem] text-ink-900 backdrop-blur">
      <span className="flex items-center gap-1.5 font-semibold">
        <span className="text-ink-900">⎇</span> main
      </span>
      <span className="hidden items-center gap-1.5 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-ink-900/70" /> 0 problems
      </span>
      <span className="ml-auto truncate opacity-90">{pathname}</span>
      <span className="hidden sm:inline">Spaces: 2</span>
      <span>UTF-8</span>
      <span className="font-semibold">{lang}</span>
      <span className="hidden md:inline">braino v0.1</span>
    </footer>
  );
}
