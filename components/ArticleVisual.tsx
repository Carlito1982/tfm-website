import Image from "next/image"
import type { CSSProperties } from "react"
import { hasPhoto, type Article } from "@/data/articles"

// A cleared or public-domain photograph when the piece has one. Pieces without a
// photograph render as text-only cards, so this returns nothing for them.
export default function ArticleVisual({
  article,
  sizes,
  priority,
  imageStyle,
}: {
  article: Article
  sizes: string
  priority?: boolean
  imageStyle?: CSSProperties
}) {
  if (!hasPhoto(article)) return null
  const contain = article.imageFit === "contain"
  return (
    <Image
      src={article.image}
      alt={article.imageAlt}
      fill
      priority={priority}
      sizes={sizes}
      style={{
        objectFit: contain ? "contain" : "cover",
        padding: contain ? "6%" : 0,
        backgroundColor: contain ? "#ECE6DE" : undefined,
        ...imageStyle,
      }}
    />
  )
}
