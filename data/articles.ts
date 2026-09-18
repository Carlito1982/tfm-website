export type Article = {
  slug: string
  title: string
  excerpt: string
  category: "Industry News" | "Craft & Technique" | "Salary Data" | "Business Advice" | "Press Release" | "Books"
  categoryClass: "tag-news" | "tag-craft" | "tag-salary" | "tag-business" | "tag-press" | "tag-books"
  image: string
  imageAlt: string
  readTime: string
  date: string
  featured?: boolean
}

export const articles: Article[] = [
  {
    slug: "the-year-the-sofa-trade-changed-hands",
    title: "The year the sofa trade changed hands",
    excerpt:
      "In six months the ownership of a large part of British upholstery and bed manufacturing has been rearranged, much of it through administrators' offices. This is the sequence, from the primary documents.",
    category: "Industry News",
    categoryClass: "tag-news",
    image: "/og-default.png",
    imageAlt: "The Furniture Magazine",
    readTime: "4 min read",
    date: "29 Sep 2026",
    featured: true,
  },
  {
    slug: "chair-upholstery-franco-marinelli",
    title: "Chair Upholstery, by Franco Marinelli",
    excerpt:
      "The Crowood Press publishes Chair Upholstery: A modern guide to traditional techniques on 27 October. Seven chair projects take the reader from basic repairs to advanced work, by Master Upholsterer Franco Marinelli.",
    category: "Books",
    categoryClass: "tag-books",
    image: "/images/chair-upholstery-cover.jpg",
    imageAlt: "Cover of Chair Upholstery: A modern guide to traditional techniques, by Franco Marinelli, The Crowood Press",
    readTime: "2 min read",
    date: "29 Sep 2026",
  },
  {
    slug: "nbf-consumer-bed-buying-survey-2026",
    title: "Average mattress price fell 16% to £543 in a year, NBF survey finds",
    excerpt:
      "The National Bed Federation's 18th Consumer Bed-Buying Survey shows shoppers spending less, replacing sooner, buying online more, and a third choosing roll-up mattresses.",
    category: "Press Release",
    categoryClass: "tag-press",
    image: "/og-default.png",
    imageAlt: "The Furniture Magazine",
    readTime: "3 min read",
    date: "16 Sep 2026",
  },
  {
    slug: "bfa-uk-furniture-market-review-2026",
    title: "UK-made furniture holds 62% of the home market by value, BFA review finds",
    excerpt:
      "The British Furniture Association's UK Furniture Market Review, built on ONS and HMRC data, shows British manufacturers' share slipping from 65% in 2019 and a steep loss in wooden-frame upholstery.",
    category: "Press Release",
    categoryClass: "tag-press",
    image: "/og-default.png",
    imageAlt: "The Furniture Magazine",
    readTime: "2 min read",
    date: "16 Sep 2026",
  },
  {
    slug: "digital-product-records-call-for-evidence-2026",
    title: "Government wants the furniture trade's evidence on Digital Product Records by 21 September",
    excerpt:
      "FIRA is urging every furniture business to respond to a Government Call for Evidence that could decide how product safety, composition and end-of-life information is recorded and shared.",
    category: "Press Release",
    categoryClass: "tag-press",
    image: "/og-default.png",
    imageAlt: "The Furniture Magazine",
    readTime: "3 min read",
    date: "16 Sep 2026",
  },
  {
    slug: "hlf-group-revenue-up-40-per-cent",
    title: "HLF Group reports revenue up 40% and a £3.5m year ahead",
    excerpt:
      "HLF Group, the Blaydon contract furniture supplier to hotels, serviced apartments and holiday parks, says revenue is up 40% on the prior year and projects turnover of £3.5m over the next twelve months.",
    category: "Press Release",
    categoryClass: "tag-press",
    image: "/og-default.png",
    imageAlt: "The Furniture Magazine",
    readTime: "1 min read",
    date: "16 Sep 2026",
  },
  {
    slug: "uk-furniture-skills-crisis-2026",
    title: "The UK Furniture Skills Crisis Is Getting Worse — Here Is What the Data Shows",
    excerpt:
      "Fewer trained upholsterers are entering the trade each year than are retiring from it. Employers tell us roles that once filled in weeks now stay open for months. This is not a temporary problem.",
    category: "Industry News",
    categoryClass: "tag-news",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    imageAlt: "Upholstered grey sofa in a furniture workshop",
    readTime: "5 min read",
    date: "20 Apr 2026",
    featured: true,
  },
  {
    slug: "upholstery-salary-report-2026",
    title: "2026 UK Furniture Salary Report: What the Industry Is Actually Paying",
    excerpt:
      "Entry-level to Head Upholsterer: advertised salaries across Reed, Indeed, Glassdoor and Talent.com, read alongside our own placement experience, to give the trade a working benchmark.",
    category: "Salary Data",
    categoryClass: "tag-salary",
    image: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=800&q=80",
    imageAlt: "Bespoke wooden furniture in a workshop",
    readTime: "4 min read",
    date: "18 Apr 2026",
  },
  {
    slug: "deep-buttoning-technique-guide",
    title: "Deep Buttoning: The Measurement Method That Gets Even Diamonds Every Time",
    excerpt:
      "The most common mistake in deep buttoning is measuring from the fabric edge instead of the tack line. Here is the correct method, step by step.",
    category: "Craft & Technique",
    categoryClass: "tag-craft",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    imageAlt: "Close-up of deep buttoned upholstery chair",
    readTime: "6 min read",
    date: "16 Apr 2026",
  },
  {
    slug: "pricing-guide-self-employed-upholsterers",
    title: "Most Self-Employed Upholsterers Undercharge. Here Is How to Fix It",
    excerpt:
      "Pricing by feel is not a business. A straightforward framework for calculating your real cost, setting your rate, and presenting quotes with confidence.",
    category: "Business Advice",
    categoryClass: "tag-business",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80",
    imageAlt: "Premium leather sofa in a showroom",
    readTime: "7 min read",
    date: "14 Apr 2026",
  },
  {
    slug: "uk-foam-material-costs-2026",
    title: "UK Material Costs in 2026: What Has Gone Up, What Has Stabilised",
    excerpt:
      "Foam is rising again, timber has come off its 2025 spike, and producer prices are outrunning selling prices. Here is the full picture and what it means for your quotes.",
    category: "Industry News",
    categoryClass: "tag-news",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    imageAlt: "Contemporary furniture in a professional interior",
    readTime: "4 min read",
    date: "11 Apr 2026",
  },
  {
    slug: "sofa-seat-diagnosis-guide",
    title: "How to Diagnose a Sagging Sofa Seat in Three Steps — and Fix It Right",
    excerpt:
      "Most sagging sofa seats are not a spring problem. They are a webbing problem. Here is how to tell the difference and what to do about it.",
    category: "Craft & Technique",
    categoryClass: "tag-craft",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    imageAlt: "Furniture craftsperson at work in workshop",
    readTime: "5 min read",
    date: "9 Apr 2026",
  },
  {
    slug: "finding-clients-self-employed-upholsterer",
    title: "Five Sources of Work That Actually Fill an Upholsterer's Order Book",
    excerpt:
      "Word of mouth is the best source of new clients. It is also the least controllable. Here is what works alongside it — and how to set it up properly.",
    category: "Business Advice",
    categoryClass: "tag-business",
    image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&q=80",
    imageAlt: "Craftsperson's tools and materials in a workshop",
    readTime: "6 min read",
    date: "7 Apr 2026",
  },
  {
    slug: "leather-colour-matching-guide",
    title: "Leather Repair and Colour Matching: A Practical Guide for Professionals",
    excerpt:
      "The leather repair premium exists because colour matching is a skill most upholsterers never develop. Here is how to build it — and what to charge for it.",
    category: "Craft & Technique",
    categoryClass: "tag-craft",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Detail of leather upholstery being worked on",
    readTime: "8 min read",
    date: "4 Apr 2026",
  },
]

