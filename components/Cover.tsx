import type { Article, Section } from "@/data/articles"

// Typographic cover used where a piece has no cleared photograph. Built from the
// site palette only: no stock imagery (hard rule 11). Each section has its own
// ground and pattern; the pattern offset is seeded by the slug so no two covers
// sit identically.

const PALETTE: Record<Section, { bg: string; accent: string; pattern: (a: number, b: number) => string }> = {
  "The Trade": {
    bg: "#22362E",
    accent: "#C9A27A",
    pattern: (a) =>
      `repeating-linear-gradient(${125 + (a % 20)}deg, rgba(245,241,237,1) 0 1px, transparent 1px 10px)`,
  },
  "The Bench": {
    bg: "#2C2C2C",
    accent: "#C9A27A",
    // upholstery ticking
    pattern: (a) =>
      `repeating-linear-gradient(90deg, rgba(245,241,237,1) 0 2px, transparent 2px 7px, rgba(245,241,237,1) 7px 8px, transparent 8px ${30 + (a % 8)}px)`,
  },
  "The Studio": {
    bg: "#4A2E22",
    accent: "#D8B48A",
    // growth rings
    pattern: (a, b) =>
      `repeating-radial-gradient(ellipse at ${70 + (a % 25)}% ${20 + (b % 60)}%, rgba(245,241,237,1) 0 1px, transparent 1px 13px)`,
  },
  "The Piece": {
    bg: "#1A1A1A",
    accent: "#C9A27A",
    pattern: () =>
      "repeating-linear-gradient(0deg, rgba(245,241,237,1) 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, rgba(245,241,237,1) 0 1px, transparent 1px 22px)",
  },
}

function seed(s: string): [number, number] {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return [h % 97, (h >> 8) % 89]
}

export default function Cover({ article, variant = "card" }: { article: Article; variant?: "card" | "hero" }) {
  const p = PALETTE[article.section]
  const [a, b] = seed(article.slug)
  const line = article.cover ?? article.section
  const size = Math.min(24, Math.round(140 / Math.max(line.length, 3)))
  return (
    <div
      className={`tfm-cover${variant === "hero" ? " tfm-cover--hero" : ""}`}
      style={{ backgroundColor: p.bg, ["--cover-accent" as string]: p.accent, ["--cover-size" as string]: `${size}cqw` }}
      aria-hidden="true"
    >
      <div className="tfm-cover__pattern" style={{ backgroundImage: p.pattern(a, b) }} />
      <div className="tfm-cover__shade" />
      <div className="tfm-cover__frame" />
      <div className="tfm-cover__top">
        <span className="tfm-cover__brand">The Furniture Magazine</span>
        <span className="tfm-cover__section">{article.section}</span>
      </div>
      <div className="tfm-cover__line">{line}</div>
      <div className="tfm-cover__rule" />
    </div>
  )
}
