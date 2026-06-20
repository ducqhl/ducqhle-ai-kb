# Network as a Function

## ELI5
Strip away the brain metaphor and a neural network is just one big math function: you put 784 numbers in (the pixels) and 10 numbers come out (the digit scores). It's a wildly complicated function with 13,000 knobs, but it's still just "numbers in, numbers out." Learning is nothing more than finding good settings for those knobs.

## Core Concept
Since the numbers a [[Neuron]] holds depend on the input, each neuron is really a *function* taking the previous layer's outputs and returning a number in 0–1. Chaining them, **the entire network is just one function**: it takes 784 input numbers and spits out 10 output numbers.

It's an absurdly complicated function involving ~13,000 parameters ([[Weights]] and [[Bias|biases]]) that pick up on patterns, computed by iterating many matrix-vector products (the [[Weighted Sum]]) and the [[Sigmoid and ReLU|sigmoid squishification]]. But it's just a function nonetheless — and reassuringly so, because anything simpler would have little hope of recognizing digits.

**Learning** (the topic of the next video) means getting the computer to find a valid setting for all ~13,000 weights and biases so the function actually solves the problem, just by looking at data.

## Formula / Code
```
network : ℝ⁷⁸⁴ → ℝ¹⁰          # 784 pixels in, 10 digit scores out

output = σ( W₃ · σ( W₂ · σ( W₁ · x + b₁ ) + b₂ ) + b₃ )

~13,000 parameters (weights + biases) = the "knobs" that learning tunes
```

## Connections
- [[Neuron]] — each neuron is itself a small function
- [[Layers]] — chaining layers builds the full function
- [[Weighted Sum]] — the network iterates matrix-vector products
- [[Sigmoid and ReLU]] — the squishification applied at each layer
- [[Weights]] — the function's tunable parameters
- [[Bias]] — also tunable parameters

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [15:17], [15:39], [15:47], [16:03], [12:31] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> A neural network is just one big function (784 in → 10 out) with ~13,000 knobs; learning = tuning those knobs.
