import type { Metadata } from "next"
import { getBenchVideos } from "@/data/bench"
import { getArticlesBySection } from "@/data/articles"
import BenchCard from "@/components/BenchCard"
import ArticleCard from "@/components/ArticleCard"
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
  title: "The Bench",
  description:
    "One technique, one tool or one material, explained by the person who uses it. Bench videos from working makers, played from their own channels, plus technique guides.",
  alternates: { canonical: "/bench" },
}

export default function BenchIndexPage() {
  const videos = getBenchVideos()
  const guides = getArticlesBySection("The Bench")
  return (
    <div style={{ backgroundColor: "#F5F1ED" }}>
      <SectionHeader
        kicker="The Bench"
        title="Technique, tools and materials"
        intro="One technique, one tool or one material, explained by the person who uses it. Bench videos are the maker's own and play from their channel; we add the context. Send yours to editor@thefurnituremagazine.com."
      />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px 24px" }}>
        <h2 className="section-rule">Bench video</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: "24px" }}>
          {videos.map((video) => (
            <BenchCard key={video.slug} video={video} />
          ))}
        </div>
      </div>
      {guides.length > 0 && (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px 80px" }}>
          <h2 className="section-rule">Technique guides</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: "24px" }}>
            {guides.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
