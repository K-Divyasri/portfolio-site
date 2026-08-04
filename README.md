# Portfolio site

A single-page portfolio: hero, about, capability, experience timeline,
selected work, a searchable and filterable archive of every project across
all six tracks, publications, and contact. Plain HTML, CSS, and vanilla
JavaScript. No build step, no framework, no external script dependency
beyond Google Fonts, so it runs exactly the same wherever it ends up hosted.

## Run it locally

```powershell
cd portfolio-site
python -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` directly by
double-clicking it also works for a quick look, though a couple of browsers
restrict `fetch`-style requests under `file://`; this site does not use any,
so either way is fine.

## File map

```
portfolio-site/
├── index.html          all page structure and copy
├── css/style.css        design system, layout, animation
├── js/
│   ├── projects-data.js  the full project archive (edit this to add/change projects)
│   └── main.js           nav, scrollspy, reveal animations, archive filter/search
└── assets/resume/        all 8 resume variants, downloadable from the nav
```

## Adding or editing a project

Everything in the "Full Archive" and "Selected Work" sections is generated
from one array in `js/projects-data.js`. To add a project, add one object:

```js
{ title: "Project Name", track: "ai", desc: "One clean sentence, no em dashes.", tags: ["Tool", "Technique"], metric: "optional real number", featured: true }
```

`track` must be one of `ai`, `data`, `quant`, `hardware`, `health`,
`product`, matching `TRACK_META` in the same file. `metric` and `featured`
are both optional. Nothing else needs to change. The filter pill counts,
the "N projects" badge, and the featured grid all update automatically.

## Hosting it for free

This is a static site, so any of these work with zero configuration beyond
pointing the host at this folder.

### Option A: GitHub Pages (simplest, and you already have a GitHub)

```powershell
cd portfolio-site
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/K-Divyasri/portfolio.git
git push -u origin main
```

Then on GitHub: **Settings > Pages > Source: Deploy from a branch > main /
(root)**. The site goes live at `https://k-divyasri.github.io/portfolio/`
within a minute or two of the push.

### Option B: Netlify or Vercel

Both let you drag the `portfolio-site` folder straight into their web
dashboard for an instant deploy, or connect the GitHub repo above for
auto-deploys on every push. No build command needed. Leave the publish
directory as the repo root.

### Option C: Cloudflare Pages

Same idea: connect the repo, leave the build command empty, set the output
directory to `/`.

## A note on the resume downloads

The nav's Resume dropdown links straight to the `.docx` files in
`assets/resume/`. If a resume gets updated, just overwrite the matching
file in that folder, the filenames the site links to do not need to change.
