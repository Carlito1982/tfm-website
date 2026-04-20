import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the editor of The Furniture Magazine. Editorial enquiries, advertising, contributor submissions and industry event listings.",
}

const GREEN  = "#2A4A35"
const CREAM  = "#F2EBD9"
const COPPER = "#B07040"
const BLACK  = "#1A1A1A"
const BORDER = "#D4C9B0"

const reasons = [
  { subject: "editorial", label: "Editorial enquiry / story tip", email: "carlos@thetalentbranch.com" },
  { subject: "contributor", label: "Contributor submission or Q&A feature", email: "carlos@thetalentbranch.com" },
  { subject: "advertising", label: "Advertising or sponsorship", email: "carlos@thetalentbranch.com" },
  { subject: "event", label: "Industry event listing", email: "carlos@thetalentbranch.com" },
  { subject: "jobs", label: "Job advertising / recruitment", email: "carlos@thetalentbranch.com" },
  { subject: "general", label: "General enquiry", email: "carlos@thetalentbranch.com" },
]

export default function ContactPage() {
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
            Get In Touch
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", color: CREAM }}>
            Contact the Editor
          </h1>
          <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#8BA895", marginTop: "12px" }}>
            All enquiries handled personally. Responses within one working day.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "56px",
        }}>
          {/* Left: contact details */}
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: BLACK, marginBottom: "28px" }}>
              Contact details
            </h2>

            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "12px", fontWeight: "bold", letterSpacing: "0.1em", color: COPPER, textTransform: "uppercase", marginBottom: "6px" }}>
                Editor
              </p>
              <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: BLACK, marginBottom: "4px" }}>Carlos Garcia</p>
              <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "14px", color: "#555" }}>The Furniture Magazine / The Talent Branch Ltd</p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "12px", fontWeight: "bold", letterSpacing: "0.1em", color: COPPER, textTransform: "uppercase", marginBottom: "6px" }}>
                Email
              </p>
              <a href="mailto:carlos@thetalentbranch.com" style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: GREEN }}>
                carlos@thetalentbranch.com
              </a>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "12px", fontWeight: "bold", letterSpacing: "0.1em", color: COPPER, textTransform: "uppercase", marginBottom: "6px" }}>
                Phone
              </p>
              <a href="tel:07792797476" style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: GREEN }}>
                07792 797476
              </a>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "12px", fontWeight: "bold", letterSpacing: "0.1em", color: COPPER, textTransform: "uppercase", marginBottom: "6px" }}>
                Social
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <a href="https://www.linkedin.com/company/thefurnituremagazine" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "14px", color: GREEN }}>
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/thefurnituremagazine" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "14px", color: GREEN }}>
                  Instagram
                </a>
              </div>
            </div>

            {/* Reason quick links */}
            <div style={{ backgroundColor: "#E8DEC8", border: `1px solid ${BORDER}`, padding: "28px" }}>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: BLACK, marginBottom: "16px" }}>
                Quick contact
              </h3>
              {reasons.map((r) => (
                <a
                  key={r.subject}
                  href={`mailto:${r.email}?subject=${encodeURIComponent(r.label + " — The Furniture Magazine")}`}
                  style={{
                    display: "block",
                    fontFamily: "Calibri, Arial, sans-serif",
                    fontSize: "14px",
                    color: "#444",
                    padding: "8px 0",
                    borderBottom: `1px solid ${BORDER}`,
                    textDecoration: "none",
                  }}
                >
                  {r.label} →
                </a>
              ))}
            </div>
          </div>

          {/* Right: what we're looking for */}
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: BLACK, marginBottom: "28px" }}>
              We want to hear from you if…
            </h2>

            {[
              {
                title: "You have a story for us",
                body: "Working in the trade and noticed something worth writing about? A skill in decline, a business challenge, a regional trend — get in touch. We actively seek editorial from working professionals.",
              },
              {
                title: "You want to contribute",
                body: "Experienced upholsterer, cabinet maker, workshop owner or industry educator? We feature Q&As, technique guides and opinion pieces from trade professionals. No writing experience required.",
              },
              {
                title: "You run an industry event",
                body: "Trade shows, festivals, training days, open workshops — we list industry events relevant to UK furniture professionals. Featured listings available free of charge where appropriate.",
              },
              {
                title: "You want to advertise",
                body: "Supplier, material provider, tool manufacturer, software company or recruiter? We offer targeted advertising to an actively engaged audience of UK furniture trade professionals.",
              },
            ].map((item) => (
              <div key={item.title} style={{ marginBottom: "32px", paddingLeft: "20px", borderLeft: `3px solid ${COPPER}` }}>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: BLACK, marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "14px", color: "#555", lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
