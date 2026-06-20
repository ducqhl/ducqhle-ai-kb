# Resource Constraints

## ELI5
A smart agent never has unlimited time or unlimited knowledge. You can't think for an hour about whether to brake — you have a split second. And you can't see around corners, so you never know everything. Intelligence isn't about being perfect; it's about doing something sensible when you're short on both clock and facts.

## Core Concept
The four ingredients of intelligence ([[Four Ingredients of Intelligence]]) all have to happen under **resource constraints** of two kinds:

- **Computation** — the algorithm must finish in time (critical for real-time systems like driving), plus limits on memory and communication.
- **Information** — the agent always has limited experience, limited inputs, limited visibility ("can't see around corners").

These constraints stop an agent from acting as optimally as you'd like. The whole game of AI is making good decisions *despite* them — which is exactly why clever, sophisticated algorithms are needed rather than brute force.

This lens also explains AI history: the 1950s search-based systems failed because the search space grew exponentially and **outpaced the available compute** (a computation constraint), and machine translation failed for lack of world knowledge (an information constraint). See [[AI Winters]].

## Connections
- [[Four Ingredients of Intelligence]] — the constraints apply to all four
- [[AI Winters]] — historical failures were compute + information limits
- [[Vectorization and Efficiency]] — modern way we fight the computation constraint
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [06:32], [07:03] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Two scarce resources bound every agent: **computation** (time/memory) and **information** (limited experience).
