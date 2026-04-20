import Image from "next/image"
import Link from "next/link"
import SubscribeForm from "@/components/SubscribeForm"
import ArticleCard from "@/components/ArticleCard"
import { getFeaturedArticle, getLatestArticles, getSecondaryArticles } from "@/data/articles"

const categories = [
  {
    label: "Industry News",
    description: "Market moves, skills data and company news from across the UK trade.",
    tagClass: "tag-news",
    href: "/issues",
  },
  {
    label: "Craft & Technique",
    description: "Step-by-step guides written by and for working professionals.",
    tagClass: "tag-craft",
    href: "/issues",
  },
  {
    label: "Salary Data",
    description: "Live benchmarks from UK placements and job market monitoring.",
    tagClass: "tag-salary",
    href: "/issues",
  },
  {
    label: "Business Advice",
    description: "Pricing, finding clients and running a furniture trade operation.",
    tagClass: "tag-business",
    href: "/issues",
  },
]

export default function HomePage() {
  const featured = getFeaturedArticle()
  const latest = getLatestArticles(6)
  const secondary = getSecondaryArticles()

  return (
    <div style={{ backgroundColor: "#F5F1ED" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(460px, 60vh, 620px)",
          overflow: "hidden",
          backgroundColor: "#1A1A1A",
        }}
      >
        <Image
          src={featured.image}
          alt={featured.imageAlt}
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.55 }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(26,26,26,0.90) 0%, rgba(26,26,26,0.50) 55%, rgba(26,26,26,0.10) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 28px 52px",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span
              style={{
                backgroundColor: "#8B7355",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "4px 10px",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {featured.category}
            </span>
            <span
              style={{
                color: "rgba(245,241,237,0.6)",
                fontSize: "11px",
                fontFamily: "var(--font-inter), sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              Issue No. 1 · April 2026
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(26px, 4vw, 46px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: "640px",
              marginBottom: "16px",
            }}
          >
            {featured.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(14px, 1.6vw, 16px)",
              color: "rgba(245,241,237,0.78)",
              lineHeight: 1.65,
              maxWidth: "500px",
              marginBottom: "28px",
            }}
          >
            {featured.excerpt}
          </p>

          <Link
            href={`/issues`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              border: "1.5px solid rgba(245,241,237,0.7)",
              color: "#F5F1ED",
              padding: "10px 24px",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Read the Article →
          </Link>
        </div>
      </section>

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
              Free. Weekly. For UK furniture professionals.
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
              Join 1,200+ furniture professionals. No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

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
            href="/issues"
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
            All Issues →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

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
            What We Cover
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
                    color: "rgba(245,241,237,0.50)",
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
              Also in This Issue
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
              gap: "28px",
            }}
          >
            {secondary.map((article) => (
              <ArticleCard key={article.slug} article={article} size="large" />
            ))}
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
            recruitment agency for the upholstery and furniture industry. With 571 candidates
            and 187 companies in our network, we have a closer view of this industry than anyone else.
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
