# Activation

## ELI5
The activation is the actual number sitting inside a neuron right now. It's how "lit up" that neuron is. A high activation means the neuron is shouting "yes, I see my thing!" and a low activation means it's quietly saying "nope, not here."

## Core Concept
The number inside a [[Neuron]] is called its **activation**. The mental image is that a neuron is "lit up" when its activation is a high number. For input neurons the activation is just the grayscale brightness of a pixel. For an output neuron, the activation (again between 0 and 1) represents how strongly the system believes the input image is a given digit.

The whole network runs by propagation: the activations in one [[Layers|layer]] determine the activations of the next layer. Feed in an image, light up the 784 input activations, and that pattern causes a specific pattern in the next layer, which causes a pattern in the next, all the way to the output. The brightest neuron in the output layer is the network's chosen answer.

## Formula / Code
```
activation ∈ [0, 1]
output activation = how much the network thinks the image is that digit
prediction = argmax(output layer activations)   # the brightest output neuron
```

## Connections
- [[Neuron]] — activation is the number a neuron holds
- [[Layers]] — activations in one layer set the activations of the next
- [[Weighted Sum]] — the next layer's activations come from a weighted sum
- [[Sigmoid and ReLU]] — the weighted sum is squished into the 0–1 activation range

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [03:25], [03:52], [04:33], [05:01], [05:22] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> Activation = the current "lit-up" value of a neuron, and one layer's activations drive the next.
