import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2A4A35", color: "#F2EBD9", marginTop: "auto" }}>
      {/* Copper top border */}
      <div style={{ height: "4px", backgroundColor: "#B07040" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#F2EBD9",
                lineHeight: 1,
                marginBottom: "4px",
              }}
            >
              THE FURNITURE
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "12px",
                color: "#B07040",
                letterSpacing: "0.18em",
                marginBottom: "16px",
              }}
            >
              MAGAZINE
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#C8BEAA",
                lineHeight: 1.7,
                fontFamily: "Calibri, Arial, sans-serif",
                maxWidth: "240px",
              }}
            >
              The UK&rsquo;s dedicated trade publication for the furniture and
              upholstery industry. Free. Weekly. Straight to the point.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
              <a
                href="https://www.linkedin.com/company/thefurnituremagazine"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#B07040",
                  fontSize: "13px",
                  fontFamily: "Calibri, Arial, sans-serif",
                }}
              >
                LinkedIn
              </a>
              <span style={{ color: "#4A6A55" }}>|</span>
              <a
                href="https://www.instagram.com/thefurnituremagazine"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#B07040",
                  fontSize: "13px",
                  fontFamily: "Calibri, Arial, sans-serif",
                }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Publication */}
          <div>
            <h4
              style={{
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "0.12em",
                color: "#B07040",
                marginBottom: "16px",
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
                  color: "#C8BEAA",
                  fontSize: "14px",
                  fontFamily: "Calibri, Arial, sans-serif",
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
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "0.12em",
                color: "#B07040",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Industry
            </h4>
            {[
              { href: "/jobs", label: "Live UK Jobs" },
              { href: "/events", label: "Industry Events" },
              {
                href: "https://www.thetalentbranch.com",
                label: "The Talent Branch",
              },
              {
                href: "https://www.festivalofupholstery.co.uk",
                label: "Festival of Upholstery",
              },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  l.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                style={{
                  display: "block",
                  color: "#C8BEAA",
                  fontSize: "14px",
                  fontFamily: "Calibri, Arial, sans-serif",
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
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "0.12em",
                color: "#B07040",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Recruitment Partner
            </h4>
            <p
              style={{
                fontSize: "13px",
                color: "#C8BEAA",
                lineHeight: 1.7,
                fontFamily: "Calibri, Arial, sans-serif",
                marginBottom: "16px",
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
                border: "1px solid #B07040",
                color: "#B07040",
                padding: "8px 16px",
                fontSize: "12px",
                fontFamily: "Calibri, Arial, sans-serif",
                fontWeight: "bold",
                letterSpacing: "0.06em",
                textDecoration: "none",
              }}
            >
              VISIT THE TALENT BRANCH
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #3D6B4F",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#6B8A75",
              fontFamily: "Calibri, Arial, sans-serif",
            }}
          >
            &copy; {new Date().getFullYear()} The Furniture Magazine. Published
            by The Talent Branch Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
              <Link
                key={t}
                href="/contact"
                style={{
                  fontSize: "12px",
                  color: "#6B8A75",
                  fontFamily: "Calibri, Arial, sans-serif",
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
