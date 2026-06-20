# Bias

## ELI5
The bias is a "how hard is it to convince me?" number. Maybe a neuron shouldn't get excited just because the weighted total is a little above zero — maybe you only want it to fire once the total is really big, say above 10. So you subtract 10 first. The bias sets the threshold a neuron has to clear before it starts paying attention.

## Core Concept
After computing the [[Weighted Sum]], you don't always want the [[Neuron]] to activate when the sum is bigger than 0. Maybe you only want it active when the sum exceeds, say, 10 — you want some **bias** for it to stay inactive. To do this you add another number (like −10) to the weighted sum *before* passing it through [[Sigmoid and ReLU|the sigmoid]].

That added number is the **bias**. Where [[Weights]] tell you *what pixel pattern* a neuron picks up on, the bias tells you *how high* the weighted sum has to be before the neuron becomes meaningfully active.

Every neuron has its own bias. The first hidden layer of 16 neurons has 16 biases (on top of its 784 × 16 weights). Across all layers, biases plus weights total roughly 13,000 tunable parameters.

## Formula / Code
```
z = (weighted sum) + bias        # e.g. add -10 to require sum > 10
a = σ(z)                         # then squish to 0–1

bias shifts the threshold; weight chooses the pattern
hidden layer 1 → 16 biases (one per neuron)
```

## Connections
- [[Weighted Sum]] — bias is added to the weighted sum
- [[Weights]] — weights pick the pattern, bias picks the activation threshold
- [[Sigmoid and ReLU]] — bias is added before the squishing function
- [[Network as a Function]] — biases are tunable parameters of the function

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [10:57], [11:06], [11:20], [11:23], [12:06] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> Bias is the threshold knob: it sets how high the weighted sum must be before the neuron fires.
