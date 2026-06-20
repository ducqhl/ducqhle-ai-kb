import { getGraph } from "@/lib/notes";
import { GraphView } from "@/components/GraphView";
import { Reveal } from "@/components/Reveal";

export default function GraphPage() {
  const data = getGraph();

  return (
    <div className="space-y-6">
      <Reveal>
        <div>
          <p className="text-xs text-parchment/40">
            <span className="text-token-num">graph</span> --render force-directed
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-parchment md:text-4xl">
            <span className="text-star">digraph</span> dependencies &#123; &#125;
          </h1>
          <p className="mt-2 max-w-xl text-sm text-parchment/55">
            <span className="text-parchment/30">{"// "}</span>
            each node is a concept; edges are{" "}
            <code className="text-signal">[[wikilinks]]</code>. Drag to explore, scroll to
            zoom, click a node to open it.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <GraphView data={data} height={620} />
      </Reveal>
    </div>
  );
}
