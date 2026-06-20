# Neuron

## ELI5
A neuron is just a little box that holds one number, somewhere between 0 and 1. That's it. Think of it like a tiny light bulb: when the number is high the bulb is bright (lit up), and when it's low the bulb is dark. A neural network is a giant pile of these little number-boxes wired together.

## Core Concept
In the plain vanilla network from the video, a neuron is simply "a thing that holds a number," specifically a number in the range 0 to 1. Nothing fancier than that to start. For a handwritten-digit network, the input image is 28x28 pixels, so the first layer has 784 neurons — one per pixel. Each input neuron holds the grayscale value of its pixel: 0 for a black pixel up to 1 for a white pixel.

Later in the video this definition gets refined: because the number a neuron holds depends on the input image, it is more accurate to think of each neuron as a *function* that takes in the outputs of all neurons in the previous layer and spits out a number between 0 and 1.

## Formula / Code
```
neuron value ∈ [0, 1]
input neuron value = grayscale of its pixel (0 = black, 1 = white)
total input neurons for 28x28 image = 28 × 28 = 784
```

## Connections
- [[Activation]] — the number a neuron holds is called its activation
- [[Layers]] — neurons are organized into layers
- [[Network as a Function]] — each neuron is itself a tiny function

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [02:48], [03:00], [03:14], [15:17] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> A neuron is just a box holding one number between 0 and 1.
