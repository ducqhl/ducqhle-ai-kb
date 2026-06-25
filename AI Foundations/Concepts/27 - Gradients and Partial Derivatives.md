# Gradients and Partial Derivatives

## ELI5
A derivative answers: if I wiggle the input a tiny bit, how much does the output wiggle? A partial derivative wiggles just *one* input while holding the rest still. The gradient bundles all those wiggles into one vector that points in the direction of steepest *increase* — so going the opposite way decreases the function the fastest.

## Core Concept
- **1-D derivative**: for `f(x) = x²`, the derivative `f'(x) = 2x` is the **slope of the tangent line** at `x`.
- **Partial derivative**: for `f(x1, x2)`, `∂f/∂x1` measures change from moving `x1` alone. For `(x1+x2)²`, both partials equal `2(x1+x2)`.
- **Gradient** `∇f`: the full vector of partial derivatives, **same shape as the input**. It points toward steepest ascent; `−∇f` is steepest descent.

The gradient is what tells us how to improve an [[Objective Functions|objective]]. Example use cases Percy lists: optimizing model parameters, optimizing an adversarial input image to maximize error, optimizing dataset proportions.

## Formula / Code
```python
# vector function f(x) = (sum x)^2,  output scalar
def f(x):  return np.sum(x) ** 2
def df(x): return 2 * np.sum(x) * np.ones_like(x)   # gradient, same shape as x

df(np.array([1, 2]))        # -> [6, 6]
df(np.array([1, 3, 0, -1])) # works for any dimension
```
`∇f = (∂f/∂x₀, ∂f/∂x₁, …)`

## Connections
- [[Numerical Gradient]] — estimate the same slope without an analytic formula
- [[Objective Functions]] — the scalar we differentiate
- [[Chain Rule]] — how gradients of compositions are built
- [[Gradient Descent]] — step along `−∇f` to minimize
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Backpropagation lecture (`backpropagation.py`, `gradients()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Gradient = vector of partial derivatives, same shape as input, pointing uphill; negate it to descend.
