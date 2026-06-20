# Vectorization and Efficiency

## ELI5
There are many ways to compute the same answer, and some are way faster. Writing your own loop in Python to multiply matrices is like doing arithmetic by hand. Handing the whole job to NumPy is like using a calculator built by experts — it's written in fast C, heavily optimized, and can even run on a GPU. Same result, hugely faster.

## Core Concept
The same result can be computed multiple ways with very different **computational cost**. The rule for tensors: express your computation with **few, large tensor operations** rather than explicit Python loops ("vectorize").

Example: multiplying two `N×N` matrices with a triple `for i, j, k` loop in Python vs. one NumPy call. `timeit` shows the NumPy version is far faster, because:

- **Python is slow** — interpreted, not optimized for performance.
- **NumPy is fast** — on CPU it's written in **C** and heavily optimized.
- **GPU** — vectorized tensor code can run on GPUs for further acceleration, especially on large matrices.
- **Distributed** — automatic tools can **shard** tensors across multiple GPUs to go even faster; sequential loop code can't do this.

**Trade-off:** vectorized code can be *less readable* — you end up doing "gymnastics on tensors." But for ML at scale, speed wins. ([[einops]] helps recover readability.)

## Formula / Code
```python
# slow: explicit Python loops
C = np.zeros((n, n))
for i in range(n):
    for j in range(n):
        for k in range(n):
            C[i, j] += A[i, k] * B[k, j]

# fast: one vectorized op (C, optimized, GPU-able, sharddable)
C = A @ B
```

## Connections
- [[Matrix Multiplication and Broadcasting]] — the operation being vectorized
- [[Resource Constraints]] — vectorization is how we fight the computation constraint
- [[einops]] — restores readability lost to tensor gymnastics
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [51:58], [53:03], [53:36], [54:03] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Vectorize: few big tensor ops, not Python loops — C-speed, GPU-able, shardable across machines.
