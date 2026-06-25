# Objective Functions

## ELI5
An objective function is a single-number scorecard for how good your current settings are. You feed in your knobs (the weights), and it spits out one number — the loss. Lower is better. All of training is just nudging the knobs to shrink that one number.

## Core Concept
An **objective** takes a parameter tensor as input and returns a **scalar** output. You build it by **composing tensor operations**:

1. `predictions = x @ w` — matrix-vector product
2. `residuals = predictions - y` — elementwise subtraction
3. `losses = residuals ** 2` — elementwise power
4. `total_loss = sum(losses)` — collapse to a scalar

The **ultimate goal** is to find the `w` that *minimizes* `objective(w)`. The **local question** that unlocks it: given a fixed `w`, how should we tweak `w` to improve (decrease) the objective? The answer is the [[Gradients and Partial Derivatives|gradient]].

This is the bridge from raw tensor mechanics to machine learning: the loss is "just" a chain of multiplies and adds, so its gradient can be computed mechanically by [[Backpropagation Algorithm|backprop]].

## Formula / Code
```python
def objective(w: np.ndarray) -> float:
    loss = np.sum((x @ w - y) ** 2)   # compose ops -> scalar
    return loss
# evaluate at any w
loss = objective(np.array([1, 0, 1]))
```

## Connections
- [[Matrix Multiplication and Broadcasting]] — `x @ w` builds the predictions tensor
- [[Gradients and Partial Derivatives]] — how to tweak `w` to lower the objective
- [[Loss Function]] — the ML framing of this exact scorecard
- [[Gradient Descent]] — repeatedly minimizing the objective
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Backpropagation lecture (`backpropagation.py`, `motivation()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Objective = compose tensor ops into one scalar loss; training = shrink that scalar by tweaking `w`.
