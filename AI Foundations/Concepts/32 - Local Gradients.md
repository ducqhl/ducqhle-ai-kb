# Local Gradients (Backward Rules)

## ELI5
Each operation has its own little fixed rule for how to push gradient down to its inputs. Addition splits the incoming gradient equally to both inputs; multiplication swaps in the *other* input; squaring multiplies by `2x`. Memorize these tiny rules and backprop is just applying them, node by node.

## Core Concept
In the backward pass, every node takes its incoming `self.grad` and **accumulates** (`+=`) gradient into each dependency. It's `+=`, not `=`, because one node can feed **multiple** consumers — their contributions sum (the multi-path [[Chain Rule|chain rule]]).

The per-op rules (let `g = self.grad`):

| Op | forward | backward into inputs |
|---|---|---|
| **Add** | `x + y` | `x.grad += g`,  `y.grad += g` |
| **Subtract** | `x − y` | `x.grad += g`,  `y.grad −= g` |
| **Multiply** (matmul) | `x @ y` | `x.grad += g @ yᵀ`,  `y.grad += xᵀ @ g` |
| **DotProduct** (elementwise) | `x · y` | `x.grad += g * y`,  `y.grad += x * g` |
| **Squared** | `x²` | `x.grad += 2 · x · g` |

Each rule is just the local derivative of that op, scaled by the gradient flowing in from above. [[Backpropagation Algorithm|Backprop]] strings them together.

## Formula / Code
```python
class Multiply(Node):     # matrix product
    def backward(self):
        x, y = self.dependencies
        x.grad += self.grad @ y.value.T
        y.grad += x.value.T @ self.grad

class Squared(Node):
    def backward(self):
        x, = self.dependencies
        x.grad += 2 * x.value * self.grad
```

## Connections
- [[Backpropagation Algorithm]] — calls these `backward()` rules in reverse order
- [[Chain Rule]] — why we multiply by the incoming `g` and `+=` over paths
- [[Computation Graphs]] — where the rules live (one per node type)
- [[Matrix Multiplication and Broadcasting]] — the matmul backward uses transposes
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Backpropagation lecture (`backpropagation.py`, `Add`/`Subtract`/`Multiply`/`Squared` classes) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Each op has a local backward rule (add splits, multiply swaps the other input, square ×2x); accumulate with `+=` because inputs feed many nodes.
