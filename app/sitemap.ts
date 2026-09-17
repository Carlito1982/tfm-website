import { MetadataRoute } from "next"
import { supabase } from "@/lib/supabase"
import { articles } from "@/data/articles"
import { issues } from "@/data/issues"
import { benchVideos } from "@/data/bench"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.thefurnituremagazine.com"

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/advertise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${baseUrl}/founding-partners`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/issues`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/bench`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/press-releases`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/events`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ]

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const issueRoutes: MetadataRoute.Sitemap = issues.map((i) => ({
    url: `${baseUrl}/issues/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const benchRoutes: MetadataRoute.Sitemap = benchVideos.map((v) => ({
    url: `${baseUrl}/bench/${v.slug}`,
    lastModified: new Date(v.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Dynamic job pages
  const { data: jobs } = await supabase
    .from("tfm_public_jobs")
    .select("id, published_at, updated_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false })

  const jobRoutes: MetadataRoute.Sitemap = (jobs ?? []).map((job) => ({
    url: `${baseUrl}/jobs/${job.id}`,
    lastModified: new Date(job.published_at || job.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...articleRoutes, ...issueRoutes, ...benchRoutes, ...jobRoutes]
}
