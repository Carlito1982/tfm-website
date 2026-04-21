# THE FURNITURE MAGAZINE — PROJECT BIBLE

> **How to use this file:** At the start of every new Claude session, say:
> "Read TFM_BIBLE.md and SESSION_LOG.md in the tfm-website repo and pick up from where we left off."
> Claude will read both files and be fully up to speed in under 60 seconds. No re-explaining needed.

---

## 1. PROJECT OVERVIEW

| | |
|---|---|
| **Publication name** | The Furniture Magazine |
| **Domain** | www.thefurnituremagazine.com |
| **Owner / Editor** | Carlos Garcia |
| **Published by** | The Talent Branch Ltd |
| **Purpose** | UK trade publication for the furniture and upholstery industry — free weekly newsletter covering salary data, craft technique, industry news and business advice |
| **Business goal** | Build audience, attract advertisers, drive recruitment enquiries to The Talent Branch |
| **Beehiiv newsletter** | Active, wired to site subscribe form |
| **LinkedIn Company Page** | Created: The Furniture Magazine |
| **Status as of Apr 2026** | Live and functional — first edition content published |

---

## 2. TECH STACK

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router, TypeScript) — version in package.json |
| Hosting | Vercel (Hobby plan) — auto-deploys on push to `main` |
| Database | Supabase — same project as TTB command centre |
| Newsletter | Beehiiv (API V2) |
| Analytics | Google Analytics 4 (GA4) — wired, awaiting Measurement ID |
| Fonts | Playfair Display + Inter (Google Fonts via next/font) |
| Images | Unsplash (external URLs, Next.js Image optimisation) |
| Repo | GitHub: Carlito1982/tfm-website |

---

## 3. ENVIRONMENT VARIABLES

All variables must be set in **Vercel dashboard → Settings → Environment Variables** AND in local `.env.local` (gitignored).

| Variable | Value / Notes |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://ibysduxeugayotndbzaw.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | TTB anon key (already in Vercel) |
| `BEEHIIV_API_KEY` | Set in Vercel — retrieved from Beehiiv API settings |
| `BEEHIIV_PUBLICATION_ID` | `pub_69732c6e-450a-48ec-a5ec-8bf37839fba9` (API V2 format) |
| `NEXT_PUBLIC_GA_ID` | **PENDING** — add `G-XXXXXXXXXX` from Google Analytics once created |

> **GA4 setup steps:** analytics.google.com → Admin → Create Account → Create Web Property → get Measurement ID → add to Vercel → Redeploy

---

## 4. DESIGN TOKENS (DO NOT DEVIATE)

```css
--ink:     #1A1A1A   /* primary dark */
--charcoal:#2C2C2C   /* body text */
--cream:   #F5F1ED   /* page background */
--copper:  #8B7355   /* accent / headings accent */
--muted:   #6B6866   /* secondary text */
--border:  #E2DDD8   /* dividers */
--soft:    #FAFAF8   /* card background */
```

Fonts:
- Headings: `var(--font-playfair), Georgia, serif`
- Body / UI: `var(--font-inter), sans-serif`

---

## 5. FILE STRUCTURE (KEY FILES)

```
tfm-website/
├── app/
│   ├── layout.tsx              — root layout, GA4 script, Navbar, Footer
│   ├── page.tsx                — homepage (async, ISR 3600s)
│   ├── globals.css             — base styles, category tag colours
│   ├── articles/
│   │   └── [slug]/page.tsx     — individual article page (BUILT)
│   ├── jobs/
│   │   ├── page.tsx            — all published jobs from Supabase (BUILT)
│   │   └── [id]/page.tsx       — individual job detail (BUILT)
│   ├── about/page.tsx
│   ├── advertise/page.tsx
│   ├── contact/page.tsx
│   ├── events/page.tsx
│   ├── issues/page.tsx
│   ├── sitemap.ts              — dynamic sitemap (all pages + jobs)
│   └── api/
│       └── subscribe/route.ts  — server-side Beehiiv subscribe endpoint
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   └── SubscribeForm.tsx       — wired to /api/subscribe
├── data/
│   ├── articles.ts             — 8 articles (metadata only)
│   ├── articleContent.ts       — full body content for all 8 articles
│   ├── events.ts               — 3 real UK furniture events
│   └── issues.ts               — newsletter issues (beehiivUrl pending)
├── lib/
│   └── supabase.ts             — Supabase client + SupabaseJob type
├── TFM_BIBLE.md                — this file
├── SESSION_LOG.md              — running session log
└── .env.local                  — gitignored, local dev only
```

