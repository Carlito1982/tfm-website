export interface Issue {
  slug: string
  issue: number
  title: string
  date: string
  excerpt: string
  category: string
  featured?: boolean
  beehiivUrl?: string
}

// Update this list when new issues are published.
// Add Beehiiv post URL once Beehiiv is live.
export const issues: Issue[] = [
  // Issue 1 is scheduled for Tuesday 29 September 2026. Add it here with its Beehiiv post URL once sent.
]

export function getFeaturedIssue(): Issue | undefined {
  return issues.find((i) => i.featured) ?? issues[0]
}

export function getRecentIssues(count = 6): Issue[] {
  return [...issues]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}
