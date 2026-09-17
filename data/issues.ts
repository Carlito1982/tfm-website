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
  // Issue 1 is scheduled for Tuesday 29 September 2026. Add the Beehiiv post URL once sent.
  {
    slug: "issue-001",
    issue: 1,
    title: "The Furniture Magazine, Issue 001",
    date: "2026-09-29",
    excerpt:
      "Advertised pay on 50 live vacancies against the ONS median, the year the sofa trade changed hands, what Hormuz is doing to freight, and the autumn diary.",
    category: "Industry News",
    featured: true,
  },
]

export function getFeaturedIssue(): Issue | undefined {
  return issues.find((i) => i.featured) ?? issues[0]
}

export function getRecentIssues(count = 6): Issue[] {
  return [...issues]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}
