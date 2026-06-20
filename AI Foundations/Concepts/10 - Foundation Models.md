# Foundation Models

## ELI5
Take a giant pile of text, train a model to do one dumb-sounding thing — guess the next word — and it accidentally learns a deep understanding of language you can reuse for almost any task. Make it bigger, feed it more, and it gets shockingly capable. Teach it to "think out loud" before answering, and it starts winning math olympiads.

## Core Concept
The era (last ~5 years) of **foundation models**. Core idea: train on a large body of **raw text** to **predict the next word**; the resulting model has useful, general-purpose representations of language transferable to many downstream tasks. The idea itself is ~20 years old, but executing it in the modern deep-learning framework gave new, surprising results.

- **Pre-trained language models** — ELMo, BERT, Google's T5.
- **Large language models** — OpenAI, Google, Meta, DeepSeek and others **scaling up** ever-larger models → the modern generative-AI boom.
- **Reasoning models** — let the model produce **thoughts** (tokens showing what it's trying to do) *before* the final answer. This yields models that win **gold medals at the IMO and IOI**.

**Industrialization of AI**: from a "cute niche research" field to GPT-4's reported ~1.8 trillion parameters, xAI's ~200K H100 GPU cluster, hundreds of billions in investment. With it, **openness decreased** — GPT-4's report withholds training details citing competition + safety, unlike the open publishing of 5–6 years prior. Many open research problems about intelligence still remain; AI is not "solved."

## Connections
- [[Neural AI]] — the Transformer (2017) is the architecture these scale
- [[Alignment and Developer Goals]] — alignment is applied to these via post-training
- [[Societal Impact of AI]] — industrialization raises the societal stakes
- [[AI Foundations MOC]]

## Source
> Stanford CS221 Lecture 1 — Percy Liang [32:09], [33:05], [34:14], [35:06] — https://www.youtube.com/watch?v=yaLEGZuIIgE

## Remember
> Foundation model = predict-next-word at scale → reusable general representations; reasoning models "think" in tokens first.
