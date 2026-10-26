---
title: "Bookshelf & Reading Notes: Feedback Systems & Estimation"
publishedDate: 2025-11-20
type: "book-summary"
readTime: "5 min read"
summary: "My key takeaways and margin notes from foundational books on feedback control, Kalman filtering, and robotics."
tags: ["Book Notes", "Control Systems", "State Estimation", "Reading"]
image: "/images/notebook/template-placeholder.svg"
imageAlt: "Bookshelf and Reading Notes Template"
draft: true
---

![Bookshelf Notes Template](/images/notebook/template-placeholder.svg)
*Reading notes, chapter highlights, and practical takeaways from technical books.*

When studying control systems and robotics, textbooks can sometimes feel dense with mathematical proofs. But when you start applying those concepts to real motors and sensors, certain core ideas stick with you. 

Here are my personal notes and takeaways from books that shaped how I think about feedback and estimation.

---

### 1. *Feedback Systems: An Introduction for Scientists and Engineers*
*By Karl Johan Åström and Richard M. Murray*

This is one of the most accessible yet deep introductions to control theory. Instead of jumping straight to complex formulas, it builds intuition around how feedback changes a system's behavior.

**Key Takeaways:**
- **Feedback is everywhere:** It isn't just about steering a robot or tuning a thermostat. Feedback stabilizes unstable systems, reduces sensitivity to disturbances, and makes imperfect hardware behave predictably.
- **The cost of feedback:** Feedback isn't free. High gain gives fast response, but it also amplifies sensor noise and can cause instability if there are delays in the loop.
- **Bode's integral formula:** Sometimes called the "waterbed effect": if you suppress disturbances at low frequencies, you inevitably push sensitivity higher at other frequencies. You can't cheat physics; you can only decide where to pay the price.

---

### 2. *Probabilistic Robotics*
*By Sebastian Thrun, Wolfram Burgard, and Dieter Fox*

This book completely changed how I think about sensors. In the real world, sensors are noisy, actuators slip, and the environment is unpredictable. Rather than trying to eliminate noise, this book teaches you how to embrace uncertainty using probability.

**Key Takeaways:**
- **Robots never know where they are:** A robot only has a *belief* about its position, represented as a probability distribution.
- **The Kalman Filter intuition:** A Kalman filter is essentially a weighted average between two imperfect sources of truth: what your physical model predicted versus what your noisy sensor actually measured. The weights depend on which one has less uncertainty.
- **Measurement vs. Motion:** Moving increases uncertainty (wheels slip, motors drift), while taking a good measurement reduces uncertainty (landmarks anchor your position). Autonomous navigation is a constant dance between the two.

---

### My Reading Workflow
Whenever I read a technical book or paper:
1. I write down the single main idea of each chapter in one plain-English sentence.
2. I write a quick note on how that idea connects to a physical project I have worked on (like our mobile robot or drone).
3. If an equation feels intimidating, I ask: *What physical quantity is this trying to measure or balance?*