---

## 6. SUPABASE DATABASE

Project: `ibysduxeugayotndbzaw.supabase.co` (shared with TTB command centre)

**Table used: `jobs`**

| Column | Type | Notes |
|---|---|---|
| id | uuid | primary key |
| title | text | job title |
| description | text | internal description |
| published_description | text | public-facing description |
| location | text | city/area |
| postcode | text | |
| salary_min | numeric | |
| salary_max | numeric | |
| job_type | enum | permanent / contract / temporary |
| skills_required | text[] | array of skills |
| status | text | |
| is_published | boolean | filter: only show `true` on public site |
| published_at | timestamptz | used for ordering and sitemap |
| created_at | timestamptz | |

Jobs are managed in the TTB Supabase dashboard. Setting `is_published = true` makes a job appear on the TFM website automatically (ISR refreshes hourly).

---

## 7. ARTICLES (8 PUBLISHED)

All articles have full body content in `data/articleContent.ts`.

| Slug | Category | Status |
|---|---|---|
| `uk-furniture-skills-crisis-2026` | Industry News | LIVE (featured) |
| `upholstery-salary-report-2026` | Salary Data | LIVE |
| `deep-buttoning-technique-guide` | Craft & Technique | LIVE |
| `pricing-guide-self-employed-upholsterers` | Business Advice | LIVE |
| `uk-foam-material-costs-2026` | Industry News | LIVE |
| `sofa-seat-diagnosis-guide` | Craft & Technique | LIVE |
| `finding-clients-self-employed-upholsterer` | Business Advice | LIVE |
| `leather-colour-matching-guide` | Craft & Technique | LIVE |

To add a new article: add entry to `data/articles.ts` (metadata) AND `data/articleContent.ts` (body). The homepage and article pages pick it up automatically.

---

## 8. NEWSLETTER ISSUES

File: `data/issues.ts`
- 3 issues listed (Issue 1, 2, 3)
- `beehiivUrl` fields are currently empty strings — these need to be filled with the live Beehiiv post URLs once published
- "READ THIS ISSUE" links will work once URLs are added

**Action needed:** After publishing Issue 1 on Beehiiv, copy the public post URL and add it to `data/issues.ts` `beehiivUrl` field.

---

## 9. INTEGRATIONS

### Beehiiv
- API V2: `POST /v2/publications/{pub_id}/subscriptions`
- Publication ID: `pub_69732c6e-450a-48ec-a5ec-8bf37839fba9`
- Subscribe form on homepage → `/api/subscribe` route → Beehiiv API
- `reactivate_existing: true`, `send_welcome_email: true`

### Google Search Console
- Property: `https://www.thefurnituremagazine.com`
- Verification: HTML tag method via `metadata.verification.google` in `app/layout.tsx`
- Verification code: `3ZpX-KmZxAco98Ehz2lYJ1CtqmJ_jqUWOFu-jGclGng`
- Sitemap submitted: `https://www.thefurnituremagazine.com/sitemap.xml`
- Status: **VERIFIED**

### Vercel
- Project: tfm-website
- Auto-deploy on push to `main`
- Framework: Next.js (must be set — not "Other")
- All 4 env vars confirmed in dashboard

