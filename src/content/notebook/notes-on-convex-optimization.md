---
title: "Notes on Convex Optimization & Duality Gaps"
publishedDate: 2026-10-05
type: "bookshelf"
readTime: "5 min read"
summary: "Key takeaways from working through Stephen Boyd's classic text: why Lagrange multipliers are shadow prices, and the geometric beauty of Slater's condition."
tags: ["Optimization", "Mathematics", "Bookshelf"]
draft: false
---

Working through Stephen Boyd and Lieven Vandenberghe’s *Convex Optimization* remains one of the highest-leverage intellectual investments of my undergraduate years.

In undergraduate coursework, students are often taught calculus-based unconstrained optimization ($\nabla f = 0$). But in physical EECS systems—filter design, beamforming, distributed power allocation—constraints are the entire problem.

### The Geometric Meaning of the Dual Problem

Consider the standard primal problem:

$$
\begin{aligned}
\min_{x} \quad & f_0(x) \\
\text{subject to} \quad & f_i(x) \le 0, \quad i = 1, \dots, m \\
& h_i(x) = 0, \quad i = 1, \dots, p
\end{aligned}
$$

The Lagrangian forms a lower bound on the optimal value $p^*$ for any $\lambda \succeq 0$:

$$
L(x, \lambda, \nu) = f_0(x) + \sum_{i=1}^m \lambda_i f_i(x) + \sum_{i=1}^p \nu_i h_i(x)
$$

The dual function $g(\lambda, \nu) = \inf_x L(x, \lambda, \nu)$ has a stunning property: **it is always concave**, even if the original primal problem is non-convex!

### Shadow Prices: The Economic Interpretation

The optimal Lagrange multipliers $\lambda_i^*$ are not just mathematical artifacts—they represent the sensitivity of the optimal cost with respect to tightening or loosening the $i$-th constraint:

$$
\lambda_i^* = -\frac{\partial p^*(u)}{\partial u_i}
$$

If relaxing a bandwidth or power constraint by $\epsilon$ improves the objective significantly, its corresponding multiplier is large. In resource-constrained hardware and decentralized communications, this intuition is invaluable.
