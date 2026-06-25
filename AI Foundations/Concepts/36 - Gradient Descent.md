# Gradient Descent

## ELI5
To find the bottom of a valley in thick fog, feel which way is downhill and take a small step; then repeat. The gradient tells you which way is *uphill*, so you step the opposite way. Do this again and again and you slide down to the lowest loss.

## Core Concept
We want the parameters that yield the **lowest [[Loss Function|training loss]]** — an optimization problem. The key fact: the [[Gradients and Partial Derivatives|gradient]] points in the direction that **increases** the loss most, so step in the **opposite** direction.

**Update rule** (one step):
```
params ← params − learning_rate · ∇L(params)
```

- **Learning rate** `η` = step size: how fast you drive, trading **speed vs stability** (too big overshoots, too small crawls).
- Repeating the step many times **is** the **gradient descent** algorithm; each step lowers the loss.
- **Convergence**: guaranteed for **convex** functions, *not* for deep learning — but it still works well in practice.
- Variants: **stochastic gradient descent (SGD)**, **Adam**.

For multi-step graphs the gradient `∇L` itself is computed by [[Backpropagation Algorithm|backprop]]; here it's the closed form `2·residual·[x,1]` averaged over examples.

## Formula / Code
```python
params = Parameters1D(weight=0, bias=1)
learning_rate = 0.01
for step in range(10):
    grad = compute_gradient_train_loss(params, training_data)
    params = Parameters1D(
        weight = params.weight - learning_rate * grad[0],
        bias   = params.bias   - learning_rate * grad[1],
    )
```
`w ← w − η ∇L(w)`

## Connections
- [[Loss Function]] — the surface being descended
- [[Gradients and Partial Derivatives]] — supplies the downhill direction
- [[Backpropagation Algorithm]] — computes `∇L` for complex models
- [[Objective Functions]] — the scalar being minimized
- [[The Machine Learning Problem]] — this is the "optimization algorithm" piece
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Linear Regression lecture (`linear_regression.py`, `optimization_algorithm()`, `gradient_descent()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Gradient descent = repeatedly step params against the gradient (`w ← w − η∇L`); learning rate trades speed vs stability; convex-safe, deep-net-empirical.
