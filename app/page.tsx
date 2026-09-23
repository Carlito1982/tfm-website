import type { Metadata } from "next"
import Link from "next/link"
import SubscribeForm from "@/components/SubscribeForm"
import ArticleCard from "@/components/ArticleCard"
import { getHeroArticle, getHeroPoolArticles, getStartHereArticles, getLatestArticles, getSecondaryArticles, SECTIONS } from "@/data/articles"
import { getBenchVideos } from "@/data/bench"
import BenchCard from "@/components/BenchCard"
import HomeFeatureBoxes from "@/components/HomeFeatureBoxes"
import HeroRotator from "@/components/HeroRotator"
import { supabase, type SupabaseJob } from "@/lib/supabase"

export const revalidate = 3600

// Explicit homepage canonical. The layout's relative "./" resolves to /index on
// Vercel's prerendered homepage (it does not locally), so the root is set here.
// alternates replaces the layout's, so the RSS link is repeated.
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.thefurnituremagazine.com/",
    types: { "application/rss+xml": "https://www.thefurnituremagazine.com/feed.xml" },
  },
}

const SECTION_TAGS = ["tag-craft", "tag-news", "tag-business", "tag-salary"]
const categories = SECTIONS.map((sec, i) => ({
  label: sec.name,
  description: sec.description,
  tagClass: SECTION_TAGS[i],
  href: sec.href,
}))

