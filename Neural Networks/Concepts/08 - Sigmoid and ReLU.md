# Sigmoid and ReLU

## ELI5
After adding everything up, a neuron might have a giant or a very negative number, but we need a tidy value between 0 and 1. So we run it through a "squishing" function. The sigmoid gently squashes any number into the 0-to-1 range. ReLU is even simpler: if the number is negative, just call it 0; otherwise leave it alone.

## Core Concept
A [[Weighted Sum]] plus [[Bias]] can be any real number, but we want [[Activation|activations]] between 0 and 1. So we pump the result through a squishing function ("squishification").

**Sigmoid (logistic curve):** very negative inputs map close to 0, very positive inputs map close to 1, and it rises steadily around input 0. So a neuron's activation becomes a measure of how positive its weighted sum is. The sigmoid was motivated by the biological analogy of a neuron being inactive vs. active. Early networks used it.

**ReLU (Rectified Linear Unit):** in the closing chat with Lisha Li, the video notes that few modern networks still use sigmoid — it's "old school." ReLU, `max(0, a)`, is much easier to train. Below a threshold it outputs 0 (inactive); above it, it acts like the identity function. People tried it and it happened to work very well for very deep networks, where sigmoid was difficult to train.

## Formula / Code
```
sigmoid(x) = 1 / (1 + e^(-x))     # squishes ℝ → (0, 1)

ReLU(a) = max(0, a)               # 0 if negative, else identity

a = squish( W·a_prev + b )
```

## Connections
- [[Weighted Sum]] — the squishing function is applied to the weighted sum
- [[Bias]] — bias is added before squishing
- [[Activation]] — squishing produces the 0–1 activation
- [[Network as a Function]] — the network iterates matrix products + this squish

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [10:24], [10:32], [10:43], [17:15], [17:39], [18:11] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> A squishing function maps any number into 0–1: sigmoid is the classic, ReLU = max(0, a) trains better on deep nets.
