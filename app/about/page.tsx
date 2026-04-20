import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description: "The Furniture Magazine is the UK's dedicated trade publication for the furniture and upholstery industry, published by The Talent Branch.",
}

const GREEN  = "#2A4A35"
const CREAM  = "#F2EBD9"
const COPPER = "#B07040"
const BLACK  = "#1A1A1A"
const BORDER = "#D4C9B0"

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: GREEN, padding: "72px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Calibri, Arial, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: COPPER,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            About This Publication
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", color: CREAM, lineHeight: 1.15 }}>
            Built for the trade.<br />Written by people who know it.
          </h1>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ width: "40px", height: "3px", backgroundColor: COPPER, marginBottom: "36px" }} />

        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: BLACK, marginBottom: "16px" }}>
          Why The Furniture Magazine exists
        </h2>
        <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          The UK furniture and upholstery industry is vast, skilled and underserved. Most trade coverage
          focuses on consumer trends, luxury retail or high-end interior design. Very little is written
          for the people who actually make the furniture — the upholsterers, cabinet makers, finishers,
          workshop managers and independent craftspeople who form the backbone of the trade.
        </p>
        <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          The Furniture Magazine exists to change that. Every week, we publish editorial content that
          is genuinely useful to working professionals in the industry: salary data, craft and technique
          guides, business advice, hiring intelligence and news that affects the trade.
        </p>
        <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#444", lineHeight: 1.8, marginBottom: "48px" }}>
          It is free. Always.
        </p>

        <div style={{ height: "1px", backgroundColor: BORDER, marginBottom: "48px" }} />

        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: BLACK, marginBottom: "16px" }}>
          Our data advantage
        </h2>
        <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          The Furniture Magazine is published by The Talent Branch Ltd — the UK&rsquo;s specialist
          recruitment agency for the furniture and upholstery industry. This gives us something no
          other trade publication has: direct access to real salary, hiring and market data from
          571 registered candidates and 187 furniture companies across the UK.
        </p>
        <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#444", lineHeight: 1.8, marginBottom: "48px" }}>
          When we report on what upholsterers earn or where the skills shortages are, we are drawing
          on placement records and direct employer briefings — not surveys or estimates.
        </p>

        <div style={{ height: "1px", backgroundColor: BORDER, marginBottom: "48px" }} />

        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: BLACK, marginBottom: "16px" }}>
          What we cover
        </h2>
        {[
          ["Data & Intelligence", "UK salary benchmarks by role and region. Hiring trends. Skills shortage analysis. Job market intelligence grounded in real placement data."],
          ["Craft & Technique", "Step-by-step technique guides from working professionals. Deep buttoning, spring suspension, webbing, frames, finishing and more."],
          ["Industry News & Commentary", "News that affects furniture workshops and self-employed craftspeople. Informed opinion on where the trade is heading."],
          ["Business Advice", "Practical guidance for workshop owners and self-employed upholsterers. Pricing, client acquisition, operations and growth."],
        ].map(([title, body]) => (
          <div key={title} style={{ marginBottom: "28px", paddingLeft: "20px", borderLeft: `3px solid ${COPPER}` }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: BLACK, marginBottom: "6px" }}>
              {title}
            </h3>
            <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
              {body}
            </p>
          </div>
        ))}

        <div style={{ height: "1px", backgroundColor: BORDER, margin: "48px 0" }} />

        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: BLACK, marginBottom: "16px" }}>
          Editor
        </h2>
        <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#444", lineHeight: 1.8, marginBottom: "20px" }}>
          Carlos Garcia is the founder of The Talent Branch Ltd and the editor of The Furniture Magazine.
          He has been placing candidates in the UK furniture and upholstery industry for years, building
          relationships with craftspeople and employers across the country.
        </p>
        <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#444", lineHeight: 1.8, marginBottom: "36px" }}>
          For editorial enquiries, contributor submissions or industry Q&amp;A features, contact the editor directly.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            backgroundColor: GREEN,
            color: CREAM,
            padding: "12px 28px",
            fontFamily: "Calibri, Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "13px",
            letterSpacing: "0.05em",
            textDecoration: "none",
            marginRight: "12px",
            marginBottom: "12px",
          }}
        >
          CONTACT THE EDITOR
        </Link>
        <Link
          href="/#subscribe"
          style={{
            display: "inline-block",
            border: `1px solid ${GREEN}`,
            color: GREEN,
            padding: "12px 28px",
            fontFamily: "Calibri, Arial, sans-serif",
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
  )
}
