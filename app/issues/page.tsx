import type { Metadata } from "next"
import Link from "next/link"
import { issues } from "@/data/issues"

export const metadata: Metadata = {
  title: "All Issues",
  description: "Browse every issue of The Furniture Magazine — the UK trade publication for the furniture and upholstery industry.",
}

const GREEN  = "#1A1A1A"
const CREAM  = "#F5F1ED"
const COPPER = "#8B7355"
const BLACK  = "#1A1A1A"
const BORDER = "#E2DDD8"

const categoryColour: Record<string, string> = {
  "Data & Intelligence": "#1A3A2A",
  "Craft & Technique":   "#6B4C2A",
  "Industry News":       "#1A2A3A",
  "Business Advice":     "#3A2A1A",
}

const sorted = [...issues].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function IssuesPage() {
  return (
    <div>
      {/* Page header */}
      <div style={{ backgroundColor: GREEN, padding: "56px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: COPPER,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}>
            The Archive
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", color: CREAM }}>
            All Issues
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", color: "#8BA895", marginTop: "12px" }}>
            Every issue, free to read. New edition every week.
          </p>
        </div>
      </div>

      {/* Issue grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1px",
          backgroundColor: BORDER,
        }}>
          {sorted.map((issue) => (
            <article key={issue.slug} style={{ backgroundColor: CREAM, padding: "36px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <span style={{
                  display: "inline-block",
                  backgroundColor: categoryColour[issue.category] ?? COPPER,
                  color: "#fff",
                  fontSize: "10px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: "bold",
                  letterSpacing: "0.08em",
                  padding: "3px 10px",
                  textTransform: "uppercase",
                }}>
                  {issue.category}
                </span>
                <span style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: BORDER,
                  lineHeight: 1,
                }}>
                  {String(issue.issue).padStart(2, "0")}
                </span>
              </div>

              <div style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                color: "#888",
                marginBottom: "10px",
                letterSpacing: "0.04em",
              }}>
                {new Date(issue.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </div>

              <h2 style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "20px",
                color: BLACK,
                lineHeight: 1.3,
                marginBottom: "14px",
              }}>
                {issue.title}
              </h2>

              <p style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                color: "#555",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}>
                {issue.excerpt}
              </p>

              <Link
                href={issue.beehiivUrl || `/issues/${issue.slug}`}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: COPPER,
                  fontWeight: "bold",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                }}
              >
                READ THIS ISSUE →
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter prompt */}
        <div style={{
          marginTop: "64px",
          backgroundColor: "#E8DEC8",
          border: `1px solid ${BORDER}`,
          padding: "48px",
          textAlign: "center",
        }}>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "24px", color: BLACK, marginBottom: "12px" }}>
            Never miss an issue
          </h3>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#555", marginBottom: "28px" }}>
            Subscribe free and receive every new issue directly in your inbox.
          </p>
          <Link
            href="/#subscribe"
            style={{
              display: "inline-block",
              backgroundColor: GREEN,
              color: CREAM,
              padding: "12px 32px",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: "bold",
              fontSize: "13px",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            SUBSCRIBE FREE
          </Link>
        </div>
      </div>
    </div>
  )
}
