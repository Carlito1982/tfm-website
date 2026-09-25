// Shared job salary display. tfm_public_jobs has no pay-period column, so period
// is inferred from magnitude: values under 100 read as an hourly rate, values of
// 100 or more as an annual figure (assumption logged in open item #101 evidence,
// since real data so far is 30,000-55,000 and always annual).
// From 25 Sep 2026 jobs.pay_period ("year" | "day" | "hour") is the source of truth;
// the magnitude guess remains only as a fallback for rows without it.
function unit(value: number, period?: string | null): string {
  if (period === "day") return "a day"
  if (period === "hour") return "an hour"
  if (period === "year") return "a year"
  return value < 100 ? "an hour" : "a year"
}

export function formatSalary(min: number | null, max: number | null, period?: string | null): string {
  if (!min && !max) return "Salary on application"
  if (min && max) {
    if (min === max) return `£${min.toLocaleString("en-GB")} ${unit(min, period)}`
    return `£${min.toLocaleString("en-GB")} – £${max.toLocaleString("en-GB")} ${unit(max, period)}`
  }
  if (min) return `From £${min.toLocaleString("en-GB")} ${unit(min, period)}`
  return `Up to £${max!.toLocaleString("en-GB")} ${unit(max!, period)}`
}

export function salaryUnitText(period?: string | null): "YEAR" | "DAY" | "HOUR" {
  return period === "day" ? "DAY" : period === "hour" ? "HOUR" : "YEAR"
}

// validThrough for JobPosting: the advert expiry when set, else 60 days from posting.
export function validThroughFor(published: string | null, created: string, expires?: string | null): string {
  if (expires) return expires.split("T")[0]
  const d = new Date(published || created)
  d.setDate(d.getDate() + 60)
  return d.toISOString().split("T")[0]
}
