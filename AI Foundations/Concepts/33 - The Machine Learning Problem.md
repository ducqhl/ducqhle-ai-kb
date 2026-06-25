# The Machine Learning Problem

## ELI5
Instead of hand-writing the rule ("study 3 hours → score 70"), you show the computer examples and let it find the rule itself. You hand it (input, output) pairs; a learning algorithm chews on them and hands back a predictor function you can use on new inputs.

## Core Concept
The pieces of the supervised ML setup, using the running example *predict exam score from hours studied*:

- **Predictor** — a function that takes an input and produces an output (e.g. `f(3) = 70`).
- **Training data** — a set of **examples**, each an `(input, output)` pair that demonstrates the task.
- **Learning algorithm** — takes the training data and **produces a predictor**.

This raises three design questions that organize everything else:
1. **Which predictors are possible?** → the [[Hypothesis Class]]
2. **How good is a predictor?** → the [[Loss Function]]
3. **How do we compute the best one?** → the optimization algorithm ([[Gradient Descent]])

This is the same loop foundation models run at massive scale — just with billions of parameters and trillions of tokens ([[Foundation Models]]).

## Formula / Code
```python
@dataclass(frozen=True)
class Example1D:
    input: float
    output: float

training_data = [Example1D(1, 4), Example1D(2, 6), Example1D(4, 7)]
# learning algorithm:  training_data -> predictor
```

## Connections
- [[Hypothesis Class]] — the set of predictors to choose from
- [[Loss Function]] — how good a predictor is
- [[Gradient Descent]] — how the best predictor is found
- [[Foundation Models]] — the same recipe at scale
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Linear Regression lecture (`linear_regression.py`, `machine_learning_problem()`) — https://github.com/stanford-cs221/autumn2025-lectures

## Remember
> ML problem = training data (input/output pairs) → learning algorithm → predictor; framed by three questions: hypothesis class, loss, optimization.
