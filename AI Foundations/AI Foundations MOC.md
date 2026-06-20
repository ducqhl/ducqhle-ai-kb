# AI Foundations MOC

Map of Content for **Stanford CS221 Lecture 1 — Course Overview and AI Foundations** (Percy Liang, Autumn 2025). The lecture has three parts: *what AI is*, *how AI got here*, and the *tensor* toolkit everything is built on.

> The big idea: AI isn't magic. It's four capabilities (perceive, reason, act, learn) running under tight resource limits — and underneath the modern version of it, everything is just tensors.

## FIO Mnemonic (Find → Identify → Organize)
- **Find** — what is AI? The [[Four Ingredients of Intelligence]] (perceive/reason/act/learn), bounded by [[Resource Constraints]], steered by [[Alignment and Developer Goals]] and [[Societal Impact of AI]].
- **Identify** — how did we get here? From the [[The Turing Test]] through three threads — [[Symbolic AI]], [[Neural AI]], [[Statistical AI]] — punctuated by [[AI Winters]], converging in [[Foundation Models]] and synthesized as [[Three Paradigms of AI]].
- **Organize** — the toolkit: [[Tensors and Rank]] → [[Tensors in Machine Learning]] → [[Matrix Multiplication and Broadcasting]] → [[Vectorization and Efficiency]] → [[einops]].

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

## Next Up
- CS221 continues into the foundations themselves: gradient descent / learning, search, MDPs, Bayesian networks — all expressed as tensors.
- Related vault topic: [[Neural Networks MOC]] (the feedforward net in detail).

## Source
- Stanford CS221 | Autumn 2025 | Lecture 1: Course Overview and AI Foundations — Stanford Online (Percy Liang)
- https://www.youtube.com/watch?v=yaLEGZuIIgE
- Duration 1:06:26
