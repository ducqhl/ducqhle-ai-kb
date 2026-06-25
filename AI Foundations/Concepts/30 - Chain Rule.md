# Chain Rule

## ELI5
To know how the final output reacts to an early input, multiply the slopes along the path connecting them. Like a train of gears: turn the first gear, and its effect cascades through each gear's ratio until it reaches the last one. Multiply the ratios and you know the total effect.

## Core Concept
The chain rule (from multivariable calculus) is the **key mathematical property** that makes backprop possible. For `y = (x1 + x2)²` written as `sum = x1 + x2`, `y = sum²`:

```
dy/dx1 = (dy/dsum) · (dsum/dx1)
```

Each node only needs to know its **local derivative** with respect to its own inputs. The chain rule **stitches these local derivatives together** along the graph, multiplying as it goes. When an input affects the output through **multiple paths**, you **sum** the contributions over all paths.

This is why a [[Computation Graphs|computation graph]] is enough: store each op's local rule (its [[Local Gradients]]), then chain-rule them from root to leaves to get every gradient — exactly what [[Backpropagation Algorithm|backpropagation]] organizes.

## Formula / Code
```
y = f(g(x))   ⇒   dy/dx = f'(g(x)) · g'(x)
multivariable: dy/dx = Σ_paths  (product of local derivatives along the path)
```

## Connections
- [[Computation Graphs]] — the structure the rule traverses
- [[Local Gradients]] — the per-op local derivatives being multiplied
- [[Backpropagation Algorithm]] — applies the chain rule mechanically
- [[Gradients and Partial Derivatives]] — what the rule produces
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Backpropagation lecture (`backpropagation.py`, `computation_graphs_example()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Chain rule = multiply local slopes along a path (sum over multiple paths); it's the glue that turns local rules into full gradients.
