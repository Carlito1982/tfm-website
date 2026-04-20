import type { Metadata } from "next"
import { getAllJobs } from "@/data/jobs"

export const metadata: Metadata = {
  title: "Live UK Jobs",
  description: "Live furniture and upholstery jobs across the UK — sourced by The Talent Branch, specialist recruiters for the furniture industry.",
}

const GREEN  = "#2A4A35"
const CREAM  = "#F2EBD9"
const COPPER = "#B07040"
const BLACK  = "#1A1A1A"
const BORDER = "#D4C9B0"

export default function JobsPage() {
  const jobs = getAllJobs()

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: BLACK, padding: "56px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "Calibri, Arial, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: COPPER,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}>
            Powered by The Talent Branch
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", color: CREAM }}>
            Live UK Jobs
          </h1>
          <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#888", marginTop: "12px", maxWidth: "560px" }}>
            Every role on this page is managed by The Talent Branch — the UK&rsquo;s specialist recruitment
            agency for the furniture and upholstery industry. All enquiries handled confidentially.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px" }}>
        {/* Jobs list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: BORDER }}>
          {jobs.map((job) => (
            <div
              key={job.id}
              style={{
                backgroundColor: CREAM,
                padding: "32px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "24px",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "8px", flexWrap: "wrap" }}>
                  <span style={{
                    backgroundColor: GREEN,
                    color: CREAM,
                    fontSize: "10px",
                    fontFamily: "Calibri, Arial, sans-serif",
                    fontWeight: "bold",
                    letterSpacing: "0.08em",
                    padding: "3px 10px",
                    textTransform: "uppercase",
                  }}>
                    {job.type}
                  </span>
                  <span style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "12px", color: "#888" }}>
                    Posted {new Date(job.posted).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                </div>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: BLACK, marginBottom: "6px" }}>
                  {job.title}
                </h2>
                <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "14px", color: "#555", marginBottom: "4px" }}>
                  {job.location} &nbsp;·&nbsp; {job.company}
                </p>
                <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: COPPER, fontWeight: "bold" }}>
                  {job.salary}
                </p>
              </div>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
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
                  whiteSpace: "nowrap",
                }}
              >
                ENQUIRE
              </a>
            </div>
          ))}
        </div>

        {/* Advertise your role */}
        <div style={{
          marginTop: "56px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          backgroundColor: BORDER,
        }}>
          <div style={{ backgroundColor: GREEN, padding: "40px" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: CREAM, marginBottom: "12px" }}>
              Looking to hire?
            </h3>
            <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: "#8BA895", lineHeight: 1.7, marginBottom: "24px" }}>
              Advertise your vacancy to the most targeted audience of furniture and
              upholstery professionals in the UK. Managed by The Talent Branch.
            </p>
            <a
              href="mailto:carlos@thetalentbranch.com?subject=Job Advertising Enquiry — The Furniture Magazine"
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
              ADVERTISE A ROLE
            </a>
          </div>
          <div style={{ backgroundColor: "#E8DEC8", padding: "40px" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: BLACK, marginBottom: "12px" }}>
              Looking for work?
            </h3>
            <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: "#555", lineHeight: 1.7, marginBottom: "24px" }}>
              Register with The Talent Branch and let us find your next role. Free for
              candidates. Permanent and contract roles across the UK.
            </p>
            <a
              href="https://www.thetalentbranch.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: BLACK,
                color: CREAM,
                padding: "12px 24px",
                fontFamily: "Calibri, Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "13px",
                letterSpacing: "0.05em",
                textDecoration: "none",
              }}
            >
              REGISTER WITH TTB
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
