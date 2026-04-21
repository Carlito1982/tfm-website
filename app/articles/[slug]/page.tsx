import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { articles } from "@/data/articles"
import { getArticleContent, type ContentBlock } from "@/data/articleContent"

// Design tokens
const INK    = "#1A1A1A"
const CHARCOAL = "#2C2C2C"
const CREAM  = "#F5F1ED"
const COPPER = "#8B7355"
const MUTED  = "#6B6866"
const BORDER = "#E2DDD8"
const SOFT   = "#FAFAF8"

const categoryColour: Record<string, string> = {
  "Industry News":   "#1A3A2A",
  "Craft & Technique": "#6B4C2A",
  "Salary Data":     "#1A2A3A",
  "Business Advice": "#3A2A1A",
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: "Article Not Found" }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, alt: article.imageAlt }],
      type: "article",
    },
  }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={index}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "17px",
            lineHeight: 1.8,
            color: CHARCOAL,
            marginBottom: "24px",
          }}
        >
          {block.text}
        </p>
      )

    case "h2":
      return (
        <h2
          key={index}
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 700,
            color: INK,
            lineHeight: 1.25,
            marginTop: "48px",
            marginBottom: "20px",
            paddingTop: "32px",
            borderTop: `2px solid ${COPPER}`,
          }}
        >
          {block.text}
        </h2>
      )

    case "h3":
      return (
        <h3
          key={index}
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "20px",
            fontWeight: 600,
            color: INK,
            marginTop: "32px",
            marginBottom: "14px",
          }}
        >
          {block.text}
        </h3>
      )

    case "quote":
      return (
        <blockquote
          key={index}
          style={{
            borderLeft: `4px solid ${COPPER}`,
            paddingLeft: "24px",
            margin: "36px 0",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "20px",
              fontStyle: "italic",
              color: INK,
              lineHeight: 1.6,
              marginBottom: block.attribution ? "12px" : "0",
            }}
          >
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <cite
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: MUTED,
                fontStyle: "normal",
              }}
            >
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      )

    case "list":
      return (
        <ul
          key={index}
          style={{
            margin: "20px 0 28px 0",
            paddingLeft: "0",
            listStyle: "none",
          }}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "16px",
                color: CHARCOAL,
                lineHeight: 1.7,
                paddingLeft: "20px",
                marginBottom: "10px",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "10px",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: COPPER,
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      )

    case "numbered":
      return (
        <ol
          key={index}
          style={{
            margin: "20px 0 28px 0",
            paddingLeft: "0",
            listStyle: "none",
            counterReset: "step-counter",
          }}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "16px",
                color: CHARCOAL,
                lineHeight: 1.7,
                paddingLeft: "36px",
                marginBottom: "12px",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "2px",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: COPPER,
                  color: "#fff",
                  fontSize: "12px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      )

    case "highlight":
      return (
        <div
          key={index}
          style={{
            backgroundColor: "#F0EBE3",
            borderLeft: `4px solid ${COPPER}`,
            padding: "20px 24px",
            margin: "32px 0",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: INK,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {block.text}
          </p>
        </div>
      )

    case "divider":
      return (
        <hr
          key={index}
          style={{
            border: "none",
            borderTop: `1px solid ${BORDER}`,
            margin: "40px 0",
          }}
        />
      )

    case "source":
      return (
        <div
          key={index}
          style={{
            marginTop: "48px",
            paddingTop: "20px",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              color: MUTED,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {block.text}
          </p>
        </div>
      )

    default:
      return null
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const content = getArticleContent(slug)
  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2)
  const moreArticles = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <div style={{ backgroundColor: CREAM }}>

      {/* ── HERO IMAGE ──────────────────────────────────────────── */}
      <div style={{ position: "relative", width: "100%", height: "clamp(320px, 45vh, 520px)", overflow: "hidden" }}>
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        {/* Category + back nav over image */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            right: "24px",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            ← THE FURNITURE MAGAZINE
          </Link>
        </div>
      </div>

      {/* ── ARTICLE HEADER ──────────────────────────────────────── */}
      <div style={{ backgroundColor: INK, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: categoryColour[article.category] ?? COPPER,
                color: "#fff",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "4px 12px",
              }}
            >
              {article.category}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {article.date} · {article.readTime}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(28px, 4.5vw, 44px)",
              fontWeight: 700,
              color: "#F5F1ED",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "17px",
              color: "rgba(245, 241, 237, 0.75)",
              lineHeight: 1.65,
              marginBottom: "24px",
              maxWidth: "680px",
            }}
          >
            {article.excerpt}
          </p>

          <div
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.04em",
            }}
          >
            Published by The Furniture Magazine
          </div>
        </div>
      </div>

      {/* ── BODY + SIDEBAR ──────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "56px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr min(280px, 30%)",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Article body */}
        <article>
          {content ? (
            content.body.map((block, i) => renderBlock(block, i))
          ) : (
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "17px", color: CHARCOAL, lineHeight: 1.8 }}>
              Full article coming soon. Subscribe to be notified when this issue publishes.
            </p>
          )}

          {/* Subscribe nudge at end of article */}
          <div
            style={{
              backgroundColor: INK,
              padding: "36px",
              marginTop: "56px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: COPPER,
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              The Furniture Magazine
            </p>
            <h3
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "22px",
                color: CREAM,
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              Every issue, free in your inbox
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                color: "rgba(245, 241, 237, 0.65)",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              Trade news, craft guides, salary data and business advice — delivered every week to UK furniture professionals.
            </p>
            <Link
              href="/#subscribe"
              style={{
                display: "inline-block",
                backgroundColor: COPPER,
                color: "#fff",
                padding: "11px 28px",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Subscribe Free
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "32px" }}>

          {/* Jobs strip */}
          <div
            style={{
              backgroundColor: SOFT,
              border: `1px solid ${BORDER}`,
              padding: "24px",
              marginBottom: "28px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: COPPER,
                marginBottom: "14px",
              }}
            >
              Live Vacancies
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: MUTED,
                lineHeight: 1.55,
                marginBottom: "16px",
              }}
            >
              Browse open upholstery and furniture trade roles across the UK.
            </p>
            <Link
              href="/jobs"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: INK,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              View all vacancies →
            </Link>
          </div>

          {/* Related articles */}
          {(related.length > 0 ? related : moreArticles).length > 0 && (
            <div
              style={{
                backgroundColor: SOFT,
                border: `1px solid ${BORDER}`,
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: COPPER,
                  marginBottom: "18px",
                }}
              >
                {related.length > 0 ? "Related Articles" : "More Articles"}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {(related.length > 0 ? related : moreArticles).map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/articles/${rel.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div style={{ position: "relative", width: "60px", height: "48px", flexShrink: 0 }}>
                        <Image
                          src={rel.image}
                          alt={rel.imageAlt}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="60px"
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-playfair), Georgia, serif",
                            fontSize: "13px",
                            color: INK,
                            lineHeight: 1.4,
                            margin: "0 0 4px",
                          }}
                        >
                          {rel.title}
                        </p>
                        <span
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "11px",
                            color: MUTED,
                          }}
                        >
                          {rel.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* ── MORE ARTICLES ───────────────────────────────────────── */}
      <div style={{ backgroundColor: SOFT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "56px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "32px" }}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "24px",
                color: INK,
              }}
            >
              Keep Reading
            </h2>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                color: COPPER,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              ALL ARTICLES →
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {articles
              .filter((a) => a.slug !== slug)
              .slice(0, 3)
              .map((a) => (
                <Link key={a.slug} href={`/articles/${a.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: `1px solid ${BORDER}`,
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "relative", height: "160px" }}>
                      <Image src={a.image} alt={a.imageAlt} fill style={{ objectFit: "cover" }} sizes="300px" />
                    </div>
                    <div style={{ padding: "18px" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontSize: "15px",
                          color: INK,
                          lineHeight: 1.4,
                          marginBottom: "8px",
                        }}
                      >
                        {a.title}
                      </p>
                      <span
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "11px",
                          color: MUTED,
                        }}
                      >
                        {a.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

    </div>
  )
}
