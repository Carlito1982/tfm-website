export type Article = {
  slug: string
  title: string
  excerpt: string
  category: "Industry News" | "Craft & Technique" | "Salary Data" | "Business Advice"
  categoryClass: "tag-news" | "tag-craft" | "tag-salary" | "tag-business"
  image: string
  imageAlt: string
  readTime: string
  date: string
  featured?: boolean
}

export const articles: Article[] = [
  {
    slug: "uk-furniture-skills-crisis-2026",
    title: "The UK Furniture Skills Crisis Is Getting Worse — Here Is What the Data Shows",
    excerpt:
      "Fewer trained upholsterers are entering the trade each year than are retiring from it. Employers are waiting 3–6 months to fill roles that used to take four weeks. This is not a temporary problem.",
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
      "Entry-level to Head Upholsterer — we tracked live placements and job postings across the UK to build the most accurate salary snapshot the industry has ever had.",
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
    title: "Most Self-Employed Upholsterers Undercharge by 30%. Here Is How to Fix It",
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
      "Flexible foam remains substantially above 2022 levels. Standard timber has normalised. Here is the full picture — and what it means for your quotes.",
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

export const getFeaturedArticle = (): Article =>
  articles.find((a) => a.featured) ?? articles[0]

export const getLatestArticles = (count = 6): Article[] =>
  articles.slice(0, count)

export const getSecondaryArticles = (): Article[] =>
  articles.slice(6, 8)
