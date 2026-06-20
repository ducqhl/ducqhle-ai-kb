# Weights

## ELI5
A weight is a number that says "how much should I care about this particular input?" If a neuron is trying to spot an edge in one spot of the image, it gives big positive weights to the pixels in that spot and ignores (zero weight) or even down-votes (negative weight) the pixels everywhere else. Weights are the dials that tell a neuron which pattern to look for.

## Core Concept
Every connection between a neuron and the neurons of the previous [[Layers|layer]] gets a **weight**, which is just a number. To detect a specific pattern — say an edge in one region — you set the weights of pixels in that region positive and the rest to (nearly) zero. To sharpen edge detection, you give *negative* weights to the surrounding pixels, so the response is largest when the middle pixels are bright but the surroundings are dark.

The video pictures the weights as their own little grid: green pixels for positive weights, red for negative, brightness showing magnitude. In short: **the weights tell you what pixel pattern this neuron is picking up on.**

Every neuron in the first hidden layer connects to all 784 input neurons, each connection with its own weight. With 16 neurons that's 784 × 16 weights just for that one layer transition. Counting all layers, the network has roughly 13,000 total weights and biases — the "knobs and dials" that learning tunes.

## Formula / Code
```
each connection → one weight (a plain number)
green = positive weight, red = negative weight, brightness = magnitude
layer-1 → layer-2 weights = 784 × 16 = 12,544
whole network ≈ 13,000 weights + biases total
```

## Connections
- [[Weighted Sum]] — weights are combined with activations into a weighted sum
- [[Bias]] — bias is the other tunable number added alongside weights
- [[Neuron]] — weights live on the connections between neurons
- [[Why a Layered Structure]] — weights are how a neuron detects edges/patterns
- [[Network as a Function]] — the ~13,000 weights are the function's parameters

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [09:08], [09:27], [09:42], [10:02], [11:38], [12:18] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> Weights are the per-connection numbers that tell a neuron which pixel pattern to look for.
