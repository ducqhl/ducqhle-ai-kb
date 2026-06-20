# Pre-training vs Post-training

## ELI5
Building a modern AI happens in two stages. First you let it read a huge chunk of the internet to soak up general knowledge of language — that's pre-training, and it's mostly invisible. Then you specifically teach it the visible tricks: solve math, write code, analyze a financial doc — that's post-training. The cool stuff you *see* comes from post-training, but it only works because the quiet pre-training foundation is solid.

## Core Concept
Percy frames LLM training as two phases:

- **Pre-training** — train on a large body of raw text to **predict the next token**. Produces general-purpose representations. This is the "hidden" part that makes the model tick. (See [[Next-Token Prediction as Intelligence]].)
- **Post-training** — adapt the pre-trained model to **visible capabilities**: solving math problems, coding, analyzing financial documents, following instructions. Often uses reinforcement learning (learning a policy on top of the base model — see [[Test-Time Compute as Search]]).

His point: the **visible** behaviors people praise come from post-training, but it's **under-appreciated** how much of what makes AI work is the pre-training ability to predict the next token. Alignment is also applied here via post-training.

## Connections
- [[Next-Token Prediction as Intelligence]] — the pre-training objective
- [[Foundation Models]] — the pre-trained base everything builds on
- [[Test-Time Compute as Search]] — RL post-training learns a policy
- [[Alignment and Developer Goals]] — alignment is a post-training step
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Fireside Chat with Percy Liang [11:38], [12:00] — https://youtu.be/ypZJaTqrNdk

## Remember
> Pre-training (predict next token) builds the hidden foundation; post-training adds the visible skills — and the foundation is the underrated half.
