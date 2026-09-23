import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { articles, getRelatedArticles, hasPhoto } from "@/data/articles"
import { getArticleContent, type ContentBlock } from "@/data/articleContent"
import SideRail from "@/components/SideRail"
import { absoluteImageUrl, jsonLdHtml } from "@/lib/jsonLd"
import { isFutureDate } from "@/lib/publishDate"
import ArticleVisual from "@/components/ArticleVisual"

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
  "Press Release":   "#8B7355",
  "Books":           "#4A6B5C",
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
    // Not yet live: page exists so contributors and Carlos can preview it, but it
    // must not be indexed or shown as a search result until its own date arrives.
    ...(isFutureDate(article.date) ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, alt: article.imageAlt }],
      type: "article",
    },
  }
}

// Re-render hourly so the noindex on future-dated pages lifts on the day, without a redeploy.
export const revalidate = 3600

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

    case "brief":
      return (
        <div key={index} className="tfm-callout" style={{ margin: "0 0 36px" }}>
          <p className="tfm-callout__kicker">In brief</p>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {block.items.map((item, i) => (
              <li key={i} className="tfm-callout__body" style={{ marginBottom: 6 }}>{item}</li>
            ))}
          </ul>
        </div>
      )

    case "stat":
      return (
        <div key={index} style={{ margin: "36px 0", padding: "28px 0", borderTop: `2px solid ${INK}`, borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic", fontSize: "clamp(48px, 8vw, 76px)", lineHeight: 1, color: INK, margin: 0 }}>
            {block.value}
          </p>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", color: CHARCOAL, lineHeight: 1.6, marginTop: 12 }}>{block.label}</p>
          {block.source && (
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "#6B6866", marginTop: 6 }}>Source: {block.source}</p>
          )}
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

    case "timeline":
      return (
        <div key={index} style={{ margin: "32px 0 40px" }}>
          {block.items.map((item, i) => (
            <div key={i} className="timeline-row">
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: COPPER,
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  color: CHARCOAL,
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      )

    case "link":
      return (
        <p key={index} style={{ margin: "0 0 20px" }}>
          <a
            href={block.href}
            {...(block.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              color: COPPER,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {block.text}
          </a>
        </p>
      )

    case "sources":
      return (
        <div
          key={index}
          style={{
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: MUTED,
              marginBottom: "10px",
            }}
          >
            Sources
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {block.items.map((item, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12px",
                  color: MUTED,
                  lineHeight: 1.6,
                  marginBottom: "6px",
                }}
              >
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: COPPER, textDecoration: "underline", textUnderlineOffset: "2px" }}
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
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

  const parsed = Date.parse(article.date)
  const published = isNaN(parsed) ? undefined : new Date(parsed).toISOString()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [absoluteImageUrl(article.image)],
    datePublished: published,
    dateModified: published,
    articleSection: article.category,
    mainEntityOfPage: `https://www.thefurnituremagazine.com/articles/${article.slug}`,
    author: { "@type": "Organization", name: "The Furniture Magazine", url: "https://www.thefurnituremagazine.com" },
    publisher: {
      "@type": "Organization",
      name: "The Furniture Magazine",
      url: "https://www.thefurnituremagazine.com",
      logo: { "@type": "ImageObject", url: "https://www.thefurnituremagazine.com/og-default.png" },
    },
  }

  return (
    <div style={{ backgroundColor: CREAM }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />

      {/* ── HERO IMAGE (only when the piece has a photograph) ─────── */}
      {hasPhoto(article) && (
        <figure style={{ margin: 0 }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "clamp(320px, 48vh, 540px)",
              overflow: "hidden",
              backgroundColor: article.imageFit === "contain" ? "#ECE6DE" : INK,
            }}
          >
            <ArticleVisual article={article} priority sizes="100vw" />
            {article.imageFit !== "contain" && (
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)" }} />
            )}
          </div>
          {article.imageCredit && (
            <figcaption style={{ backgroundColor: "#ECE6DE", padding: "0 24px 12px", textAlign: "right", fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", color: "#6B6866" }}>
              {article.imageCredit}
            </figcaption>
          )}
        </figure>
      )}

      {/* ── ARTICLE HEADER ──────────────────────────────────────── */}
      <div style={{ backgroundColor: INK, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <Link href="/articles" style={{ display: "inline-block", marginBottom: 22, fontFamily: "var(--font-inter), sans-serif", fontSize: 12, color: "rgba(245,241,237,0.7)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            All articles
          </Link>
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

      {/* ── BODY + RAIL ─────────────────────────────────────────── */}
      <div className="two-col">
        <div className="two-col-main">
        {/* Article body */}
        <article>
          {content ? (
            content.body.flatMap((block, i) => {
              const out = [renderBlock(block, i)]
              // One compact subscribe box part-way through longer pieces.
              if (content.body.length >= 10 && i === Math.floor(content.body.length * 0.45)) {
                out.push(
                  <div key="mid-subscribe" className="tfm-callout tfm-callout--dark" style={{ margin: "40px 0" }}>
                    <p className="tfm-callout__kicker">Free, every fortnight</p>
                    <p className="tfm-callout__title">Get the next issue in your inbox</p>
                    <p className="tfm-callout__body" style={{ marginBottom: 16 }}>Technique, finished work, trade news and live jobs, for the bench and the studio.</p>
                    <Link href="/#subscribe" className="tfm-button">Subscribe free</Link>
                  </div>
                )
              }
              return out
            })
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
              Technique, tools and materials, finished work worth studying, trade news and jobs — free to the bench and the studio.
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
        </div>

        <SideRail />
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
              href="/articles"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                color: COPPER,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              ALL ARTICLES
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
              gap: "24px",
            }}
          >
            {getRelatedArticles(article)
              .map((a) => (
                <Link key={a.slug} href={`/articles/${a.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: `1px solid ${BORDER}`,
                      overflow: "hidden",
                    }}
                  >
                    {hasPhoto(a) ? (
                      <div style={{ position: "relative", height: "160px", backgroundColor: "#ECE6DE" }}>
                        <ArticleVisual article={a} sizes="300px" />
                      </div>
                    ) : (
                      <div style={{ height: 3, backgroundColor: INK }} />
                    )}
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
