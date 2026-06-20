"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { MindNode } from "@/lib/types";

const KIND_STYLE: Record<string, { color: string; background: string }> = {
  root: { color: "#1a1b26", background: "#bb9af7" },
  topic: { color: "#16161e", background: "#7dcfff" },
  concept: { color: "#c0caf5", background: "#1f2335" },
};

/** decorate the serializable tree with Mind Elixir per-node styles */
function decorate(node: MindNode): any {
  const style = KIND_STYLE[node.kind ?? "concept"];
  return {
    ...node,
    style,
    children: node.children?.map(decorate),
  };
}

export function MindMap({ data, height = 520 }: { data: MindNode; height?: number }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    let mind: any;
    let cancelled = false;

    (async () => {
      const { default: MindElixir } = await import("mind-elixir");
      if (cancelled || !hostRef.current) return;

      mind = new MindElixir({
        el: hostRef.current,
        direction: MindElixir.SIDE,
        draggable: true,
        contextMenu: false,
        toolBar: true,
        keypress: false,
        editable: false,
        theme: {
          name: "braino",
          palette: ["#bb9af7", "#7dcfff", "#9ece6a", "#e0af68", "#ff9e64", "#7aa2f7", "#f7768e"],
          cssVar: {
            "--main-color": "#c0caf5",
            "--main-bgcolor": "#16161e",
            "--color": "#c0caf5",
            "--bgcolor": "#16161e",
            "--root-color": "#1a1b26",
            "--root-bgcolor": "#bb9af7",
            "--selected": "#7dcfff",
            "--panel-color": "#c0caf5",
            "--panel-bgcolor": "#1f2335",
            "--panel-border-color": "#2a2f45",
          },
        },
      });

      mind.init({ nodeData: decorate(data) });

      const open = (node: any) => {
        const slug = node?.slug;
        if (slug) router.push(`/concept/${slug}/`);
      };
      mind.bus.addListener("selectNode", open);
    })();

    return () => {
      cancelled = true;
      if (hostRef.current) hostRef.current.innerHTML = "";
    };
  }, [data, router]);

  return (
    <div
      className="mind-host border border-ink-600"
      style={{ height }}
      ref={hostRef}
    />
  );
}
