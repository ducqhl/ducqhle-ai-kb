"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import type { GraphData } from "@/lib/types";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false });

const PALETTE = ["#bb9af7", "#7dcfff", "#9ece6a", "#e0af68", "#ff9e64", "#7aa2f7", "#f7768e"];

export function GraphView({ data, height = 560 }: { data: GraphData; height?: number }) {
  const router = useRouter();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const topicColor = useMemo(() => {
    const topics = [...new Set(data.nodes.map((n) => n.topic))];
    const map = new Map<string, string>();
    topics.forEach((t, i) => map.set(t, PALETTE[i % PALETTE.length]));
    return map;
  }, [data]);

  if (data.nodes.length === 0) {
    return (
      <div className="grid h-64 place-items-center rounded-lg border border-dashed border-ink-500 text-parchment/40">
        <span className="text-sm">// no nodes — graph is empty</span>
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="overflow-hidden rounded-lg border border-ink-600 bg-ink-900/60"
    >
      <ForceGraph2D
        graphData={data as never}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        linkColor={() => "rgba(122,162,247,0.22)"}
        linkWidth={1}
        nodeRelSize={5}
        cooldownTicks={120}
        onNodeClick={(n: { id?: string | number }) =>
          router.push(`/concept/${String(n.id)}/`)
        }
        nodeCanvasObject={(node: any, ctx, scale) => {
          const color = topicColor.get(node.topic) || "#bb9af7";
          const r = 4;
          ctx.beginPath();
          ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
          ctx.fillStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
          if (scale > 1.3) {
            const label = node.label as string;
            ctx.font = `${11 / scale}px JetBrains Mono, monospace`;
            ctx.fillStyle = "rgba(192,202,245,0.8)";
            ctx.fillText(label, node.x + r + 2, node.y + 3);
          }
        }}
      />
    </div>
  );
}
