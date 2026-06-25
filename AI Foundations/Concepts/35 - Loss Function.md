# Loss Function

## ELI5
A loss measures how unhappy a predictor makes you on the data — bigger means worse. For one data point, square how far off the prediction is. For the whole dataset, average the per-point losses. Now you can compare two predictors: the one with smaller loss fits better.

## Core Concept
Given a [[Hypothesis Class|hypothesis class]] of many predictors, the loss function judges each one.

- **Per-example loss** (squared residual): `residual = f(params, x) − y`, then `loss = residual²`. The residual is how wrong the prediction is; squaring punishes big misses and removes sign.
- **Training loss**: the **average** of the per-example losses over all training examples.

Lower training loss ⇒ better fit, so loss turns "find a good predictor" into "**minimize a number**" — exactly an [[Objective Functions|objective function]] over the parameters. To minimize it we need its gradient: for squared loss, `∇loss = 2·residual·[x, 1]` (the `[x, 1]` are the derivatives of `weight·x + bias` w.r.t. `weight` and `bias`).

## Formula / Code
```python
def compute_loss(params, ex):
    residual = f(params, ex.input) - ex.output
    return residual ** 2

def compute_train_loss(params, data):
    return np.mean([compute_loss(params, ex) for ex in data])

# gradient w.r.t. (weight, bias)
def compute_grad_loss(params, ex):
    residual = (params.weight*ex.input + params.bias) - ex.output
    return 2 * residual * np.array([ex.input, 1])
```

## Connections
- [[Objective Functions]] — training loss *is* the objective we minimize
- [[Hypothesis Class]] — loss ranks members of the class
- [[Gradients and Partial Derivatives]] — `∇loss` says how to improve params
- [[Gradient Descent]] — uses `∇loss` to step downhill
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Linear Regression lecture (`linear_regression.py`, `loss_function()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> Loss = squared residual per example, averaged over the data; minimizing it (via its gradient `2·residual·[x,1]`) picks the best predictor.
