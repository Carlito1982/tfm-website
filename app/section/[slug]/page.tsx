import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SECTIONS, getArticlesBySection } from "@/data/articles"
import ArticleCard from "@/components/ArticleCard"
import SectionHeader from "@/components/SectionHeader"

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

// The Bench has its own page at /bench (videos plus guides).
const HUBS = SECTIONS.filter((s) => s.slug !== "the-bench")

export function generateStaticParams() {
  return HUBS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const section = HUBS.find((s) => s.slug === slug)
  if (!section) return { title: "Section not found" }
  return { title: section.name, description: section.description, alternates: { canonical: `/section/${slug}` } }
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params
  const section = HUBS.find((s) => s.slug === slug)
  if (!section) notFound()
  const items = getArticlesBySection(section.name)

  return (
    <div style={{ backgroundColor: "#F5F1ED" }}>
      <SectionHeader kicker="Section" title={section.name} intro={section.description} />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px 80px" }}>
        {items.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: "24px" }}>
            {items.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="tfm-callout">
            <p className="tfm-callout__kicker">Open for submissions</p>
            <p className="tfm-callout__title">Nothing published here yet.</p>
            <p className="tfm-callout__body">
              {section.name === "The Piece"
                ? "The Piece tells one finished commission properly: the brief, the materials, the part that went wrong and what fixed it, in the maker's own words and with their own photographs. If you have a piece worth telling, write to editor@thefurnituremagazine.com."
                : "Pieces for this section are in preparation. Suggestions are welcome at editor@thefurnituremagazine.com."}
            </p>
          </div>
        )}
        <p style={{ marginTop: 40, fontFamily: "var(--font-inter), sans-serif", fontSize: 14 }}>
          <Link href="/articles" style={{ color: "#8B7355" }}>See every article</Link>
        </p>
      </div>
    </div>
  )
}
