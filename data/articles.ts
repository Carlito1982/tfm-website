import { isFutureDate } from "@/lib/publishDate"

export type Section = "The Bench" | "The Piece" | "The Studio" | "The Trade"

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: "Industry News" | "Craft & Technique" | "Salary Data" | "Business Advice" | "Press Release" | "Books"
  categoryClass: "tag-news" | "tag-craft" | "tag-salary" | "tag-business" | "tag-press" | "tag-books"
  // One of the four standing sections (tfm_brain): The Bench, The Piece, The Studio, The Trade.
  section: Section
  // Short cover line shown large on the generated cover when there is no cleared photograph.
  cover?: string
  image: string
  imageAlt: string
  // Credit line shown under the photograph. Required for every museum or supplied image.
  imageCredit?: string
  // "contain" shows the whole object on a light ground (museum photographs, book covers).
  imageFit?: "contain" | "cover"
  readTime: string
  date: string
  featured?: boolean
}

export const articles: Article[] = [
  {
    slug: "uk-upholstery-workforce-ons-2026",
    title: "Nearly half of the UK's upholsterers are self-employed, ONS figures show",
    excerpt: "About 12,800 people work as upholsterers in the UK and 36,100 as furniture makers. Roughly 48% of upholsterers and 56% of furniture makers are self-employed, and four in ten upholsterers are 55 or older.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Trade",
    cover: "48%",
    image: "/images/museum/met-357161.jpg",
    imageAlt: "The Cabinet-Maker, Upholsterer and General Artist's Encyclopaedia, 1804–7, Thomas Sheraton",
    imageCredit: "Illustration: The Cabinet-Maker, Upholsterer and General Artist's Encyclopaedia, 1804–7, Thomas Sheraton. The Metropolitan Museum of Art, public domain.",
    imageFit: "contain",
    readTime: "4 min read",
    date: "23 Sep 2026",
  },
  {
    slug: "worldskills-shanghai-2026-cabinet-making-team-uk",
    title: "Stanley Mackintosh represents the UK in Cabinet Making at WorldSkills Shanghai",
    excerpt: "The Rycotewood Furniture Centre apprentice is one of two Team UK competitors in the wood trades at the 48th WorldSkills Competition. Jamie Matthews of Mivan competes in Joinery. Medals are awarded on 27 September.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Trade",
    cover: "Shanghai",
    image: "/images/museum/met-203749.jpg",
    imageAlt: "Side chair (one of a pair), ca. 1755–60, Thomas Chippendale",
    imageCredit: "Illustration: Side chair (one of a pair), ca. 1755–60, Thomas Chippendale. The Metropolitan Museum of Art, public domain.",
    imageFit: "contain",
    readTime: "3 min read",
    date: "23 Sep 2026",
  },
  {
    slug: "heritage-crafts-red-list-furniture-crafts",
    title: "Three furniture crafts are critically endangered in the UK, says the Red List",
    excerpt: "Heritage Crafts rates basketwork furniture making, Fair Isle chair making and rattan furniture making as critically endangered. Upholstery, French polishing and marquetry are rated viable, and a former upholsterer has a 2026 training bursary.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Studio",
    cover: "At risk",
    image: "/images/museum/met-171.jpg",
    imageAlt: "Cane armchair, 1690–1710, British",
    imageCredit: "Illustration: Cane armchair, 1690–1710, British. The Metropolitan Museum of Art, public domain.",
    imageFit: "contain",
    readTime: "3 min read",
    date: "23 Sep 2026",
  },
  {
    slug: "festival-of-upholstery-2026-preview",
    title: "Festival of Upholstery 2026: why the trade is heading to Birmingham",
    excerpt:
      "The Festival of Upholstery returns on 2 and 3 October at the National Conference Centre and Motorcycle Museum, Birmingham, with a broader practical programme, live demonstrations on a big screen and the trade awards.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Trade",
    cover: "2 to 3 October",
    image: "/covers/festival-of-upholstery-2026-preview.png",
    imageAlt: "Festival of Upholstery 2026",
    readTime: "3 min read",
    date: "23 Sep 2026",
  },
  {
    slug: "decorex-2026-preview",
    title: "Decorex 2026: Making Spaces returns to Olympia",
    excerpt: "The interiors show runs at Olympia, London, from 11 to 14 October, with more than 280 exhibiting brands, 48 talks sessions and the maker-led Making Spaces feature back for 2026.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Studio",
    cover: "Olympia",
    image: "/covers/decorex-2026-preview.png",
    imageAlt: "Decorex 2026: Making Spaces returns to Olympia",
    readTime: "3 min read",
    date: "23 Sep 2026",
  },
  {
    slug: "the-year-the-sofa-trade-changed-hands",
    title: "The year the sofa trade changed hands",
    excerpt:
      "In six months the ownership of a large part of British upholstery and bed manufacturing has been rearranged, much of it through administrators' offices. This is the sequence, from the primary documents.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Trade",
    cover: "Six months",
    image: "/covers/the-year-the-sofa-trade-changed-hands.png",
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
    section: "The Studio",
    image: "/images/chair-upholstery-cover.jpg",
    imageFit: "contain",
    imageAlt: "Cover of Chair Upholstery: A modern guide to traditional techniques, by Franco Marinelli, The Crowood Press",
    readTime: "2 min read",
    date: "29 Sep 2026",
  },
  {
    slug: "franco-marinelli-qa-chair-upholstery",
    title: "Franco Marinelli: \u201cA chair is only as sound as the work beneath its fabric\u201d",
    excerpt:
      "Ahead of Chair Upholstery, out on 27 October, Master Upholsterer Franco Marinelli answers eight questions on stitched edges, modern materials and the tool he could not work without.",
    category: "Books",
    categoryClass: "tag-books",
    section: "The Bench",
    image: "/images/franco-marinelli-portrait.jpg",
    imageAlt: "Franco Marinelli, author of Chair Upholstery, at his workbench",
    readTime: "6 min read",
    date: "29 Sep 2026",
  },
  {
    slug: "nbf-consumer-bed-buying-survey-2026",
    title: "Average mattress price fell 16% to £543 in a year, NBF survey finds",
    excerpt:
      "The National Bed Federation's 18th Consumer Bed-Buying Survey shows shoppers spending less, replacing sooner, buying online more, and a third choosing roll-up mattresses.",
    category: "Press Release",
    categoryClass: "tag-press",
    section: "The Trade",
    cover: "£543",
    image: "/covers/nbf-consumer-bed-buying-survey-2026.png",
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
    section: "The Trade",
    cover: "62%",
    image: "/covers/bfa-uk-furniture-market-review-2026.png",
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
    section: "The Trade",
    cover: "Records",
    image: "/covers/digital-product-records-call-for-evidence-2026.png",
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
    section: "The Trade",
    cover: "+40%",
    image: "/covers/hlf-group-revenue-up-40-per-cent.png",
    imageAlt: "The Furniture Magazine",
    readTime: "1 min read",
    date: "16 Sep 2026",
  },
  {
    slug: "uk-furniture-skills-crisis-2026",
    title: "The UK Furniture Skills Crisis Is Getting Worse — Here Is What the Data Shows",
    excerpt:
      "Fewer trained upholsterers are entering the trade each year than are retiring from it. This is not a temporary problem.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Trade",
    cover: "Skills",
    image: "/images/museum/met-357333.jpg",
    imageAlt: "Household Furniture in the Genteel Taste for the Year 1760 [First edition], 1760, The Society of Upholsterers, Cabinet-Makers, etc.",
    imageCredit: "Illustration: Household Furniture in the Genteel Taste for the Year 1760 [First edition], 1760, The Society of Upholsterers, Cabinet-Makers, etc.. The Metropolitan Museum of Art, public domain.",
    imageFit: "contain",
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
    section: "The Trade",
    cover: "Pay",
    image: "/covers/upholstery-salary-report-2026.png",
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
    section: "The Bench",
    cover: "Diamonds",
    image: "/images/museum/met-386847.jpg",
    imageAlt: "Design for a Double Hump-backed Sofa with Turned Legs and Arms, with Red Tufted Upholstery, early 19th century, Anonymous, British, 19th century",
    imageCredit: "Illustration: Design for a Double Hump-backed Sofa with Turned Legs and Arms, with Red Tufted Upholstery, early 19th century, Anonymous, British, 19th century. The Metropolitan Museum of Art, public domain.",
    imageFit: "contain",
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
    section: "The Trade",
    cover: "Your rate",
    image: "/images/museum/met-195160.jpg",
    imageAlt: "Settee, ca. 1730, Benjamin Goodison",
    imageCredit: "Illustration: Settee, ca. 1730, Benjamin Goodison. The Metropolitan Museum of Art, public domain.",
    imageFit: "contain",
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
    section: "The Trade",
    cover: "Foam",
    image: "/covers/uk-foam-material-costs-2026.png",
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
    section: "The Bench",
    cover: "Webbing",
    image: "/images/museum/met-207681.jpg",
    imageAlt: "Sofa (part of a set), ca. 1835, Filippo Pelagio Palagi",
    imageCredit: "Illustration: Sofa (part of a set), ca. 1835, Filippo Pelagio Palagi. The Metropolitan Museum of Art, public domain.",
    imageFit: "contain",
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
    section: "The Trade",
    cover: "Five sources",
    image: "/covers/finding-clients-self-employed-upholsterer.png",
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
    section: "The Bench",
    cover: "Colour",
    image: "/images/museum/met-1588.jpg",
    imageAlt: "Leather chair, 1695–1715, American",
    imageCredit: "Illustration: Leather chair, 1695–1715, American. The Metropolitan Museum of Art, public domain.",
    imageFit: "contain",
    readTime: "8 min read",
    date: "4 Apr 2026",
  },
  {
    slug: "wood-awards-2026-furniture-shortlist",
    title: "The Wood Awards 2026 shortlist: the furniture to study",
    excerpt:
      "Fourteen furniture and objects entries make this year's shortlist, from a student bench to a mirror made from hazel stems. Winners announced 25 November.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Studio",
    cover: "Fourteen",
    image: "/covers/wood-awards-2026-furniture-shortlist.png",
    imageAlt: "The Furniture Magazine",
    readTime: "4 min read",
    date: "22 Sep 2026",
  },
  {
    slug: "bfa-ai-summit-2026",
    title: "Industry turns out in force for BFA's AI Summit",
    excerpt:
      "The British Furniture Association's sell-out AI Summit at Coventry Building Society Stadium heard from Google Cloud, Autonomate, Push Group, Furniture Connect, Chick Digital and ACID.",
    category: "Press Release",
    categoryClass: "tag-press",
    section: "The Trade",
    cover: "AI",
    image: "/covers/bfa-ai-summit-2026.png",
    imageAlt: "The Furniture Magazine",
    readTime: "3 min read",
    date: "22 Sep 2026",
  },
  {
    slug: "upholsterers-pricing-guide-valerie-hayes",
    title: "Valerie Hayes: “A full diary can actually hide underpricing very effectively”",
    excerpt:
      "After 30 years in accountancy, upholsterer Valerie Hayes has written The Upholsterer's Pricing Guide, launching at the Festival of Upholstery on 2 October. She answers eight questions on true costs, billable time and why busy is not the same as profitable.",
    category: "Books",
    categoryClass: "tag-books",
    section: "The Trade",
    image: "/images/valerie-hayes-portrait.jpg",
    imageAlt: "Valerie Hayes, upholsterer and author of The Upholsterer's Pricing Guide",
    imageCredit: "Photograph: Sion Edwards",
    readTime: "6 min read",
    date: "29 Sep 2026",
  },
  {
    slug: "autumn-long-point-2026-round-up",
    title: "Autumn Long Point: registrations up 40 per cent as the Guild widens its audience",
    excerpt:
      "Thirty furniture brands opened 15 showrooms in and around Long Eaton for Autumn Long Point, 14 to 16 September. The Long Eaton Guild of Furniture Manufacturers reports registrations up 40 per cent on the spring event.",
    category: "Industry News",
    categoryClass: "tag-news",
    section: "The Trade",
    cover: "+40%",
    image: "/covers/autumn-long-point-2026-round-up.png",
    imageAlt: "Autumn Long Point 2026",
    readTime: "3 min read",
    date: "29 Sep 2026",
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

// Rotating hero pool (#99): curated, image-bearing, on-positioning pieces only.
// Server always renders HERO_SLUG first (SEO, no-JS); HeroRotator advances
// through this pool client-side on repeat visits. Retire-list pieces never
// go in here, and nothing goes in with a date after today.
export const HERO_POOL = [
  "uk-upholstery-workforce-ons-2026",
  "worldskills-shanghai-2026-cabinet-making-team-uk",
  "pricing-guide-self-employed-upholsterers",
  "heritage-crafts-red-list-furniture-crafts",
  "deep-buttoning-technique-guide",
]

export const getHeroPoolArticles = (): Article[] =>
  HERO_POOL.map((slug) => articles.find((a) => a.slug === slug)).filter(
    (a): a is Article => Boolean(a) && !isFutureDate(a!.date)
  )

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
  getPublishedArticles().find((a) => a.featured) ?? getPublishedArticles()[0]

// Newest first, and only pieces whose date has arrived. Future-dated pieces
// (Issue 001 content) stay reachable by direct link for previews but are not
// listed anywhere until their date.
export const getPublishedArticles = (): Article[] =>
  articles
    .filter((a) => !isFutureDate(a.date))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

export const getLatestArticles = (count = 6): Article[] =>
  getPublishedArticles().slice(0, count)

export const getSecondaryArticles = (): Article[] =>
  getPublishedArticles().slice(6, 8)

export const getArticlesByCategory = (category: Article["category"]): Article[] =>
  getPublishedArticles().filter((a) => a.category === category)

export const getArticlesBySection = (section: Section): Article[] =>
  getPublishedArticles().filter((a) => a.section === section)

// Same section first, then the newest of the rest.
export const getRelatedArticles = (article: Article, count = 3): Article[] => {
  const others = getPublishedArticles().filter((a) => a.slug !== article.slug)
  const same = others.filter((a) => a.section === article.section)
  const rest = others.filter((a) => a.section !== article.section)
  return [...same, ...rest].slice(0, count)
}

// A generated typographic cover rather than a cleared photograph.
export const hasPhoto = (a: Article): boolean => !a.image.startsWith("/covers/")

export const SECTIONS: { name: Section; slug: string; href: string; description: string }[] = [
  {
    name: "The Bench",
    slug: "the-bench",
    href: "/bench",
    description: "One technique, one tool or one material, explained by the person who uses it.",
  },
  {
    name: "The Piece",
    slug: "the-piece",
    href: "/section/the-piece",
    description: "A single commission told properly: the brief, the material, the part that went wrong and what fixed it.",
  },
  {
    name: "The Studio",
    slug: "the-studio",
    href: "/section/the-studio",
    description: "Design and specification: collections, finishes, awards, books and the shows worth the trip.",
  },
  {
    name: "The Trade",
    slug: "the-trade",
    href: "/section/the-trade",
    description: "The business of a small workshop: material prices, supplier news, pay benchmarks and live jobs, every figure sourced.",
  },
]
