# Arsalan — Portfolio (ARZEN)

<<<<<<< HEAD
A personal portfolio for **Mohammad Arsalan Sheikh (Arsalan / ARZEN)** — full-stack
web developer and freelancer based in Patna, Bihar, India.

Built with **Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion and
100% plain JavaScript** — there is deliberately no TypeScript anywhere in this
project. The only `.ts` files are tool-generated (e.g. `next-env.d.ts`).

---

## 1. Run it
=======
A modern, responsive portfolio website showcasing my projects, technical skills, and professional work as a Full-Stack Web Developer.

Built with a focus on clean architecture, maintainability, accessibility, performance, and a polished user experience.

**[🌐 View Live Portfolio](https://arsalan-portfolio-beige.vercel.app/)**

---

## 🛠️ Tech Stack

### Framework
- Next.js (App Router)

### Language
- JavaScript (ES6+)

### Styling
- Tailwind CSS
- Modular CSS

### Animation
- GSAP
- Framer Motion

### Icons
- Lucide React
- React Icons

### Deployment
- Vercel

---

## ✨ Features

- Modern portfolio design
- Responsive layouts for different screen sizes
- Modular and reusable UI components
- Project showcase
- Contact form
- Social media integration
- Animated interactions and transitions
- SEO-oriented page configuration
- Performance-conscious implementation
- Consistent visual design system

---

## 🎨 Design Principles

The portfolio is developed around the following principles:

- **Minimalism:** Clear layouts and focused content
- **Professionalism:** A polished presentation of projects and skills
- **Maintainability:** Organized components and reusable styles
- **Accessibility:** Usable interfaces with accessible interaction patterns
- **Performance:** Efficient rendering and optimized assets
- **Responsiveness:** Layouts adapted to mobile, tablet, and desktop
- **Scalability:** An architecture that supports future improvements

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/arzenjs/arsalan-portfolio/
```

### 2. Navigate to the project directory

```bash
cd arsalan-portfolio
```

### 3. Install dependencies
>>>>>>> b9dfdd91c2cfc62667e45356e24da603e667d14b

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run build      # production build
npm start          # serve the production build
```

<<<<<<< HEAD
For the contact form to persist messages locally:
=======
### 4. Start the development server
>>>>>>> b9dfdd91c2cfc62667e45356e24da603e667d14b

```bash
# .env needs DATABASE_URL (Postgres). Then create the table once:
npx drizzle-kit push
```

<<<<<<< HEAD
## 2. Where to change things (the file tour)

| You want to change… | Edit this file |
| --- | --- |
| Name, headline, bio, email, location | `src/lib/site.js` |
| Social profile URLs | `src/lib/site.js` (`socials` array) |
| Skills, services, process steps | `src/lib/site.js` |
| Projects (add / remove / reorder) | `src/lib/projects.js` |
| Replace the temporary portrait | overwrite `public/images/portrait.png` |
| Replace Open Graph share image | overwrite `public/images/og.jpg` |
| Colors, fonts, spacing, animations | `src/app/globals.css` (`@theme` tokens) |
| SEO title / description / OG | `src/app/layout.jsx` (`metadata`) |
| Case-study page design | `src/app/work/[slug]/page.jsx` |
| Contact form behaviour | `src/components/Contact.jsx` + `src/app/api/contact/route.js` |
=======
Open [http://localhost:3000](http://localhost:3000) in your browser.
>>>>>>> b9dfdd91c2cfc62667e45356e24da603e667d14b

### Replacing the portrait

<<<<<<< HEAD
`public/images/portrait.png` is a **temporary AI-generated placeholder** and is
labelled as such in the UI. To use a real photograph: export a ~880×1100 px (4:5)
image as `portrait.png`, overwrite that one file, and update the alt text in
`src/components/Hero.jsx` (the caption below the photo should be removed once
it's a real photo).
=======
## 🏗️ Production Build

Create an optimized production build:
>>>>>>> b9dfdd91c2cfc62667e45356e24da603e667d14b

## 3. Environment variables

<<<<<<< HEAD
| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | for the contact form | Postgres connection string. Without it the form degrades to a clear error and tells visitors to email directly. |
| `NEXT_PUBLIC_SITE_URL` | production | Canonical origin used in metadata, Open Graph and `sitemap.xml`. |
=======
Run the production server locally:
>>>>>>> b9dfdd91c2cfc62667e45356e24da603e667d14b

No other secrets exist in this project. Never commit `.env*`.

## 4. Deployment (Vercel, recommended)

<<<<<<< HEAD
1. Push the repo to GitHub and import it in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the deployed origin.
3. Add a Postgres database (Vercel Postgres/Neon) and set `DATABASE_URL`, then
   run `npx drizzle-kit push` with that URL once (from your machine).
4. Update `src/lib/site.js` if the URL or any profile link changes.

Rollback on Vercel: Deployments → previous deployment → *Redeploy*.
=======
## 📈 Project Goals

- Showcase selected development projects
- Present technical skills and development experience
- Establish a professional online presence
- Connect with potential clients and collaborators
- Demonstrate practical web development capabilities
- Support freelance opportunities and professional growth
>>>>>>> b9dfdd91c2cfc62667e45356e24da603e667d14b

## 5. Design & content decisions (summary of the research phase)

<<<<<<< HEAD
Eight reference sites were inspected before this design was chosen. Verifiable
highlights: sarthak-sharma and dakshgajjar.com use numbered editorial sections
with monospace micro-labels and huge display type; razorpay.com/ai-builders
shows the power of direct, no-nonsense copy; ingrassiadaniel.it proves a lean
text-first contact path converts; minemal.dental uses scattered-word collage
(too decorative for this audience); finethought.com.au renders almost all
content client-side (invisible to crawlers — avoided); duocase.lol is parody
(personality, not a model); pragenhatlen.com wins trust through depth and
precision (adopted for case-study honesty).

**Chosen direction: “Editorial Monochrome”** — near-black canvas, white/grayscale
only, oversized Space Grotesk display type, JetBrains Mono micro-labels,
numbered sections, hairline rules, film grain, and motion limited to
transform/opacity with full `prefers-reduced-motion` support.
=======
## 🔍 SEO, Accessibility & Performance

The portfolio aims to follow good practices in:

- Page metadata and search engine optimization
- Open Graph and social sharing metadata
- Semantic HTML and keyboard accessibility
- Responsive typography and layouts
- Image and asset optimization
- Efficient rendering and loading
- Reduced-motion preferences where supported

The implementation of individual features depends on the current project configuration.
>>>>>>> b9dfdd91c2cfc62667e45356e24da603e667d14b

## 6. Honesty rules baked into the content

<<<<<<< HEAD
- All four projects (NexBook, IronVault Fitness, CedarCare, Ember & Spice) are
  labelled as personal projects / demos — none are presented as paid client work.
- Case studies list verified features *and* unresolved caveats.
- No client counts, revenue figures, years of experience, testimonials or
  skill bars anywhere on the site.
- IronVault: payments are Razorpay **test mode**; CedarCare: fictional clinic.

## 7. Known limitations

- Portrait and the four project covers are AI-generated placeholders/artwork.
- Contact messages are stored in Postgres; there is no admin inbox UI yet —
  read them with `psql $DATABASE_URL -c 'SELECT * FROM contact_messages ORDER BY created_at DESC;'`
  or ask for email delivery (e.g. Resend) as a follow-up feature.
- The in-memory contact rate limiter is per-instance only.
- `NexBook`'s repository is private, so the site links only to its live demo.
=======
## ☁️ Deployment

The portfolio is deployed on **Vercel**.

**Live Website:** https://arsalan-portfolio-beige.vercel.app/

---

## 👨‍💻 Author

**Arsalan (ARZEN)**  
Full-Stack Web Developer

- **GitHub:** [@arzenjs](https://github.com/arzenjs)
- **LinkedIn:** [Arsalan](https://www.linkedin.com/in/arzenjs/)
- **Portfolio:** [arsalan-portfolio-beige.vercel.app](https://arsalan-portfolio-beige.vercel.app/)

---

## 📄 License

This project is intended for personal portfolio use. No license is granted for redistribution, modification, or reuse unless explicitly authorized by the author or permitted by applicable law.

© Arsalan. All rights reserved.
>>>>>>> b9dfdd91c2cfc62667e45356e24da603e667d14b
