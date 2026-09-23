import Link from "next/link"
import { hasPhoto, type Article } from "@/data/articles"
import ArticleVisual from "@/components/ArticleVisual"

type Props = {
  article: Article
  size?: "standard" | "large" | "horizontal"
}

// A key figure is shown on text-only cards only when the cover line is a number (£543, 62%, +40%).
const figure = (a: Article) => (a.cover && /\d/.test(a.cover) ? a.cover : null)

function Meta({ article }: { article: Article }) {
  return (
    <div className="card-meta">
      <span>{article.date}</span>
      <span aria-hidden="true">·</span>
      <span>{article.readTime}</span>
    </div>
  )
}

export default function ArticleCard({ article, size = "standard" }: Props) {
  const photo = hasPhoto(article)
  const isLarge = size === "large"

  if (size === "horizontal") {
    return (
      <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none" }}>
        <div className="article-card card-h">
          {photo && (
            <div className="card-h__img">
              <ArticleVisual article={article} sizes="140px" />
            </div>
          )}
          <div className="card-h__body">
            <span className="card-section">{article.section}</span>
            <h3 className="card-headline card-h__title">{article.title}</h3>
            <Meta article={article} />
          </div>
        </div>
      </Link>
    )
  }

  if (!photo) {
    const fig = figure(article)
    return (
      <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none" }}>
        <div className={`article-card card-text${isLarge ? " card-text--large" : ""}`}>
          <span className="card-section">{article.section}</span>
          {fig && <p className="card-figure">{fig}</p>}
          <h3 className="card-headline card-text__title">{article.title}</h3>
          <p className="card-excerpt">{article.excerpt}</p>
          <Meta article={article} />
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none" }}>
      <div className="article-card card-photo">
        <div className="card-photo__img" style={{ paddingTop: isLarge ? "56%" : "62%" }}>
          <ArticleVisual
            article={article}
            imageStyle={{ transition: "transform 0.4s ease" }}
            sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        </div>
        <div className="card-photo__body">
          <span className="card-section">{article.section}</span>
          <h3 className="card-headline" style={{ fontSize: isLarge ? 22 : 18 }}>{article.title}</h3>
          <p className="card-excerpt">{article.excerpt}</p>
          <Meta article={article} />
        </div>
      </div>
    </Link>
  )
}
