// Bench video of the week. Every video is the maker's own and plays from their channel
// through the official YouTube player. Nothing is downloaded or re-hosted.
export interface BenchVideo {
  slug: string
  title: string
  maker: string
  channelCredit: string
  youtubeId: string
  videoUrl: string
  description: string[]
  date: string
  issue: number
}

export const benchVideos: BenchVideo[] = [
  {
    slug: "gilboys-deep-buttoning-victorian-chair",
    title: "How To Deep Button an Antique Victorian Chair",
    maker: "Gilboys",
    channelCredit: "Video: Gilboys, YouTube",
    youtubeId: "TYzyK-K3098",
    videoUrl: "https://www.youtube.com/watch?v=TYzyK-K3098",
    description: [
      "Gilboys is a furniture restoration workshop in Devon that has been in business since the early 1990s and has 33,000 subscribers on YouTube. Its video on deep buttoning an antique Victorian chair has been watched 659,000 times, which says something about how many people want to see it done properly: the measuring, the pleating and the tying, in one sitting. Watch it for the way the pleats are set before any tension goes on.",
      "Each issue this slot carries one video from a working tradesperson showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
    ],
    date: "2026-09-29",
    issue: 1,
  },
]

export function getBenchVideo(slug: string): BenchVideo | undefined {
  return benchVideos.find((v) => v.slug === slug)
}

export function getBenchVideos(): BenchVideo[] {
  return [...benchVideos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
