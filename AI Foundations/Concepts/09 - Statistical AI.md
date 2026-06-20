# Statistical AI

## ELI5
A lot of the math behind AI wasn't invented by AI people at all. Curve-fitting, making good bets under uncertainty, finding shortest paths — mathematicians, statisticians and engineers built these tools long before anyone said "AI." The field just borrowed them. They're the part that gives AI its rigor.

## Core Concept
The third historical thread — really **mathematical ideas**, often from outside AI, that the field leaned on. Many core CS221 ideas predate or sit apart from AI proper:

- **Linear regression** — Gauss, **1801** (least squares solved by hand, before computers).
- **Linear classification** — 1936.
- **Stochastic gradient descent** — 1950s (still widely used today).
- **Uniform cost search** — algorithms community, 1950s.
- **Markov decision processes** — from control theory.

Then a distinct era of **statistical machine learning (1980s–2000s)**: methods rooted in mathematical principles — Bayesian networks, support vector machines, variational inference, conditional random fields, topic models. These were in vogue precisely *because* they had nice mathematical properties, while neural nets were a small fraction of the community (no nice math, hard to train).

In hindsight: the **optimization/statistical ideas survived**, but the model architectures shifted to deep learning. Statistical AI's enduring contribution is **rigor** — the modern vocabulary of optimization and generalization (train→test) comes from statistical thinking.

## Connections
- [[Four Ingredients of Intelligence]] — supplies the reasoning/learning algorithms (search, MDPs, Bayesian nets)
- [[Neural AI]] — the rival whose architectures eventually won
- [[Three Paradigms of AI]] — statistical = the "rigor" thread
- [[Vectorization and Efficiency]] — SGD and friends run on tensors today
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [29:52], [31:01], [31:40] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Statistical AI = borrowed math (Gauss→SGD→MDPs→Bayesian nets) that gave AI its rigor and train/test vocabulary.
