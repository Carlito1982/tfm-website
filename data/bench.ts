// Bench video. Every video is the maker's own and plays from their channel
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
  // Only set once the video has actually run in a sent issue.
  issue?: number
}

export const benchVideos: BenchVideo[] = [
  {
    slug: "facelift-interiors-hand-stitched-footstool-corners",
    title: "Hand stitching the corners of a footstool",
    maker: "FaceLift Interiors",
    channelCredit: "Video: FaceLiftInteriors, YouTube",
    youtubeId: "XlAoA622BvI",
    videoUrl: "https://www.youtube.com/watch?v=XlAoA622BvI",
    description: [
      "FaceLift Interiors is a family business in Croxley Green, Hertfordshire, with more than a decade of experience making high-end bespoke furniture and reupholstering it. In this video they reupholster a footstool and hand stitch the corners, with no sewing machine.",
      "Each issue this slot carries one video from a working maker showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
    ],
    date: "2026-09-23",
  },
  {
    slug: "blake-bespoke-hand-cut-dovetails",
    title: "Hand cut dovetails for a drawer",
    maker: "Blake Bespoke Furniture",
    channelCredit: "Video: Blake, YouTube",
    youtubeId: "29shLMh4_k8",
    videoUrl: "https://www.youtube.com/watch?v=29shLMh4_k8",
    description: [
      "Blake Fewster is an award-winning cabinet maker in Somerset who lectured at Bridgwater College before setting up his own business in 2010. This short film shows how the workshop completes its hand cut dovetailed drawers.",
      "Each issue this slot carries one video from a working maker showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
    ],
    date: "2026-09-23",
  },
  {
    slug: "hoskins-rush-seat-spindleback-chair",
    title: "Weaving a rush seat",
    maker: "Andrew and Mark Hoskins",
    channelCredit: "Video: AandM Hoskins, YouTube",
    youtubeId: "YbNOJC1U1wQ",
    videoUrl: "https://www.youtube.com/watch?v=YbNOJC1U1wQ",
    description: [
      "Andrew and Mark Hoskins run a two-man furniture repair, restoration and conservation workshop in Cambridge, with experience gained at London workshops including Spink Restoration. Here Andrew restores an antique spindleback chair with a hand-woven rush seat.",
      "Each issue this slot carries one video from a working maker showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
    ],
    date: "2026-09-23",
  },
  {
    slug: "alison-scott-upholstery-buttons",
    title: "Introduction to Making Upholstery Buttons",
    maker: "Alison Scott Upholstery",
    channelCredit: "Video: Alison Scott Upholstery, YouTube",
    youtubeId: "uvNSmp7G7zc",
    videoUrl: "https://www.youtube.com/watch?v=uvNSmp7G7zc",
    description: [
      "Alison Scott has taught traditional upholstery for more than 35 years, through in-person classes and now a library of over 100 video tutorials at alisonscottupholstery.co.uk. This one covers a skill every upholsterer needs sooner or later: making your own covered buttons to match the top fabric, rather than relying on a pre-made set that never quite matches.",
      "Each issue this slot carries one video from a working maker showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
    ],
    date: "2026-09-22",
    issue: 1,
  },
  {
    slug: "gilboys-french-polish",
    title: "How to Strip and French Polish Wood Furniture",
    maker: "Gilboys",
    channelCredit: "Video: Gilboys, YouTube",
    youtubeId: "rQXP5OKM9ag",
    videoUrl: "https://www.youtube.com/watch?v=rQXP5OKM9ag",
    description: [
      "Gilboys makes furniture polishes at its workshop in Dartington, Devon, where it also runs a dedicated YouTube studio producing restoration videos; the business no longer takes on restoration work itself. This video takes a piece back to bare wood and builds up a French polish finish in stages, the slow way, with nothing skipped.",
      "Each issue this slot carries one video from a working maker showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
    ],
    date: "2026-09-22",
    issue: 1,
  },
  {
    slug: "marc-fish-robinson-house-studio",
    title: "Marc Fish Furniture Creation at Robinson House Studio",
    maker: "Marc Fish",
    channelCredit: "Video: Marc Fish, YouTube",
    youtubeId: "jB4PmdQhTqk",
    videoUrl: "https://www.youtube.com/watch?v=jB4PmdQhTqk",
    description: [
      "Marc Fish runs Robinson House Studio in Newhaven, East Sussex, where he makes sculptural, one-off furniture using micro stack-lamination with veneers, and trains makers on 50-week and 19-week courses alongside senior tutor Theo Cook. He holds a Bespoke Guild Mark from The Furniture Makers' Company. This video follows a piece from raw material through to a finished sculptural form.",
      "Each issue this slot carries one video from a working maker showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
    ],
    date: "2026-09-22",
    issue: 1,
  },
  {
    slug: "mayfield-restorations-writing-bureau",
    title: "Restoration of a 1930s Writing Bureau by Jentique Furniture",
    maker: "Mayfield Restorations",
    channelCredit: "Video: Mayfield Restorations, YouTube",
    youtubeId: "5xAs62-Un_c",
    videoUrl: "https://www.youtube.com/watch?v=5xAs62-Un_c",
    description: [
      "David runs Mayfield Restorations from a home workshop in the North West of England, sourcing vintage pieces and giving them a working life again; he is self-taught and shares the process as he learns it. This video takes a 1930s Jentique writing bureau through stripping, repair and refinishing.",
      "Each issue this slot carries one video from a working maker showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
    ],
    date: "2026-09-22",
    issue: 1,
  },
]

export function getBenchVideo(slug: string): BenchVideo | undefined {
  return benchVideos.find((v) => v.slug === slug)
}

export function getBenchVideos(): BenchVideo[] {
  return [...benchVideos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
