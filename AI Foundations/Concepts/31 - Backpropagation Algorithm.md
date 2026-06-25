# Backpropagation Algorithm

## ELI5
Two sweeps over the graph. **Forward** (leaves → root): compute every node's value. **Backward** (root → leaves): start with a gradient of 1 at the root, and each node hands its accumulated sensitivity down to the inputs that fed it. One backward pass gives you the gradient for *every* input at once.

## Core Concept
**Backpropagation** is the general algorithm for computing gradients (and values) over a [[Computation Graphs|computation graph]] — i.e. **reverse-mode automatic differentiation** (Werbos, 1974). Steps:

1. **Topological sort** the graph so every node comes after its dependencies.
2. **Forward pass**: call `forward()` on each node in order → all `value`s computed.
3. **Initialize** all `grad`s to zero, **except the root**, whose grad is set to ones (`∂root/∂root = 1`).
4. **Backward pass**: iterate in **reversed** topological order, calling `node.backward()`, which uses the [[Chain Rule|chain rule]] to **accumulate** gradient into its dependencies.

`node.backward()` assumes `node.grad` is already computed and all `value`s exist. The win: one backward pass computes the gradient of a scalar with respect to **all** inputs — far cheaper than nudging each input separately ([[Numerical Gradient]]). This is the engine inside PyTorch/JAX.

## Formula / Code
```python
def backpropagation(root):
    nodes = topological_sort(root)          # deps before node
    for node in nodes:        node.forward()
    for node in nodes:        node.grad = np.zeros_like(node.value)
    root.grad = np.ones_like(root.value)    # seed: d root / d root = 1
    for node in reversed(nodes):  node.backward()
```

## Connections
- [[Chain Rule]] — the property each `backward()` applies
- [[Computation Graphs]] — the structure being traversed
- [[Local Gradients]] — what each node's `backward()` does
- [[Gradient Descent]] — consumes these gradients to update params
- [[Test-Time Compute as Search]] — backprop trains; search runs at inference
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Backpropagation lecture (`backpropagation.py`, `backpropagation()`, `topological_sort()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Backprop = topological sort, forward to fill values, seed root grad = 1, then backward in reverse to accumulate every input's gradient in one pass.
