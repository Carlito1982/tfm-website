import Image from "next/image"
import Link from "next/link"
import type { BenchVideo } from "@/data/bench"

// Bench video card: the YouTube-supplied thumbnail (hard rule 13), linking to our
// Bench page, which names the maker and plays the video from their own channel.
export default function BenchCard({ video, dark = false }: { video: BenchVideo; dark?: boolean }) {
  return (
    <Link href={`/bench/${video.slug}`} style={{ textDecoration: "none" }} className="article-card">
      <article style={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: dark ? "#242424" : "#FAFAF8", border: dark ? "1px solid #333" : "1px solid #E2DDD8" }}>
        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", overflow: "hidden", backgroundColor: "#111" }}>
          <Image
            src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
            alt={`${video.title}, video by ${video.maker}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <span className="bench-play" aria-hidden="true">Watch</span>
          <span style={{ position: "absolute", left: 12, top: 12, backgroundColor: "rgba(26,26,26,0.85)", color: "#F5F1ED", fontFamily: "var(--font-inter), sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 8px" }}>
            The Bench · Video
          </span>
        </div>
        <div style={{ padding: "18px 20px 20px" }}>
          <h3 className="card-headline" style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 18, fontWeight: 600, lineHeight: 1.3, color: dark ? "#F5F1ED" : "#1A1A1A", marginBottom: 8 }}>
            {video.title}
          </h3>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: 13, color: "#B8977A" }}>{video.maker}</p>
        </div>
      </article>
    </Link>
  )
}
