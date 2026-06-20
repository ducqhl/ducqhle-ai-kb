# Alignment and Developer Goals

## ELI5
Every AI is secretly chasing some goal, even if nobody wrote the goal down. The question is whether the goal it actually chases is the goal you *meant* to give it. When ChatGPT's makers want it to be helpful and refuse harmful requests, but it does something weird instead, that gap between "what I wanted" and "what it does" is the alignment problem.

## Core Concept
Beyond *what an agent does* (perceive/reason/act/learn), there's the deeper question of *what it's trying to do*. An agent — explicitly or implicitly — encodes **values / goals / objectives / utility functions**. Even when objectives aren't stated, they're implicit in behavior.

**Alignment** = making the agent's values match what the developer actually wants. Canonical example: OpenAI wants ChatGPT to be informative, avoid hallucinations, and refuse harmful queries — values the developer tries to instill. Whether the alignment procedure succeeds is a separate question; **misalignment** is when, despite good intentions, the AI does something unintended.

This is the *developer's* perspective. The broader, society-level view is a separate concept ([[Societal Impact of AI]]).

## Connections
- [[Societal Impact of AI]] — the "what do *we* want?" question one level up from the developer
- [[Foundation Models]] — alignment is applied to these via post-training
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [08:06], [08:55] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Alignment = does the agent's actual objective match what the developer intended?
