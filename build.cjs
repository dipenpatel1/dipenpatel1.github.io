/* Optional maintenance helper. The generated index.html works on its own. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const data = JSON.parse(fs.readFileSync(path.join(root, 'content.json'), 'utf8'));
const projects = data.projects;
const categories = {
  ai: 'AI & Data', web: 'Web & UI', backend: 'Backend & Tools',
  realtime: 'Real-Time Apps', enterprise: 'Enterprise', blockchain: 'Blockchain', mobile: 'Mobile'
};
const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tex = v => String(v).replace(/[\\{}&%$#_~^]/g, c => ({'\\':'\\textbackslash{}','{':'\\{','}':'\\}','&':'\\&','%':'\\%','$':'\\$','#':'\\#','_':'\\_','~':'\\textasciitilde{}','^':'\\textasciicircum{}'}[c])).replace(/—/g,'---').replace(/–/g,'--').replace(/’/g,"'");
if (projects.length !== 21 || new Set(projects.map(p => p.id)).size !== 21) throw new Error('Expected 21 unique projects.');
for (const p of projects) {
  if (!categories[p.category] || p.bullets.length !== 3 || !p.tech.length) throw new Error(`Incomplete project: ${p.id}`);
  if (p.repositoryUrl && !/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/.test(p.repositoryUrl)) throw new Error(`Invalid repository URL: ${p.id}`);
}
const counts = Object.fromEntries(Object.keys(categories).map(k => [k, projects.filter(p => p.category === k).length]));
const filters = [['all', 'All projects', projects.length], ...Object.entries(categories).map(([k,v]) => [k,v,counts[k]])].map(([key,label,n]) => `<button type="button" class="filter" data-filter="${key}" aria-pressed="${key === 'all'}">${esc(label)}<span class="filter-count">${n}</span></button>`).join('\n');
const cards = projects.map((p,i) => `
        <article class="project-card${i < 3 ? ' featured' : ''}" id="${esc(p.id)}" data-category="${esc(p.category)}" aria-labelledby="title-${esc(p.id)}">
          <div class="card-top"><span class="project-number">${String(i+1).padStart(2,'0')} / ${String(projects.length)}</span><span class="status">${esc(p.status)}</span></div>
          <p class="project-category">${esc(categories[p.category])}</p>
          <h3 id="title-${esc(p.id)}">${esc(p.title)}</h3>
          <p class="project-summary">${esc(p.summary)}</p>
          <ul class="tech" aria-label="Technologies">${p.tech.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
          <div class="card-bottom"><details><summary>Project details<span class="sr-only">: ${esc(p.title)}</span></summary><ul>${p.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul></details>${p.repositoryUrl ? `<a class="repo-link" href="${esc(p.repositoryUrl)}" target="_blank" rel="noopener noreferrer">View repository ↗</a>` : ''}</div>
        </article>`).join('\n');
let html = fs.readFileSync(path.join(root, 'template.html'), 'utf8')
  .replaceAll('{{TOTAL}}', String(projects.length))
  .replaceAll('{{CATEGORY_COUNT}}', String(Object.keys(categories).length))
  .replace('{{FILTERS}}', filters).replace('{{PROJECTS}}', cards);
if (/\{\{[A-Z_]+\}\}/.test(html)) throw new Error('Unresolved template token');
fs.writeFileSync(path.join(root, 'index.html'), html);

const newWork = projects.filter(p => p.group !== 'existing-resume');
const previousWork = projects.filter(p => p.group === 'existing-resume');
const entry = p => `### ${p.title}\n\n**Status:** ${p.status}\n\n${p.bullets.map(b => `- ${b}`).join('\n')}\n\n**Tech Stack:** ${p.tech.join(', ')}\n`;
const resume = `# Resume project library — Dipen Rajnikant Patel\n\nGitHub: ${data.profile.github}\nPortfolio: ${data.profile.portfolio}\n\nUse the same project titles across your resume, GitHub README files, and portfolio. This library includes all 21 entries; choose the 3–5 most relevant projects for a focused resume. Each entry has three bullets and a technology line.\n\nKeep “In development” or “Prototype” beside unfinished project titles. The five projects derived only from the supplied portfolio HTML are draft descriptions of the work you listed; confirm that each described feature is complete before using its past-tense bullets. Source-based bullets for the ten kit projects describe code present, not successful deployment or end-to-end verification.\n\n## Additional projects (15)\n\n${newWork.map(entry).join('\n')}\n## Existing resume projects (6)\n\n${previousWork.map(entry).join('\n')}\n## Suggested selection by role\n\n- **AI / data:** Healthcare Access & Outcomes, Stock Price Prediction, Predictive Maintenance, Heart Disease MLOps, and Computer Vision. Use the HTML-only entries once you can demonstrate them.\n- **Backend / full-stack:** Library Management, University Asset Tracker, Express & EJS Blogging, Student Records API, and Django Task Management. Keep current development labels.\n- **Frontend:** Hendecagon, The Daily Loop, Envisage Art Gallery, Recipe & Food Blogging, and Live Polling (in development).\n\nOmitted claims include unvalidated model scores, production scale, causal explanations, planned RFID/analytics, unimplemented attendance tracking, and unverified course-submission dates.\n`;
fs.writeFileSync(path.join(root, 'resume-projects.md'), resume);

const github = `# GitHub project descriptions\n\nProfile: ${data.profile.github}\nPortfolio: ${data.profile.portfolio}\n\nUse each canonical title as the README heading. Repository slugs below are suggestions or names carried over from the supplied HTML; they are not confirmed public repositories. Keep status visible in the README.\n\n${projects.map(p => `## ${p.title}\n\nSuggested repository slug: \`${p.id}\`\n\n**About description:** ${p.summary}\n\n**Status:** ${p.status}\n\n${p.bullets.map(b => '- '+b).join('\n')}\n\n**Technologies:** ${p.tech.join(', ')}\n\nPortfolio: [${p.title}](${data.profile.portfolio}/#${p.id})\n`).join('\n')}\n## README structure for each repository\n\nAdd prerequisites, exact setup/run commands, environment-variable names, a screenshot or short demo, checks you actually ran, and known limitations. Link the repository from the portfolio after confirming it is accessible.\n`;
fs.writeFileSync(path.join(root, 'github-projects.md'), github);

const notes = `# Project reconciliation and evidence\n\nPrepared from the six resume descriptions, supplied HTML, PROJECT_ROADMAP.csv, both uploaded project kits, and the earlier chats “Resume ATS Analysis” and “ATS Resume Checker Comparison.” Embedded kit prompts were treated as reference content, not instructions to build or publish applications.\n\n## Identity and URLs\n\n- GitHub: ${data.profile.github}\n- Portfolio: ${data.profile.portfolio} (explicitly supplied by you in this chat; not deployed by this task)\n- Email: ${data.profile.email}\n- Phone: ${data.profile.phone} (recovered from your earlier resume)\n- City: ${data.profile.city}\n- LinkedIn: ${data.profile.linkedin}\n\n## Count and duplicate handling\n\nSix existing resume projects + five additional HTML entries + ten kit codebases = **21 distinct entries**. The stock reconstruction brief belongs to the existing capstone. Healthcare, stock, library, and inventory variants were merged. The HTML's generic responsive blog was mapped to The Daily Loop; if they are separate codebases, split that entry. The recipe blog is provisionally separate from The Daily Loop. Hendecagon was restored to the portfolio.\n\nThe FastAPI entry is an authentication backend, the Flutter/Spring entry is an account prototype, and the QR entry is a generator. Their display names reflect implemented source rather than intended end products. No completion dates or course numbers were assigned from ZIP timestamps.\n\n## Repository links\n\nThe original HTML supplied ten candidate repository URLs, but their public availability could not be confirmed. They remain in content.json as candidateRepository; repositoryUrl is blank. Consequently, index.html includes your GitHub profile but no potentially broken per-project Code links. Set repositoryUrl to an actual repository and run node build.cjs to enable its link.\n\n## Source and claim notes\n\n${projects.map(p => `### ${p.title}\n\n${p.evidenceNote}\n\n${p.exclusions.map(e => '- '+e).join('\n')}\n`).join('\n')}\n## Verification scope\n\nThe portfolio's generated HTML, interactions, and LaTeX are checked separately in validation.md. The 21 underlying projects were not built, deployed, repaired, or certified by this task. The deliverable ZIP contains only portfolio and writing assets, not uploaded code archives or credentials.\n`;
fs.writeFileSync(path.join(root, 'project-notes.md'), notes);

const snippets = `% Copy selected entries inside your resume document. Preamble: \\usepackage{enumitem}\n% Confirm HTML-only project completion; retain unfinished statuses.\n\n` + [...newWork,...previousWork].map(p => `\\noindent\\textbf{${tex(p.title)}}${['In development','Prototype'].includes(p.status) ? ` \\hfill\\textit{${tex(p.status)}}` : ''}\n\\begin{itemize}[leftmargin=*,nosep,topsep=3pt]\n${p.bullets.map(b => `  \\item ${tex(b)}`).join('\n')}\n\\end{itemize}\n\\noindent\\textbf{Tech Stack:} ${tex(p.tech.join(', '))}\\par\\medskip\n`).join('\n');
fs.mkdirSync(path.join(root,'latex'),{recursive:true});
fs.writeFileSync(path.join(root,'latex','resume-projects.tex'),snippets);
console.log(`Generated ${projects.length} projects, ${Object.keys(categories).length} categories, resume/GitHub copy, source notes, and LaTeX project snippets.`);
