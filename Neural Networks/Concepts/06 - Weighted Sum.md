# Weighted Sum

## ELI5
To decide how excited a neuron should be, you go through every input, multiply each one by how much you care about it (its weight), and add it all up. Inputs you care about with big positive weights push the total up; inputs with negative weights pull it down. The result is one number summarizing "how much does this neuron's pattern show up in the input?"

## Core Concept
A neuron takes all the [[Activation|activations]] from the previous [[Layers|layer]] and computes their **weighted sum** using its [[Weights]]. If most weights are zero except positive ones in a region of interest, the weighted sum just adds up the brightness of the pixels in that region. Add negative weights around the region and the sum peaks when the center is bright and the surroundings are dark — an edge detector.

A raw weighted sum can be any real number, so two more steps follow: add a [[Bias]], then squish the result into 0–1 with [[Sigmoid and ReLU|the sigmoid]].

**Compact matrix form:** organize one layer's activations into a column vector, organize the weights into a matrix (each row = the connections feeding one next-layer neuron), and the weighted sums become a matrix-vector product. Add the bias vector, wrap the whole thing in sigmoid applied component-wise. This is tight to write and fast to run because libraries heavily optimize matrix multiplication.

## Formula / Code
```
single neuron:   a' = σ( w1·a1 + w2·a2 + … + w784·a784 + b )

whole layer:     a⁽ⁿ⁺¹⁾ = σ( W·a⁽ⁿ⁾ + b )
  a⁽ⁿ⁾ = activation column vector of layer n
  W    = weight matrix (one row per next-layer neuron)
  b    = bias vector
  σ    = sigmoid applied to each component
```

## Connections
- [[Weights]] — the multipliers in the sum
- [[Activation]] — the values being summed (and the output, after squishing)
- [[Bias]] — added to the weighted sum before squishing
- [[Sigmoid and ReLU]] — squishes the sum into 0–1
- [[Network as a Function]] — iterating these matrix-vector products IS the network

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [09:18], [09:42], [10:14], [13:37], [13:58], [14:43] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> Weighted sum = multiply each input activation by its weight and add them up — compactly, W·a + b.
