import Link from "next/link"
import { supabase, type SupabaseJob } from "@/lib/supabase"
import AdPanel from "@/components/AdPanel"

const INK = "#1A1A1A"
const COPPER = "#8B7355"
const MUTED = "#6B6866"
const BORDER = "#E2DDD8"
const PAPER = "#FAFAF8"

type RailJob = Pick<SupabaseJob, "id" | "title" | "location" | "postcode" | "salary_min" | "salary_max" | "job_type" | "published_at">

function formatSalary(min: number | null, max: number | null): string {
  if (!min && !max) return "Salary on application"
  if (min && max) return `£${min.toLocaleString("en-GB")} – £${max.toLocaleString("en-GB")}`
  if (min) return `From £${min.toLocaleString("en-GB")}`
  return `Up to £${max!.toLocaleString("en-GB")}`
}

function JobRow({ job }: { job: RailJob }) {
  const location = [job.location, job.postcode].filter(Boolean).join(", ") || "Location on application"
  return (
    <Link
      href={`/jobs/${job.id}`}
      style={{
        display: "block",
        padding: "12px 0",
        borderBottom: `1px solid ${BORDER}`,
        textDecoration: "none",
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "15px",
          fontWeight: 400,
          color: INK,
          lineHeight: 1.35,
          marginBottom: "4px",
        }}
      >
        {job.title}
      </span>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "12px",
          color: MUTED,
          lineHeight: 1.5,
        }}
      >
        {location}
      </span>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "12px",
          color: COPPER,
          lineHeight: 1.5,
        }}
      >
        {formatSalary(job.salary_min, job.salary_max)}
      </span>
    </Link>
  )
}

export default async function SideRail() {
  const { data, error } = await supabase
    .from("tfm_public_jobs")
    .select("id, title, location, postcode, salary_min, salary_max, job_type, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(8)

  const jobs: RailJob[] = error ? [] : (data ?? [])

  return (
    <aside className="side-rail">
      <div
        style={{
          backgroundColor: PAPER,
          border: `1px solid ${BORDER}`,
          padding: "20px 24px 16px",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COPPER,
            }}
          >
            Live jobs
          </p>
          <Link
            href="/jobs"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              color: MUTED,
              textDecoration: "none",
            }}
          >
            All roles
          </Link>
        </div>
        {jobs.length === 0 ? (
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.6 }}>
            Live permanent roles from The Talent Branch. See the jobs page for the current list.
          </p>
        ) : (
          <div className="rail-jobs-viewport">
            <div className="rail-jobs-track">
              <div>
                {jobs.map((job) => (
                  <JobRow key={job.id} job={job} />
                ))}
              </div>
              <div className="rail-jobs-copy" aria-hidden="true">
                {jobs.map((job) => (
                  <JobRow key={`copy-${job.id}`} job={job} />
                ))}
              </div>
            </div>
          </div>
        )}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "11px",
            color: MUTED,
            marginTop: "10px",
            lineHeight: 1.5,
          }}
        >
          Employers are named at interview stage.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <AdPanel />
      </div>

      <AdPanel size="small" />
    </aside>
  )
}
