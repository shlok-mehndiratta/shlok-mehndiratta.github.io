---
title: "Learning Dexterous Manipulation: Notes from RRC IIIT Hyderabad"
publishedDate: 2026-04-15
type: "thought"
readTime: "5 min read"
summary: "Practical observations on training vision models to predict 3D contact distributions, using NVIDIA Warp for GPU physics, and transferring policies to the 16-DoF LEAP Hand."
tags: ["Robotics", "LEAP Hand", "Sim-to-Real", "NVIDIA Warp"]
image: "/images/notebook/template-placeholder.svg"
imageAlt: "LEAP Hand Manipulation and Simulation Template"
draft: true
---

![LEAP Hand Manipulation](/images/notebook/template-placeholder.svg)
*Dexterous robotic manipulation: bridging simulation and physical hand hardware.*

Working at the Robotics Research Center (RRC) at IIIT Hyderabad under Dr. Spandan Roy has introduced me to one of the hardest open problems in robotics: **dexterous multi-fingered grasping**.

Unlike simple two-jaw grippers that just open and close, a 16-degree-of-freedom robotic hand (like the LEAP Hand) has multiple joints per finger. It can roll an apple, turn a screwdriver, or pick up fragile objects. But teaching a robot *where* its fingers should make contact using only camera views is surprisingly challenging.

Here are a few practical insights from my research work so far.

---

### 1. Vision Only Tells Half the Story
When humans grasp an object, we look at it for a fraction of a second, but our hands do the rest using touch, pressure, and skin friction. 

A single camera view cannot see the back of an object. To overcome this, we train neural networks to estimate a continuous **3D contact field**, predicting where the fingers will touch the surface even for parts of the object hidden from the camera's line of sight.

---

### 2. High-Throughput GPU Physics (NVIDIA Warp)
Gathering real physical grasp data on a robot hand is slow and wears down motors. To generate millions of realistic training examples, we use **NVIDIA Warp** and **BlenderProc**:
- We simulate physics directly on the GPU, testing thousands of candidate grasps simultaneously in parallel.
- We render realistic lighting, textures, and camera angles so the neural network doesn't get confused when it sees real-world images in the lab.

---

### 3. The Reality Gap (Sim-to-Real)
No matter how good a simulator is, reality is always messier. Real silicone fingertips have friction that changes with dust and humidity, motors have slight latency, and real camera lenses have distortion. 

The key lesson: **never overfit to ideal physics**. Adding slight random variations (domain randomization) in simulation is what allows the policy to survive and succeed when running on real hardware.
