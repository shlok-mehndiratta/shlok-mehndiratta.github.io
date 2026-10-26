---
title: "COAST: Altitude as a Coupled Perception Variable in Shared-Camera Aerial-Ground Tracking"
authors: ["Shlok Mehndiratta", "Divyam Sood", "Prashant Gupta", "Agniva Banerjee", "Arijit Sen"]
venue: "Advances in Control and Optimization of Dynamical Systems (ACODS 2026)"
year: 2026
status: "accepted"
takeaway: "Formulates the fundamental coupling between UAV altitude, measurement noise covariance (R ∝ z²), and camera footprint; proves estimation-optimal altitude scheduling under path curvature variations with 25× compute reduction via event triggering."
abstract: "The paper studies UAV–UGV tracking in which a single downward-facing UAV camera is the UGV's only exteroceptive sensor, supplying both its lane-following reference and its localization measurement. The shared camera couples navigation and estimation through the UAV altitude z: the measurement-noise covariance grows as R ∝ z², while the camera footprint, and with it lane coverage, shrinks as the UAV descends. The estimation-optimal altitude is the lowest one that keeps the searched lane region inside the footprint, and it rises with path curvature when the searched lane region grows in turns. Adapting altitude along the path beats every fixed altitude only when this coverage floor binds and varies along the path; otherwise a fixed altitude is already optimal. We implement the policy, COAST (Coupled-Altitude Shared-camera Tracking), with a belief-space ground controller and an event-triggered aerial planner. A ROS 2/Gazebo study confirms the z² scaling of the position error, a monotone predicted estimation cost and the predicted tie in the non-binding regime, and event triggering reduces aerial-planner computation at matched estimation quality."
codeUrl: "https://github.com/shlok-mehndiratta/COAST-Code"
bibtex: ""
featured: true
tags: ["Perception-Aware Control", "UAV-UGV Tracking", "Belief-Space MPC", "Event-Triggered Planning", "ROS 2"]
order: 2
---
