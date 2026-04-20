import type { Metadata } from "next"
import { supabase, type SupabaseJob } from "@/lib/supabase"

export const revalidate = 3600 // revalidate every hour

export const metadata: Metadata = {
  title: "Live UK Jobs | The Furniture Magazine",
  description:
    "Live furniture and upholstery jobs across the UK — sourced by The Talent Branch, specialist recruiters for the furniture industry.",
}

function formatSalary(min: number | null, max: number | null): string {
  if (!min && !max) return "Salary on application"
  if (min && max) {
    return `£${min.toLocaleString("en-GB")} – £${max.toLocaleString("en-GB")}`
  }
  if (min) return `From £${min.toLocaleString("en-GB")}`
  return `Up to £${max!.toLocaleString("en-GB")}`
}

function capitalise(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function buildJobPostingSchema(job: SupabaseJob) {
  const salary =
    job.salary_min || job.salary_max
      ? {
          "@type": "MonetaryAmount",
          currency: "GBP",
          value: {
            "@type": "QuantitativeValue",
            ...(job.salary_min ? { minValue: job.salary_min } : {}),
            ...(job.salary_max ? { maxValue: job.salary_max } : {}),
            unitText: "YEAR",
          },
        }
      : undefined

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description:
      job.published_description ||
      job.description ||
      `${job.title} opportunity in the furniture and upholstery industry, managed by The Talent Branch. Apply for full details.`,
    datePosted: job.published_at || job.created_at,
    validThrough: (() => {
      const d = new Date(job.published_at || job.created_at)
      d.setDate(d.getDate() + 60)
      return d.toISOString().split("T")[0]
    })(),
    employmentType:
      job.job_type === "contract"
        ? "CONTRACTOR"
        : job.job_type === "temporary"
        ? "TEMPORARY"
        : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "The Talent Branch",
      sameAs: "https://www.thetalentbranch.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location || "United Kingdom",
        addressCountry: "GB",
        ...(job.postcode ? { postalCode: job.postcode } : {}),
      },
    },
    ...(salary ? { baseSalary: salary } : {}),
    ...(job.skills_required && job.skills_required.length > 0
      ? { skills: job.skills_required.join(", ") }
      : {}),
  }
}

