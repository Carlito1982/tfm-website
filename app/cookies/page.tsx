import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookies",
  description: "How The Furniture Magazine website uses cookies and browser storage: no cookies are set by the site, and visit counting is cookieless.",
  alternates: { canonical: "/cookies" },
}

const GREEN  = "#1A1A1A"
const CREAM  = "#F5F1ED"
const COPPER = "#8B7355"
const BLACK  = "#1A1A1A"

const h2: React.CSSProperties = { fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px", color: BLACK, margin: "36px 0 12px" }
const p: React.CSSProperties = { fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#333", lineHeight: 1.75, marginBottom: "14px" }
const a: React.CSSProperties = { color: COPPER }

export default function CookiesPage() {
  return (
    <div>
      <div style={{ backgroundColor: GREEN, padding: "72px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: COPPER, fontWeight: "bold", textTransform: "uppercase", marginBottom: "10px" }}>
            Legal
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", color: CREAM }}>
            Cookies
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#8BA895", marginTop: "12px" }}>
            Last updated 25 September 2026
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <h2 style={h2}>Cookies set by this site</h2>
        <p style={p}>
          None. The Furniture Magazine website does not set any cookies, so there is nothing to accept or decline.
        </p>

        <h2 style={h2}>Counting visits</h2>
        <p style={p}>
          We count visits and see which pages are read using Vercel Web Analytics, which works without cookies and does not store your IP address.
        </p>

        <h2 style={h2}>Storage in your browser</h2>
        <p style={p}>
          The home page keeps one small number in your browser&rsquo;s local storage, under the name tfm-hero-rotator-index. It records which story the home page showed you last, so that it can show you a different one next time. It is not a cookie, it is never sent to us, and it holds nothing about you. You can clear it at any time through your browser&rsquo;s settings for site data.
        </p>

        <h2 style={h2}>Videos</h2>
        <p style={p}>
          Videos on our Bench pages are played from YouTube in its privacy-enhanced mode (youtube-nocookie.com). YouTube may store information in your browser when you play a video, under Google&rsquo;s own privacy policy.
        </p>

        <h2 style={h2}>Links to other websites</h2>
        <p style={p}>
          Links to other websites pass through our own link service so that we can count clicks. It does not set cookies. What it records is set out in our <Link href="/privacy" style={a}>privacy policy</Link>. The websites we link to have their own cookie policies.
        </p>

        <h2 style={h2}>Questions</h2>
        <p style={p}>
          Email editor@thefurnituremagazine.com.
        </p>
      </div>
    </div>
  )
}
