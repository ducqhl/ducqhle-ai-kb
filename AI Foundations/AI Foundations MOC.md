# AI Foundations MOC

Map of Content for **Stanford CS221 Lecture 1 — Course Overview and AI Foundations** (Percy Liang, Autumn 2025). The lecture has three parts: *what AI is*, *how AI got here*, and the *tensor* toolkit everything is built on.

> The big idea: AI isn't magic. It's four capabilities (perceive, reason, act, learn) running under tight resource limits — and underneath the modern version of it, everything is just tensors.

## FIO Mnemonic (Find → Identify → Organize)
- **Find** — what is AI? The [[Four Ingredients of Intelligence]] (perceive/reason/act/learn), bounded by [[Resource Constraints]], steered by [[Alignment and Developer Goals]] and [[Societal Impact of AI]].
- **Identify** — how did we get here? From the [[The Turing Test]] through three threads — [[Symbolic AI]], [[Neural AI]], [[Statistical AI]] — punctuated by [[AI Winters]], converging in [[Foundation Models]] and synthesized as [[Three Paradigms of AI]].
- **Organize** — the toolkit: [[Tensors and Rank]] → [[Tensors in Machine Learning]] → [[Matrix Multiplication and Broadcasting]] → [[Vectorization and Efficiency]] → [[einops]].
- **Outlook** (fireside chat) — what's real vs hype ([[Next-Token Prediction as Intelligence]], [[Reasoning Traces Are Overhyped]]), how the toolkit maps to LLMs ([[Test-Time Compute as Search]], [[Pre-training vs Post-training]]), and how to navigate the field ([[Research as Bets]], [[Career Strategy in a Fast-Moving Field]]).

## Concept Notes (reading order)

### Part 1 — What is AI?
1. [[Four Ingredients of Intelligence]] — perceive, reason, act, learn
2. [[Resource Constraints]] — limited computation + information
3. [[Alignment and Developer Goals]] — does the agent want what the developer wants?
4. [[Societal Impact of AI]] — what do *we* want AI to do for society?

### Part 2 — A History of AI
5. [[The Turing Test]] — turning "can it think?" into a measurable game
6. [[AI Winters]] — the overpromise → funding-freeze cycle (×2)
7. [[Symbolic AI]] — rules & logic; gave AI its *vision*
8. [[Neural AI]] — brain-inspired nets; gave AI its *architectures*
9. [[Statistical AI]] — borrowed math; gave AI its *rigor*
10. [[Foundation Models]] — predict-next-word at scale → generative AI
11. [[Three Paradigms of AI]] — the melting pot of all three threads

### Part 3 — Tensors
12. [[Tensors and Rank]] — the atoms of modern ML
13. [[Tensors in Machine Learning]] — what each axis means
14. [[Matrix Multiplication and Broadcasting]] — the bread-and-butter op
15. [[Vectorization and Efficiency]] — few big tensor ops, not loops
16. [[einops]] — name your axes, don't count them

### Part 4 — Fireside Chat: AI Outlook & Advice (Percy Liang, final session)
*A Q&A, not a technical lecture — Percy's perspective on what's real, what connects, and how to navigate the field.*
17. [[Next-Token Prediction as Intelligence]] — the *underhyped* engine; perplexity over long context
18. [[Pre-training vs Post-training]] — hidden foundation vs visible skills
19. [[Test-Time Compute as Search]] — CS221 search/MDP/RL living inside LLMs
20. [[Reasoning Traces Are Overhyped]] — rambly, opaque, sometimes wrong-but-right
21. [[Decentralized Training]] — peer-to-peer compute vs the one-cluster monopoly
22. [[Research as Bets]] — vision + concrete first step; chase information gain
23. [[AI Transparency]] — why labs go dark; the transparency index
24. [[Science as the New Turing Test]] — count real discoveries, an ungameable bar
25. [[Career Strategy in a Fast-Moving Field]] — growth over prestige; learn-to-learn

## Key Facts
| Thing | Detail |
|---|---|
| Ingredients of intelligence | perceive · reason · act · learn |
| Resource constraints | computation · information |
| Three paradigms | symbolic (vision) · neural (architecture) · statistical (rigor) |
| Turing Test | 1950, imitation game → objective benchmarks |
| AI winters | ~1966 (search/MT), ~late 1980s (expert systems) |
| Transformer | 2017 — groundwork for foundation models |
| Tensor rank | 0 scalar · 1 vector · 2 matrix · 3+ tensor |
| 2025 syllabus change | "tensor-native" (NumPy/PyTorch); dropped CSPs, added societal-impact deep dive |

## Recall Stack Checklist
- [ ] I can list the [[Four Ingredients of Intelligence]] and say why **act** is essential
- [ ] I can name the two kinds of [[Resource Constraints]]
- [ ] I can distinguish [[Alignment and Developer Goals]] from [[Societal Impact of AI]]
- [ ] I can explain what [[The Turing Test]] replaced and why it mattered
- [ ] I can summarize each [[AI Winters]] and its cause
- [ ] I can map [[Symbolic AI]]/[[Neural AI]]/[[Statistical AI]] to vision/architecture/rigor ([[Three Paradigms of AI]])
- [ ] I can explain the core idea of [[Foundation Models]] (predict next word at scale)
- [ ] I can give the rank of a scalar/vector/matrix and read a shape ([[Tensors and Rank]])
- [ ] I can state the ML meaning of `(N,D)`, `(N,L,D)`, `(N,H,W,C)` ([[Tensors in Machine Learning]])
- [ ] I can explain matmul + broadcasting ([[Matrix Multiplication and Broadcasting]])
- [ ] I can say why we [[Vectorization and Efficiency|vectorize]] instead of looping
- [ ] I can write an [[einops]] `einsum` and explain which axes get summed
- [ ] I can argue why [[Next-Token Prediction as Intelligence|next-token loss over long context]] beats leaderboards as a capability measure
- [ ] I can distinguish [[Pre-training vs Post-training]] and say which gives visible skills
- [ ] I can map search → test-time compute and MDP/RL → policy learning ([[Test-Time Compute as Search]])
- [ ] I can state Percy's skepticism about [[Reasoning Traces Are Overhyped|reasoning traces]]
- [ ] I can explain [[Decentralized Training]] and why it shifts AI power
- [ ] I can give Percy's recipe for [[Research as Bets|good research]] (vision + first step, information gain)
- [ ] I can list the 3 reasons labs avoid [[AI Transparency|transparency]]
- [ ] I can state [[Science as the New Turing Test|the ungameable replacement]] for the Turing Test
- [ ] I can recall the [[Career Strategy in a Fast-Moving Field|career rule of thumb]] (optimize for growth / learn-to-learn)

## Next Up
- CS221 continues into the foundations themselves: gradient descent / learning, search, MDPs, Bayesian networks — all expressed as tensors.
- Related vault topic: [[Neural Networks MOC]] (the feedforward net in detail).

## Source
- Stanford CS221 | Autumn 2025 | Lecture 1: Course Overview and AI Foundations — Stanford Online (Percy Liang)
- https://www.youtube.com/watch?v=yaLEGZuIIgE
- Duration 1:06:26
- **Part 4 (notes 17–25):** Stanford CS221 | Autumn 2025 | Fireside Chat with Percy Liang (final session, moderated by Ken) — https://youtu.be/ypZJaTqrNdk
- Lecture code repo: https://github.com/stanford-cs221/autumn2025-lectures (`search.py`, `mdp.py`, `reinforcement_learning.py`, `policy_gradient.py`, …)
