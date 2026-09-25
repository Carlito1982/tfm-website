import { NextRequest, NextResponse } from "next/server"

// Newsletter sign-up. Posts the email to Beehiiv, which sends the double opt-in confirmation.
// TODO(Carlos): add Cloudflare Turnstile once site and secret keys exist (verify the token here before calling Beehiiv).

const MAX_EMAIL_LENGTH = 254
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const HONEYPOT_FIELD = "company_website"

// Rate limit: 5 requests per minute per IP. This map lives in memory, so it is per serverless
// instance and resets on cold start. Best effort only, not a guarantee.
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60_000
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key)
    }
  }
  return recent.length > RATE_LIMIT
}

function clientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

const SUCCESS = { success: true, message: "Check your inbox to confirm your subscription." }

export async function POST(request: NextRequest) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ error: "Too many attempts. Please wait a minute and try again." }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const data = body as Record<string, unknown>

  // Honeypot: real visitors never see or fill this field. Pretend it worked so bots learn nothing.
  const trap = data[HONEYPOT_FIELD]
  if (typeof trap === "string" && trap.trim() !== "") {
    return NextResponse.json(SUCCESS)
  }

  const email = typeof data.email === "string" ? data.email.trim() : ""
  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 })
  }

  try {
    const apiKey = process.env.BEEHIIV_API_KEY
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID

    if (!apiKey || !publicationId) {
      console.error("Beehiiv env vars not set")
      return NextResponse.json({ error: "Subscription service unavailable" }, { status: 500 })
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          // Never silently re-subscribe someone who unsubscribed.
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "thefurnituremagazine.com",
          utm_medium: "website",
          utm_campaign: "organic",
        }),
      }
    )

    if (!res.ok) {
      const err = await res.text()
      console.error("Beehiiv error:", res.status, err)
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 })
    }

    return NextResponse.json(SUCCESS)
  } catch (err) {
    console.error("Subscribe route error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
