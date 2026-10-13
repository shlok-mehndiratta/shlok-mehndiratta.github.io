# `shlokmehndiratta.me`

Personal academic portfolio, research showcase, and living digital archive of **Shlok Mehndiratta** (BS in EECS, IISER Bhopal).

Built with **Astro 5**, **Tailwind CSS**, **MDX**, and **KaTeX** for high performance, sub-second global loading, and clean typography.

---

## 🚀 Quick Start (Local Development)

The project dependencies are managed inside an isolated Conda environment named `portfolio`.

```bash
# 1. Activate the conda environment
conda activate portfolio

# 2. Start the local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

---

## 📁 Content Architecture

All your content is decoupled from code and stored in `src/content/`:

### 1. Publications & Preprints (`src/content/publications/`)
Add a new `.md` file with frontmatter:
```yaml
---
title: "Paper Title"
authors: ["Shlok Mehndiratta", "Co-author Name"]
venue: "IEEE Transactions on Signal Processing"
year: 2026
status: "under-review" # "published" | "under-review" | "preprint" | "in-preparation"
abstract: "Summary abstract..."
pdfUrl: "/papers/your-paper.pdf" # Place PDFs in public/papers/
codeUrl: "https://github.com/shlokmehndiratta/repo"
bibtex: |
  @article{...}
featured: true
tags: ["Signal Processing", "Optimization"]
order: 1
---
```

### 2. Digital Garden & Essays (`src/content/writing/`)
Add a new `.md` or `.mdx` file:
```yaml
---
title: "Article Title"
publishedDate: 2026-10-15
stage: "budding" # "seedling" 🌱 | "budding" 🌿 | "evergreen" 🌲
summary: "Brief 1-sentence synopsis."
tags: ["Graph Theory", "Linear Algebra"]
draft: false
---

Content goes here. Math formulas work natively with LaTeX ($E = mc^2$ and block equations with $$...$$).
```

### 3. Visual Gallery & Field Notes (`src/content/gallery/`)
Add a new visual capture:
```yaml
---
title: "Interferometry Fringe Pattern"
date: 2026-03-15
imageUrl: "https://... or /gallery/photo.jpg"
caption: "Description of the encounter."
location: "IISER Bhopal, CIF"
category: "lab" # "lab" | "geometry" | "encounters" | "generative"
aspectRatio: "16/10"
order: 1
---
```

---

## ⌨️ Built-in Micro-Interactions

- **Keyboard Navigation (`Cmd+K` / `?`)**: Fast shortcut overlay to jump to Research, Writing, Gallery, Now, CV, or toggle themes.
- **Theme Persistence**: Light and Dark mode toggle with anti-flash script (`localStorage` saved).
- **Interactive Signal Canvas**: Subtle Fourier harmonic wave on the homepage reacting gently to mouse movement.
- **BibTeX Drawer**: One-click citation copy button on all publication cards with instant feedback (`Copied! ✓`).
- **Clean CV Printing**: Pressing `Cmd+P` on `/cv` strips nav bars and formats as a clean academic document.

---

## 🌐 Deployment & Custom Domain Hosting

### Option A: GitHub Pages (Automated)
1. Push this repository to GitHub: `git remote add origin https://github.com/shlokmehndiratta/shlokmehndiratta.me.git`
2. In your GitHub repo settings: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` will automatically build and publish to your custom domain `shlokmehndiratta.me`.

### Option B: Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select your repository.
3. Build configuration:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add custom domain `shlokmehndiratta.me`.
