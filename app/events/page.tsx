import type { Metadata } from "next"
import { getUpcomingEvents } from "@/data/events"

export const metadata: Metadata = {
  title: "Industry Events",
  description: "UK furniture and upholstery industry events — trade shows, festivals, training days and open workshops listed by The Furniture Magazine.",
}

const GREEN  = "#2A4A35"
const CREAM  = "#F2EBD9"
const COPPER = "#B07040"
const BLACK  = "#1A1A1A"
const BORDER = "#D4C9B0"

export default function EventsPage() {
  const events = getUpcomingEvents()

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: GREEN, padding: "72px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Calibri, Arial, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: COPPER,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            What&rsquo;s On
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", color: CREAM }}>
            Industry Events
          </h1>
          <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#8BA895", marginTop: "12px", maxWidth: "580px" }}>
            Trade shows, festivals, training days and open workshops relevant to UK furniture professionals.
            Free listings available — contact the editor.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px" }}>

        {events.length === 0 ? (
          <div style={{
            backgroundColor: CREAM,
            border: `1px solid ${BORDER}`,
            padding: "64px",
            textAlign: "center",
          }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: BLACK, marginBottom: "12px" }}>
              No upcoming events listed
            </p>
            <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: "#555" }}>
              Running an industry event? Contact us for a free listing.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: BORDER }}>
            {events.map((event, index) => (
              <div
                key={event.id}
                style={{
                  backgroundColor: event.featured ? GREEN : CREAM,
                  padding: "40px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "32px",
                  alignItems: "start",
                  borderTop: event.featured ? `4px solid ${COPPER}` : "none",
                }}
              >
                <div>
                  {event.featured && (
                    <span style={{
                      display: "inline-block",
                      backgroundColor: COPPER,
                      color: "#fff",
                      fontSize: "10px",
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontWeight: "bold",
                      letterSpacing: "0.1em",
                      padding: "3px 10px",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}>
                      Featured
                    </span>
                  )}
                  <h2 style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "26px",
                    color: event.featured ? CREAM : BLACK,
                    marginBottom: "8px",
                    lineHeight: 1.2,
                  }}>
                    {event.name}
                  </h2>

                  <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "16px" }}>
                    <span style={{
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontSize: "14px",
                      color: event.featured ? COPPER : COPPER,
                      fontWeight: "bold",
                    }}>
                      {event.dateDisplay}
                    </span>
                    <span style={{
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontSize: "14px",
                      color: event.featured ? "#8BA895" : "#777",
                    }}>
                      {event.location}
                    </span>
                    <span style={{
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontSize: "14px",
                      color: event.featured ? "#8BA895" : "#999",
                    }}>
                      Organised by {event.organiser}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "Calibri, Arial, sans-serif",
                    fontSize: "15px",
                    color: event.featured ? "#8BA895" : "#555",
                    lineHeight: 1.7,
                    maxWidth: "640px",
                  }}>
                    {event.description}
                  </p>
                </div>

                <div style={{ flexShrink: 0 }}>
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      backgroundColor: event.featured ? COPPER : GREEN,
                      color: "#fff",
                      padding: "12px 24px",
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontWeight: "bold",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    VIEW EVENT →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Submit your event */}
        <div style={{
          marginTop: "56px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          backgroundColor: BORDER,
        }}>
          <div style={{ backgroundColor: "#E8DEC8", padding: "40px" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: BLACK, marginBottom: "12px" }}>
              List your event
            </h3>
            <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: "#555", lineHeight: 1.7, marginBottom: "24px" }}>
              Running a trade show, training day, open workshop or industry festival?
              We list events relevant to UK furniture professionals, free of charge where appropriate.
            </p>
            <a
              href="mailto:carlos@thetalentbranch.com?subject=Event Listing — The Furniture Magazine"
              style={{
                display: "inline-block",
                backgroundColor: GREEN,
                color: CREAM,
                padding: "12px 24px",
                fontFamily: "Calibri, Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "13px",
                letterSpacing: "0.05em",
                textDecoration: "none",
              }}
            >
              SUBMIT AN EVENT
            </a>
          </div>

          <div style={{ backgroundColor: BLACK, padding: "40px" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: CREAM, marginBottom: "12px" }}>
              Promote your event
            </h3>
            <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: "#888", lineHeight: 1.7, marginBottom: "24px" }}>
              Featured event placements include newsletter coverage, dedicated editorial mention
              and LinkedIn promotion to our audience of active UK furniture professionals.
            </p>
            <a
              href="/advertise"
              style={{
                display: "inline-block",
                backgroundColor: COPPER,
                color: "#fff",
                padding: "12px 24px",
                fontFamily: "Calibri, Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "13px",
                letterSpacing: "0.05em",
                textDecoration: "none",
              }}
            >
              SEE PACKAGES
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
