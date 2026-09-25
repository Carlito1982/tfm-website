import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "How to unsubscribe from The Furniture Magazine newsletter: one click from the foot of any issue, or by email to the editor.",
  alternates: { canonical: "/unsubscribe" },
}

const GREEN  = "#1A1A1A"
const CREAM  = "#F5F1ED"
const COPPER = "#8B7355"
const BLACK  = "#1A1A1A"

const h2: React.CSSProperties = { fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px", color: BLACK, margin: "36px 0 12px" }
const p: React.CSSProperties = { fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#333", lineHeight: 1.75, marginBottom: "14px" }
const a: React.CSSProperties = { color: COPPER }

export default function UnsubscribePage() {
  return (
    <div>
      <div style={{ backgroundColor: GREEN, padding: "72px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: COPPER, fontWeight: "bold", textTransform: "uppercase", marginBottom: "10px" }}>
            Newsletter
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", color: CREAM }}>
            Unsubscribe
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#8BA895", marginTop: "12px" }}>
            Last updated 25 September 2026
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <h2 style={h2}>One click from any issue</h2>
        <p style={p}>
          Every issue of The Furniture Magazine has an unsubscribe link at the foot of the email. One click removes you from the list. There is nothing to log in to and nothing to confirm.
        </p>

        <h2 style={h2}>Or email us</h2>
        <p style={p}>
          If you would rather ask, email <a href="mailto:editor@thefurnituremagazine.com?subject=Unsubscribe" style={a}>editor@thefurnituremagazine.com</a> from the address you subscribed with, and we will remove you.
        </p>

        <h2 style={h2}>Your data</h2>
        <p style={p}>
          How we handle subscriber data, including what happens after you unsubscribe, is set out in our <Link href="/privacy" style={a}>privacy policy</Link>.
        </p>
      </div>
    </div>
  )
}
