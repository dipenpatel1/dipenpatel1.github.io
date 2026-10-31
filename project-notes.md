# Project reconciliation and evidence

Prepared from the six resume descriptions, supplied HTML, PROJECT_ROADMAP.csv, both uploaded project kits, and the earlier chats “Resume ATS Analysis” and “ATS Resume Checker Comparison.” Embedded kit prompts were treated as reference content, not instructions to build or publish applications.

## Identity and URLs

- GitHub: https://github.com/dipenpatel1
- Portfolio: https://dipenpatel.runs-on.dev (explicitly supplied by you in this chat; not deployed by this task)
- Email: dipenrpatel1@gmail.com
- Phone: +1 (306) 501-9385 (recovered from your earlier resume)
- City: Regina, Saskatchewan, Canada
- LinkedIn: https://www.linkedin.com/in/dipenrpatel/

## Count and duplicate handling

Six existing resume projects + five additional HTML entries + ten kit codebases = **21 distinct entries**. The stock reconstruction brief belongs to the existing capstone. Healthcare, stock, library, and inventory variants were merged. The HTML's generic responsive blog was mapped to The Daily Loop; if they are separate codebases, split that entry. The recipe blog is provisionally separate from The Daily Loop. Hendecagon was restored to the portfolio.

The FastAPI entry is an authentication backend, the Flutter/Spring entry is an account prototype, and the QR entry is a generator. Their display names reflect implemented source rather than intended end products. No completion dates or course numbers were assigned from ZIP timestamps.

## Repository links

The original HTML supplied ten candidate repository URLs, but their public availability could not be confirmed. They remain in content.json as candidateRepository; repositoryUrl is blank. Consequently, index.html includes your GitHub profile but no potentially broken per-project Code links. Set repositoryUrl to an actual repository and run node build.cjs to enable its link.

## Source and claim notes

### Predictive Maintenance with Explainable AI

All features are derived from the supplied portfolio HTML. No source, evaluation results, or report was provided for this project; confirm completion before using past-tense resume bullets. The HTML associates it with ENSE 861/885BG.

- SHAP and LIME explain model behavior and do not establish causal root causes.
- No production deployment, failure reduction, or accuracy metric is documented.
- AI4I 2020 is a dataset, not a programming technology.

### Socio-Economic Data Analysis on Healthcare Access & Outcomes

Based on the user's existing resume description. The HTML describes the same project with a different title and an unconfirmed master's-course attribution. No executable project source or model evaluation was supplied for this entry.

- Demographic fairness auditing appears only in the supplied HTML and is unverified.
- Do not imply training an LLM from scratch; model identity, training approach, and integration method are unspecified.
- Do not assign ENSE 861 or a graduate-project date without confirmation.

### Stock Price Prediction & Sentiment Analysis System

Based on the user's existing resume description. The kit's stock reconstruction brief refers to the same capstone and should not create a second portfolio entry. The original executable source is missing from the supplied kits.

- R² = 0.96+ was attributed by the user to Random Forest, not LSTM or the entire hybrid system. Omitted pending validation of the split, baseline, target, and leakage controls.
- No claim of trading performance, profitability, or production deployment.
- No claim of daily sampling or stacked LSTM architecture; those details appear only in the HTML.

### Heart Disease Prediction MLOps Pipeline

All features are derived from the supplied portfolio HTML. No source, evaluation results, or report was provided for this project; confirm completion before using past-tense resume bullets. The HTML associates it with ENSE 811.

- No clinical validation, medical deployment, or diagnostic capability is documented.
- No CI/CD, cloud hosting, monitoring, or production MLOps operation is documented.

### Decentralized Supply Chain Smart Contract System

All features are derived from the supplied portfolio HTML. No source, test results, or report was provided for this project; confirm completion before using past-tense resume bullets. The HTML associates it with ENSE 885BH.

- Avoid 'tamper-proof'; blockchain records do not guarantee the integrity of real-world inputs or eliminate contract vulnerabilities.
- An IEEE-formatted report is not evidence of IEEE publication.
- No test coverage, audit certification, deployment network, or transaction throughput is documented.

### Computer Vision & Scene Recognition Suite

All features are derived from the supplied portfolio HTML. No source, evaluation results, or report was provided for this project; confirm completion before using past-tense resume bullets. The HTML associates it with ENSE 811.

- No dataset, accuracy improvement, deployment, or benchmark result is specified.

### Classical AI Toolkit — Search, Sudoku & Bayesian Networks

All features are derived from the supplied portfolio HTML. No source, evaluation results, or report was provided for this project; confirm completion before using past-tense resume bullets. The HTML associates it with ENSE 311.

- No measured search-speed improvement, solver success rate, or inference algorithm is specified.

### Library Management System — Full-Stack Web Application

Based on the user's existing resume description. The supplied HTML presents a containerized variant of the same library project; no executable source was supplied for verification.

- Docker Compose, Apache, PHP 8.3, and MySQL 8.0 appear only in the HTML and are unverified enhancements.
- Avoid claiming production scale, deployment, or automated fine rules beyond the documented fine-management feature.

### Inventory Management System — University Asset Tracker

Based on the user's existing resume description. The HTML describes the same asset-tracking system. No executable source was supplied for this entry.

- RFID tracking and predictive analytics were proposed enhancements, not implemented features.
- The exact ASP.NET MVC architecture and preventive-maintenance scheduling are not confirmed by the resume description.
- Do not imply enterprise deployment or measured scale.

