// Shared job salary display. tfm_public_jobs has no pay-period column, so period
// is inferred from magnitude: values under 100 read as an hourly rate, values of
// 100 or more as an annual figure (assumption logged in open item #101 evidence,
// since real data so far is 30,000-55,000 and always annual).
function unit(value: number): string {
  return value < 100 ? "an hour" : "a year"
}

export function formatSalary(min: number | null, max: number | null): string {
  if (!min && !max) return "Salary on application"
  if (min && max) {
    if (min === max) return `£${min.toLocaleString("en-GB")} ${unit(min)}`
    return `£${min.toLocaleString("en-GB")} – £${max.toLocaleString("en-GB")} ${unit(max)}`
  }
  if (min) return `From £${min.toLocaleString("en-GB")} ${unit(min)}`
  return `Up to £${max!.toLocaleString("en-GB")} ${unit(max!)}`
}
