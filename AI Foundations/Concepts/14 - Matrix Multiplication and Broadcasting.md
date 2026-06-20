# Matrix Multiplication and Broadcasting

## ELI5
Matrix multiplication is the main move in deep learning: line up rows against columns, multiply, and add. Broadcasting is a convenience — when one box is smaller than the other, the computer quietly copies the small one as many times as needed so the shapes fit, instead of making you write a loop.

## Core Concept
**Matrix multiplication** of an `(m, k)` and a `(k, n)` matrix gives an `(m, n)` matrix where each output element is the **inner product** of a row (from the first) with a column (from the second). The shared inner dimension `k` must match. Example: `(4,6) @ (6,3) → (4,3)`.

**Batched matmul.** Pack many matrices into a higher-rank tensor and multiply them all at once. With `x` of shape `(2, 4, 6)` (two `4×6` matrices) and `w` of shape `(6, 3)`, `x @ w` applies the multiplication to each slice along axis 0 → `(2, 4, 3)`.

**Broadcasting** is what makes this work: the lower-rank `w` is *broadcast* (conceptually copied) to each slice of the higher-rank `x`. General rule for a rank-n tensor: you can multiply by a scalar (rank 0, copied to every element), a vector, a matrix, etc., and the smaller operand is replicated to fit. NumPy attaches no meaning to "batch" — it just lines the axes up by the rules. This is a very common deep-learning pattern (but the index bookkeeping gets confusing — [[einops]] makes it legible).

## Formula / Code
```python
A = np.random.randn(4, 6)
B = np.random.randn(6, 3)
A @ B                  # (4,6)@(6,3) -> (4,3); C[i,j] = sum_k A[i,k]*B[k,j]

x = np.random.randn(2, 4, 6)
w = np.random.randn(6, 3)
x @ w                  # broadcast w over axis 0 -> (2, 4, 3)
```

## Connections
- [[Tensors in Machine Learning]] — weight matrices `(Din,Dout)` transform data via matmul
- [[Vectorization and Efficiency]] — why batched matmul beats Python loops
- [[einops]] — a clearer way to express these multiplications
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [47:31], [48:36], [49:42], [51:04] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Matmul = rows·columns inner products (inner dims must match); broadcasting copies the smaller operand to fit.
