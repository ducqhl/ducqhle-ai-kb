# Decentralized Training

## ELI5
Today, training a big AI model needs all the computers in one giant data center. Percy worked on a different idea: what if everyone in the world plugged in their own computer and they all trained one model together over a peer-to-peer network — like how file-sharing spread a download across many strangers' machines? If that worked, no single company would hold all the power.

## Core Concept
Percy's example of a good research bet (see [[Research as Bets]]): **decentralized training** of large foundation models.

- **Problem with the status quo:** current LLM training requires **compute concentrated in one place** (one cluster / data center).
- **The vision:** a **peer-to-peer network** where anyone — everyone in the world — contributes their own compute, and together they train a large foundation model.
- **Why it matters:** it changes the **power dynamics** of AI and what it even *means* to train a model, with downstream implications for **AI policy**.
- **Concrete first step:** the initial technical problem is largely a **systems problem** (coordinating distributed/heterogeneous compute) — illustrating Percy's "vision + concrete first step" recipe for research.

## Connections
- [[Research as Bets]] — Percy's example of vision-driven research with a concrete first step
- [[Resource Constraints]] — compute concentration is the constraint being attacked
- [[Societal Impact of AI]] — shifts who holds AI power; policy implications
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Fireside Chat with Percy Liang [35:26], [36:09] — https://youtu.be/ypZJaTqrNdk

## Remember
> Decentralized training = train one big model over a peer-to-peer compute network, breaking the "all compute in one place" power monopoly.
