import type { Metadata } from "next"
import ArticleCard from "@/components/ArticleCard"
import { getArticlesByCategory } from "@/data/articles"

export const metadata: Metadata = {
  title: "Press Releases",
  description:
    "Press releases from furniture industry organisations, trade bodies and companies, published by The Furniture Magazine with the issuing organisation named and the source linked.",
}

const INK = "#1A1A1A"
const CREAM = "#F5F1ED"
const COPPER = "#8B7355"
const MUTED = "#6B6866"

export default function PressReleasesPage() {
  const releases = getArticlesByCategory("Press Release")
  return (
    <div style={{ backgroundColor: CREAM }}>
      <div style={{ backgroundColor: INK, padding: "56px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: COPPER,
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Supplied copy
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: CREAM }}>
            Press releases
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", color: "rgba(245,241,237,0.6)", marginTop: "12px", maxWidth: "640px", lineHeight: 1.6 }}>
            Releases from trade bodies, organisations and companies in the UK furniture industry. Each one is labelled, the issuing organisation is named at the top, the meaning is unchanged and the source is linked. To send one, email editor@thefurnituremagazine.com.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px 80px" }}>
        {releases.length === 0 ? (
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: MUTED }}>
            No press releases published yet.
          </p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: "28px" }}>
            {releases.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
