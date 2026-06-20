# Next-Token Prediction as Intelligence

## ELI5
Everyone gets excited about the flashy stuff a chatbot can do — solve math, write code. But Percy says the quiet engine under all of it is one boring skill: guessing the next word. The better a model truly understands what it just read, the better it guesses what comes next. So if you measure how well it predicts the next word over a *really long* document, you get an honest readout of how smart it actually is — one that's hard to fake.

## Core Concept
Percy calls next-token prediction the **underhyped** capability of language models. For most of their existence, LLMs were literally **probability distributions over the next token given previous tokens** — mathematical objects you can study as such. The modern "input → output system" framing hides this.

His key claim: minimizing **perplexity** (loss on next-token prediction) and having strong probabilistic foundations is what *enables* everything visible. A good measure of true underlying intelligence is the model's **next-token loss as a function of sequence length** — a strong model should keep lowering its loss even out to ~1M tokens, because that requires deeply understanding long context.

Why it matters: this metric is **not gameable** the way static public leaderboards are. Leaderboards don't surface it, but it gets closer to real capability than benchmark scores.

## Formula / Code
Perplexity = exponentiated average negative log-likelihood:

$$\text{PPL} = \exp\!\left(-\frac{1}{N}\sum_{i=1}^{N} \log p_\theta(x_i \mid x_{<i})\right)$$

Lower perplexity = better next-token prediction = (Percy's argument) more underlying intelligence. Track loss vs. context length, not just a single score.

## Connections
- [[Foundation Models]] — predict-next-word at scale is the same core idea
- [[Pre-training vs Post-training]] — pre-training is exactly this objective
- [[Reasoning Traces Are Overhyped]] — the contrast: visible reasoning vs. quiet prediction
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Autumn 2025 — Fireside Chat with Percy Liang [10:51], [11:38], [12:16] — https://youtu.be/ypZJaTqrNdk

## Remember
> Real intelligence = how low your next-token loss goes over a *million*-token context; leaderboards hide it, perplexity reveals it.