// ---------------------------------------------------------------------------
// Home page hero. Change this one line to swap the lead item on the front page.
// Set to the Chair Upholstery hand-measurement feature once The Crowood Press
// have given written permission; until then it is the pricing piece, which is
// the strongest craft-and-workshop story we own outright.
export const HERO_SLUG = "pricing-guide-self-employed-upholsterers"

export const getHeroArticle = (): Article =>
  articles.find((a) => a.slug === HERO_SLUG) ?? articles.find((a) => a.featured) ?? articles[0]

// Three pieces that prove the value fast to a first-time visitor: one craft,
// one piece of data nobody else in the UK publishes, one business.
export const START_HERE_SLUGS = [
  "deep-buttoning-technique-guide",
  "upholstery-salary-report-2026",
  "finding-clients-self-employed-upholsterer",
]

export const getStartHereArticles = (): Article[] =>
  START_HERE_SLUGS.map((slug) => articles.find((a) => a.slug === slug)).filter(
    (a): a is Article => Boolean(a)
  )

export const getFeaturedArticle = (): Article =>
  articles.find((a) => a.featured) ?? articles[0]

export const getLatestArticles = (count = 6): Article[] =>
  articles.slice(0, count)

export const getSecondaryArticles = (): Article[] =>
  articles.slice(6, 8)

export const getArticlesByCategory = (category: Article["category"]): Article[] =>
  articles.filter((a) => a.category === category)
