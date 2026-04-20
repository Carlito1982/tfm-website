import Link from "next/link"
import { getFeaturedIssue, getRecentIssues } from "@/data/issues"
import { getFeaturedJobs } from "@/data/jobs"
import { getFeaturedEvent, getUpcomingEvents } from "@/data/events"

const GREEN  = "#2A4A35"
const CREAM  = "#F2EBD9"
const COPPER = "#B07040"
const BLACK  = "#1A1A1A"
const BORDER = "#D4C9B0"

function CategoryTag({ label }: { label: string }) {
  return (
    <span style={{
      display: "inline-block",
      backgroundColor: COPPER,
      color: "#fff",
      fontSize: "10px",
      fontFamily: "Calibri, Arial, sans-serif",
      fontWeight: "bold",
      letterSpacing: "0.08em",
      padding: "3px 10px",
      textTransform: "uppercase",
      marginBottom: "10px",
    }}>
      {label}
    </span>
  )
}

export default function HomePage() {
  const featured = getFeaturedIssue()
  const recent   = getRecentIssues(3)
  const jobs     = getFeaturedJobs()
  const events   = getUpcomingEvents()

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: GREEN, color: CREAM, padding: "72px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}>
            <div style={{ maxWidth: "680px" }}>
              <p style={{
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.15em",
                color: COPPER,
                fontWeight: "bold",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}>
                The UK Trade Publication for Furniture Professionals
              </p>
              <h1 style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: "bold",
                color: CREAM,
                lineHeight: 1.1,
                marginBottom: "24px",
              }}>
                Industry intelligence.<br />Every week. Free.
              </h1>
              <p style={{
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "18px",
                color: "#C8BEAA",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "540px",
              }}>
                Salary benchmarks, craft technique, hiring trends, industry news and business
                advice — written for upholsterers, cabinet makers, workshop owners and
                furniture professionals across the UK.
              </p>

              {/* Subscribe form */}
              <div id="subscribe">
                <form
                  style={{ display: "flex", flexWrap: "wrap", gap: "0" }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                    style={{
                      flex: "1 1 260px",
                      padding: "14px 20px",
                      fontSize: "15px",
                      fontFamily: "Calibri, Arial, sans-serif",
                      border: "none",
                      outline: "none",
                      color: BLACK,
                      backgroundColor: CREAM,
                      minWidth: "200px",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: COPPER,
                      color: "#fff",
                      padding: "14px 28px",
                      fontSize: "14px",
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontWeight: "bold",
                      letterSpacing: "0.05em",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    SUBSCRIBE FREE
                  </button>
                </form>
                <p style={{
                  fontSize: "12px",
                  color: "#6B8A75",
                  fontFamily: "Calibri, Arial, sans-serif",
                  marginTop: "10px",
                }}>
                  Free. Unsubscribe any time. No spam — ever.
                </p>
              </div>
            </div>

            {/* Stats block */}
            <div style={{
              display: "flex",
              gap: "0",
              flexWrap: "wrap",
              borderTop: `1px solid #3D6B4F`,
              paddingTop: "32px",
            }}>
              {[
                { num: "571", label: "Industry candidates" },
                { num: "187", label: "Partner companies" },
                { num: "1,200+", label: "Job postings analysed" },
                { num: "UK-wide", label: "Coverage" },
              ].map((s) => (
                <div key={s.label} style={{
                  flex: "1 1 140px",
                  padding: "16px 24px 16px 0",
                  borderRight: `1px solid #3D6B4F`,
                  marginRight: "24px",
                  marginBottom: "8px",
                }}>
                  <div style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: COPPER,
                    lineHeight: 1,
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily: "Calibri, Arial, sans-serif",
                    fontSize: "12px",
                    color: "#8BA895",
                    marginTop: "4px",
                    letterSpacing: "0.03em",
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ISSUE ───────────────────────────────────────────────────── */}
      {featured && (
        <section style={{ backgroundColor: "#E8DEC8", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "3px", backgroundColor: COPPER }} />
              <span style={{
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "0.12em",
                color: COPPER,
                textTransform: "uppercase",
              }}>
                Latest Issue
              </span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}>
              {/* Issue cover placeholder */}
              <div style={{
                backgroundColor: GREEN,
                aspectRatio: "4/5",
                maxWidth: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "32px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "4px",
                  backgroundColor: COPPER,
                }} />
                <div style={{
                  fontFamily: "Calibri, Arial, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: COPPER,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}>
                  Issue {featured.issue} — {new Date(featured.date).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
                </div>
                <h2 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "26px",
                  color: CREAM,
                  lineHeight: 1.2,
                }}>
                  {featured.title}
                </h2>
              </div>

              <div>
                <CategoryTag label={featured.category} />
                <h2 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: BLACK,
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}>
                  {featured.title}
                </h2>
                <p style={{
                  fontFamily: "Calibri, Arial, sans-serif",
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}>
                  {featured.excerpt}
                </p>
                <Link
                  href={`/issues/${featured.slug}`}
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
                  }}
                >
                  READ THIS ISSUE
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── RECENT ISSUES GRID ───────────────────────────────────────────────── */}
      <section style={{ padding: "64px 24px", backgroundColor: CREAM }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: BLACK }}>
              Recent Issues
            </h2>
            <Link href="/issues" style={{
              fontFamily: "Calibri, Arial, sans-serif",
              fontSize: "13px",
              color: COPPER,
              fontWeight: "bold",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}>
              ALL ISSUES →
            </Link>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            backgroundColor: BORDER,
          }}>
            {recent.map((issue) => (
              <article
                key={issue.slug}
                style={{ backgroundColor: CREAM, padding: "32px" }}
              >
                <CategoryTag label={issue.category} />
                <div style={{
                  fontFamily: "Calibri, Arial, sans-serif",
                  fontSize: "11px",
                  color: "#888",
                  marginBottom: "8px",
                  letterSpacing: "0.04em",
                }}>
                  Issue {issue.issue} — {new Date(issue.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <h3 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "20px",
                  color: BLACK,
                  lineHeight: 1.3,
                  marginBottom: "12px",
                }}>
                  {issue.title}
                </h3>
                <p style={{
                  fontFamily: "Calibri, Arial, sans-serif",
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}>
                  {issue.excerpt}
                </p>
                <Link
                  href={`/issues/${issue.slug}`}
                  style={{
                    fontFamily: "Calibri, Arial, sans-serif",
                    fontSize: "13px",
                    color: COPPER,
                    fontWeight: "bold",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                  }}
                >
                  READ MORE →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE JOBS STRIP ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: GREEN, padding: "64px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: CREAM }}>
                Live UK Jobs
              </h2>
              <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "14px", color: "#8BA895", marginTop: "4px" }}>
                Sourced by The Talent Branch — specialist furniture &amp; upholstery recruiters
              </p>
            </div>
            <Link href="/jobs" style={{
              fontFamily: "Calibri, Arial, sans-serif",
              fontSize: "13px",
              color: COPPER,
              fontWeight: "bold",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}>
              ALL JOBS →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", backgroundColor: "#3D6B4F" }}>
            {jobs.map((job) => (
              <div key={job.id} style={{ backgroundColor: "#2A4A35", padding: "28px" }}>
                <div style={{
                  fontFamily: "Calibri, Arial, sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: COPPER,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}>
                  {job.type}
                </div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: CREAM, marginBottom: "6px" }}>
                  {job.title}
                </h3>
                <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "13px", color: "#8BA895", marginBottom: "4px" }}>
                  {job.location}
                </p>
                <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "15px", color: COPPER, fontWeight: "bold", marginBottom: "20px" }}>
                  {job.salary}
                </p>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Calibri, Arial, sans-serif",
                    fontSize: "12px",
                    color: "#8BA895",
                    fontWeight: "bold",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                  }}
                >
                  ENQUIRE →
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <a
              href="https://www.thetalentbranch.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "13px",
                color: "#6B8A75",
                textDecoration: "none",
              }}
            >
              All roles managed by The Talent Branch Ltd — UK specialist recruiters for the furniture industry
            </a>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY EVENTS ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#E8DEC8", padding: "64px 24px", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px", flexWrap: "wrap", gap: "12px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: BLACK }}>
              Industry Events
            </h2>
            <Link href="/events" style={{
              fontFamily: "Calibri, Arial, sans-serif",
              fontSize: "13px",
              color: COPPER,
              fontWeight: "bold",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}>
              ALL EVENTS →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {events.map((event) => (
              <article
                key={event.id}
                style={{
                  backgroundColor: CREAM,
                  border: `1px solid ${BORDER}`,
                  padding: "28px",
                  borderTop: event.featured ? `4px solid ${COPPER}` : `4px solid ${BORDER}`,
                }}
              >
                {event.featured && (
                  <div style={{
                    fontFamily: "Calibri, Arial, sans-serif",
                    fontSize: "10px",
                    fontWeight: "bold",
                    letterSpacing: "0.1em",
                    color: COPPER,
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}>
                    Featured Event
                  </div>
                )}
                <div style={{
                  fontFamily: "Calibri, Arial, sans-serif",
                  fontSize: "12px",
                  color: GREEN,
                  fontWeight: "bold",
                  marginBottom: "6px",
                }}>
                  {event.dateDisplay}
                </div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: BLACK, marginBottom: "6px" }}>
                  {event.name}
                </h3>
                <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "13px", color: "#888", marginBottom: "12px" }}>
                  {event.location}
                </p>
                <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "14px", color: "#555", lineHeight: 1.6, marginBottom: "20px" }}>
                  {event.description}
                </p>
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Calibri, Arial, sans-serif",
                    fontSize: "13px",
                    color: COPPER,
                    fontWeight: "bold",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                  }}
                >
                  FIND OUT MORE →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TFM STRIP ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: BLACK, color: CREAM, padding: "80px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: COPPER, margin: "0 auto 28px" }} />
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", color: CREAM, marginBottom: "20px" }}>
            Built for people who do this work
          </h2>
          <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "17px", color: "#AAA", lineHeight: 1.8, marginBottom: "32px" }}>
            The Furniture Magazine is published by The Talent Branch — the UK&rsquo;s specialist recruitment
            agency for the upholstery and furniture industry. With 571 candidates and 187 companies in
            our network, we see this industry more clearly than almost anyone else.
          </p>
          <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "17px", color: "#AAA", lineHeight: 1.8, marginBottom: "40px" }}>
            This publication exists because the trade deserved a proper voice. Not consumer lifestyle.
            Not design press. The trade.
          </p>
          <Link
            href="/about"
            style={{
              display: "inline-block",
              border: `1px solid ${COPPER}`,
              color: COPPER,
              padding: "12px 32px",
              fontFamily: "Calibri, Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "13px",
              letterSpacing: "0.06em",
              textDecoration: "none",
            }}
          >
            ABOUT THE FURNITURE MAGAZINE
          </Link>
        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP BOTTOM ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: COPPER, padding: "64px 24px" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", marginBottom: "12px" }}>
            Join the mailing list
          </h2>
          <p style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: "16px", color: "#F2E0CC", marginBottom: "32px", lineHeight: 1.6 }}>
            Every week in your inbox. Free forever.
          </p>
          <form
            style={{ display: "flex", flexWrap: "wrap", gap: "0", maxWidth: "480px", margin: "0 auto" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              style={{
                flex: "1 1 220px",
                padding: "14px 20px",
                fontSize: "15px",
                fontFamily: "Calibri, Arial, sans-serif",
                border: "none",
                outline: "none",
                color: BLACK,
                minWidth: "180px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: GREEN,
                color: CREAM,
                padding: "14px 24px",
                fontSize: "13px",
                fontFamily: "Calibri, Arial, sans-serif",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
