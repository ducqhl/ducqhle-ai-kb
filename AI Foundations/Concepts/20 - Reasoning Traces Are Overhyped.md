# Reasoning Traces Are Overhyped

## ELI5
"Thinking" models write out a long inner monologue before answering. People treat that monologue as proof the AI is reasoning. Percy is skeptical: those traces are often rambly and inefficient, and nobody fully understands what they're doing. Sometimes the trace is flat-out wrong yet the model still lands the right answer. So the visible "thinking" might be more about generating more tokens than about genuine step-by-step reasoning.

## Core Concept
Percy names reasoning / "thinking" models as a likely **overhyped** capability (contrast with the underhyped [[Next-Token Prediction as Intelligence]]):

- Thinking traces look like a **long sequence of rambly, inefficient** text. You eventually reach the right answer and good scores — but it "feels like a scam to get you to generate more tokens."
- **We don't understand the mechanism.** Is the extra reasoning just **more compute budget**, or is it actually **guiding** the answer? Unclear, even today.
- **Traces can be wrong yet still yield the correct answer** — evidence the visible trace isn't a faithful explanation of how the model got there.

This is a flag, not a dismissal: reasoning models do score well; Percy questions *why* and warns against reading the trace as literal reasoning.

## Connections
- [[Next-Token Prediction as Intelligence]] — the underhyped counterpart
- [[Foundation Models]] — reasoning models "think" in tokens before answering
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Fireside Chat with Percy Liang [12:52], [13:23] — https://youtu.be/ypZJaTqrNdk

## Remember
> Thinking traces are rambly and not understood — wrong traces can still give right answers, so don't read them as faithful reasoning.
