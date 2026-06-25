# Hypothesis Class

## ELI5
Rather than betting on a single predictor, you define a whole *family* of them controlled by knobs (parameters). The learning algorithm's job is then to pick the best knob settings. That family of all reachable predictors is the hypothesis class.

## Core Concept
A single fixed predictor like `f(x) = 2x + 1` is too rigid — we want a **set of possible predictors** so the learning algorithm can choose the best. To define that set, introduce **parameters**.

For a **linear predictor**, each parameter setting has a **weight** and a **bias**:

```
f(params, x) = params.weight · x + params.bias
```

The **hypothesis class** is the set of *all* predictors you can get by choosing parameters `(weight, bias)`. Terminology mapping to deep learning:

- hypothesis class ↔ **model architecture**
- a specific chosen predictor ↔ a **model**

In general the parameters are a **collection of tensors** ([[Tensors and Rank]]) — e.g. the weight matrices of DeepSeek-V3. Picking *which* member of the class is best needs a [[Loss Function]] plus optimization.

## Formula / Code
```python
@dataclass(frozen=True)
class Parameters1D:
    weight: float
    bias: float

def f(params: Parameters1D, x: float) -> float:
    return params.weight * x + params.bias

f(Parameters1D(weight=3, bias=1), 1)   # -> 4
```

## Connections
- [[The Machine Learning Problem]] — "which predictors are possible?"
- [[Loss Function]] — how we rank members of the class
- [[Tensors and Rank]] — parameters are tensors
- [[Foundation Models]] — architecture = hypothesis class at scale
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Linear Regression lecture (`linear_regression.py`, `hypothesis_class()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Hypothesis class = all predictors reachable by choosing parameters; in deep learning it's the model architecture, a specific predictor is a model.
