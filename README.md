# Arsalan — Portfolio (ARZEN)

A personal portfolio for **Mohammad Arsalan Sheikh (Arsalan / ARZEN)** — full-stack
web developer and freelancer based in Patna, Bihar, India.

Built with **Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion and
100% plain JavaScript** — there is deliberately no TypeScript anywhere in this
project. The only `.ts` files are tool-generated (e.g. `next-env.d.ts`).

---

## 1. Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run build      # production build
npm start          # serve the production build
```

For the contact form to persist messages locally:

```bash
# .env needs DATABASE_URL (Postgres). Then create the table once:
npx drizzle-kit push
```

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

### Replacing the portrait

`public/images/portrait.png` is a **temporary AI-generated placeholder** and is
labelled as such in the UI. To use a real photograph: export a ~880×1100 px (4:5)
image as `portrait.png`, overwrite that one file, and update the alt text in
`src/components/Hero.jsx` (the caption below the photo should be removed once
it's a real photo).

## 3. Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | for the contact form | Postgres connection string. Without it the form degrades to a clear error and tells visitors to email directly. |
| `NEXT_PUBLIC_SITE_URL` | production | Canonical origin used in metadata, Open Graph and `sitemap.xml`. |

No other secrets exist in this project. Never commit `.env*`.

## 4. Deployment (Vercel, recommended)

1. Push the repo to GitHub and import it in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the deployed origin.
3. Add a Postgres database (Vercel Postgres/Neon) and set `DATABASE_URL`, then
   run `npx drizzle-kit push` with that URL once (from your machine).
4. Update `src/lib/site.js` if the URL or any profile link changes.

Rollback on Vercel: Deployments → previous deployment → *Redeploy*.

## 5. Design & content decisions (summary of the research phase)

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

## 6. Honesty rules baked into the content

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
