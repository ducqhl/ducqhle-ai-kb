# Tensors and Rank

## ELI5
A tensor is just a box of numbers, and its **rank** is how many directions you need to walk to find a single number. One number = no walking (rank 0). A list = walk along one line (rank 1). A grid = walk across and down (rank 2). Stack grids and you walk in three directions (rank 3). Same idea, more dimensions.

## Core Concept
A **tensor** is a multi-dimensional array that generalizes scalars, vectors, and matrices. Liang calls them the **"atoms of modern machine learning"** — used to represent data, model parameters, gradients, and intermediate activations; basically everything. They also appear broadly across science and engineering.

Rank = number of dimensions (axes). Every tensor has a **shape** (a tuple of dimension sizes):

| Rank | Name | Example | Shape |
|---|---|---|---|
| 0 | scalar | `42` | `()` |
| 1 | vector | `[1,2,3]` | `(3,)` |
| 2 | matrix | 2×3 grid | `(2,3)` |
| 3 | tensor | 2×2×3 | `(2,2,3)` |
| n | tensor | any | n-tuple |

You **index/slice** with `x[i]` to peel off one axis at a time. You rarely type out entries — instead use constructors: `np.zeros(shape)`, `np.ones(shape)`, `np.random.randn(...)` (Gaussian), the identity matrix, `np.diag(vector)`, and read/write from disk for datasets and saved parameters.

## Formula / Code
```python
import numpy as np
x = np.array(42)              # rank 0, shape ()
v = np.array([1, 2, 3])       # rank 1, shape (3,)
M = np.array([[1,2,3],[4,5,6]])  # rank 2, shape (2,3)
T = np.random.randn(2, 2, 3)  # rank 3, shape (2,2,3)
T[1][0][1]                    # slice down to a single scalar
np.zeros((3, 4)); np.ones((2,2)); np.eye(3)
```

## Connections
- [[Tensors in Machine Learning]] — what each axis *means* in real ML data
- [[Matrix Multiplication and Broadcasting]] — the main thing you do with tensors
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [38:07], [38:55], [40:51] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Tensor = n-dimensional array; rank = number of axes; scalar→vector→matrix→… all one family.
