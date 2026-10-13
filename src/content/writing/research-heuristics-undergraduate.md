---
title: "Heuristics from Undergraduate Research Internships"
publishedDate: 2026-09-20
stage: "budding"
summary: "Reflections on navigating open-ended mathematical modeling, finding the signal through experimental noise, and learning how to ask questions that PIs actually care about."
tags: ["Research", "Mentorship", "EECS"]
draft: false
---

Entering a research group as an undergraduate often feels like being handed a map in a language you only half-speak. Textbook problems are manufactured to possess tidy, closed-form solutions at the end of the chapter. Real research, by contrast, begins precisely where textbook certainties break down.

Over two summer internships and my final-year project at IISER Bhopal, here are three heuristics I hold onto:

### 1. Build the Toy Model First

When tackling a high-dimensional algorithm, resist the temptation to write 500 lines of PyTorch or C++ immediately. Instead:
- Construct a 2-node or 3-node graph analytically on paper.
- Work out the Jacobian or gradient by hand.
- If the intuition doesn't hold in $\mathbb{R}^2$, it rarely works in $\mathbb{R}^{1000}$.

### 2. Fast Negative Results are a Superpower

Negative results are not failures; they are constraints on the hypothesis space. What drains energy is a negative result that took three weeks to diagnose because the logging pipeline was messy. Automate reproducibility early so you can kill bad hypotheses in 10 minutes.

### 3. Communicate in Invariants

When discussing progress with advisors, avoid recounting step-by-step debug traces. Frame updates around invariants:
- What did we expect the conservation law / convergence bound to be?
- Where does the empirical curve deviate?
- What is the minimal controlled test to isolate the cause?
