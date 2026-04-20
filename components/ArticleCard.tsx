import Image from "next/image"
import Link from "next/link"
import type { Article } from "@/data/articles"

type Props = {
  article: Article
  size?: "standard" | "large" | "horizontal"
}

export default function ArticleCard({ article, size = "standard" }: Props) {
  const isLarge = size === "large"
  const isHorizontal = size === "horizontal"

  if (isHorizontal) {
    return (
      <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none" }}>
        <div
          className="article-card"
          style={{
            display: "flex",
            gap: "20px",
            backgroundColor: "#FAFAF8",
            borderRadius: "4px",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <div style={{ flexShrink: 0, width: "140px", height: "100px", position: "relative" }}>
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              style={{ objectFit: "cover" }}
              sizes="140px"
            />
          </div>
          <div style={{ padding: "12px 16px 12px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span className={`category-tag ${article.categoryClass}`} style={{ marginBottom: "8px" }}>
              {article.category}
            </span>
            <h3
              className="card-headline"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#1A1A1A",
                lineHeight: 1.35,
                transition: "color 0.2s ease",
              }}
            >
              {article.title}
            </h3>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", color: "#9B9795" }}>
                {article.date}
              </span>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", color: "#9B9795" }}>
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none" }}>
      <div
        className="article-card"
        style={{
          backgroundColor: "#FAFAF8",
          borderRadius: "4px",
          overflow: "hidden",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: isLarge ? "52%" : "60%",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
            sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        </div>

        {/* Content */}
        <div
          style={{
            padding: isLarge ? "24px" : "18px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <span className={`category-tag ${article.categoryClass}`} style={{ marginBottom: "12px" }}>
            {article.category}
          </span>

          <h3
            className="card-headline"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: isLarge ? "22px" : "17px",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.3,
              marginBottom: "10px",
              transition: "color 0.2s ease",
            }}
          >
            {article.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: isLarge ? "15px" : "13px",
              color: "#6B6866",
              lineHeight: 1.65,
              marginBottom: "16px",
              flex: 1,
              display: "-webkit-box",
              WebkitLineClamp: isLarge ? 4 : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.excerpt}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingTop: "14px",
              borderTop: "1px solid #E2DDD8",
              marginTop: "auto",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                color: "#9B9795",
                letterSpacing: "0.02em",
              }}
            >
              {article.date}
            </span>
            <span style={{ color: "#D4CFC9", fontSize: "11px" }}>·</span>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                color: "#9B9795",
              }}
            >
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