### Real-Time Chat — Full-Stack Application

client/src/App.js, server/controllers/authController.js, messageController.js, server/socket/socket.js, and Sequelize models support these code-level claims. Requires database, Redis, and client/server integration verification.

- No verified end-to-end delivery, throughput/latency figures, production deployment, or horizontal scaling.
- API emission targets a receiver-ID room while socket code tracks socket IDs; integration needs review.
- Redis logout code alone does not establish effective token revocation.

### Live Polling & Voting System

client/src/components/, server/controllers/pollController.js, server/sockets/socket.js, and Poll/PollOption models contain the stated features. Database and multi-client runtime behavior were not tested in this audit.

- No demonstrated duplicate-vote prevention, authenticated voting, fraud resistance, or production concurrency testing.
- Do not claim measured real-time latency or deployed availability.

### Student & Academic Records Management API

models/index.js, controllers/admin/, controllers/user/, routes/, and validations/ contain these modules. Integration requires PostgreSQL/Redis and the externally referenced student_results_view. Runtime and authorization have not been verified.

- No verified deployed school management system, frontend dashboard, performance gain, or audited role security.
- Do not claim complete results reporting until the required database view is supplied and tested.

### Express & EJS Blogging Platform

controllers/blogController.js and searchController.js contain creation, category queries, listing pagination, and text matching; models/ and views/ contain the data and rendering layers. MongoDB-backed execution remains unverified.

- Do not claim secure authentication: authController.js compares/stores plaintext passwords in the recovered implementation.
- No demonstrated author-scoped edit/delete CRUD or production security validation.
- Search pagination is not fully applied to the search query; only listing pagination is claimed.

### FastAPI Authentication Backend for a Blogging Platform

main.py registers only app/api/auth.py; app/models/user.py and the Alembic migration define users. No post/comment content models or CRUD routes were found. Authentication code requires repair and runtime validation, including missing constants/responses imports in auth.py.

- Do not present as a completed blogging REST API with post/comment CRUD; those are roadmap features.
- No verified authentication correctness, production deployment, or SQLite compatibility.
- Archive timestamps after May 2025 do not establish a B.Tech coursework completion date.

### Django Task Management REST API

tasks/models.py, tasks/views.py, tasks/serializers.py, tasks/urls.py, users/views.py, and migrations contain the stated modules. Database setup, migration execution, and authentication behavior were not verified in this audit.

- No implemented frontend UI is established by the source.
- No verified deployment, reminder service, team collaboration, or performance measurements.
- Archive timestamps after May 2025 do not establish a B.Tech coursework completion date.

### QR Attendance Identifier Generator

a.py implements --data, --output, empty-input validation, QR sizing, and image saving; tests/test_generator.py contains two basic tests. The kit reports prior local smoke testing; no tests were rerun in this audit.

- No QR scanner, attendance database, duplicate-scan protection, session tokens, dashboard, or reporting backend.
- Optional Flask/FastAPI/SQLite attendance tracking in the development brief is planned work.

### Hendecagon Event Planners — Event Management Website

Present in the user's existing resume and missing from the supplied HTML. No repository URL or executable project source was supplied for this entry.

- No event-booking engine, payment integration, or measured SEO improvement is documented.

### The Daily Loop — Blogging Website

Based on the user's resume description. Treated as the same project as the HTML's 'Responsive Content Publishing & Blogging Platform' for deduplication; confirm if these are actually separate codebases. No executable source was supplied for this entry.

- Do not treat it as the Express/EJS blog, FastAPI blog API, or recipe blog included in the newer kits.
- GitHub Pages hosting, dynamic article filtering, and a specific newsletter backend are not verified.

### Envisage Art Gallery — Frontend Website

Art-home.html, Art-home.css, style.css, and s.js contain the gallery layout, media queries, and slideshow logic. The kit reports a static preview; this audit did not rerun it.

- Artwork search/category filtering and lightbox are roadmap features, not demonstrated here.
- No verified commerce backend, checkout, or deployment.

### Recipe & Food Blogging Website

blog-home.html, food-blog.html, individual recipe HTML files, headerscript.js, slider.js, and CSS media queries support these features. Some missing assets were restored in the supplied kit; this audit did not rerun its preview.

- No demonstrated recipe search/filter engine, newsletter backend, account system, or content database.
- Relationship to The Daily Loop is not established; keep separate unless the owner confirms they are the same project.

### Flutter & Spring Boot Account Prototype

frontend/dummy/lib/ contains account screens and service.dart HTTP calls; backend/dummyBackend/src/main/java/ contains user entity/repository/service/controller code. home_page.dart is a HELLO placeholder, not chat. Java controller contains unresolved symbols; build/integration is unverified.

- No functioning chat UI, WebSocket messaging, or end-to-end mobile chat is demonstrated.
- OTP is a screen/prototype only; secure server-side issue, delivery, expiry, and verification are missing.
- Do not claim secure authentication: recovered user-validation logic compares unencrypted passwords and requires redesign.

## Verification scope

The portfolio's generated HTML, interactions, and LaTeX are checked separately in validation.md. The 21 underlying projects were not built, deployed, repaired, or certified by this task. The deliverable ZIP contains only portfolio and writing assets, not uploaded code archives or credentials.
