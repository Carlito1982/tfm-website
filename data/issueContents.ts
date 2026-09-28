// Table of contents for each issue, in newsletter order. Copy comes from the issue content
// module (ttb-command-centre/docs/tfm_issue_tools/issue_001_content_v9.py, via gen_issue_contents_ts.py). Nothing here is invented.

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
    subject: "A chair is only as sound as the work beneath its fabric",
    preview:
      "Issue 001: Franco Marinelli on the craft most at risk in UK workshops, the Festival of Upholstery, a new pricing guide for upholsterers, and how to make your own covered buttons.",
    opening: [
      "Welcome to the first issue of The Furniture Magazine.",
      "This is a fortnightly brief for the people who bring furniture to life: bespoke upholsterers, cabinet makers, restorers, conservators and the designers who commission them. It is short by design. A technique worth stealing, one piece worth studying, the tools and materials that earn their keep, and the trade news and jobs that reach a small workshop.",
      "Nothing here is made up. Every figure has a source and the source is named. Paid content is always labelled Advertisement.",
      "The Furniture Magazine is published by The Talent Branch, the upholstery and furniture recruitment business. That connection is confined to the Jobs section and the footer.",
    ],
    sections: [
      {
        label: "Books",
        items: [
          {
            title: "Chair Upholstery, by Franco Marinelli",
            text: [
              "After nearly fifty years in upholstery, a Master Upholsterer has written down the standards behind good practice. Published by The Crowood Press on 27 October, £24. The author answers our questions below; a full review follows after publication.",
              "The Crowood Press publishes Chair Upholstery: A modern guide to traditional techniques on 27 October, at £24 for 160 pages in paperback. The structure is seven chair projects, running from basic repairs through to advanced traditional work, with each stage photographed rather than described and left to the imagination. The publisher pitches it at beginners and at working upholsterers looking to extend their range, which is a wider brief than most books in this corner manage to carry off.",
              "Franco Marinelli has worked as an upholsterer and a university tutor in Italy and in England. He is certified as a Master Upholsterer by City and Guilds and by the Worshipful Company of Upholders, is a Fellow of the Association of Master Upholsterers, and holds the Freedom of the City of London and the Livery of the Worshipful Company of Upholders.",
            ],
            link: { href: "/go/crowood-chair-upholstery", text: "The book at The Crowood Press" },
            sources: "Publisher details and author biography supplied by The Crowood Press, 17 September 2026. Cover image reproduced with the publisher's permission.",
          },
        ],
      },
      {
        label: "Q and A",
        items: [
          {
            title: "Franco Marinelli: a chair is only as sound as the work beneath its fabric",
            text: [
              "Three of the eight questions we put to the author. The full interview, on modern materials, his training and the one tool he could not work without, is on our website.",
              "Which traditional technique is most at risk of being lost in UK workshops? In my view, hand-stitched edges are the traditional technique most at risk. The work is slow, physically demanding and requires patience that can be difficult to sustain under modern commercial pressures. Yet it is fundamental. A stitched edge gives a chair its shape, durability and comfort, turning padding and fabric into a properly constructed seat, back or arm.",
              "What is the most common fault you find when you strip back a chair that someone else has upholstered? The fault I encounter most often is weak foundation work hidden beneath a presentable cover. The webbing may be uneven or poorly tensioned, the springs inadequately tied, and the fillings used to disguise an incorrect shape rather than build it properly. A chair is only as sound as the work beneath its fabric.",
              "What advice would you give someone in their first year at the bench? Focus on learning the foundations properly rather than working too quickly. Your first year is about building habits that will support your whole career, not chasing speed. Seek feedback from experienced upholsterers whenever possible. Speed will come with practice, but sound judgement and pride in your work must come first.",
            ],
            link: { href: "/articles/franco-marinelli-qa-chair-upholstery", text: "Read the full Q and A" },
            sources: "Franco Marinelli answered our questions in writing. Introduction arranged by Olivia Hayward at The Crowood Press.",
          },
        ],
        adAfter: true,
      },
      {
        label: "The Trade",
        items: [
          {
            title: "The Festival of Upholstery, 2 and 3 October",
            text: [
              "The Festival of Upholstery returns on 2 and 3 October 2026 at the National Conference Centre and Motorcycle Museum, Birmingham, and organiser Kirsty Lockwood says interest has ramped up significantly in the run-up.",
              "Her case for making the trip is a simple one. It is a rare chance to step away from the bench and spend time with people who understand the job: to see techniques up close, discover new materials and suppliers, ask honest business questions and connect with the wider upholstery community.",
              "The session Lockwood is most looking forward to is Elsie Hutcheon's live demonstration on reusing existing upholstery, showing how to assess what is already inside a piece and retain materials where appropriate. Vanessa Butt will speak on sustainable materials in upholstery, and Rohan Blacker of Schplendid Sofas is also on the programme. New this year is a much broader practical programme, with live demonstrations filmed close-up and projected onto a large screen.",
              "Tickets and full details are at festivalofupholstery.co.uk. With only days to go, the organisers strongly recommend booking soon.",
            ],
            link: { href: "/articles/festival-of-upholstery-2026-preview", text: "The full preview: exhibitors, awards and the evening social" },
            sources: "Text approved by the organisers, 23 September 2026. This preview is editorial and was not paid for. Photography: Festival of Upholstery.",
          },
        ],
      },
      {
        label: "The Workshop",
        items: [
          {
            title: "Valerie Hayes: busy and profitable are not the same thing",
            text: [
              "The Upholsterer's Pricing Guide, by Valerie Hayes of Atelier Valérie Hayes Upholstery, launches at the Festival of Upholstery on 2 October. After around 30 years in accountancy, Hayes retrained as a professional upholsterer, bringing a head for numbers together with a love of chairs. The 68-page guide looks at true costs, pricing structure, billable time, profit, logistics, market testing and the boundaries that help make the work sustainable. RRP £49; pre-order £42.75 including UK P&P; £40 when collected at the festival.",
              "Why can an upholsterer have a busy workshop and a full diary but still not be particularly profitable? Because busy and profitable are not the same thing. You can have work booked months ahead and still be absorbing costs yourself: collection and delivery, sourcing, admin, conversations with clients, ordering materials, unexpected problems and all those little pieces of time that never appear on the invoice. If the price only covers the hours spent physically upholstering the furniture, the business is quietly paying for everything else. A full diary can actually hide underpricing very effectively.",
              "If an upholsterer changed just one business habit, what would you want it to be? Review every finished job. Take ten minutes before you mentally move on to the next chair and ask: What did I quote? What did it actually cost me? How long did it really take? What did I give away? What would I charge next time? If you make every completed job teach you something about the next one, your pricing becomes progressively more accurate and your business becomes stronger with it.",
            ],
            link: { href: "/articles/upholsterers-pricing-guide-valerie-hayes", text: "All eight questions with Valerie Hayes" },
            sources: "Guide details supplied by the author, 10 and 17 September 2026. Photograph: Sion Edwards.",
          },
        ],
      },
      {
        label: "The Bench",
        items: [
          {
            title: "Introduction to Making Upholstery Buttons, Alison Scott Upholstery",
            text: [
              "Alison Scott has taught traditional upholstery for more than 35 years, through in-person classes and now a library of over 100 video tutorials. This one covers a skill every upholsterer needs sooner or later: making your own covered buttons to match the top fabric, rather than relying on a pre-made set that never quite matches.",
              "Each issue this slot carries one video from a working maker showing a technique, a tool or a repair. The video is the maker's own and plays from their channel; we add the context. Send yours to editor@thefurnituremagazine.com.",
            ],
            link: { href: "/bench/alison-scott-upholstery-buttons", text: "Watch: Introduction to Making Upholstery Buttons, Alison Scott Upholstery" },
          },
          {
            title: "Hand cut dovetails for a drawer",
            text: [
              "Blake Bespoke",
            ],
            link: { href: "/bench/blake-bespoke-hand-cut-dovetails", text: "Watch on the site" },
          },
          {
            title: "Marc Fish: furniture creation at Robinson House Studio",
            text: [
              "Robinson House Studio",
            ],
            link: { href: "/bench/marc-fish-robinson-house-studio", text: "Watch on the site" },
          },
          {
            title: "Restoring a 1930s writing bureau",
            text: [
              "Mayfield Restorations",
            ],
            link: { href: "/bench/mayfield-restorations-writing-bureau", text: "Watch on the site" },
          },
        ],
      },
      {
        label: "The number",
        items: [
          {
            title: "142.9",
            text: [
              "The ONS producer price index for UK furniture manufacturers' output (domestic, 2015 = 100) for August 2026, published on 16 September. That is 2.1% above August 2025. Across all UK manufacturing, factory-gate prices rose 3.7% on the year and input prices 6.1%. Furniture makers are raising prices more slowly than their costs are rising, which is a margin problem dressed up as restraint.",
            ],
            sources: "Source: ONS, Producer price inflation, UK: August 2026, and series G75I.",
          },
        ],
        adAfter: true,
      },
      {
        label: "What the market is paying",
        items: [
          {
            title: "What upholsterers are being offered in 2026",
            text: [
              "The Office for National Statistics puts the median annual pay of employed upholsterers at £26,966 in 2025, up 11.7% on the year; for those working full time it is £27,909. The advertised market looks different: of the 84 vacancies live on The Talent Branch this week, 73 are upholsterer and furniture technician roles, and those with an annual salary are advertised at between £25,000 and £45,760. The most common band, on 35 of them, is £33,710 to £41,370.",
              "The two are measuring different things. ASHE captures what people already in post are paid. Advertised salaries capture what an employer must offer today to move someone, and the difference between the two is the price of moving. If you are self-employed, treat the advertised employed rate as the floor under your day rate and not the ceiling: an employer paying £36,000 is carrying holiday, pension, tools, premises and downtime on top of it.",
            ],
            link: { href: "/articles/upholstery-salary-report-2026", text: "The full pay data" },
            sources: "Sources: ONS, Annual Survey of Hours and Earnings 2025 (provisional), Table 14.7a, SOC 5411; The Talent Branch live vacancies, 28 September 2026.",
          },
        ],
      },
      {
        label: "The Trade",
        items: [
          {
            title: "Designers Guild has stopped trading; the brand carries on",
            text: [
              "Designers Guild Limited, which designed and sold luxury furnishing fabrics, wallcoverings and upholstery, ceased to trade when Rick Harrison and Howard Smith of Interpath were appointed joint administrators on 24 September, and 93 staff were made redundant. The brand and design archive have belonged to Dunelm since April 2025, and on 25 September Sanderson Design Group announced a ten-year licence from Dunelm to develop, manufacture and sell Designers Guild wallpapers, fabrics and paint worldwide. If you have Designers Guild fabric on order for a client job, the administrators are the people to contact.",
              "For context, the same week DFS Furniture reported full-year revenue of £1,057.5m and profit before tax of £43.7m, with order intake in the first twelve weeks of its new financial year down 2.5% in what it calls a subdued market. The volume end of the trade is holding its margin; the supply chain beneath it is where the failures are landing.",
            ],
            link: { href: "https://interpath.com/media-hub/articles/administrators-appointed-designers-guild-limited/", text: "The administrators' notice", external: true },
            sources: "Sources: Interpath, 24 September; Furniture News, 25 September; DFS Furniture plc preliminary results, RNS, 24 September.",
          },
          {
            title: "The year the sofa trade changed hands",
            text: [
              "In six months the ownership of a large part of British upholstery and bed manufacturing has been rearranged, much of it through administrators' offices. The sequence, month by month, from the primary documents.",
            ],
            link: { href: "/articles/the-year-the-sofa-trade-changed-hands", text: "Also on the site: the year the sofa trade changed hands, with every source" },
          },
        ],
      },
      {
        label: "The Brief",
        items: [
          {
            title: "A battery tool destroyed a Lincolnshire workshop",
            text: [
              "A fire on 8 September destroyed the building housing Hill Farm Furniture's showroom, store and workshop at Dry Doddington, including the paint shop, assembly room and the storage space above. The cause was an electrical fault in the battery pack of a rechargeable hand tool. Nobody was hurt and the firm says it intends to come back stronger. If your batteries charge overnight on the bench, this is the week to move them.",
            ],
            link: { href: "https://www.bigfurnituregroup.com/bespoke-furniture-business-suffers-devastating-fire/", text: "Big Furniture Group, 16 September", external: true },
          },
          {
            title: "Autumn Long Point: registrations up 40 per cent",
            text: [
              "Thirty furniture brands opened 15 showrooms in and around Long Eaton for Autumn Long Point, 14 to 16 September. The Long Eaton Guild of Furniture Manufacturers reports registrations up 40 per cent on the spring event. Our round-up covers who showed and what was new.",
            ],
            link: { href: "/articles/autumn-long-point-2026-round-up", text: "The Furniture Magazine, from the Long Eaton Guild" },
          },
          {
            title: "HLF Group reports revenue up 40% and a £3.5m year ahead",
            text: [
              "HLF Group, the Blaydon contract furniture supplier to hotels, serviced apartments and holiday parks, says revenue is up 40% on the prior year and projects turnover of £3.5m over the next twelve months. The company has added an account manager, extra vehicles and a new North East warehouse. Owner Rachel Conroy was named in Insider Media's North East 42 Under 42. Press release, supplied by the company.",
            ],
            link: { href: "/go/hlf-group-001", text: "HLF Group press release, 15 September" },
          },
          {
            title: "July furniture imports up 5%, exports up 12.6%",
            text: [
              "UK furniture imports reached £771.4m in July 2026, up 5% on the year. Imports from the EU fell 5.6% to £342.7m while non-EU imports rose 15.5% to £428.7m, with China the largest source at £293m and Italy down 16% to £73.1m. Exports rose 12.6% to £231m, led by the USA at £66.4m.",
            ],
            link: { href: "https://www.bigfurnituregroup.com/furniture-imports-up-in-july-2026-exports-rise/", text: "Big Furniture Group, 15 September", external: true },
          },
          {
            title: "Elite Office Furniture moves to Goole; 300 lots of surplus machinery under the hammer",
            text: [
              "Elite Office Furniture has moved into a 300,000 sq ft purpose-built factory off Rawcliffe Road in Goole, East Yorkshire, and has bought a suite of new CNC machines for its manufacturing divisions. The surplus machinery from the old site, more than 300 lots including Homag, Weeke, Selco, Amada, Prima Power and Gama, is being sold at auction by Walker Singleton, closing on 22 October. For a small workshop that has been pricing a second-hand edgebander or beam saw, that is the date to have in the diary.",
            ],
            link: { href: "https://furnitureproduction.net/news/elite-office-furniture-makes-the-move-to-new-purpose-built-factory", text: "Furniture and Joinery Production, 25 September", external: true },
          },
          {
            title: "Finsa opens a £20m logistics base at Birkenhead",
            text: [
              "Panel maker Finsa has opened a £20m site at Grandidges Quay, Birkenhead, inside the Wirral Waters Freeport, developed with Peel Ports. It combines a logistics warehouse, a cross-laminated timber office building and a Finsa Home commercial space, with dock and crane capacity to unload vessels directly. For the North West that means MDF, chipboard and melamine-faced board landing closer to the workshops that use it.",
            ],
            link: { href: "https://furnitureproduction.net/news/finsa-strengthens-commitment-to-uk-with-20m-logistics-headquarters", text: "Furniture and Joinery Production, 25 September", external: true },
          },
          {
            title: "Man Wah's stake in DFS passes 10 per cent",
            text: [
              "A stock exchange notice on 23 September records that Man Li Wong, through Man Wah Holdings, raised voting rights in DFS Furniture from 9.12 per cent to 10.18 per cent, crossing the threshold on 22 September. Man Wah is the Chinese upholstery manufacturer behind a large share of the imported recliner market; a growing stake in the largest UK sofa retailer is worth watching from any bench that competes with imports on price.",
            ],
            link: { href: "https://www.investegate.co.uk/announcement/rns/dfs-furniture--dfs/holding-s-in-company/9786777", text: "DFS Furniture plc, RNS via Investegate, 23 September", external: true },
          },
          {
            title: "Institute of Carpenters appoints a Programme Manager",
            text: [
              "Elaine Morrissey joined the Institute of Carpenters on 21 September as Programme Manager, a new role leading the Wood/Work programme, a CITB-funded in-work support scheme for around 120 apprentices a year.",
            ],
            link: { href: "https://instituteofcarpenters.com/institute-of-carpenters-appoint-elaine-morrissey-as-programme-manager/", text: "Institute of Carpenters, 21 September", external: true },
          },
        ],
      },
      {
        label: "On the site this fortnight",
        items: [
          {
            title: "Stanley Mackintosh represents the UK in Cabinet Making at WorldSkills Shanghai",
            link: { href: "/articles/worldskills-shanghai-2026-cabinet-making-team-uk", text: "Read" },
          },
          {
            title: "Three furniture crafts are critically endangered in the UK, says the Red List",
            link: { href: "/articles/heritage-crafts-red-list-furniture-crafts", text: "Read" },
          },
          {
            title: "Decorex 2026: Making Spaces returns to Olympia",
            link: { href: "/articles/decorex-2026-preview", text: "Read" },
          },
          {
            title: "The Wood Awards 2026 shortlist: the furniture to study",
            link: { href: "/articles/wood-awards-2026-furniture-shortlist", text: "Read" },
          },
          {
            title: "Nearly half of the UK's upholsterers are self-employed, ONS figures show",
            link: { href: "/articles/uk-upholstery-workforce-ons-2026", text: "Read" },
          },
        ],
      },
      {
        label: "Media partner",
        items: [
          {
            title: "The Festival of Upholstery, 2 and 3 October 2026",
            text: [
              "Two days for professional upholsterers at the National Conference Centre and Motorcycle Museum, Birmingham: exhibitors, live demonstrations filmed close-up and projected on a big screen, talks and the evening social. The Furniture Magazine is a media partner of the festival. Tickets and the full programme are on the festival website.",
            ],
            link: { href: "/go/festival-of-upholstery-001", text: "Tickets and programme at festivalofupholstery.co.uk" },
            sources: "Reciprocal arrangement with the organisers, agreed in writing on 17 September 2026. No payment either way.",
          },
        ],
      },
      {
        label: "Live jobs",
        items: [
          {
            title: "Live permanent roles from The Talent Branch",
            text: [
              "Employers are named at interview stage.",
              "Lead Cabinet Maker, bespoke luxury furniture, Rugby, Warwickshire, £38,000 to £42,000.",
              "Cabinet Maker / Bench Joiner, bespoke high-end furniture, Ongar, Essex, £32,000 to £35,000.",
              "Upholstery Restoration Technician, Edinburgh, £33,710 to £41,370.",
              "Upholstery Restoration Technician, Lincolnshire, £33,710 to £41,370.",
              "Furniture Technician, Belfast and Northern Ireland, £30,368 to £34,528.",
              "Furniture Technician, Reading, £30,368 to £34,528.",
            ],
            link: { href: "/jobs", text: "All 84 live roles" },
          },
        ],
      },
      {
        label: "Diary",
        items: [
          {
            title: "30 September: BFA Health and Safety Day, Behind the Mask",
            text: [
              "Rochdale Occupational Health, 09:30 to 15:00",
            ],
            link: { href: "https://www.bfa.org.uk/events/", text: "On the organiser's site", external: true },
          },
          {
            title: "2 to 3 October: Festival of Upholstery 2026",
            text: [
              "National Conference Centre and Motorcycle Museum, Birmingham",
            ],
            link: { href: "https://festivalofupholstery.co.uk/", text: "On the organiser's site", external: true },
          },
          {
            title: "5 to 6 October: Independent Hotel Show London",
            text: [
              "Olympia London",
            ],
            link: { href: "https://www.independenthotelshow.co.uk/", text: "On the organiser's site", external: true },
          },
          {
            title: "7 to 8 October: Autumn Furniture Show",
            text: [
              "Telford International Centre, Halls 1 and 2",
            ],
            link: { href: "https://www.theautumnfurnitureshow.co.uk/", text: "On the organiser's site", external: true },
          },
          {
            title: "11 to 14 October: Decorex",
            text: [
              "Olympia London",
            ],
            link: { href: "https://www.decorex.com/", text: "On the organiser's site", external: true },
          },
          {
            title: "20 October: BFA ESG Forum",
            text: [
              "Harrison Spinks, 12:00 to 15:30",
            ],
            link: { href: "https://www.bfa.org.uk/events/", text: "On the organiser's site", external: true },
          },
          {
            title: "24 to 27 January 2027: January Furniture Show",
            text: [
              "NEC Birmingham",
            ],
            link: { href: "https://thefurnitureshows.com/", text: "On the organiser's site", external: true },
          },
        ],
        note: "Dates checked on each organiser's own website, 16 to 28 September 2026. Organisers: to list an event, write to editor@thefurnituremagazine.com.",
        adAfter: true,
      },
      {
        label: "Show us your work",
        items: [
          {
            title: "Show us your work",
            text: [
              "We want to see what comes off your bench. Send a photograph of a finished piece with one line on what it involved and how many bench hours it took, and it may run in The Piece, with your name and your workshop. Send it to editor@thefurnituremagazine.com.",
            ],
            link: { href: "mailto:editor@thefurnituremagazine.com", text: "editor@thefurnituremagazine.com" },
          },
        ],
      },
    ],
    signoff: [
      "That is Issue 001. If it was useful, forward it to one person in the trade who would read it.",
      "Carlos Garcia, Editor",
    ],
  },
]

export function getIssueContents(slug: string): IssueContents | undefined {
  return issueContents.find((i) => i.slug === slug)
}
