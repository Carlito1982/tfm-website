@AGENTS.md

# The Furniture Magazine website - session rules (16 Sep 2026)

Start every session with the Supabase MCP call `SELECT public.tfm_boot();` (project ibysduxeugayotndbzaw).
That is the current state of the whole TFM project: rules, assets, decisions, open items, workflows.
`TFM_BIBLE.md` and `SESSION_LOG.md` in this repo are ARCHIVED history (pre-16 Sep 2026). Do not append to them.

Site facts: Next.js 16 App Router, TypeScript, Tailwind 4, deployed on Vercel from `main` (auto-deploy on push).
Subscribe form -> `app/api/subscribe/route.ts` -> Beehiiv API (env vars in Vercel). Jobs pages read TTB Supabase.
Design tokens: ink #1A1A1A, charcoal #2C2C2C, cream #F5F1ED, copper #8B7355; Playfair Display + Inter.
Rules: no icons/emoji; every factual claim sourced; paid content labelled "Advertisement feature"; footer must
carry Companies Act disclosures (trading name of The Talent Branch Ltd) and the AI disclosure.
Tracked ad links: `/go/<slug>` (rewrite to the Supabase `tfm-go` edge function).

Claude edits files but never runs git here. After edits, give Carlos:
`cd ~/Documents/GitHub/tfm-website && git add -A && git commit -m "message" && git push origin main`
Session end: update `tfm_open_items` and insert a `tfm_session_log` row via SQL.
