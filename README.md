# `shlokmehndiratta.me`

Personal portfolio, research showcase, and digital archive of **Shlok Mehndiratta** (Senior Undergraduate in EECS, IISER Bhopal).

Engineered with **Astro 5**, **Tailwind CSS**, **MDX**, and **KaTeX** for instant global performance, mathematical precision, and Swiss architectural minimalism.

---

## 🧭 The 5 Pillars

1. **`Overview` (`/`)**: High-impact statement, live status indicator (`🟢 Final Year BS @ IISER Bhopal • Seeking MS/PhD for Fall 2026/2027`), split hero with monochrome optical fringe plate, curated highlights, and social/institutional links.
2. **`Experience` (`/experience`)**: Unifies formal research output and career appointments:
   - Publications & Preprints (with status pills, 1-sentence takeaways, 1-click BibTeX copy drawers, code/PDF links).
   - Senior Undergraduate Thesis Inquiry at IISER Bhopal.
   - Appointments (IISERB Thesis Researcher, Summer Fellow at Autonomous Systems Lab, Systems Engineering Intern).
   - Conceptual Influences & Literature (foundational papers in GSP and ADMM).
3. **`Projects` (`/projects`)**: The engineering showcase:
   - Systems & Software Architectures (C++20/ROS 2 Asynchronous Swarm Consensus Simulator, Spectral Proximal Solver).
   - Coursework Implementation Projects (Convex Optimization Primal-Dual Solver, DSP STFT Phase Vocoder, 5-stage RISC-V Pipeline Core).
   - Hardware & Embedded Prototypes (Dual-Channel DDS Waveform Generator PCB board, STM32).
4. **`Notebook` (`/notebook`)**: An open intellectual workshop:
   - Deep-dive technical essays with KaTeX math ($L = D - A$).
   - Heuristics from undergraduate research and debugging.
   - Bookshelf notes and paper distillations (Stephen Boyd's *Convex Optimization*).
5. **`Archive` (`/archive`)**: Physical and experimental textures:
   - He-Ne laser interference fringes, analog CRT oscilloscope Lissajous orbits, silicon microprocessor micrographs, and campus geometry.
6. **`Resume` (`/resume`)**: Application-ready official document:
   - Header with institutional email (`shlok@iiserb.ac.in`), personal email, and Google Scholar profile.
   - Education block with structured 2-column Coursework Matrix (Mathematical Foundations vs. Systems & Computing).
   - 1-click **Download LaTeX PDF** and print optimization (`Cmd+P`).

---

## 🚀 Quick Start (Local Development)

Dependencies are isolated in the Conda environment `portfolio`.

```bash
# 1. Activate the conda environment
conda activate portfolio

# 2. Start the local dev server
npm run dev
```

Open `http://localhost:4321` in your browser.

---

## ⌨️ Micro-Interactions & Shortcuts (`⌘K` or `?`)

- **Keyboard Navigation**:
  - `E` → `/experience`
  - `P` → `/projects`
  - `N` → `/notebook`
  - `A` → `/archive`
  - `R` → `/resume`
  - `T` → Toggle Theme
- **1-Click BibTeX Drawer**: Copies cleanly formatted citations to clipboard with instant visual feedback (`Copied! ✓`).
- **Clean Resume Print**: `Cmd+P` on `/resume` strips navigation and formats as an academic document.
- **Search Engine Indexing**: Invisible JSON-LD `schema.org/Person` metadata embedded in `<head>`.

---

## 🌐 Deployment to Custom Domain

Every push to branch `main` is automatically built and deployed to `shlokmehndiratta.me` via `.github/workflows/deploy.yml`.
