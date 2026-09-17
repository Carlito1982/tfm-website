import type { Metadata } from "next"
import Link from "next/link"
import { getBenchVideos } from "@/data/bench"

export const metadata: Metadata = {
  title: "Bench Video of the Week",
  description:
    "One video a week from a working tradesperson showing a technique, a tool or a repair. Each plays from the maker's own channel; The Furniture Magazine adds the context.",
}

const INK = "#1A1A1A"
const CREAM = "#F5F1ED"
const COPPER = "#8B7355"
const MUTED = "#6B6866"
const BORDER = "#E2DDD8"
const PAPER = "#FAFAF8"

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default function BenchIndexPage() {
  const videos = getBenchVideos()
  return (
    <div style={{ backgroundColor: CREAM }}>
      <div style={{ backgroundColor: INK, padding: "56px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: COPPER,
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            The Bench
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: CREAM }}>
            Bench video of the week
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", color: "rgba(245,241,237,0.6)", marginTop: "12px", maxWidth: "640px", lineHeight: 1.6 }}>
            One video a week from a working tradesperson showing a technique, a tool or a repair. Each is the maker&rsquo;s own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
          {videos.map((video) => (
            <Link key={video.slug} href={`/bench/${video.slug}`} style={{ textDecoration: "none" }}>
              <article style={{ backgroundColor: PAPER, border: `1px solid ${BORDER}`, padding: "24px", height: "100%" }}>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", color: MUTED, letterSpacing: "0.04em", marginBottom: "10px" }}>
                  Issue {String(video.issue).padStart(3, "0")} · {formatDate(video.date)}
                </p>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "20px", fontWeight: 400, color: INK, lineHeight: 1.3, marginBottom: "8px" }}>
                  {video.title}
                </h2>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: COPPER, marginBottom: "12px" }}>
                  {video.channelCredit}
                </p>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.6 }}>
                  {video.description[0]}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
