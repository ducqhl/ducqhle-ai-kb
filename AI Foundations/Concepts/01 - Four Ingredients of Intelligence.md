# Four Ingredients of Intelligence

## ELI5
Forget about whether a machine is "human." Ask a simpler question: what must any smart thing be able to do? It has to take in what's around it, think about it, do something, and get better next time. A self-driving car sees the road, figures out what the pedestrian will do, decides to brake, and learns from the trip. Those four moves are the whole recipe for intelligence.

## Core Concept
Percy Liang defines intelligence from general principles (not by comparison to humans) as an **agent** — computer or human — that does four things:

1. **Perceive** — process raw inputs into a useful representation (vision, speech, language understanding).
2. **Reason** — use percepts + knowledge to draw inferences (search, decisions under uncertainty, playing against adversaries).
3. **Act** — output actions that affect the world (generate text/speech/images, move a robot). Without acting, you cannot prove intelligence exists.
4. **Learn** — update beliefs from experience so you stop repeating mistakes.

Each ingredient unpacks into an entire subfield. In CS221 the methods map onto these buckets: perception → representation; reasoning → uniform cost search, value iteration (MDPs), minimax, Bayesian networks; learning → gradient descent, Q-learning, expectation maximization.

## Formula / Code
```
intelligence = perceive + reason + act + learn
            (all under resource constraints — see [[Resource Constraints]])
```

## Connections
- [[Resource Constraints]] — the four ingredients must all run under limited compute + information
- [[Statistical AI]] — supplies many of the reasoning/learning algorithms named above
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1: Course Overview and AI Foundations — Percy Liang [02:32], [03:26], [05:50] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Intelligence = perceive → reason → act → learn; without **act** you can't even tell it's there.
