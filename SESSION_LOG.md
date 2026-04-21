# TFM SESSION LOG

> This file is updated at the end of every working session.
> At the start of a new session, Claude reads this alongside TFM_BIBLE.md to resume instantly.
> Most recent session is always at the top.

---

## SESSION 3 — 21 April 2026

**Focus:** Full site audit + build article pages + site-wide fixes

### Completed this session:

**Article pages — complete build**
- Created `/app/articles/[slug]/page.tsx` — full editorial article page with hero, dark header, body renderer, sticky sidebar, subscribe CTA, "Keep Reading" grid
- Created `data/articleContent.ts` — full sourced body content for all 8 articles:
  1. UK Furniture Skills Crisis 2026 (Industry News, ~1,100 words)
  2. 2026 UK Salary Report (Salary Data, ~900 words)
  3. Deep Buttoning Technique Guide (Craft, ~950 words)
  4. Pricing Guide for Self-Employed (Business, ~900 words)
  5. UK Foam & Material Costs 2026 (Industry News, ~800 words)
  6. Sofa Seat Diagnosis Guide (Craft, ~850 words)
  7. Finding Clients — Self-Employed (Business, ~900 words)
  8. Leather Colour Matching Guide (Craft, ~950 words)
- All articles: sourced, realistic UK trade data, practical content, professional quality

**Individual job pages**
- Created `/app/jobs/[id]/page.tsx` — full job detail page with sticky apply card, back link, skills tags

**Fixes**
- Fixed broken deep buttoning article image (Unsplash URL replaced)
- Fixed inaccurate "Join 1,200+ furniture professionals" → honest copy
- Fixed colour consistency: About, Advertise, Contact, Events, Issues pages all updated to editorial palette (ink/cream/copper) + correct font variables
- Added GA4 analytics support: `next/script` in layout, fires on `NEXT_PUBLIC_GA_ID` env var

**Infrastructure**
- Committed and pushed all changes to GitHub → Vercel deployed
- Created TFM_BIBLE.md and SESSION_LOG.md (this file)

### Also completed (end of session 3):
- [x] GA4 fully live — `G-4GW3YBFHJW` added to Vercel as `NEXT_PUBLIC_GA_ID`, deployed to Production
- [x] TFM_BIBLE.md and SESSION_LOG.md created and pushed to repo (version-controlled memory system)
- [x] Job detail page params bug FIXED — Next.js 15 requires `params: Promise<{id}>` — was silently 404ing
- [x] Job cards fully clickable — whole left column now a Link to `/jobs/[id]`; confirmed working in production
- [x] Content distribution strategy clarified — TFM website is source of truth; Beehiiv/LinkedIn/Instagram all feed from it

### Pending (carry to next session):
- [ ] Add beehiivUrl to Issue 1 in `data/issues.ts` after publishing on Beehiiv
- [ ] Write Issue 1 newsletter in Beehiiv (use existing 8 articles as source material)
- [ ] Write and post LinkedIn Company Page posts (3 posts drafted in TFM_BIBLE.md section 12)
- [ ] Write personal LinkedIn launch post from Carlos Garcia (draft in TFM_BIBLE.md section 12)
- [ ] Set up Instagram account for TFM (if not already done)
- [ ] Verify GA4 Realtime shows live users (open site, check GA4 → Reports → Realtime)

---

## SESSION 2 — (pre-21 April 2026)

**Focus:** Jobs page, GSC verification, Beehiiv wiring, homepage vacancies widget

### Completed:
- Rewrote `/app/jobs/page.tsx` — fetches all `is_published=true` jobs from Supabase, JobPosting schema.org structured data, salary formatting, skills tags, mailto enquiry buttons
- Added `lib/supabase.ts` — shared Supabase client + SupabaseJob type
- Added `@supabase/supabase-js` to package.json
- Created `app/sitemap.ts` — dynamic sitemap including all published job pages
- Added Google Search Console verification to `app/layout.tsx` (HTML tag method)
- GSC status: VERIFIED, sitemap submitted
- Homepage: made async, added live vacancies widget (3 latest jobs), `revalidate=3600`
- Created `app/api/subscribe/route.ts` — server-side Beehiiv API V2 integration
- Rewrote `components/SubscribeForm.tsx` — replaced alert() with fetch + loading/success/error states
- Added Beehiiv env vars to Vercel dashboard
- Confirmed all 4 env vars in Vercel: Supabase URL, Supabase anon key, Beehiiv API key, Beehiiv pub ID

---

## SESSION 1 — (pre-21 April 2026)

**Focus:** Domain, deployment, full homepage redesign

### Completed:
- GoDaddy DNS configured: A record @ → 76.76.21.21, CNAME www → cname.vercel-dns.com
- Fixed Vercel 404 NOT_FOUND: Framework Preset changed from "Other" to "Next.js"
- Full homepage redesign: editorial design (Monocle/Dezeen/Kinfolk inspired)
- Design tokens established: ink #1A1A1A, charcoal #2C2C2C, cream #F5F1ED, copper #8B7355
- Fonts: Playfair Display + Inter via next/font/google, CSS variables --font-playfair / --font-inter
- Homepage sections: hero, featured article, latest articles grid (6), category navigation, subscribe form, about banner
- Created `data/articles.ts` — 8 articles (metadata, no body)
- Created `components/ArticleCard.tsx` — standard, large, horizontal variants
- Created `components/SubscribeForm.tsx` — initial version (alert placeholder)
- Created LinkedIn Company Page: The Furniture Magazine
- Wrote LinkedIn launch post copy (stored in TFM_BIBLE.md)

---

## HOW TO START A NEW SESSION

Tell Claude at the start of every session:

> "Read TFM_BIBLE.md and SESSION_LOG.md in the tfm-website repo at /sessions/[path]/mnt/GitHub/tfm-website/ and pick up where we left off."

Claude will read both files, confirm understanding, and continue without you needing to re-explain anything.

Alternatively (if the workspace is already mounted):
> "Resume TFM work — check the bible and log."
