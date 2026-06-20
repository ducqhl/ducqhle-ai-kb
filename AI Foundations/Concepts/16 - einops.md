# einops

## ELI5
When you juggle tensors with many dimensions, code like `y.transpose(-2,-1)` becomes a riddle — which axis is which? einops lets you **name** the dimensions instead of counting them, like writing a recipe with labeled ingredients instead of "stir number 2 into number 5." Same operations, far easier to read.

## Core Concept
**einops** is a library for manipulating tensors where **dimensions are named**, inspired by (not identical to) Einstein summation notation. It replaces cryptic axis numbers (`-2`, `-1`) with readable labels. Three key operations:

**1. `einsum`** — generalized matrix multiplication "with good bookkeeping." You write the named axes of each input and the desired output axes as a string. Rule: output labels are a subset of input labels; **any label not in the output is summed out**. `...` stands for an arbitrary number of leading (batch) dimensions.

**2. `reduce`** — collapse a tensor with an operation (`sum`, `min`, `max`, `mean`). Any dimension not named in the output is "processed away" by that op.

**3. `rearrange`** — reshape by naming axes; use **parentheses** to group/split. E.g. split a flattened `(heads hidden)` axis into separate `heads` and `hidden` axes, operate on one, then group back. Useful for the attention-head gymnastics in Transformers.

einops takes practice and can feel cumbersome at first — "like writing Python with type hints": more to type, much easier to read.

## Formula / Code
```python
from einops import einsum, reduce, rearrange

# matmul, named:  i k , k j -> i j   (k is summed out)
einsum(x, y, "seq1 hidden, hidden seq2 -> seq1 seq2")

# batched matmul with arbitrary leading dims
einsum(x, y, "... seq1 hidden, ... seq2 hidden -> ... seq1 seq2")

# reduce: sum away the last axis
reduce(t, "a b c -> a b", "sum")        # or "max", "min", "mean"

# rearrange: split a flat axis into (heads hidden)
rearrange(m, "seq (heads hidden) -> seq heads hidden", heads=2)
```

## Connections
- [[Matrix Multiplication and Broadcasting]] — einsum replaces confusing `-2/-1` axis indexing
- [[Vectorization and Efficiency]] — keeps vectorized code readable
- [[Tensors in Machine Learning]] — naming axes mirrors annotating what each dimension means
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [55:23], [56:35], [60:01], [62:01], [62:05] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> einops = name your axes, don't count them: `einsum` (unnamed axes summed), `reduce`, `rearrange` (parens group/split).
