# Test-Time Compute as Search

## ELI5
The "old-fashioned" CS221 topics — search, states and actions, Markov decision processes — feel disconnected from ChatGPT. Percy says they're actually the same thing wearing new clothes. When an LLM "thinks harder" on a hard problem, it's exploring different possible solution paths — that's *search*. When you train it with reinforcement learning to get good results, it's learning a *policy* — that's an MDP. The intro-AI concepts didn't die; they moved inside the language model.

## Core Concept
Percy's bridge between classic CS221 material and modern LLMs:

- **Search → test-time compute.** Search is about **states, actions, and exploring possibilities**. That's exactly what *test-time compute* does: given a trained model, there's an **inference-time problem** of searching over different candidate solutions. Hard problems (IMO-level math, scientific discovery, data-science tasks) require **trial and error** — i.e. search.
- **MDPs → RL post-training.** A Markov Decision Process is the framework where, after pre-training, you run **reinforcement learning** to **learn a policy** that produces good results. Pre-train then RL = learn a policy in an MDP.

Takeaway: "training a model and being done" is false — there's a separate inference-time search problem. The classic abstractions (state/action/policy) are the right mental model for it.

## Formula / Code
CS221 lecture code (local repo `autumn2025-lectures/`) implements these primitives directly:
- `search.py`, `ucs_astar.py` — state/action search (UCS, A*)
- `mdp.py` — Markov Decision Processes
- `reinforcement_learning.py`, `policy_gradient.py`, `td_learning.py` — learning a policy

Same abstractions reappear as LLM test-time compute + RL post-training.

## Connections
- [[Pre-training vs Post-training]] — RL is the post-training step
- [[Four Ingredients of Intelligence]] — **act** = search over actions
- [[Three Paradigms of AI]] — search/logic roots meeting modern scale
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Fireside Chat with Percy Liang [30:36], [31:13] — https://youtu.be/ypZJaTqrNdk

## Remember
> Test-time compute = search (states/actions); RL post-training = learning a policy in an MDP — CS221 abstractions live inside LLMs.
