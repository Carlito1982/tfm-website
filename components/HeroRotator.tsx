"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { hasPhoto, type Article } from "@/data/articles"
import ArticleVisual from "@/components/ArticleVisual"

type Props = {
  pool: Article[]
  initial: Article
}

const STORAGE_KEY = "tfm-hero-rotator-index"

function isPastOrToday(dateStr: string): boolean {
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return true
    const today = new Date()
    today.setHours(23, 59, 59, 999)
    return d.getTime() <= today.getTime()
  } catch {
    return true
  }
}

export default function HeroRotator({ pool, initial }: Props) {
  const [current, setCurrent] = useState<Article>(initial)
  const [visible, setVisible] = useState(true)
  const [eligible, setEligible] = useState<Article[]>([])
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = useCallback((list: Article[], index: number) => {
    const next = list[index]
    if (!next) return
    try {
      window.localStorage.setItem(STORAGE_KEY, String(index))
    } catch {
      // storage unavailable: rotate without remembering
    }
    setVisible(false)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setCurrent(next)
      setVisible(true)
    }, 220)
  }, [])

  // On arrival, move on from the story shown last visit so a returning reader sees something new.
  useEffect(() => {
    const list = pool.filter((a) => isPastOrToday(a.date))
    setEligible(list)
    try {
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    } catch {
      setReduced(false)
    }
    if (list.length < 2) return
    let last = -1
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored !== null) last = parseInt(stored, 10)
      if (isNaN(last)) last = -1
    } catch {
      last = -1
    }
    let start = (last + 1) % list.length
    if (list[start]?.slug === initial.slug) start = (start + 1) % list.length
    show(list, start)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const index = eligible.findIndex((a) => a.slug === current.slug)

  // Then keep turning every seven seconds, unless the reader is hovering, has focus in the hero, or prefers reduced motion.
  useEffect(() => {
    if (eligible.length < 2 || paused || reduced) return
    const t = setInterval(() => show(eligible, (Math.max(index, 0) + 1) % eligible.length), 7000)
    return () => clearInterval(t)
  }, [eligible, index, paused, reduced, show])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured stories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(460px, 60vh, 620px)",
        overflow: "hidden",
        backgroundColor: "#1A1A1A",
      }}
    >
      <div style={{ opacity: visible ? 1 : 0, transition: "opacity 220ms ease", height: "100%" }}>
        {hasPhoto(current) && (
          <div className="hero-media">
            {/* Every pool photograph is mounted so the next one is already loaded; only the current one is visible. */}
            {[current, ...eligible.filter((a) => a.slug !== current.slug && hasPhoto(a))].map((a) => (
              <div key={a.slug} className="hero-media__layer" style={{ opacity: a.slug === current.slug ? 1 : 0 }} aria-hidden={a.slug !== current.slug}>
                <ArticleVisual article={a} priority={a.slug === current.slug} sizes="(max-width: 800px) 100vw, 46vw" />
              </div>
            ))}
          </div>
        )}
        <div
          className={hasPhoto(current) ? "hero-text" : undefined}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 28px 52px",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span
              style={{
                backgroundColor: "#8B7355",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "4px 10px",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {current.category}
            </span>
            <span
              style={{
                color: "rgba(245,241,237,0.6)",
                fontSize: "11px",
                fontFamily: "var(--font-inter), sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              Issue 001 · Out 29 September
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(24px, 3.2vw, 40px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              maxWidth: "640px",
              marginBottom: "16px",
            }}
          >
            {current.title}
          </h1>

          <p className="hero-excerpt"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(14px, 1.6vw, 16px)",
              color: "rgba(245,241,237,0.78)",
              lineHeight: 1.65,
              maxWidth: "500px",
              marginBottom: "28px",
            }}
          >
            {current.excerpt}
          </p>

          <Link
            href={`/articles/${current.slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              border: "1.5px solid rgba(245,241,237,0.7)",
              color: "#F5F1ED",
              padding: "10px 24px",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Read it now →
          </Link>
        </div>
      </div>
      {eligible.length > 1 && (
        <div className="hero-dots" role="group" aria-label="Choose a featured story">
          {eligible.map((a, n) => (
            <button
              key={a.slug}
              type="button"
              aria-label={`Story ${n + 1} of ${eligible.length}: ${a.title}`}
              aria-current={n === index ? "true" : undefined}
              className={`hero-dot${n === index ? " is-active" : ""}`}
              onClick={() => show(eligible, n)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
