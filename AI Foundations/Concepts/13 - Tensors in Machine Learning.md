# Tensors in Machine Learning

## ELI5
Every kind of data becomes a box of numbers, and each direction in the box means something. One data point is a list. A stack of data points adds a "which example" direction. A sentence adds a "which word" direction. An image adds height, width, and color. Once you know what each axis stands for, giant models stop being scary — they're just piles of these boxes.

## Core Concept
The power of tensors in ML is that **each axis carries meaning**. Common shapes:

- **Data point** — a vector of dimension `D` → shape `(D,)`.
- **Batch of data** — `N` examples, each `D`-dim → `(N, D)` (row = one example). We batch for efficiency ([[Vectorization and Efficiency]]).
- **Language** — each example is a **sequence** of length `L`, each position `D`-dim → `(N, L, D)`.
- **Vision** — images have height, width, channels → `(N, H, W, C)`.
- **Weight matrix** — maps `Din`-dim input → `Dout`-dim output → shape `(Din, Dout)`.

The **first axis is conventionally the batch dimension** — but that's only a human label; NumPy just sees a rank-n tensor with no special meaning attached to any axis. A model's **parameters are just a collection of tensors**: e.g. DeepSeek V3 (~670B params) on Hugging Face is per-layer matrices like `7168 × 16384`.

**Views vs copies (caution):** slicing and `.T` (transpose) return **views**, not copies — they share underlying storage. Mutating the view mutates the original. Prefer not to mutate; if you must, be careful or you get nasty bugs.

## Formula / Code
```python
x  = np.ones(2)            # data point        (D,)
X  = np.ones((3, 2))       # batch             (N, D)
S  = np.ones((3, 5, 2))    # sequences         (N, L, D)
I  = np.ones((3, 32,32,3)) # images            (N, H, W, C)
W  = np.ones((2, 4))       # weights           (Din, Dout)

y = X.T          # view, NOT a copy
y[0,0] = 99      # this also mutates X!
```

## Connections
- [[Tensors and Rank]] — the underlying shape/rank machinery
- [[Vectorization and Efficiency]] — why we batch along axis 0
- [[Matrix Multiplication and Broadcasting]] — how weight matrices transform data
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [41:50], [42:42], [43:57], [44:29], [45:16] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Each axis means something: `(N, D)` batch, `(N, L, D)` text, `(N, H, W, C)` images; slices/transpose are views, not copies.
