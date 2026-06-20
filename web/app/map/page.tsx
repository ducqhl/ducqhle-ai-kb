import { getMindMap, getTopics, getConcepts } from "@/lib/notes";
import { MindMap } from "@/components/MindMap";
import { Reveal } from "@/components/Reveal";

export default function MapPage() {
  const data = getMindMap();
  const topics = getTopics();
  const concepts = getConcepts();

  return (
    <div className="space-y-6">
      <Reveal>
        <div>
          <p className="text-xs text-parchment/40">
            <span className="text-token-num">cat</span> mindmap.json{" "}
            <span className="text-parchment/30">| render</span>
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-parchment md:text-4xl">
            <span className="text-star">const</span> mindMap ={" "}
            <span className="text-signal">tree</span>()
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-parchment/55">
            The whole vault as one expandable tree —{" "}
            <span className="text-star">braino</span> →{" "}
            <span className="text-signal">topics</span> →{" "}
            <span className="text-parchment/70">concepts</span>. Drag to pan, scroll to
            zoom, click a leaf to open the note.
          </p>
          <p className="mt-1 text-xs text-parchment/35">
            {topics.length} topics · {concepts.length} concepts
          </p>
        </div>
      </Reveal>

      {concepts.length > 0 ? (
        <Reveal delay={0.1}>
          <MindMap data={data} height={620} />
        </Reveal>
      ) : (
        <Reveal delay={0.1}>
          <div className="grid h-64 place-items-center rounded-lg border border-dashed border-ink-500 text-parchment/40">
            <span className="text-sm">// empty tree — no concepts indexed yet</span>
          </div>
        </Reveal>
      )}
    </div>
  );
}
