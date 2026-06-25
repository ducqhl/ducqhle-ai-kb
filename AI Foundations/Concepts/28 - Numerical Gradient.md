# Numerical Gradient

## ELI5
Don't know the formula for the slope? Just nudge the input by a tiny amount `dx`, measure how much the output changed, and divide. As the nudge shrinks toward zero, that ratio becomes the true derivative.

## Core Concept
The **finite-difference** approximation: change `x` by a small `dx`, get a change `dy`, and the slope is `dy/dx`. As `dx → 0` this converges to the analytical **derivative**.

```
dy/dx = (f(x + dx) − f(x)) / dx        # with e.g. dx = 1e-4
```

It matches the analytic answer (`f'(x) = 2x` for `f(x)=x²`). This is mainly useful for **gradient checking** — verifying that an analytic/backprop gradient is correct. Computing gradients of large functions *by hand* is **tedious and error-prone**, which is exactly what motivates building [[Computation Graphs|computation graphs]] and [[Backpropagation Algorithm|automatic differentiation]].

## Formula / Code
```python
dx = 1e-4
x, y = 1, f(1)
new_y = f(x + dx)
dy = (new_y - y) / dx     # ≈ f'(x) = 2x = 2
```

## Connections
- [[Gradients and Partial Derivatives]] — the analytic counterpart this approximates
- [[Computation Graphs]] — the scalable, exact alternative
- [[Backpropagation Algorithm]] — computes exact gradients automatically
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Backpropagation lecture (`backpropagation.py`, `example_1d()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Numerical gradient = nudge by `dx`, divide the output change; great for checking, too tedious to scale → use autodiff.
