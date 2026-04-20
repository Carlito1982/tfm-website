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
  {
    slug: "issue-001-salary-report-2026",
    issue: 1,
    title: "The 2026 UK Furniture Industry Salary Report",
    date: "2026-04-28",
    excerpt:
      "The UK furniture industry has never had a proper salary benchmark. Until now. We break down earnings by role, region and experience — from trainee upholsterer to production manager.",
    category: "Data & Intelligence",
    featured: true,
    beehiivUrl: "", // Add Beehiiv post URL here
  },
  {
    slug: "issue-002-skills-shortage",
    issue: 2,
    title: "The Skills Crisis Is Worse Than You Think",
    date: "2026-05-05",
    excerpt:
      "With fewer than 400 qualified upholstery apprentices registered across the UK, the trade faces a generational skills gap. We look at what is being done — and what isn't.",
    category: "Industry News",
    featured: false,
    beehiivUrl: "",
  },
  {
    slug: "issue-003-deep-buttoning",
    issue: 3,
    title: "Deep Buttoning: The Complete Technique Guide",
    date: "2026-05-12",
    excerpt:
      "From marking out and spacing to thread tension and back tufting — a step-by-step walkthrough of deep buttoning for both traditional and contemporary upholstery.",
    category: "Craft & Technique",
    featured: false,
    beehiivUrl: "",
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
