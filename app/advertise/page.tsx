import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advertise With Us",
  description: "Reach furniture and upholstery professionals across the UK. Advertising and sponsorship opportunities with The Furniture Magazine.",
}

const GREEN  = "#1A1A1A"
const CREAM  = "#F5F1ED"
const COPPER = "#8B7355"
const BLACK  = "#1A1A1A"
const BORDER = "#E2DDD8"

const packages = [
  {
    name: "Newsletter Sponsor",
    price: "From £150/issue",
    description: "Your brand featured in the weekly newsletter. Includes branded section header, 50-word description and link. Sent to all subscribers.",
    features: ["Top-of-issue placement", "Branded section header", "Direct link to your site", "Available weekly"],
  },
  {
    name: "Job Listing",
    price: "From £95/role",
    description: "Your vacancy advertised across the newsletter, website jobs board and LinkedIn. Managed by The Talent Branch with confidential candidate handling.",
    features: ["Newsletter + website placement", "LinkedIn promotion", "Confidential candidate handling", "30-day listing"],
    highlight: true,
  },
  {
    name: "Event Promotion",
    price: "From £200",
    description: "Feature your industry event — show, festival, trade day or training — to our audience of active furniture professionals. Includes dedicated feature piece.",
    features: ["Newsletter feature", "Website events listing", "LinkedIn post", "Dedicated editorial mention"],
  },
  {
    name: "Full Partnership",
    price: "POA",
    description: "Custom partnership for brands wanting sustained presence across the publication. Includes editorial input, regular features, events coverage and sponsored content.",
    features: ["Multi-issue commitment", "Editorial partnership", "Events & PR coverage", "Bespoke package"],
  },
]

export default function AdvertisePage() {
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: COPPER, padding: "72px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#F2E0CC",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            Partner With Us
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", color: "#fff", lineHeight: 1.15 }}>
            Reach the people who make UK furniture
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "17px", color: "#F2E0CC", marginTop: "20px", lineHeight: 1.7, maxWidth: "580px" }}>
            The Furniture Magazine is the only UK trade publication written specifically for upholsterers,
            cabinet makers, finishers, workshop owners and furniture manufacturers. Our audience is active,
            trade-engaged and hard to reach through general media.
          </p>
        </div>
      </div>

      {/* Audience stats */}
      <div style={{ backgroundColor: BLACK, padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px" }}>
            {[
              { num: "571+", label: "Trade candidates in network" },
              { num: "187+", label: "Furniture companies in network" },
              { num: "UK-wide", label: "Coverage across all regions" },
              { num: "Weekly", label: "Publication cadence" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "32px", fontWeight: "bold", color: COPPER }}>{s.num}</div>
                <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#888", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "28px", color: BLACK, marginBottom: "8px" }}>
          Advertising packages
        </h2>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", color: "#555", marginBottom: "40px" }}>
          All packages include placement across newsletter, website and LinkedIn unless otherwise stated.
          Custom packages available on request.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1px", backgroundColor: BORDER }}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              style={{
                backgroundColor: pkg.highlight ? GREEN : CREAM,
                padding: "36px",
                borderTop: `4px solid ${pkg.highlight ? COPPER : BORDER}`,
              }}
            >
              <h3 style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "20px",
                color: pkg.highlight ? CREAM : BLACK,
                marginBottom: "6px",
              }}>
                {pkg.name}
              </h3>
              <p style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "18px",
                fontWeight: "bold",
                color: COPPER,
                marginBottom: "16px",
              }}>
                {pkg.price}
              </p>
              <p style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                color: pkg.highlight ? "#8BA895" : "#555",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}>
                {pkg.description}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "13px",
                    color: pkg.highlight ? "#C8BEAA" : "#444",
                    padding: "6px 0",
                    borderBottom: `1px solid ${pkg.highlight ? "#3D6B4F" : BORDER}`,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    <span style={{ color: COPPER, fontWeight: "bold" }}>—</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enquiry CTA */}
        <div style={{
          marginTop: "56px",
          backgroundColor: "#E8DEC8",
          border: `1px solid ${BORDER}`,
          padding: "48px",
          textAlign: "center",
        }}>
          <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "24px", color: BLACK, marginBottom: "12px" }}>
            Ready to discuss a package?
          </h3>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#555", marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
            Contact Carlos directly to discuss options, pricing and availability. All enquiries
            handled personally and responded to within one working day.
          </p>
          <a
            href="mailto:carlos@thetalentbranch.com?subject=Advertising Enquiry — The Furniture Magazine"
            style={{
              display: "inline-block",
              backgroundColor: GREEN,
              color: CREAM,
              padding: "14px 36px",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: "bold",
              fontSize: "14px",
              letterSpacing: "0.05em",
              textDecoration: "none",
              marginRight: "12px",
              marginBottom: "12px",
            }}
          >
            ENQUIRE NOW
          </a>
          <a
            href="tel:07792797476"
            style={{
              display: "inline-block",
              border: `1px solid ${GREEN}`,
              color: GREEN,
              padding: "14px 36px",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: "bold",
              fontSize: "14px",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            CALL: 07792 797476
          </a>
        </div>
      </div>
    </div>
  )
}
