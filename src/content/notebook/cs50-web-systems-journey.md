---
title: "Full-Stack Web Development Through Harvard's CS50 Web"
publishedDate: 2024-08-10
type: "deep-dive"
readTime: "5 min read"
summary: "Building full-stack web applications from scratch during the summer of 2024, why understanding core systems still matters, and how it shaped my transition into robotics."
tags: ["Web Development", "Python", "JavaScript", "Django", "CS50", "Reflections"]
image: "/images/notebook/cs50-web-journey.svg"
imageAlt: "Full-Stack Architecture and Project Progression in Harvard CS50 Web"
draft: false
---

![CS50 Web Full-Stack Architecture](/images/notebook/cs50-web-journey.svg)
*The five progressive web projects I built during Harvard's CS50 Web curriculum in the summer of 2024.*

*Course projects and source code are available on [GitHub](https://github.com/shlok-mehndiratta).*

---

### Foundations in Full-Stack Systems

Before transitioning into robotics, I spent the summer of 2024 working through Harvard's CS50 Web Programming with Python and JavaScript. Rather than relying on modern framework templates or automated code generators, I wanted to understand web systems from first principles: writing HTML and CSS by hand, managing relational databases, and handling asynchronous requests in JavaScript.

---

### Frontend Precision and User Perception

First-time exposure to web development often starts with browser inspect tools, giving the impression that user interfaces are merely cosmetic arrangements of boxes and text.

Building functional interfaces quickly disproves this assumption by highlighting how directly visual precision influences user trust. When someone visits a website, they cannot see the database schemas or server architecture, but they immediately notice a misaligned button, an awkward margin collapse, or an input field cut off on a phone screen. Even small visual bugs make an interface feel fragile or unfinished. Visual consistency is what builds immediate trust before a user ever interacts with the backend.

---

### Backend State and Edge Cases

Building an auction application like Commerce shifted my attention from basic syntax to state validation.

Standard user flows are straightforward, but real systems break on edge cases: sellers attempting to bid on their own items, simultaneous bids arriving at the exact same dollar amount, or bids placed after an auction closes. Working through these specifications taught me that data integrity must be guaranteed at the database and server layer, never left to client-side checks that can be bypassed.

---

### Relevance of Web Fundamentals in the AI Era

With AI tools generating boilerplate code in seconds, learning web fundamentals from first principles matters more than ever.

Automated assistants can generate standard layouts, but they still struggle when runtime issues occur: race conditions in asynchronous callbacks, silent token expirations, or mismatched component states. Without a solid mental model of how the browser event loop, network requests, and database transactions work, debugging becomes guesswork. Understanding these fundamentals gives you the intuition to trace failures and fix them when tools fall short.

---

### Transition to Robotics and Control Systems

Completing CS50 Web gave me a solid grounding in software design, asynchronous events, and state handling. Later in my undergraduate studies, I began exploring robotics and control systems, and that was where my real interest took shape.

While software engineering on the web is largely about managing data flows and user interfaces, robotics brings code into contact with the physical world. Dealing with real hardware means accounting for sensor noise, actuator limits, aerodynamics, and contact dynamics in real time. I found that working with physical systems, where mathematical models translate directly into hardware behavior, was what genuinely excited me. That experience motivated me to pivot toward robotics research, focusing on aerial vehicles, multi-agent systems, and manipulation. The software discipline from web development still carries over directly into building reliable robot architectures today.