export default async function JobsPage() {
  const { data: jobs, error } = await supabase
    .from("jobs")
    .select(
      "id, title, description, published_description, location, postcode, salary_min, salary_max, job_type, skills_required, status, is_published, published_at, created_at"
    )
    .eq("is_published", true)
    .order("published_at", { ascending: false })

  const liveJobs: SupabaseJob[] = error ? [] : (jobs ?? [])

  const structuredData = liveJobs.map(buildJobPostingSchema)

  return (
    <>
      {/* JobPosting structured data for Google Jobs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div style={{ backgroundColor: "#F5F1ED", minHeight: "100vh" }}>

        {/* Header */}
        <section style={{ backgroundColor: "#1A1A1A", padding: "60px 28px 56px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "#8B7355",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Powered by The Talent Branch
            </p>
            <h1
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(30px, 5vw, 48px)",
                fontWeight: 700,
                color: "#F5F1ED",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              Live UK Jobs
            </h1>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "15px",
                color: "rgba(245,241,237,0.55)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Every role on this page is managed by The Talent Branch — the UK&rsquo;s specialist
              recruiter for the furniture and upholstery industry. All enquiries handled confidentially.
            </p>
          </div>
        </section>

        {/* Jobs list */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 28px" }}>

          {liveJobs.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 28px",
                backgroundColor: "#FAFAF8",
                border: "1px solid #E2DDD8",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "20px",
                  color: "#1A1A1A",
                  marginBottom: "12px",
                }}
              >
                No live vacancies right now
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  color: "#9B9795",
                }}
              >
                New roles are added regularly. Subscribe to the magazine to be notified.
              </p>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: "28px",
                  borderBottom: "2px solid #1A1A1A",
                  paddingBottom: "14px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    fontWeight: 700,
                    color: "#1A1A1A",
                  }}
                >
                  {liveJobs.length} {liveJobs.length === 1 ? "Vacancy" : "Vacancies"}
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "12px",
                    color: "#9B9795",
                  }}
                >
                  Updated hourly
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {liveJobs.map((job) => (
                  <div
                    key={job.id}
                    style={{
                      backgroundColor: "#FAFAF8",
                      padding: "28px 32px",
                      borderBottom: "1px solid #E2DDD8",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "24px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      {/* Badges */}
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                          marginBottom: "10px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: "#8B7355",
                            color: "#fff",
                            fontSize: "9px",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            padding: "3px 9px",
                            textTransform: "uppercase",
                          }}
                        >
                          {capitalise(job.job_type ?? "permanent")}
                        </span>
                        {job.published_at && (
                          <span
                            style={{
                              fontFamily: "var(--font-inter), sans-serif",
                              fontSize: "11px",
                              color: "#9B9795",
                            }}
                          >
                            Posted{" "}
                            {new Date(job.published_at).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontSize: "clamp(18px, 2vw, 22px)",
                          fontWeight: 700,
                          color: "#1A1A1A",
                          marginBottom: "6px",
                          lineHeight: 1.25,
                        }}
                      >
                        {job.title}
                      </h3>

                      {/* Location */}
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "13px",
                          color: "#6B6866",
                          marginBottom: "6px",
                        }}
                      >
                        {[job.location, job.postcode].filter(Boolean).join(", ") ||
                          "Location on application"}
                        &nbsp;·&nbsp;Confidential employer
                      </p>

                      {/* Salary */}
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#8B7355",
                        }}
                      >
                        {formatSalary(job.salary_min, job.salary_max)}
                      </p>

                      {/* Skills */}
                      {job.skills_required && job.skills_required.length > 0 && (
                        <div
                          style={{
                            marginTop: "12px",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                          }}
                        >
                          {job.skills_required.slice(0, 5).map((skill) => (
                            <span
                              key={skill}
                              style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "10px",
                                color: "#6B6866",
                                backgroundColor: "#F0EBE3",
                                padding: "3px 8px",
                                letterSpacing: "0.03em",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <a
                      href={`mailto:carlos@thetalentbranch.com?subject=Job Enquiry — ${encodeURIComponent(job.title)}&body=Hi Carlos,%0A%0AI'm interested in the ${encodeURIComponent(job.title)} vacancy (${encodeURIComponent(job.location ?? "")}) advertised on The Furniture Magazine.%0A%0APlease send me more details.%0A%0ARegards`}
                      style={{
                        display: "inline-block",
                        backgroundColor: "#1A1A1A",
                        color: "#F5F1ED",
                        padding: "13px 24px",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 700,
                        fontSize: "11px",
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      Enquire
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CTA panels */}
          <div
            style={{
              marginTop: "56px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
              backgroundColor: "#E2DDD8",
            }}
          >
            <div style={{ backgroundColor: "#1A1A1A", padding: "40px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#F5F1ED",
                  marginBottom: "12px",
                }}
              >
                Looking to hire?
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  color: "rgba(245,241,237,0.55)",
                  lineHeight: 1.75,
                  marginBottom: "24px",
                }}
              >
                Advertise your vacancy to the most targeted audience of furniture and
                upholstery professionals in the UK. Managed by The Talent Branch.
              </p>
              <a
                href="mailto:carlos@thetalentbranch.com?subject=Job Advertising Enquiry — The Furniture Magazine"
                style={{
                  display: "inline-block",
                  backgroundColor: "#8B7355",
                  color: "#fff",
                  padding: "12px 24px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Advertise a Role
              </a>
            </div>
            <div style={{ backgroundColor: "#FAFAF8", padding: "40px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: "12px",
                }}
              >
                Looking for work?
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                  color: "#6B6866",
                  lineHeight: 1.75,
                  marginBottom: "24px",
                }}
              >
                Register with The Talent Branch and let us find your next role. Free for
                candidates. Permanent and contract roles across the UK.
              </p>
              <a
                href="https://www.thetalentbranch.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  border: "1.5px solid #1A1A1A",
                  color: "#1A1A1A",
                  padding: "12px 24px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Register with TTB
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
