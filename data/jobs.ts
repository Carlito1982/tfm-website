export interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  type: "Permanent" | "Contract" | "Temporary"
  posted: string
  url: string
  featured?: boolean
}

// These are pulled from The Talent Branch live vacancies.
// TODO: Replace with live Supabase API call from TTB database.
export const jobs: Job[] = [
  {
    id: "ttb-001",
    title: "Senior Upholsterer",
    company: "Confidential — West Midlands",
    location: "Birmingham, West Midlands",
    salary: "£32,000 – £38,000",
    type: "Permanent",
    posted: "2026-04-18",
    url: "https://www.thetalentbranch.com",
    featured: true,
  },
  {
    id: "ttb-002",
    title: "Cabinet Maker",
    company: "Confidential — South East",
    location: "Surrey",
    salary: "£28,000 – £34,000",
    type: "Permanent",
    posted: "2026-04-17",
    url: "https://www.thetalentbranch.com",
    featured: true,
  },
  {
    id: "ttb-003",
    title: "French Polisher",
    company: "Confidential — London",
    location: "London",
    salary: "£30,000 – £36,000",
    type: "Permanent",
    posted: "2026-04-15",
    url: "https://www.thetalentbranch.com",
    featured: false,
  },
  {
    id: "ttb-004",
    title: "Workshop Manager",
    company: "Confidential — Yorkshire",
    location: "Leeds, Yorkshire",
    salary: "£40,000 – £48,000",
    type: "Permanent",
    posted: "2026-04-14",
    url: "https://www.thetalentbranch.com",
    featured: false,
  },
  {
    id: "ttb-005",
    title: "Spray Finisher",
    company: "Confidential — Midlands",
    location: "Nottingham",
    salary: "£25,000 – £30,000",
    type: "Permanent",
    posted: "2026-04-12",
    url: "https://www.thetalentbranch.com",
    featured: false,
  },
  {
    id: "ttb-006",
    title: "Production Manager",
    company: "Confidential — Scotland",
    location: "Edinburgh",
    salary: "£45,000 – £55,000",
    type: "Permanent",
    posted: "2026-04-10",
    url: "https://www.thetalentbranch.com",
    featured: false,
  },
]

export function getFeaturedJobs(): Job[] {
  return jobs.filter((j) => j.featured)
}

export function getAllJobs(): Job[] {
  return [...jobs].sort(
    (a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime()
  )
}
