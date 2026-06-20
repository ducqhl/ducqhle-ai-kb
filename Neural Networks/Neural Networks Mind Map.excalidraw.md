---
excalidraw-plugin: parsed
tags: [excalidraw]
---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'.


# Excalidraw Data

## Text Elements
Neural Networks ^center

Problem ^problem
- Recognize 28x28 handwritten digit → 0–9
- Trivial for brains, hard to hand-code
- [[Why a Layered Structure]] ^problem-notes

Architecture ^architecture
- Input 784 → Hidden 16 → Hidden 16 → Output 10
- [[Layers]] · [[Neuron]] · [[Activation]] ^architecture-notes

Key Concepts ^keyconcepts
- [[Weights]] = which pattern
- [[Bias]] = firing threshold
- [[Weighted Sum]] = combine + add
- [[Sigmoid and ReLU]] = squish to 0–1 ^keyconcepts-notes

Math ^math
- a' = σ(W·a + b)
- matrix-vector products iterated
- ≈ 13,000 parameters
- [[Network as a Function]] ^math-notes

Variants ^variants
- Plain vanilla = baseline here
- Many modern variants exist
- ReLU now preferred over sigmoid
- Next: how it LEARNS ^variants-notes

## Element Links
center: [[Neural Networks MOC]]

## Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin",
	"elements": [
		{
			"id": "center",
			"type": "rectangle",
			"x": 380,
			"y": 280,
			"width": 240,
			"height": 80,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"roundness": { "type": 3 },
			"boundElements": [{ "type": "text", "id": "center" }]
		},
		{
			"id": "problem",
			"type": "rectangle",
			"x": 40,
			"y": 40,
			"width": 260,
			"height": 120,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"roundness": { "type": 3 },
			"boundElements": [{ "type": "text", "id": "problem-notes" }]
		},
		{
			"id": "architecture",
			"type": "rectangle",
			"x": 700,
			"y": 40,
			"width": 260,
			"height": 120,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"roundness": { "type": 3 },
			"boundElements": [{ "type": "text", "id": "architecture-notes" }]
		},
		{
			"id": "keyconcepts",
			"type": "rectangle",
			"x": 700,
			"y": 480,
			"width": 260,
			"height": 140,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"roundness": { "type": 3 },
			"boundElements": [{ "type": "text", "id": "keyconcepts-notes" }]
		},
		{
			"id": "math",
			"type": "rectangle",
			"x": 40,
			"y": 480,
			"width": 260,
			"height": 140,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#d0bfff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"roundness": { "type": 3 },
			"boundElements": [{ "type": "text", "id": "math-notes" }]
		},
		{
			"id": "variants",
			"type": "rectangle",
			"x": 380,
			"y": 640,
			"width": 240,
			"height": 140,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffd8a8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"roundness": { "type": 3 },
			"boundElements": [{ "type": "text", "id": "variants-notes" }]
		},
		{ "id": "l1", "type": "arrow", "x": 380, "y": 300, "width": 100, "height": 60, "strokeColor": "#1e1e1e", "strokeWidth": 2, "points": [[0,0],[-100,-150]], "startBinding": { "elementId": "center" }, "endBinding": { "elementId": "problem" } },
		{ "id": "l2", "type": "arrow", "x": 620, "y": 300, "width": 100, "height": 60, "strokeColor": "#1e1e1e", "strokeWidth": 2, "points": [[0,0],[120,-150]], "startBinding": { "elementId": "center" }, "endBinding": { "elementId": "architecture" } },
		{ "id": "l3", "type": "arrow", "x": 620, "y": 340, "width": 100, "height": 60, "strokeColor": "#1e1e1e", "strokeWidth": 2, "points": [[0,0],[120,180]], "startBinding": { "elementId": "center" }, "endBinding": { "elementId": "keyconcepts" } },
		{ "id": "l4", "type": "arrow", "x": 380, "y": 340, "width": 100, "height": 60, "strokeColor": "#1e1e1e", "strokeWidth": 2, "points": [[0,0],[-100,180]], "startBinding": { "elementId": "center" }, "endBinding": { "elementId": "math" } },
		{ "id": "l5", "type": "arrow", "x": 500, "y": 360, "width": 20, "height": 60, "strokeColor": "#1e1e1e", "strokeWidth": 2, "points": [[0,0],[0,280]], "startBinding": { "elementId": "center" }, "endBinding": { "elementId": "variants" } }
	],
	"appState": {
		"gridSize": null,
		"viewBackgroundColor": "#ffffff"
	},
	"files": {}
}
```
%%
