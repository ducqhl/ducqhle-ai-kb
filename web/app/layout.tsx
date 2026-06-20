import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/tokyo-night-dark.css";
import { NavBar } from "@/components/NavBar";
import { StatusBar } from "@/components/StatusBar";

// The coder's favourites: JetBrains Mono everywhere, Fira Code (ligatures) for display.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mono",
});
const display = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "braino — ~/knowledge as code",
  description: "An Obsidian vault rendered like an editor. Read, link, recall.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col bg-ink-800 font-mono text-parchment/90 antialiased">
        <div className="codegrid" aria-hidden />
        <div className="scanline" aria-hidden />
        <NavBar />
        <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-8 md:px-8">
          {children}
        </main>
        <StatusBar />
      </body>
    </html>
  );
}
