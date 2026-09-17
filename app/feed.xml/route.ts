import { articles } from "@/data/articles"

export const revalidate = 3600

const BASE = "https://www.thefurnituremagazine.com"

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function toDate(d: string) {
  const t = Date.parse(d)
  return isNaN(t) ? new Date() : new Date(t)
}

export async function GET() {
  const items = [...articles]
    .sort((a, b) => toDate(b.date).getTime() - toDate(a.date).getTime())
    .map((a) => {
      const url = `${BASE}/articles/${a.slug}`
      return `<item><title>${esc(a.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${toDate(a.date).toUTCString()}</pubDate><category>${esc(a.category)}</category><description>${esc(a.excerpt)}</description></item>`
    })
    .join("")
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>The Furniture Magazine</title><link>${BASE}</link><atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/><description>The UK trade publication for the people who make, repair and finish furniture.</description><language>en-gb</language>${items}</channel></rss>`
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
