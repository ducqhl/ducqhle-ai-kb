import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── "braino IDE" palette (Tokyo-Night-flavoured) ──
        // names kept from the old theme so components inherit for free:
        //   ink = editor chrome/bg · parchment = foreground text
        //   star = keyword accent (magenta) · signal = symbol accent (cyan)
        ink: {
          900: "#16161e", // deepest (gutter / pre)
          800: "#1a1b26", // app background
          700: "#1f2335", // panels / cards
          600: "#2a2f45", // borders
          500: "#3b4261", // bright borders / hr
        },
        parchment: {
          DEFAULT: "#c0caf5", // primary text
          dim: "#a9b1d6",
          line: "#565f89", // comments / muted
        },
        star: {
          DEFAULT: "#bb9af7", // keyword magenta (primary accent)
          soft: "#c7a9ff",
          deep: "#9d7cd8",
        },
        signal: {
          DEFAULT: "#7dcfff", // cyan symbol/link
          dim: "#7aa2f7", // blue
        },
        // syntax tokens used for code-feel flourishes
        token: {
          str: "#9ece6a", // strings / green
          num: "#ff9e64", // numbers / orange
          fn: "#7aa2f7", // functions / blue
          err: "#f7768e", // red
          warn: "#e0af68", // yellow
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-monospace", "monospace"],
        body: ["var(--font-mono)", "ui-monospace", "monospace"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.03) inset, 0 16px 40px -28px rgba(0,0,0,0.9)",
        glow: "0 0 0 1px rgba(187,154,247,0.35), 0 0 26px -6px rgba(187,154,247,0.45)",
      },
      keyframes: {
        twinkle: {
          "0%,100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        twinkle: "twinkle 3.5s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        scan: "scan 9s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
