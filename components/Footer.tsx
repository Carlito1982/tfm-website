import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A1A", color: "#F5F1ED", marginTop: "auto" }}>
      <div style={{ height: "3px", backgroundColor: "#8B7355" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 28px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#F5F1ED",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: "4px",
              }}
            >
              The Furniture
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "9px",
                color: "#8B7355",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              Magazine
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(245,241,237,0.45)",
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), sans-serif",
                maxWidth: "240px",
              }}
            >
              The UK&rsquo;s dedicated trade publication for the furniture and
              upholstery industry. Free. Weekly. Straight to the point.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "16px" }}>
              <a
                href="https://www.linkedin.com/company/thefurnituremagazine"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8B7355", fontSize: "12px", fontFamily: "var(--font-inter), sans-serif", fontWeight: 500 }}
              >
                LinkedIn
              </a>
              <span style={{ color: "#333" }}>|</span>
              <a
                href="https://www.instagram.com/thefurnituremagazine"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8B7355", fontSize: "12px", fontFamily: "var(--font-inter), sans-serif", fontWeight: 500 }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Publication */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#8B7355",
                marginBottom: "18px",
                textTransform: "uppercase",
              }}
            >
              Publication
            </h4>
            {[
              { href: "/issues", label: "All Issues" },
              { href: "/about", label: "About TFM" },
              { href: "/advertise", label: "Advertise With Us" },
              { href: "/contact", label: "Contact the Editor" },
              { href: "/#subscribe", label: "Subscribe Free" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  color: "rgba(245,241,237,0.50)",
                  fontSize: "13px",
                  fontFamily: "var(--font-inter), sans-serif",
                  marginBottom: "10px",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Industry */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#8B7355",
                marginBottom: "18px",
                textTransform: "uppercase",
              }}
            >
              Industry
            </h4>
            {[
              { href: "/jobs", label: "Live UK Jobs" },
              { href: "/events", label: "Industry Events" },
              { href: "https://www.thetalentbranch.com", label: "The Talent Branch" },
              { href: "https://www.festivalofupholstery.co.uk", label: "Festival of Upholstery" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "block",
                  color: "rgba(245,241,237,0.50)",
                  fontSize: "13px",
                  fontFamily: "var(--font-inter), sans-serif",
                  marginBottom: "10px",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Recruitment partner */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#8B7355",
                marginBottom: "18px",
                textTransform: "uppercase",
              }}
            >
              Recruitment Partner
            </h4>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(245,241,237,0.45)",
                lineHeight: 1.75,
                fontFamily: "var(--font-inter), sans-serif",
                marginBottom: "18px",
              }}
            >
              The Furniture Magazine is published by The Talent Branch Ltd —
              the UK&rsquo;s specialist recruiter for the upholstery and
              furniture industry.
            </p>
            <a
              href="https://www.thetalentbranch.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #8B7355",
                color: "#8B7355",
                padding: "9px 18px",
                fontSize: "11px",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Visit The Talent Branch
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #2C2C2C",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(245,241,237,0.28)", fontFamily: "var(--font-inter), sans-serif" }}>
            &copy; {new Date().getFullYear()} The Furniture Magazine. Published by The Talent Branch Ltd.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
              <Link
                key={t}
                href="/contact"
                style={{
                  fontSize: "12px",
                  color: "rgba(245,241,237,0.28)",
                  fontFamily: "var(--font-inter), sans-serif",
                  textDecoration: "none",
                }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
