// Table of contents for each issue, in newsletter order. Copy comes from the issue content
// module (ttb-command-centre/docs/tfm_issue_tools/issue_001_content.py). Nothing here is invented.

export interface IssueLink {
  href: string
  text: string
  external?: boolean
}

export interface IssueItem {
  title: string
  text?: string[]
  link?: IssueLink
  sources?: string
}

export interface IssueSection {
  label: string
  heading?: string
  items: IssueItem[]
  note?: string
  adAfter?: boolean
}

export interface IssueContents {
  slug: string
  subject: string
  preview: string
  opening: string[]
  sections: IssueSection[]
  signoff: string[]
}

export const issueContents: IssueContents[] = [
  {
    slug: "issue-001",
    subject: "What upholsterers are being offered in 2026, and why the official number is lower",
    preview:
      "Issue 001: advertised pay on 50 live vacancies against the ONS median, the year the sofa trade changed hands, what Hormuz is doing to freight, and the autumn diary.",
    opening: [
      "Welcome to the first issue of The Furniture Magazine.",
      "This is a fortnightly brief for the people who make, repair and finish furniture in the UK, and for the businesses that employ them. It is short by design. Every issue brings the trade news that matters, one number worth knowing, one technique, the live jobs, and the diary, with a longer edition from time to time.",
      "Two rules govern everything printed here. Nothing is made up: every figure has a source, and the source is named. Paid content is always labelled as such. If you spot an error, email the editor and it will be corrected in the next issue.",
      "The Furniture Magazine is published by The Talent Branch, the upholstery and furniture recruitment business. That connection is confined to the Jobs section and the footer.",
    ],
    sections: [
      {
        label: "Lead",
        items: [
          {
            title: "What upholsterers are being offered in 2026, and why the official number is lower",
            text: [
              "The Office for National Statistics puts the median annual pay of an employed upholsterer at £26,966 in 2025, up 11.7% on the year. The advertised market looks different: of the 50 vacancies live on The Talent Branch this week, upholsterer and furniture technician roles are advertised at between £30,000 and £45,000. The two sets of numbers are measuring different things.",
            ],
            link: { href: "/articles/upholstery-salary-report-2026", text: "Read the pay data article" },
            sources:
              "Sources: ONS, Annual Survey of Hours and Earnings 2025 (provisional), Table 14.7a, SOC 5411; The Talent Branch live vacancies, 16 September 2026; Indeed UK; Glassdoor UK; Talent.com.",
          },
        ],
        adAfter: true,
      },
      {
        label: "Big story",
        items: [
          {
            title: "The year the sofa trade changed hands",
            text: [
              "In six months the ownership of a large part of British upholstery and bed manufacturing has been rearranged, much of it through administrators' offices. The sequence, month by month, from the primary documents.",
            ],
            link: { href: "/articles/the-year-the-sofa-trade-changed-hands", text: "Read the Big Story" },
          },
        ],
      },
      {
        label: "Number to know",
        items: [
          {
            title: "142.9",
            text: [
              "The ONS producer price index for UK furniture manufacturers' output (domestic, 2015 = 100) for August 2026, published on 16 September. That is 2.1% above August 2025. Across all UK manufacturing, factory-gate prices rose 3.7% on the year and input prices 6.1%. Furniture makers are raising prices more slowly than their costs are rising.",
            ],
            sources: "Source: ONS, Producer price inflation, UK: August 2026, and series G75I.",
          },
        ],
        adAfter: true,
      },
      {
        label: "Live jobs",
        items: [
          {
            title: "Live permanent roles from The Talent Branch",
            text: ["Employers are named at interview stage."],
            link: { href: "/jobs", text: "All live roles" },
          },
        ],
      },
      {
        label: "Bench video",
        items: [
          {
            title: "Introduction to Making Upholstery Buttons, by Alison Scott Upholstery",
            text: [
              "Alison Scott has taught traditional upholstery for more than 35 years. This one covers making your own covered buttons to match the top fabric, rather than relying on a pre-made set that never quite matches.",
            ],
            link: { href: "/bench/alison-scott-upholstery-buttons", text: "Watch the video" },
          },
        ],
      },
      {
        label: "One technique",
        items: [
          {
            title: "Diagnose the sagging seat before you quote it",
            text: [
              "Most sagging sofa seats are not a foam problem, whatever the customer says. Cushions off, press the deck firmly in the centre, at each corner and along each edge. If the base gives more than three or four centimetres and rebounds sluggishly, the support platform has failed.",
            ],
            link: { href: "/articles/sofa-seat-diagnosis-guide", text: "Read: How to diagnose a sagging sofa seat in three steps" },
          },
        ],
        adAfter: true,
      },
      {
        label: "The brief",
        items: [
          {
            title: "July furniture imports up 5%, exports up 12.6%",
            text: [
              "UK furniture imports reached £771.4m in July 2026, up 5% on the year. Imports from the EU fell 5.6% to £342.7m while non-EU imports rose 15.5% to £428.7m, with China the largest source at £293m and Italy down 16% to £73.1m. Exports rose 12.6% to £231m, led by the USA at £66.4m.",
            ],
            link: { href: "https://www.bigfurnituregroup.com/furniture-imports-up-in-july-2026-exports-rise/", text: "Big Furniture Group, 15 September", external: true },
          },
          {
            title: "NBF has an acting president",
            text: [
              "Fara Butt stepped down as president of the National Bed Federation on 11 September to concentrate on Shire Beds. Matt Richardson, production director at Dreams and the NBF's vice president for manufacturing, is acting president with immediate effect. The NBF's member awards were due to be presented at the Bed Show in Telford on 22 and 23 September.",
            ],
            link: { href: "https://furniturenews.net/news/nbf-appoints-dreams-matt-richardson-as-acting-president", text: "Furniture News, 15 September", external: true },
          },
          {
            title: "Flair Furniture Group appoints its first external chief executive",
            text: [
              "Paul Atherton becomes group chief executive of Flair Furniture Group, owner of Bed Kingdom, on 1 October, with founder Ashley Hainsworth moving to chairman. The group has seven brands, three warehouses and 92 staff, and is targeting £100m revenue within three years.",
            ],
            link: { href: "https://furniturenews.net/news/founder-becomes-chairman-as-flair-appoints-group-ceo", text: "Furniture News, 10 September", external: true },
          },
          {
            title: "Cyncly buys furniture CAD/CAM developer imos",
            text: [
              "Cyncly has acquired imos, the German CAD/CAM and automation software company used by more than 5,000 furniture manufacturers in 100 countries, mainly for panel-based furniture. Terms were not disclosed.",
            ],
            link: { href: "https://furniturenews.net/news/acquisition-strengthens-cynclys-furniture-manufacturing-portfolio", text: "Furniture News, 1 September", external: true },
          },
          {
            title: "A battery tool destroyed a Lincolnshire workshop",
            text: [
              "A fire on 8 September destroyed the building housing Hill Farm Furniture's showroom, office, paint shop, assembly room and storage at Dry Doddington. The cause was an electrical fault in the battery pack of a rechargeable hand tool. Nobody was hurt and the firm says it will rebuild. If your batteries charge overnight on the bench, this is the week to move them.",
            ],
            link: { href: "https://www.bigfurnituregroup.com/bespoke-furniture-business-suffers-devastating-fire/", text: "Big Furniture Group, 16 September", external: true },
          },
          {
            title: "HLF Group reports revenue up 40% and a £3.5m year ahead",
            text: [
              "HLF Group, the Blaydon contract furniture supplier to hotels, serviced apartments and holiday parks, says revenue is up 40% on the prior year and projects turnover of £3.5m over the next twelve months. Press release, supplied by the company.",
            ],
            link: { href: "/articles/hlf-group-revenue-up-40-per-cent", text: "Read the press release" },
          },
          {
            title: "Digital Product Records: the Government call for evidence has closed",
            text: [
              "The Department for Business, Innovation, Science and Trade closed its call for evidence on Digital Product Records on 21 September. A record could hold safety, composition, sustainability and end-of-life information for every piece of furniture sold. FIRA urged every furniture business to respond so the sector's view was represented; the EU already runs a comparable Digital Product Passport. We will report what the Government publishes next.",
            ],
            link: { href: "/articles/digital-product-records-call-for-evidence-2026", text: "Read the press release" },
          },
        ],
        adAfter: true,
      },
      {
        label: "Trade and freight",
        items: [
          {
            title: "Trade and freight",
            text: [
              "Drewry's World Container Index stood at $4,476 per 40-foot container on 10 September, unchanged for a second week: Iran-US tensions continue to disrupt the Strait of Hormuz while the selective return of services to the Suez Canal is restoring capacity on Asia to Europe routes and pushing rates down. Freightos put Asia to North Europe at $4,500 per FEU on 8 September, down 3%, with bunker fuel about 60% above pre-war levels. Lloyd's List counted 290 Suez transits in the last week of August, 36% below normal but the highest since the start of 2024.",
              "What the UK furniture companies told the market: DFS said second-half demand softened in part related to the Iran War, through consumer confidence and housing transactions. Howdens expects about £40m of second-half cost headwinds related to Middle East disruption, to be offset by productivity. Dunelm cited higher fuel costs driven by geopolitical events inside £23m of inflationary cost. US tariffs on upholstered furniture remain at 25%, with the scheduled increases postponed to 1 January 2027. No UK trade body has issued a statement on freight this quarter; if yours has, email the editor and we will carry it.",
            ],
            sources:
              "Sources: Drewry World Container Index, 10 September; Freightos, 8 September; Lloyd's List Intelligence Red Sea brief, 3 September; DFS trading update, 16 July; Howden Joinery Group half year report, 23 July; Dunelm preliminary results, 8 September; White House fact sheet, 31 December 2025.",
          },
        ],
      },
      {
        label: "Diary",
        items: [
          { title: "30 September: BFA Health and Safety Day, Behind the Mask", text: ["Rochdale Occupational Health, 09:30 to 15:00"], link: { href: "https://www.bfa.org.uk/events/", text: "BFA events", external: true } },
          { title: "2 to 3 October: Festival of Upholstery 2026", text: ["National Motorcycle Museum and Conference Centre, Birmingham"], link: { href: "/events", text: "On our events page" } },
          { title: "7 to 8 October: Autumn Furniture Show", text: ["Telford International Centre, Halls 1 and 2"], link: { href: "https://www.theautumnfurnitureshow.co.uk/", text: "Autumn Furniture Show", external: true } },
          { title: "11 to 14 October: Decorex", text: ["Olympia London"], link: { href: "/events", text: "On our events page" } },
          { title: "20 October: BFA ESG Forum", text: ["Harrison Spinks, 12:00 to 15:30"], link: { href: "https://www.bfa.org.uk/events/", text: "BFA events", external: true } },
          { title: "24 to 27 January 2027: January Furniture Show", text: ["NEC Birmingham"], link: { href: "/events", text: "On our events page" } },
        ],
        note: "Dates checked on each organiser's own website on 16 September 2026. Organisers: to list an event, email the editor.",
        adAfter: true,
      },
      {
        label: "Books",
        items: [
          {
            title: "Chair Upholstery, by Franco Marinelli",
            text: [
              "The Crowood Press publishes Chair Upholstery: A modern guide to traditional techniques on 27 October (£24, 160 pages, paperback). Seven chair projects, each stage photographed, by Master Upholsterer Franco Marinelli. A Q and A with the author runs in this issue; a full review follows after publication.",
            ],
            link: { href: "/articles/chair-upholstery-franco-marinelli", text: "The book and the author" },
          },
        ],
      },
      {
        label: "Reader question",
        items: [
          {
            title: "Two things",
            text: [
              "First, which single supplier price rise has hurt your margins most this year: foam, fabric, timber, springs, or something else? Email the editor with the material and the rough percentage; answers are aggregated, never attributed. Second, we want to see your work. Send a photograph of a finished job with one line on what it involved and how many bench hours it took, and it may appear in the Maker of the Month feature, with your permission and your name.",
            ],
            link: { href: "mailto:editor@thefurnituremagazine.com", text: "editor@thefurnituremagazine.com" },
          },
        ],
      },
    ],
    signoff: [
      "That is Issue 001. If it was useful, forward it to one person in the trade who would read it. If it was not, reply and say why; that is more useful still.",
      "Carlos Garcia, Editor",
    ],
  },
]

export function getIssueContents(slug: string): IssueContents | undefined {
  return issueContents.find((i) => i.slug === slug)
}
