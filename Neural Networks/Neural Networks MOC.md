# Neural Networks MOC

Map of Content for the **plain vanilla feedforward neural network** — the simplest form, built to recognize handwritten digits (28x28 → digit 0–9). Based on 3Blue1Brown's "But what is a neural network?" This chapter covers *structure* only; *learning* is the next chapter.

> The big idea: a neural network is not magic, it's a piece of math. Numbers in, numbers out, with thousands of tunable knobs.

## FIO Mnemonic (Find → Identify → Organize)
- **Find** — the raw pieces: [[Neuron]] (a box holding a number) and its [[Activation]] (how lit-up it is).
- **Identify** — how pieces compute: [[Weights]] choose the pattern, the [[Weighted Sum]] combines inputs, [[Bias]] sets the threshold, and [[Sigmoid and ReLU]] squish it to 0–1.
- **Organize** — how it all fits: [[Layers]] stack the neurons, [[Why a Layered Structure]] explains the abstraction (pixels→edges→patterns→digits), and the whole thing is just a [[Network as a Function]].

## Concept Notes (reading order)
1. [[Neuron]] — a thing that holds a number between 0 and 1
2. [[Activation]] — the number inside a neuron; how lit up it is
3. [[Layers]] — input (784), hidden (16+16), output (10)
4. [[Why a Layered Structure]] — the hope: build digits from edges and patterns
5. [[Weights]] — per-connection numbers that pick the pattern
6. [[Weighted Sum]] — multiply activations by weights and add (W·a)
7. [[Bias]] — the threshold a neuron must clear before firing
8. [[Sigmoid and ReLU]] — squish any number into the 0–1 range
9. [[Network as a Function]] — 784 in → 10 out, ~13,000 knobs

## Key Numbers
| Thing | Value |
|---|---|
| Input neurons | 784 (28 × 28 pixels) |
| Hidden layers | 2 × 16 neurons (arbitrary) |
| Output neurons | 10 (digits 0–9) |
| Total parameters | ≈ 13,000 weights + biases |

## Recall Stack Checklist
- [ ] I can explain a [[Neuron]] and its [[Activation]] in one sentence
- [ ] I can list the four layer roles in [[Layers]]
- [ ] I can describe the pixels→edges→patterns→digits hope in [[Why a Layered Structure]]
- [ ] I can state what [[Weights]] vs [[Bias]] each control
- [ ] I can write the [[Weighted Sum]] in both expanded and matrix form
- [ ] I can explain why we need [[Sigmoid and ReLU]] squishing, and why ReLU beat sigmoid
- [ ] I can say in one sentence why a [[Network as a Function]] is "just" a function

## Next Up
- Chapter 2: how the network *learns* the weights and biases from data (gradient descent / backpropagation).

## Broader Context
- [[AI Foundations MOC]] — where neural nets sit in AI history (see [[Neural AI]]) and the tensor toolkit they run on.

## Source: But what is a neural network? | Deep learning chapter 1
- 3Blue1Brown — https://www.youtube.com/watch?v=aircAruvnKk
- Duration 18:40
