# Layers

## ELI5
A network is built in rows called layers. The first row takes in the picture, the last row gives the answer, and the rows in the middle are the "thinking" rows. Information flows from left to right: each row whispers to the next row, and by the time it reaches the last row, an answer pops out.

## Core Concept
Neurons are organized into **layers**. In the digit-recognizing network:
- **Input layer**: 784 neurons, one per pixel of the 28x28 image.
- **Output layer**: 10 neurons, one per digit (0–9). The [[Activation]] of each says how much the system thinks the image is that digit.
- **Hidden layers**: the layers in between. The video uses two hidden layers of 16 neurons each. These are described as "a giant question mark" — we don't know exactly what they do yet.

The choice of 2 hidden layers and 16 neurons each is admittedly arbitrary, chosen to motivate the structure and to fit nicely on screen. In practice there's lots of room to experiment with this structure. The core operation: activations in one layer determine the activations of the next, loosely analogous to how some groups of biological neurons firing cause others to fire.

## Formula / Code
```
Input layer:   784 neurons  (28 × 28 pixels)
Hidden layer 1: 16 neurons   (arbitrary choice)
Hidden layer 2: 16 neurons   (arbitrary choice)
Output layer:   10 neurons   (digits 0–9)
```

## Connections
- [[Neuron]] — layers are made of neurons
- [[Activation]] — each layer's activations drive the next layer
- [[Why a Layered Structure]] — the hope for what hidden layers do
- [[Network as a Function]] — the layers chained together form one big function

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [03:36], [03:46], [04:03], [04:14], [04:33] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> Input layer reads the image, output layer gives the answer, hidden layers do the mystery work in between.
