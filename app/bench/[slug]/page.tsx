import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { benchVideos, getBenchVideo } from "@/data/bench"
import SideRail from "@/components/SideRail"

const INK = "#1A1A1A"
const CHARCOAL = "#2C2C2C"
const CREAM = "#F5F1ED"
const COPPER = "#8B7355"
const MUTED = "#6B6866"
const BORDER = "#E2DDD8"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const video = getBenchVideo(slug)
  if (!video) return { title: "Video not found" }
  return {
    title: `${video.title}, by ${video.maker}`,
    description: video.description[0],
  }
}

export function generateStaticParams() {
  return benchVideos.map((v) => ({ slug: v.slug }))
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export default async function BenchVideoPage({ params }: Props) {
  const { slug } = await params
  const video = getBenchVideo(slug)
  if (!video) notFound()

  return (
    <div style={{ backgroundColor: CREAM }}>
      <div style={{ backgroundColor: INK, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <Link
            href="/bench"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COPPER,
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "16px",
            }}
          >
            Bench video
          </Link>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 400,
              color: CREAM,
              lineHeight: 1.2,
              marginBottom: "12px",
              maxWidth: "760px",
            }}
          >
            {video.title}
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "rgba(245,241,237,0.6)" }}>
            {video.maker}{video.issue ? ` · Issue ${String(video.issue).padStart(3, "0")}` : ""} · {formatDate(video.date)}
          </p>
        </div>
      </div>

      <div className="two-col">
        <div className="two-col-main">
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={`${video.title}, ${video.maker}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: MUTED, margin: "12px 0 32px" }}>
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: COPPER, textDecoration: "underline", textUnderlineOffset: "2px" }}
            >
              {video.channelCredit}
            </a>
          </p>

          {video.description.map((text, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "17px",
                lineHeight: 1.8,
                color: CHARCOAL,
                marginBottom: "24px",
              }}
            >
              {text}
            </p>
          ))}

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              color: MUTED,
              lineHeight: 1.6,
              paddingTop: "20px",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            The video is the maker&rsquo;s own and plays from their channel.
          </p>
        </div>

        <SideRail />
      </div>
    </div>
  )
}
