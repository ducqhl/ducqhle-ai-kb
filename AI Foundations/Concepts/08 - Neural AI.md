# Neural AI

## ELI5
Instead of writing rules, what if we loosely copy the brain — lots of simple "neurons" wired together — and let the system *learn* from examples? This idea bounced between hype and "it's dead" for decades, got declared useless more than once, then quietly became the engine behind almost all modern AI.

## Core Concept
The tradition of **artificial neural networks** that learn from data. A long, bumpy timeline:

- **1940s** — McCulloch & Pitts: a mathematical model of a neuron (theory only, no learning).
- **1949** — Hebb's rule, "cells that fire together wire together" — first learning idea (ad hoc).
- **1950s–60s** — perceptron algorithm (more principled), ADALINE (linear regression).
- **1969** — Minsky & Papert's *Perceptrons* showed linear models are limited; widely cited as having "killed off" neural-net research (Minsky himself had moved to [[Symbolic AI]]).
- **1980s revival** — ConvNets developed; **backpropagation popularized by Rumelhart, Hinton & Williams (1986)** (invented/reinvented many times). Modest real wins, e.g. recognizing handwritten digits for USPS.
- **2000s** — still hard to train, unpopular. **2006 Hinton** showed deep networks *could* be trained.
- **Snowball** — 2009 speech, then vision (**AlexNet**), then language (**seq-to-seq** machine translation), new optimizers, the **attention** mechanism, **AlphaGo** (deep learning + RL), and the **Transformer (2017)**.

Neural AI's enduring contribution: the **model architectures** and *how* you build models.

## Connections
- [[Neural Networks MOC]] — the plain feedforward net, in detail
- [[Symbolic AI]] — the rival paradigm that "killed" then was overtaken by neural nets
- [[Three Paradigms of AI]] — neural = the "architecture" thread
- [[Foundation Models]] — what the Transformer scaled into
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [26:30], [28:00], [28:51], [29:24] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Neural AI = learn from data via brain-inspired nets; declared dead twice, now powers everything via the Transformer.
