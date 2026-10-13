# `shlokmehndiratta.me`

Personal website, research showcase, and living digital archive of **Shlok Mehndiratta** (BS in EECS, IISER Bhopal).

Engineered with **Astro 5**, **Tailwind CSS**, **MDX**, and **KaTeX** for instant global load times, academic precision, and high-end digital craft.

---

## 🧭 The 5 Pillars

1. **`Overview` (`/`)**: High-impact personal statement, dynamic status pill, ambient Fourier harmonic canvas, and curated 3-point showcase (research + build + note).
2. **`Research` (`/research`)**: Research vision & open questions, senior thesis inquiries at IISER Bhopal, publications/manuscripts with 1-click BibTeX copy, and foundational literature.
3. **`Experience` (`/experience`)**: Academic research fellowships, industrial internships, laboratory appointments, and concrete software/hardware systems built.
4. **`Notebook` (`/notebook`)**: An intellectual journal featuring technical deep-dives ($L = D - A$), heuristics from research internships, and bookshelf/paper reflections.
5. **`Archive` (`/archive`)**: Physical and experimental textures: laser interference patterns, analog oscilloscope traces, silicon micrographs, and campus geometry.
6. **`Resume` (`/resume`)**: Application-ready resume for graduate school (MS/PhD) and top industry R&D, with 1-click LaTeX PDF download and print optimization (`Cmd+P`).

---

## 🚀 Quick Start (Local Development)

Dependencies are completely isolated in the Conda environment `portfolio`.

```bash
# 1. Activate the conda environment
conda activate portfolio

# 2. Start the local development server
npm run dev
```

Open `http://localhost:4321` in your browser.

---

## 📁 Content Management (`src/content/`)

### 1. Research Manuscripts (`src/content/publications/`)
Add a new markdown file:
```yaml
---
title: "Paper Title"
authors: ["Shlok Mehndiratta", "Co-author Name"]
venue: "IEEE Transactions on Signal Processing"
year: 2026
status: "under-review" # "published" | "under-review" | "preprint" | "in-preparation"
takeaway: "1-sentence core scientific breakthrough"
abstract: "Full abstract text..."
pdfUrl: "/papers/your-paper.pdf"
codeUrl: "https://github.com/shlokmehndiratta/repo"
bibtex: |
  @article{...}
featured: true
tags: ["Signal Processing", "Graph Theory"]
order: 1
---
```

### 2. Notebook Entries (`src/content/notebook/`)
Add a new markdown file:
```yaml
---
title: "Title of Exploration"
publishedDate: 2026-10-15
type: "deep-dive" # "deep-dive" | "heuristic" | "paper-note" | "bookshelf"
readTime: "6 min read"
summary: "Brief synopsis."
tags: ["Optimization", "Mathematics"]
draft: false
---

Content goes here. Supports KaTeX math ($...$ and $$...$$) and code blocks.
```

### 3. Archive Captures (`src/content/archive/`)
Add a new visual capture:
```yaml
---
title: "Laser Fringe Patterns"
date: 2026-03-15
imageUrl: "https://... or /archive/image.jpg"
caption: "Description of the encounter."
location: "IISER Bhopal, CIF"
instrument: "He-Ne Laser 632.8nm"
category: "optics" # "lab" | "optics" | "geometry" | "life"
aspectRatio: "16/10"
order: 1
---
```

---

## ⌨️ Micro-Interactions

- **Keyboard Navigation (`Cmd+K` / `?`)**: Press `R` for Research, `E` for Experience, `N` for Notebook, `A` for Archive, `U` for Resume, `T` for Theme toggle.
- **Ambient Fourier Canvas**: Interactive sine wave harmonics modulating subtly on cursor proximity.
- **1-Click BibTeX Drawer**: Copies citations directly to the clipboard with visual confirmation (`Copied! ✓`).
- **Clean Resume Print**: `Cmd+P` on `/resume` strips navigation and formats as an academic document.

---

## 🌐 Deployment to Custom Domain

### GitHub Pages (Automated)
Push this repository to GitHub:
```bash
git remote add origin https://github.com/shlokmehndiratta/shlokmehndiratta.me.git
git push -u origin main
```
In your GitHub repo settings, go to **Settings → Pages → Build and deployment → Source → GitHub Actions**. Every push will automatically deploy to `shlokmehndiratta.me`.
