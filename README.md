# Dipen Patel — portfolio and resume kit

GitHub: https://github.com/dipenpatel1  
Portfolio: https://dipenpatel.runs-on.dev

## Files to use

- **index.html** — complete standalone portfolio, with 21 consolidated project entries. Open locally or place at your static site's document root. All CSS, project cards, and JavaScript are inline; no installation or CDN is required.
- **resume-projects.md** — all 21 resume entries, grouped as 15 additions and six existing projects, with three bullets and a technology line each.
- **github-projects.md** — matching project titles, descriptions, proposed repository slugs, and README content.
- **latex/contact-header.tex** — contact block for your existing LaTeX resume.
- **latex/resume-projects.tex** — copy selected project entries into a LaTeX resume.
- **latex/main.tex** — compilable contact-header and project-library example; it is intentionally a multi-page reference, not a one-page resume.
- **project-notes.md** — reconciliation, source limitations, and naming assumptions.
- **validation.md** — checks performed for this delivery.

## Use the HTML in your repository

Copy `index.html` to the root your static host serves, preserving a copy of any existing file. It also works directly from disk. The site includes your existing contact details, academic background, industry roles, skills, project search, category filters, expandable details, and blue/amber/green accents.

The canonical URL is your supplied `https://dipenpatel.runs-on.dev/`. No hosting settings, GitHub repositories, DNS records, or live website were changed by this task.

Only the HTML is needed to display the site. `content.json`, `template.html`, and `build.cjs` are optional maintenance files. The original kits are not part of this delivery.

## Keep the platforms consistent

`content.json` stores canonical project names, status, summaries, bullets, and technologies. The generated HTML contains the same content, so it does not fetch JSON and works offline. To regenerate after changing the content or template, run:

```sh
node build.cjs
```

This updates `index.html`, the Markdown project library, GitHub copy, source notes, and `latex/resume-projects.tex`. Edit the template for layout changes; direct edits to generated files will be overwritten when rebuilding. Contact details in the template and LaTeX header are static and should also be updated if they change.

Per-project repository URLs from the old HTML could not be verified. Candidate URLs are retained as `candidateRepository`, while active `repositoryUrl` values are blank. Set `repositoryUrl` to a confirmed public GitHub repository and rebuild to display its Code link. Your profile link is already active.

## Using the resume text

Choose the most relevant 3–5 projects rather than placing all 21 on a short resume. Keep “In development” and “Prototype” beside unfinished titles. The five HTML-only academic entries retain the work you described; confirm their features before using their past-tense bullets. No new accuracy scores, deployment claims, course assignments, or completion dates have been invented.

The Daily Loop is provisionally merged with the old HTML's generic responsive blogging entry. The recipe website remains separate. If those are actually the same project, merge them in `content.json` and update the count assertion in `build.cjs` before rebuilding.

To use the contact block, add `\usepackage[hidelinks]{hyperref}` to your LaTeX preamble, then paste the block from `latex/contact-header.tex` inside your document. The example uses visible URLs for LinkedIn, GitHub, and your portfolio.