export default async function HomePage() {
  const featured = getHeroArticle()
  const startHere = getStartHereArticles()
  const latest = getLatestArticles(6)
  const secondary = getSecondaryArticles()
  const bench = getBenchVideos().slice(0, 3)

  const { data: liveJobs } = await supabase
    .from("tfm_public_jobs")
    .select("id, title, location, postcode, salary_min, salary_max, job_type, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(3)

  const featuredJobs: Pick<SupabaseJob, "id" | "title" | "location" | "postcode" | "salary_min" | "salary_max" | "job_type" | "published_at">[] = liveJobs ?? []

  return (
    <div style={{ backgroundColor: "#F5F1ED" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <HeroRotator pool={getHeroPoolArticles()} initial={featured} />

      {/* ── SUBSCRIBE BAR ─────────────────────────────────────────── */}
      <section
        id="subscribe"
        style={{ backgroundColor: "#2C2C2C", padding: "36px 28px" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px",
          }}
        >
          <div style={{ maxWidth: "400px" }}>
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(17px, 2.2vw, 21px)",
                fontWeight: 600,
                color: "#F5F1ED",
                lineHeight: 1.3,
                marginBottom: "6px",
              }}
            >
              Salary data. Craft insight. Industry intelligence.
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: "rgba(245,241,237,0.5)",
              }}
            >
              Free, every fortnight. For the bench and the studio.
            </p>
          </div>

          <div style={{ flex: "1", minWidth: "280px", maxWidth: "460px" }}>
            <SubscribeForm variant="footer" />
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                color: "rgba(245,241,237,0.32)",
                marginTop: "10px",
              }}
            >
              Free, every fortnight. For bespoke makers, upholsterers, restorers, conservators and the designers who commission them. No spam.
            </p>
          </div>
        </div>
      </section>

      {/* ── START HERE ───────────────────────────────────────────── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 28px 12px" }}>
        <div style={{ marginBottom: "10px" }}>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#8B7355",
            }}
          >
            Start here
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(20px, 2.8vw, 28px)",
            fontWeight: 400,
            color: "#1A1A1A",
            maxWidth: "720px",
            lineHeight: 1.25,
            marginBottom: "10px",
          }}
        >
          Three things worth your next ten minutes
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "16px",
            color: "#6B6866",
            lineHeight: 1.6,
            maxWidth: "640px",
            marginBottom: "30px",
          }}
        >
          A technique you can use on the next job, pay data from live UK vacancies,
          and five sources of work that actually fill an order book.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
            gap: "28px",
          }}
        >
          {startHere.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ── FEATURE BOXES: Issue 001 + rate calculator ───────────── */}
      <HomeFeatureBoxes />

      {/* ── LATEST STORIES ───────────────────────────────────────── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 28px 44px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "32px",
            borderBottom: "2px solid #1A1A1A",
            paddingBottom: "14px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(20px, 2.8vw, 26px)",
              fontWeight: 700,
              color: "#1A1A1A",
            }}
          >
            Latest Stories
          </h2>
          <Link
            href="/articles"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#8B7355",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            All articles
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
            gap: "28px",
          }}
        >
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* ── FROM THE BENCH ───────────────────────────────────────── */}
      {bench.length > 0 && (
        <section style={{ backgroundColor: "#141414", padding: "56px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: "2px solid #F5F1ED", paddingBottom: 14, marginBottom: 28 }}>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(20px, 2.8vw, 26px)", fontWeight: 700, color: "#F5F1ED" }}>
                From the Bench
              </h2>
              <Link href="/bench" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 12, fontWeight: 600, color: "#B8977A", letterSpacing: "0.07em", textTransform: "uppercase", textDecoration: "none" }}>
                All Bench videos
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))", gap: 24 }}>
              {bench.map((v) => (
                <BenchCard key={v.slug} video={v} dark />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT WE COVER ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "52px 28px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 24px)",
              fontWeight: 600,
              color: "#F5F1ED",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Every issue, four sections
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                style={{
                  textDecoration: "none",
                  backgroundColor: "#242424",
                  border: "1px solid #343434",
                  padding: "24px 20px",
                  borderRadius: "3px",
                  display: "block",
                }}
              >
                <span className={`category-tag ${cat.tagClass}`} style={{ display: "block", marginBottom: "12px" }}>
                  {cat.label}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "13px",
                    color: "rgba(245,241,237,0.72)",
                    lineHeight: 1.6,
                  }}
                >
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALSO IN THIS ISSUE ──────────────────────────────────── */}
      {secondary.length > 0 && (
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 28px 44px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "32px",
              borderBottom: "2px solid #1A1A1A",
              paddingBottom: "14px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(20px, 2.8vw, 26px)",
                fontWeight: 700,
                color: "#1A1A1A",
              }}
            >
              More to read
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(400px, 100%), 1fr))",
              gap: "28px",
            }}
          >
            {secondary.map((article) => (
              <ArticleCard key={article.slug} article={article} size="large" />
            ))}
          </div>
        </section>
      )}

      {/* ── LIVE VACANCIES ───────────────────────────────────────── */}
      {featuredJobs.length > 0 && (
        <section style={{ backgroundColor: "#1A1A1A", padding: "56px 28px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "32px",
                borderBottom: "1px solid rgba(245,241,237,0.12)",
                paddingBottom: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    color: "#8B7355",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Powered by The Talent Branch
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 700,
                    color: "#F5F1ED",
                  }}
                >
                  Live UK Vacancies
                </h2>
              </div>
              <Link
                href="/jobs"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#8B7355",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                View all →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(245,241,237,0.08)" }}>
              {featuredJobs.map((job) => {
                const salary =
                  job.salary_min && job.salary_max
                    ? `£${job.salary_min.toLocaleString("en-GB")} – £${job.salary_max.toLocaleString("en-GB")}`
                    : job.salary_min
                    ? `From £${job.salary_min.toLocaleString("en-GB")}`
                    : "Salary on application"
                const location = [job.location, job.postcode].filter(Boolean).join(", ") || "Location on application"
                return (
                  <Link
                    key={job.id}
                    href={`/jobs/${job.id}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "20px",
                      alignItems: "center",
                      backgroundColor: "rgba(245,241,237,0.04)",
                      padding: "22px 28px",
                      textDecoration: "none",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "#8B7355",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        {job.job_type ?? "permanent"} · {location}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontSize: "clamp(16px, 2vw, 19px)",
                          fontWeight: 700,
                          color: "#F5F1ED",
                          display: "block",
                          lineHeight: 1.25,
                        }}
                      >
                        {job.title}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#8B7355",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {salary}
                    </span>
                  </Link>
                )
              })}
            </div>

            <div style={{ marginTop: "24px", textAlign: "center" }}>
              <Link
                href="/jobs"
                style={{
                  display: "inline-block",
                  border: "1.5px solid rgba(139,115,85,0.6)",
                  color: "#8B7355",
                  padding: "11px 28px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                See All Vacancies
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── ABOUT BANNER ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#EDE8DF",
          borderTop: "1px solid #DDD8CE",
          padding: "56px 28px",
        }}
      >
        <div style={{ maxWidth: "740px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              color: "#8B7355",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            About The Furniture Magazine
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.35,
              marginBottom: "20px",
            }}
          >
            The UK furniture trade has been flying blind for too long.
            No benchmarks. No trade voice. No central resource.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              color: "#6B6866",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            The Furniture Magazine is published by The Talent Branch — the UK&rsquo;s specialist
            recruitment agency for the upholstery and furniture industry, so every job listed here is a
            live vacancy it is recruiting for.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/#subscribe"
              style={{
                backgroundColor: "#1A1A1A",
                color: "#F5F1ED",
                padding: "13px 32px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Subscribe Free
            </Link>
            <Link
              href="/about"
              style={{
                border: "1.5px solid #1A1A1A",
                color: "#1A1A1A",
                padding: "13px 32px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
