# Portfolio Enhancement Plan

## Recommended direction

Position the site primarily as **Technical Product Owner & Laravel Backend Engineer building AI-powered automation**, with role-specific emphasis for Product, Engineering, and Account/Client Success applications. The homepage should prove impact through verified case studies rather than trying to reproduce every CV.

The five supplied PDFs are treated only as résumé evidence. Claims in `public/CV.md` that are absent from those PDFs—such as the Apr 2023 BDAIAT start date, Collection 46, trainee work, GED wording, and 30% growth—must remain excluded until explicitly verified.

## Current project vs. CVs

### Already represented

- Laravel/PHP, REST APIs, MySQL, queues, AI/RAG, OCR, and third-party integrations.
- RFQ automation, ticketing, logistics, trading dashboard, and restaurant chatbot projects.
- Education history, WhatsApp contact, and a responsive one-page portfolio structure.

### Material gaps

- The current Technical Product Owner role (Apr 2025–present) is missing.
- The site underrepresents requirements, user stories, sprint/backlog work, stakeholder communication, and cross-functional delivery.
- The strongest evidence—nearly 90% RFQ automation and about 10 minutes reduced to about 20 seconds—is not prominent.
- AI Workflow Bot Builder and Kites Keeper HR are missing.
- Projects are generic unavailable cards rather than evidence-based case studies.
- Skill percentages are unsupported and should become grouped capabilities.
- Contact contains a placeholder email and a nonfunctional form.
- The Markdown CV conflicts with the supplied PDFs and uses a fragile print implementation.
- Accessibility, SEO, metadata, imagery, and mobile navigation need production polish.

## Decisions required before development (P0)

1. Confirm the hybrid homepage positioning or choose Product Owner / Backend Engineer as the primary target.
2. Confirm the public GitHub and LinkedIn URLs and which phone number should be primary.
3. Approve which company/client names, metrics, screenshots, architecture details, and project names may be public.
4. Confirm whether the University of Alberta specialization should appear.
5. Confirm which role-specific CV PDFs should be downloadable.
6. Resolve whether any facts found only in `public/CV.md` should be restored.

## Implementation roadmap

### P1 — Create one verified content source

Move hardcoded facts into a shared content model so pages and CVs cannot drift:

- `app/content/profile.js`
- `app/content/experience.js`
- `app/content/skills.js`
- `app/content/projects.js`
- `app/content/education.js`
- `app/content/site.js`

Model verified contacts, role/date history, grouped capabilities, approved metrics, confidentiality levels, links, media, and `hybrid`, `product`, and `backend` presentation variants. Variants may change ordering and emphasis, never facts.

### P2 — Rebuild the information architecture around evidence

Recommended homepage order:

1. Hero with hybrid positioning and clear case-study, CV, and contact actions.
2. Impact strip: 90% automation, 10 minutes to 20 seconds, ZATCA readiness, and Saudi–China logistics—only where approved.
3. Experience split into Technical Product Owner (Apr 2025–present) and Full-Stack Developer (Apr 2024–Apr 2025).
4. Capabilities grouped as Product Delivery, Laravel Backend, AI & Automation, and Integrations.
5. Sanitized case studies structured as problem → role → solution/workflow → outcome → stack.
6. Education and selected learning.
7. Contact and footer.

Prioritize RFQ, ticketing, logistics, restaurant chatbot, AI Workflow Bot Builder, and Kites Keeper. Use architecture diagrams or sanitized screenshots for confidential work and replace false `#` demos with honest private-case-study states.

Critical existing files:

- `app/page.js`
- `app/components/Hero.jsx`
- `app/components/Experience.jsx`
- `app/components/Skills.jsx`
- `app/components/Projects.jsx`
- `app/components/Education.jsx`
- `app/components/Contact.jsx`
- `app/components/Footer.jsx`
- `app/components/Sidebar.jsx`

Useful additions:

- `app/components/ImpactMetric.jsx`
- `app/components/CaseStudyCard.jsx`
- `app/components/CapabilityGroup.jsx`
- `app/components/ContactActions.jsx`
- `app/components/motion/Reveal.jsx`
- `app/projects/[slug]/page.js` for approved detailed case studies

### P3 — Fix conversion paths and accessibility

- Replace the placeholder email immediately; show verified email, GitHub, LinkedIn, WhatsApp, and approved phone.
- Remove the form until delivery exists, or implement `app/api/contact/route.js`/a server action with validation, accessible status messages, spam controls, rate limiting, and server-only credentials.
- Add `<main>`, a skip link, unique section IDs, and fix the broken `#home` link.
- Make the sidebar scroll-aware and the mobile navigation keyboard-operable with focus management, Escape close, and focus return.
- Add visible focus states, good contrast, meaningful alt text, and reduced-motion support.
- Remove the duplicated project overlay and isolate client-side motion/interaction into small components.

### P4 — Improve visual evidence and performance

- Replace missing `public/images/projects/wordpress.jpg` references.
- Create sanitized project-specific screenshots or diagrams instead of reusing generic images.
- Resize/compress the 1.55 MB profile image and serve appropriately sized WebP/AVIF assets.
- Reserve image dimensions, lazy-load below-fold media, and keep only the hero image high priority.
- Establish a consistent visual system for typography, spacing, color, cards, buttons, and case-study diagrams; either finish dark mode or remove the incomplete dark-mode variables.

### P5 — Implement SEO and route metadata

Update `app/layout.js` with a specific title template, description, canonical, `metadataBase`, author, Open Graph, and Twitter data. Remove pathname-header logic that depended on deleted middleware.

Add:

- `app/sitemap.js`
- `app/robots.js`
- `app/opengraph-image.js` or an approved static social image
- `app/components/JsonLd.jsx`

Use only approved public facts in `Person`/`WebSite` structured data and do not index thin or under-construction routes.

### P6 — Replace the CV system

Replace the hand-written Markdown converter and `dangerouslySetInnerHTML` in `app/cv/page.jsx` with a semantic, print-ready CV sourced from the shared data:

- `app/cv/CvDocument.jsx`
- `app/cv/print.css`
- optional `app/cv/product/page.js` and `app/cv/backend/page.js`

Support accessible HTML, A4 print styles, visible URLs, clean page breaks, and approved role-specific PDFs. Retire `public/CV.md` only after no route links to it.

### P7 — Cleanup and maintainability

- Remove starter comments, unused components/assets, and stale placeholder links after reference checks.
- Rewrite `README.md` with setup, content editing, privacy rules, and validation steps.
- Add content-integrity checks for required links, unique IDs/slugs, missing images, and placeholders.
- Add Playwright smoke coverage for navigation, mobile menu, CV rendering, case studies, and contact actions.

## Verification

- Run `npm run lint` and `npm run build`.
- Test 320 px, 768 px, and large desktop layouts.
- Test keyboard navigation, skip link, focus order, mobile menu, Escape, reduced motion, headings, landmarks, alt text, and contrast.
- Crawl links and reject `#` placeholders, missing assets, and false public-demo claims.
- Validate canonical, Open Graph, JSON-LD, sitemap, and robots output.
- Print `/cv` to A4 and check clipping, page breaks, and visible URLs.
- Reconcile every displayed date, role, contact, claim, and metric against the five PDFs and the publication-approval checklist.
- Check Lighthouse and image transfer size for avoidable performance or hydration regressions.

## Working-tree constraint

Preserve the user's current modifications in `Education.jsx`, `Experience.jsx`, `Hero.jsx`, `Projects.jsx`, and `Skills.jsx`, along with the deletion of `middleware.js`. Development should begin with a recorded diff and proceed incrementally.
