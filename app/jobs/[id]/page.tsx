import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { supabase, type SupabaseJob } from "@/lib/supabase"

export const revalidate = 3600

type Props = {
  params: { id: string }
}

async function getJob(id: string): Promise<SupabaseJob | null> {
  const { data, error } = await supabase
    .from("jobs")
    .select(
      "id, title, description, published_description, location, postcode, salary_min, salary_max, job_type, skills_required, status, is_published, published_at, created_at"
    )
    .eq("id", id)
    .eq("is_published", true)
    .single()

  if (error || !data) return null
  return data as SupabaseJob
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = await getJob(params.id)
  if (!job) return { title: "Job Not Found" }

  const location = [job.location, job.postcode].filter(Boolean).join(", ") || "UK"

  return {
    title: `${job.title} — ${location}`,
    description: `${job.title} vacancy in ${location}. Managed by The Talent Branch, specialist recruiters for the furniture and upholstery industry.`,
  }
}

function formatSalary(min: number | null, max: number | null): string {
  if (!min && !max) return "Salary on application"
  if (min && max) return `£${min.toLocaleString("en-GB")} – £${max.toLocaleString("en-GB")}`
  if (min) return `From £${min.toLocaleString("en-GB")}`
  return `Up to £${max!.toLocaleString("en-GB")}`
}

function capitalise(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default async function JobDetailPage({ params }: Props) {
  const job = await getJob(params.id)
  if (!job) notFound()

  const location = [job.location, job.postcode].filter(Boolean).join(", ") || "Location on application"
  const salary = formatSalary(job.salary_min, job.salary_max)
  const description = job.published_description || job.description

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description:
      description ||
      `${job.title} opportunity in the furniture and upholstery industry, managed by The Talent Branch.`,
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
    ...(job.salary_min || job.salary_max
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "GBP",
            value: {
              "@type": "QuantitativeValue",
              ...(job.salary_min ? { minValue: job.salary_min } : {}),
              ...(job.salary_max ? { maxValue: job.salary_max } : {}),
              unitText: "YEAR",
            },
          },
        }
      : {}),
    ...(job.skills_required && job.skills_required.length > 0
      ? { skills: job.skills_required.join(", ") }
      : {}),
    url: `https://www.thefurnituremagazine.com/jobs/${job.id}`,
  }

  const mailtoBody = `Hi Carlos,%0A%0AI'm interested in the ${encodeURIComponent(job.title)} vacancy (${encodeURIComponent(location)}) advertised on The Furniture Magazine.%0A%0APlease send me more details.%0A%0ARegards`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div style={{ backgroundColor: "#F5F1ED", minHeight: "100vh" }}>

        {/* Header */}
        <section style={{ backgroundColor: "#1A1A1A", padding: "48px 28px 40px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <a
              href="/jobs"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "#8B7355",
                textDecoration: "none",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              ← All Vacancies
            </a>

            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "14px", flexWrap: "wrap" }}>
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
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", color: "rgba(245,241,237,0.4)" }}>
                  Posted{" "}
                  {new Date(job.published_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>

            <h1
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 700,
                color: "#F5F1ED",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              {job.title}
            </h1>

            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "rgba(245,241,237,0.5)", marginBottom: "4px" }}>
              {location} · Confidential employer
            </p>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "18px", fontWeight: 700, color: "#8B7355" }}>
              {salary}
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 280px",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* Left — description + skills */}
            <div>
              {description ? (
                <div
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#2C2C2C",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {description}
                </div>
              ) : (
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#9B9795" }}>
                  Full job description available on enquiry.
                </p>
              )}

              {job.skills_required && job.skills_required.length > 0 && (
                <div style={{ marginTop: "36px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#9B9795",
                      marginBottom: "14px",
                    }}
                  >
                    Skills &amp; Experience
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {job.skills_required.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "12px",
                          color: "#2C2C2C",
                          backgroundColor: "#EDE8E0",
                          padding: "5px 12px",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — apply card */}
            <div
              style={{
                backgroundColor: "#1A1A1A",
                padding: "28px",
                position: "sticky",
                top: "90px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#8B7355",
                  marginBottom: "16px",
                }}
              >
                Apply for this role
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "13px",
                  color: "rgba(245,241,237,0.55)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                All applications handled confidentially by The Talent Branch. Employer details disclosed at interview stage.
              </p>
              <a
                href={`mailto:carlos@thetalentbranch.com?subject=Job Enquiry — ${encodeURIComponent(job.title)}&body=${mailtoBody}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#8B7355",
                  color: "#fff",
                  padding: "14px 20px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginBottom: "12px",
                }}
              >
                Enquire Now
              </a>
              <a
                href="https://www.thetalentbranch.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  border: "1px solid rgba(245,241,237,0.2)",
                  color: "rgba(245,241,237,0.6)",
                  padding: "12px 20px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Register with TTB
              </a>

              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(245,241,237,0.1)" }}>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", color: "rgba(245,241,237,0.35)", lineHeight: 1.6 }}>
                  Managed by The Talent Branch<br />
                  carlos@thetalentbranch.com<br />
                  Specialist furniture &amp; upholstery recruitment
                </p>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div style={{ marginTop: "56px", paddingTop: "28px", borderTop: "1px solid #E2DDD8" }}>
            <a
              href="/jobs"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                color: "#8B7355",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              ← Back to all vacancies
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
