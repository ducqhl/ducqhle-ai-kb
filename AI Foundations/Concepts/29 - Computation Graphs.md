# Computation Graphs

## ELI5
Break a big formula into a graph of tiny operations. The leaves are your inputs, each inner node is one primitive op (add, multiply, square) applied to the nodes below it, and the root is the final answer. Walk leaves → root and you compute the value of the whole thing one small step at a time.

## Core Concept
At the end of the day, even the most complex functions are **composed out of basic operations** (add, multiply, exp, log…). A computation graph makes that composition **explicit**:

- Each **input (leaf) node** holds a fixed value (e.g. `x1`).
- Each **non-input node** represents a primitive computation on its dependencies.
- `forward()` computes a node's `value` from its dependencies' values.
- The result lives at the **root** node.

Every `Node` carries: `name`, `dependencies`, `value` (set in the forward pass), and `grad` (set in the backward pass). Building this graph is the foundation of **reverse-mode automatic differentiation** — it's a "mini-PyTorch." Once the graph exists, gradients fall out by traversing it with the [[Chain Rule|chain rule]] (see [[Backpropagation Algorithm]]).

## Formula / Code
```python
class Node:
    def __init__(self, name, *dependencies):
        self.name, self.dependencies = name, dependencies
        self.value = self.grad = None
        self.forward()

class Add(Node):
    def forward(self):
        x, y = self.dependencies
        self.value = x.value + y.value

# build  y = (x1 + x2)^2
x1 = Input("x1", 2.0); x2 = Input("x2", 3.0)
sum = Add("sum", x1, x2)
y   = Squared("y", sum)   # root
```

## Connections
- [[Chain Rule]] — the math that lets gradients flow through the graph
- [[Backpropagation Algorithm]] — the forward/backward traversal
- [[Local Gradients]] — each op's backward rule
- [[Tensors and Rank]] — node values are tensors
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Backpropagation lecture (`backpropagation.py`, `computation_graphs()`, Werbos 1974) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Computation graph = leaves (inputs) → primitive-op nodes → root; `forward()` fills values, setting up gradients by traversal.
