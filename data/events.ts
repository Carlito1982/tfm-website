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

// Every event here must have been verified on the organiser's own website before it is added.
// Last verified: 16 September 2026.
export const events: Event[] = [
  {
    id: "bed-show-2026",
    name: "The Bed Show 2026",
    organiser: "National Bed Federation",
    date: "2026-09-22",
    dateDisplay: "22 to 23 September 2026",
    location: "Telford International Centre",
    description:
      "The National Bed Federation's annual trade exhibition for bed and mattress manufacturers, component suppliers and retailers.",
    url: "https://www.bedshow.co.uk",
    featured: false,
  },
  {
    id: "festival-upholstery-2026",
    name: "Festival of Upholstery 2026",
    organiser: "Festival of Upholstery",
    date: "2026-10-02",
    dateDisplay: "2 to 3 October 2026",
    location: "National Conference Centre, Birmingham",
    description:
      "The UK's dedicated festival for upholsterers, students, educators and allied professionals. Two days of demonstrations, learning and connection for the craft community.",
    url: "https://www.festivalofupholstery.co.uk",
    featured: true,
  },
  {
    id: "decorex-2026",
    name: "Decorex 2026",
    organiser: "Decorex",
    date: "2026-10-11",
    dateDisplay: "11 to 14 October 2026",
    location: "Olympia London",
    description:
      "The interior design trade show for the high-end residential market: furniture, textiles, lighting and materials, and the designers who specify them.",
    url: "https://www.decorex.com",
    featured: false,
  },
  {
    id: "january-furniture-show-2027",
    name: "January Furniture Show 2027",
    organiser: "January Furniture Show",
    date: "2027-01-24",
    dateDisplay: "24 to 27 January 2027",
    location: "NEC, Birmingham",
    description:
      "The UK's largest furniture trade show, with several hundred brands across upholstery, cabinet, beds and interiors, and the buyers who stock them.",
    url: "https://thefurnitureshows.com",
    featured: false,
  },
  {
    id: "clerkenwell-design-week-2027",
    name: "Clerkenwell Design Week 2027",
    organiser: "Media 10",
    date: "2027-05-25",
    dateDisplay: "25 to 27 May 2027",
    location: "Clerkenwell, London",
    description:
      "The design festival for the contract and commercial interiors market, where furniture makers meet architects and specifiers.",
    url: "https://www.clerkenwelldesignweek.com",
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
