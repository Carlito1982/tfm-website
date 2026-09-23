import Image from "next/image"
import type { CSSProperties } from "react"
import { hasPhoto, type Article } from "@/data/articles"
import Cover from "@/components/Cover"

// A cleared photograph when the piece has one, otherwise the section cover.
export default function ArticleVisual({
  article,
  variant = "card",
  sizes,
  priority,
  imageStyle,
}: {
  article: Article
  variant?: "card" | "hero"
  sizes: string
  priority?: boolean
  imageStyle?: CSSProperties
}) {
  if (!hasPhoto(article)) return <Cover article={article} variant={variant} />
  return (
    <Image
      src={article.image}
      alt={article.imageAlt}
      fill
      priority={priority}
      sizes={sizes}
      style={{ objectFit: "cover", ...imageStyle }}
    />
  )
}