### GoDaddy DNS (thefurnituremagazine.com)
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`
- Status: **LIVE and propagated**

---

## 10. WHAT WORKS (AS OF SESSION 3)

- [x] Domain live and resolving
- [x] Homepage — hero, featured article, latest articles grid, categories, live jobs widget (3 latest), subscribe form, about banner
- [x] All 8 article pages — `/articles/[slug]` with full editorial body content, sidebar, related articles, subscribe CTA
- [x] Jobs listing page — `/jobs` — all published jobs from Supabase, Google Jobs structured data (JobPosting schema)
- [x] Individual job pages — `/jobs/[id]` — full description, sticky apply card, back link
- [x] Subscribe form — wired to Beehiiv API V2 via server-side route, with loading/success/error states
- [x] Google Search Console verified + sitemap submitted
- [x] GA4 analytics code in layout (fires when `NEXT_PUBLIC_GA_ID` env var is set)
- [x] Editorial design palette consistent across ALL pages (ink/cream/copper, Playfair + Inter)
- [x] Events page — 3 real events with external links
- [x] About, Advertise, Contact, Issues pages — all updated to editorial palette
- [x] Sitemap: dynamic, includes all job pages, updates hourly via ISR
- [x] LinkedIn Company Page: created

---

## 11. WHAT IS STILL PENDING

| Priority | Task | Notes |
|---|---|---|
| HIGH | Add GA4 Measurement ID to Vercel | `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX` → get from analytics.google.com |
| HIGH | Add Beehiiv URLs to issues.ts | After publishing Issue 1 on Beehiiv, paste public URL into `data/issues.ts` |
| MEDIUM | Write Issue 1 newsletter content | First edition — based on existing article content |
| MEDIUM | Personal LinkedIn post from Carlos Garcia | Launch announcement from personal profile |
| MEDIUM | LinkedIn Company Page first 3 posts | Drafted but not yet scheduled |
| LOW | Add more articles | Target: 3 new articles per week |
| LOW | Contact page form | Currently mailto links — could upgrade to a form handler |
| LOW | Dark mode image | Hero image on homepage could use a TFM-branded image rather than Unsplash |
| LOW | SEO: internal linking | Articles could link to each other and to jobs |
| FUTURE | Advertiser CRM | Track advertising enquiries |
| FUTURE | Candidate-facing newsletter landing page | Dedicated subscribe page with clear value prop |

---

## 12. LINKEDIN CONTENT PLAN

### Company Page (The Furniture Magazine)
Post 1: Launch announcement — "The UK furniture trade now has its own publication"
Post 2: Salary data teaser — "What does an upholsterer earn in 2026?" with chart
Post 3: Craft content — deep buttoning guide teaser with link to article

### Carlos Garcia personal post
"After years of placing upholsterers and cabinet makers across the UK, I kept noticing the same gap: the people who actually make the furniture had no trade publication written for them. So I built one. The Furniture Magazine launches today — free, weekly, trade-focused. Link in bio."

---

## 13. REVENUE MODEL

| Stream | Status | Notes |
|---|---|---|
| Newsletter sponsorship | Ready — advertise page live | From £150/issue |
| Job listing promotion | Active via TTB | Jobs on site, enquiries to carlos@thetalentbranch.com |
| Event promotion | Ready | From £200 |
| Full partnership | Ready | POA |
| Recruitment (TTB) | Active | Site drives awareness, jobs page drives direct enquiries |

---

## 14. KEY CONTACTS / ACCOUNTS

| Service | Account | Notes |
|---|---|---|
| Email | carlos@thetalentbranch.com | All contact CTAs point here |
| Phone | 07792 797476 | Listed on advertise/contact pages |
| Vercel | carlos@thetalentbranch.com | tfm-website project |
| Supabase | TTB project | ibysduxeugayotndbzaw |
| Beehiiv | carlos@thetalentbranch.com | pub_69732c6e-450a-48ec-a5ec-8bf37839fba9 |
| GitHub | Carlito1982 | repo: tfm-website |
| GoDaddy | thefurnituremagazine.com | DNS managed here |
| Google | carlos@thetalentbranch.com | Search Console verified |

---

## 15. HOUSE RULES FOR CLAUDE

When working on this project, always:
- Use the editorial palette (ink/cream/copper — see section 4) — never revert to old green (#2A4A35)
- Use `var(--font-playfair)` for headings and `var(--font-inter)` for body/UI
- Add `export const revalidate = 3600` to any page that fetches from Supabase
- Use `@supabase/supabase-js` direct client (no SSR cookies needed for TFM)
- Filter jobs with `.eq("is_published", true)` — never show unpublished jobs
- Keep job listing anonymous per user preference (no company name on public site)
- Articles: only include evidenced content — never invent data points
- Subscriber count: do not use specific numbers until real data exists
- File saves: always commit + push at end of session
- Read TFM_BIBLE.md + SESSION_LOG.md at start of every session

---

*Last updated: 21 April 2026 | Session 3*
