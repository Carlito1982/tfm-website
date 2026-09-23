import type { Metadata } from "next"
import Link from "next/link"
import { SECTIONS, getPublishedArticles } from "@/data/articles"
import ArticleCard from "@/components/ArticleCard"
import SectionHeader from "@/components/SectionHeader"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "All articles",
  description: "Every article from The Furniture Magazine, by section: The Bench, The Piece, The Studio and The Trade.",
  alternates: { canonical: "/articles" },
}

export default function ArticlesIndexPage() {
  const all = getPublishedArticles()
  return (
    <div style={{ backgroundColor: "#F5F1ED" }}>
      <SectionHeader
        kicker="Archive"
        title="All articles"
        intro="Every piece we have published, newest first, filed under the four standing sections."
      />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 16px 0", display: "flex", gap: 10, flexWrap: "wrap" }}>
        {SECTIONS.map((s) => (
          <Link key={s.slug} href={s.href} className="section-chip">
            {s.name}
          </Link>
        ))}
      </div>
      {SECTIONS.map((s) => {
        const items = all.filter((a) => a.section === s.name)
        if (items.length === 0) return null
        return (
          <section key={s.slug} style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 16px 8px" }}>
            <h2 className="section-rule">
              <Link href={s.href} style={{ color: "inherit", textDecoration: "none" }}>{s.name}</Link>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: "24px" }}>
              {items.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )
      })}
      <div style={{ height: 80 }} />
    </div>
  )
}
