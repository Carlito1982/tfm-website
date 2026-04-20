export interface Event {
  id: string
  name: string
  organiser: string
  date: string
  dateDisplay: string
  location: string
  description: string
  url: string
  featured?: boolean
}

export const events: Event[] = [
  {
    id: "festival-upholstery-2026",
    name: "Festival of Upholstery 2026",
    organiser: "Festival of Upholstery",
    date: "2026-10-02",
    dateDisplay: "2–3 October 2026",
    location: "National Conference Centre, Birmingham",
    description:
      "The UK's dedicated festival for upholsterers, students, educators and allied professionals. Two days of demonstrations, learning, and meaningful connection for the craft community.",
    url: "https://www.festivalofupholstery.co.uk",
    featured: true,
  },
  {
    id: "decorex-2026",
    name: "Decorex International",
    organiser: "Decorex",
    date: "2026-09-20",
    dateDisplay: "20–23 September 2026",
    location: "Olympia London",
    description:
      "Europe's premier interior design show, featuring luxury furniture, textiles and materials for the high-end residential market.",
    url: "https://www.decorex.com",
    featured: false,
  },
  {
    id: "bsia-2026",
    name: "Furniture & Joinery Expo",
    organiser: "British Furniture Association",
    date: "2026-11-05",
    dateDisplay: "5–6 November 2026",
    location: "NEC, Birmingham",
    description:
      "The UK trade show for furniture manufacturers, suppliers and retailers — covering production, materials, technology and sustainability.",
    url: "https://www.britishfurnitureassociation.org.uk",
    featured: false,
  },
]

export function getFeaturedEvent(): Event | undefined {
  return events.find((e) => e.featured) ?? events[0]
}

export function getUpcomingEvents(): Event[] {
  const now = new Date()
  return events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
