# Why a Layered Structure

## ELI5
Why bother with rows of neurons at all? Because that's how we recognize things too. To spot a 9, you notice it has a loop on top and a line going down. To spot those, you notice smaller edges. Each layer can build bigger ideas out of smaller ideas — pixels into edges, edges into loops and lines, loops and lines into whole digits.

## Core Concept
This is the *hope* (the motivation) for why a layered structure should behave intelligently — not necessarily what the trained network actually does, which is revisited in the next video.

When we recognize digits, we piece together components: a 9 has a loop up top plus a line on the right; an 8 has two loops; a 4 is three lines. The hope is that each neuron in the second-to-last [[Layers|layer]] lights up for one of these sub-components (a loopy pattern up top, a long vertical line). Then the last step is just learning which combination of components makes which digit.

This kicks the problem down a level: recognizing a loop breaks into recognizing little edges. So maybe the first hidden layer detects little edges, the next layer combines edges into loops and lines, and the final layer combines those into digits. This is "layers of abstraction," and it's useful far beyond images — e.g. parsing speech goes raw audio to sounds to syllables to words to phrases.

## Formula / Code
```
pixels  →  edges  →  patterns (loops, lines)  →  digits
(each arrow = one layer combining smaller ideas into bigger ones)
```

## Connections
- [[Layers]] — this explains what hidden layers might be for
- [[Weights]] — weights are what let a neuron detect a specific pattern like an edge
- [[Activation]] — sub-component neurons "light up" via their activation
- [[Network as a Function]] — abstraction layers compose into the final function

## Source
> But what is a neural network? | Deep learning chapter 1 — 3Blue1Brown [05:32], [05:48], [06:53], [07:15], [08:00] — https://www.youtube.com/watch?v=aircAruvnKk

## Remember
> Layers let the network build big ideas from small ones: pixels → edges → patterns → digits.
