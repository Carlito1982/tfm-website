export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "divider" }
  | { type: "highlight"; text: string }
  | { type: "source"; text: string }
  | { type: "timeline"; items: { label: string; text: string }[] }
  | { type: "link"; href: string; text: string }
  | { type: "sources"; items: { label: string; url?: string }[] }
  // "In brief" box at the top of a piece: three or four sentences, each taken from the piece itself.
  | { type: "brief"; items: string[] }
  // A key number, shown large, with its source named underneath.
  | { type: "stat"; value: string; label: string; source?: string }

export type ArticleContent = {
  slug: string
  author?: string
  body: ContentBlock[]
}

export const articleContent: ArticleContent[] = [
  {
    slug: "uk-upholstery-workforce-ons-2026",
    author: "The Furniture Magazine",
    body: [
      {
        "type": "brief",
        "items": [
          "About 12,800 people worked as upholsterers in the UK in the year to March 2026, and 36,100 as furniture makers and other craft woodworkers.",
          "6,100 upholsterers (about 48%) and 20,100 furniture makers (about 56%) are self-employed.",
          "About 41% of upholsterers are 55 or older; about 48% of furniture makers are 50 or older.",
          "81% of the UK's 6,600 furniture manufacturing businesses employ fewer than ten people."
        ]
      },
      {
        "type": "p",
        "text": "The Office for National Statistics' Annual Population Survey estimates that 12,800 people in the UK worked as upholsterers in the year to March 2026, and 36,100 as furniture makers and other craft woodworkers. These are survey estimates with wide margins. ONS publishes a confidence range of plus or minus 4,400 for upholsterers and 7,400 for furniture makers, so a small change from one period to the next should not be read as a trend."
      },
      {
        "type": "stat",
        "value": "6,100",
        "label": "upholsterers in the UK are self-employed, out of 12,800 in work.",
        "source": "ONS Annual Population Survey, April 2025 to March 2026"
      },
      {
        "type": "h2",
        "text": "Half the trade works for itself"
      },
      {
        "type": "p",
        "text": "Of the 12,800 upholsterers, 6,600 are employees and 6,100 are self-employed, about 48%. Among furniture makers the self-employed are the majority: 20,100 of 36,100, about 56%."
      },
      {
        "type": "h2",
        "text": "An older workforce"
      },
      {
        "type": "p",
        "text": "An ONS breakdown of the same survey by age puts 5,184 upholsterers at 55 or older, about 41% of the total. Among furniture makers, 17,283 are 50 or older, about 48%, and 12,342 are 55 or older, about 34%. Some age bands for upholsterers are too small for ONS to publish, so the share over 50 cannot be given."
      },
      {
        "type": "p",
        "text": "Women make up about 27% of upholsterers, 3,441 of 12,755 in the age and sex breakdown, and about 17% of furniture makers, 6,092 of 36,061."
      },
      {
        "type": "h2",
        "text": "Small firms, and a Yorkshire heartland"
      },
      {
        "type": "p",
        "text": "The UK has 6,600 furniture manufacturing businesses, and 5,365 of them, about 81%, employ fewer than ten people, according to ONS UK Business Counts for 2025. The largest group is other furniture, with 3,925 businesses, followed by kitchen furniture with 1,595 and office and shop furniture with 825."
      },
      {
        "type": "p",
        "text": "Furniture manufacturing employs about 73,000 people in Great Britain, according to the Business Register and Employment Survey for 2024. Yorkshire and The Humber accounts for 20,000 of those jobs, about 27%, more than any other region. The North West is next with 10,000. These are jobs in furniture manufacturing businesses of every kind, not only upholsterers and makers."
      },
      {
        "type": "h2",
        "text": "Pay"
      },
      {
        "type": "p",
        "text": "The Annual Survey of Hours and Earnings, provisional for 2025, gives a median gross annual pay of £26,966 for all employee upholsterers and £27,909 for those working full-time. It covers employees only, so the self-employed half of the trade is not in it."
      },
      {
        "type": "highlight",
        "text": "Put together, the figures describe a trade carried largely by small workshops and the self-employed, with four in ten of its upholsterers aged 55 or over."
      },
      {
        "type": "source",
        "text": "Percentages are our own calculation from the published ONS figures. Occupations are SOC 2020 unit groups 5411 Upholsterers and 5442 Furniture makers and other craft woodworkers."
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "ONS Annual Population Survey via Nomis: employment and self-employment by occupation, April 2025 to March 2026",
            "url": "https://www.nomisweb.co.uk/api/v01/dataset/NM_218_1.data.csv?geography=2092957697,2092957698,2092957699&date=latest,2025-12&c_sex=0&jtype=0&ftpt=0&etype=0,1,2&soc2020_full=275,289&measure=1,3&measures=20100,20701"
          },
          {
            "label": "ONS: 4-digit occupation by age, sex and region, UK, April 2025 to March 2026 (user requested data 3501)",
            "url": "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/adhocs/35014digitoccupationalcodingsocbyagehighestqualificationsex4digitindustrysicanditl3regionukapril2025tomarch2026"
          },
          {
            "label": "ONS UK Business Counts via Nomis: furniture manufacturing enterprises by size, 2025",
            "url": "https://www.nomisweb.co.uk/api/v01/dataset/NM_142_1.data.csv?geography=2092957697&date=latest&industry=146800671,138415133,138415134,138415135,138415141&employment_sizeband=0,10,20,30,40&legal_status=0&measures=20100"
          },
          {
            "label": "ONS Business Register and Employment Survey via Nomis: furniture manufacturing employment by region, 2024",
            "url": "https://www.nomisweb.co.uk/api/v01/dataset/NM_189_1.data.csv?geography=2092957697,2092957698,TYPE480&date=latest&industry=146800671&employment_status=1,4&measure=1&measures=20100"
          },
          {
            "label": "ONS Annual Survey of Hours and Earnings, Table 14, 2025 provisional",
            "url": "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/datasets/occupation4digitsoc2010ashetable14"
          }
        ]
      }
    ],
  },
  {
    slug: "worldskills-shanghai-2026-cabinet-making-team-uk",
    author: "The Furniture Magazine",
    body: [
      {
        "type": "brief",
        "items": [
          "Stanley Mackintosh, trained at Rycotewood Furniture Centre and employed by Bill Cleyndert and Company, is Team UK's competitor in Cabinet Making.",
          "Jamie Matthews, trained at Northern Regional College and employed by Mivan, competes in Joinery.",
          "Competition runs from 23 to 26 September. Medals are awarded at the closing ceremony on 27 September."
        ]
      },
      {
        "type": "p",
        "text": "The 48th WorldSkills Competition opened in Shanghai on 22 September, and two of Team UK's competitors work in wood: Stanley Mackintosh in Cabinet Making and Jamie Matthews in Joinery. WorldSkills UK lists 28 competitors representing Team UK across 25 skill competitions. Competition runs from 23 to 26 September at the National Exhibition and Convention Center, and medals are awarded at the closing ceremony at the Shanghai World Expo Cultural Center on 27 September."
      },
      {
        "type": "h2",
        "text": "Stanley Mackintosh, Cabinet Making"
      },
      {
        "type": "p",
        "text": "Stanley trained at Rycotewood Furniture Centre, part of Activate Learning, and works for Bill Cleyndert and Company. According to Activate Learning, he began a Level 2 Furniture Manufacturer apprenticeship in 2024 and has been studying a Level 3 apprenticeship in Bespoke Furniture Making at Rycotewood. His WorldSkills UK profile records that he has since qualified with a distinction. His training manager for the competition is Christian Notley MBE of WorldSkills UK."
      },
      {
        "type": "h2",
        "text": "Jamie Matthews, Joinery"
      },
      {
        "type": "p",
        "text": "Jamie Matthews, from Ballyclare in Northern Ireland, trained at Northern Regional College and works for Mivan. When his selection was announced in April he told The Irish News: “I'm really proud to have been selected to represent the UK at WorldSkills in Shanghai.”"
      },
      {
        "type": "h2",
        "text": "How cabinet making is judged"
      },
      {
        "type": "p",
        "text": "WorldSkills describes Cabinetmaking as working in wood to create high quality furniture and units, showing skill and an aesthetic understanding of design and finish. Its occupational standard for the previous competition, Lyon 2024, weighted the marks like this, with up to five percent variation allowed:"
      },
      {
        "type": "list",
        "items": [
          "Selecting and preparing materials: 25%",
          "Joining and assembly: 25%",
          "Working with drawings: 15%",
          "Preparation of surfaces and finishing: 15%",
          "Work organization and management: 10%",
          "Communication and interpersonal skills: 5%",
          "Problem solving, innovation and creativity: 5%"
        ]
      },
      {
        "type": "stat",
        "value": "50%",
        "label": "of the marks in the Lyon 2024 Cabinetmaking standard went on selecting and preparing materials, and on joining and assembly.",
        "source": "WorldSkills Occupational Standard, Cabinetmaking, Lyon 2024"
      },
      {
        "type": "p",
        "text": "We will report the result after the closing ceremony."
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "WorldSkills UK: Shanghai 2026",
            "url": "https://www.worldskillsuk.org/skills/international-competition/shanghai-2026/"
          },
          {
            "label": "WorldSkills UK: Team UK",
            "url": "https://www.worldskillsuk.org/skills/international-competition/team-uk/"
          },
          {
            "label": "WorldSkills UK: Stanley's story",
            "url": "https://www.worldskillsuk.org/success-stories/stanley-teamuk/"
          },
          {
            "label": "WorldSkills: stage set for WorldSkills Shanghai 2026",
            "url": "https://worldskills.org/media/news/stage-set-worldskills-shanghai-2026"
          },
          {
            "label": "FE News: Activate Learning release on Rycotewood's WorldSkills competitor",
            "url": "https://www.fenews.co.uk/education/rycotewood-furniture-centre-student-selected-to-represent-the-uk-at-the-global-skills-olympics-in-shanghai/"
          },
          {
            "label": "The Irish News: Mivan apprentice Jamie selected for WorldSkills",
            "url": "https://www.irishnews.com/news/business/mivan-apprentice-jamie-is-selected-to-represent-uk-at-worldskills-in-shanghai-GWCW5GLNXJGUTODGKX64Z7FPMY/"
          },
          {
            "label": "WorldSkills: Cabinetmaking skill",
            "url": "https://worldskills.org/skills/id/236/"
          },
          {
            "label": "WorldSkills Occupational Standard, Cabinetmaking, Lyon 2024",
            "url": "https://worldskills.org/what/projects/wsos/2024/events/579/skills/1704/"
          }
        ]
      }
    ],
  },
  {
    slug: "heritage-crafts-red-list-furniture-crafts",
    author: "The Furniture Magazine",
    body: [
      {
        "type": "brief",
        "items": [
          "Basketwork furniture making, Fair Isle chair making and rattan furniture making are critically endangered in the 2025 Red List.",
          "Orkney chair making, coach trimming, passementerie and woodgraining and marbling are endangered.",
          "Upholstery, French polishing, marquetry, chair making and chair seating are rated currently viable.",
          "Steve Farrell, a bespoke furniture upholsterer, has a 2026 Heritage Crafts bursary to train in leatherwork."
        ]
      },
      {
        "type": "p",
        "text": "Heritage Crafts publishes the Red List of Endangered Crafts, which rates how likely each traditional craft in the UK is to survive. The latest edition, published in May 2025, puts three furniture crafts in its critically endangered category."
      },
      {
        "type": "h2",
        "text": "Critically endangered"
      },
      {
        "type": "list",
        "items": [
          "Basketwork furniture making",
          "Fair Isle chair making",
          "Rattan furniture making"
        ]
      },
      {
        "type": "p",
        "text": "Rattan furniture making is one of 12 crafts added to the critically endangered category in 2025. Horsehair weaving and horse collar making are also critically endangered."
      },
      {
        "type": "h2",
        "text": "Endangered"
      },
      {
        "type": "list",
        "items": [
          "Orkney chair making",
          "Coach trimming",
          "Composition picture frame making",
          "Lacquerwork (lacquer, japanning and coromandel)",
          "Woodgraining and marbling",
          "Passementerie"
        ]
      },
      {
        "type": "h2",
        "text": "Rated viable"
      },
      {
        "type": "p",
        "text": "Several of the core furniture trades are rated currently viable and so are not on the Red List itself: chair making, chair seating, upholstery and soft furnishing, French polishing, marquetry, gilding, wood turning, pole lathe turning and wood carving. Heritage Crafts reports that no craft has become extinct in the UK since 2023."
      },
      {
        "type": "h2",
        "text": "A bursary for a former upholsterer"
      },
      {
        "type": "p",
        "text": "Among 20 training bursaries Heritage Crafts announced on 29 May 2026 is one for Steve Farrell of Carmarthenshire. After 22 years in the Royal Electrical and Mechanical Engineers he turned to bespoke furniture upholstery. His bursary, funded by the Royal British Legion, pays for a part-time foundation course at the Walsall Leather Skills Centre, with tools, leather and travel. Heritage Crafts bursaries provide up to £4,000 each."
      },
      {
        "type": "h2",
        "text": "Emerging Upholsterer of the Year"
      },
      {
        "type": "p",
        "text": "The Heritage Crafts Awards include an Emerging Upholsterer of the Year Award worth £1,000. Nominations for 2026 have closed, and the winners' reception is at Goldsmiths' Hall in London on 23 November."
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Heritage Crafts: Red List of Endangered Crafts 2025 (report)",
            "url": "https://heritagecrafts.org.uk/wp-content/uploads/2025/05/Red-List-2025-publication.pdf"
          },
          {
            "label": "Heritage Crafts: Red List 2025 news release",
            "url": "https://heritagecrafts.org.uk/wp-content/uploads/2025/05/NEWS-RELEASE-Red-List-of-Endangered-Crafts-2025-v2.pdf"
          },
          {
            "label": "Heritage Crafts: 20 new training bursaries awarded, 29 May 2026",
            "url": "https://heritagecrafts.org.uk/our-stories/20-new-training-bursaries-2026/"
          },
          {
            "label": "Heritage Crafts Awards",
            "url": "https://heritagecrafts.org.uk/opportunities/awards/"
          }
        ]
      }
    ],
  },
  {
    slug: "decorex-2026-preview",
    author: "The Furniture Magazine",
    body: [
      {
        "type": "brief",
        "items": [
          "Olympia, London, 11 to 14 October 2026.",
          "More than 280 exhibiting brands and 48 talks sessions, according to the organiser.",
          "Making Spaces, the feature on makers, returns with workshops. The full workshop programme is still to be announced."
        ]
      },
      {
        "type": "p",
        "text": "Decorex, the interiors show, runs at Olympia, London, from 11 to 14 October 2026. Doors are open 10.00 to 18.00 on the first three days and 10.00 to 17.00 on the last. The organiser puts its audience at more than 12,500 design professionals and lists more than 280 exhibiting brands and 48 talks sessions."
      },
      {
        "type": "h2",
        "text": "Making Spaces"
      },
      {
        "type": "p",
        "text": "Making Spaces, the show's feature on makers, returns for 2026. It includes workshops in which artisans share the techniques and knowledge behind their craft. Decorex says the full workshop programme is coming soon, and we will list it when it is published. The Sustainability Space, powered by The Green Room, is also back."
      },
      {
        "type": "h2",
        "text": "Talks"
      },
      {
        "type": "p",
        "text": "Design talks run in the Decorex Talks Theatre in partnership with Lick. Speakers named so far include Russell Sage of Russell Sage Studio, Anna Burles of Run For The Hills, Tori Murphy, Roisin Lafferty, Suzy Hoodless of Suzy Hoodless Studio and Tiffany Duggan of Studio Duggan."
      },
      {
        "type": "h2",
        "text": "Tickets"
      },
      {
        "type": "p",
        "text": "Tickets are sold by type: trade £28 plus VAT, consumer £43 plus VAT, manufacturer £60 plus VAT, student £15 plus VAT and VIP £75 plus VAT. Decorex says that if a supplier buys a trade pass, it will ask them to upgrade to the manufacturer ticket."
      },
      {
        "type": "p",
        "text": "For makers who work to designers' briefs, it is a chance to see many of those designers in one place."
      },
      {
        "type": "link",
        "href": "https://www.decorex.com/visit/your-ticket/",
        "text": "Decorex tickets and registration"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Decorex",
            "url": "https://www.decorex.com/"
          },
          {
            "label": "Decorex: features",
            "url": "https://www.decorex.com/visit/features/"
          },
          {
            "label": "Decorex: why visit",
            "url": "https://www.decorex.com/visit/why-visit/"
          },
          {
            "label": "Decorex: talks programme",
            "url": "https://www.decorex.com/talks-programme/agenda1/"
          },
          {
            "label": "Decorex: tickets",
            "url": "https://www.decorex.com/visit/your-ticket/"
          }
        ]
      }
    ],
  },
  {
    slug: "franco-marinelli-qa-chair-upholstery",
    author: "Franco Marinelli",
    body: [
      { type: "p", text: "Franco Marinelli trained through City and Guilds and the Worshipful Company of Upholders, holds the Masters Upholder Certificate and has worked as an upholsterer and university tutor in Italy and England. Ahead of Chair Upholstery, published by The Crowood Press on 27 October, he answered eight questions for The Furniture Magazine on his own working methods, and in his own words." },
      { type: "h3", text: "What made you write Chair Upholstery now, and who did you have in mind as the reader?" },
      { type: "p", text: "After nearly fifty years in upholstery, I felt it was time to bring together the knowledge, techniques and standards behind good practice. My work as a craftsman, business owner, lecturer and mentor has allowed me to learn from skilled practitioners and pass that knowledge to the next generation. Students and colleagues had long encouraged me to write a book, and their words stayed with me. Traditional upholstery depends on accumulated experience, which can easily be diluted unless it is clearly documented." },
      { type: "p", text: "Retirement gave me the distance and perspective to write without urgency, so the timing felt right. I wrote the book for committed beginners seeking a reliable foundation and practising upholsterers needing a trusted reference. My aim was to preserve traditional skills while making them accessible to modern readers. Above all, I hope the book strengthens appreciation of upholstery as a skilled profession and helps its techniques remain practised, understood and valued for years to come." },
      { type: "h3", text: "The book is built around seven chair projects. How did you choose them, and in what order would you suggest a reader works through them?" },
      { type: "p", text: "I chose the seven projects to cover the main forms and challenges an upholsterer is likely to encounter, from simple modern frames to fully traditional work involving springs, stitched edges and shaped backs. Each chair develops a distinct principle, and together they create a structured progression rather than a series of unrelated exercises." },
      { type: "p", text: "Before beginning the projects, I strongly recommend studying the book's techniques section. A sound understanding of foundations, webbing, stuffing, stitching, spring tying and assessment makes the practical work easier and helps prevent mistakes caused by starting too quickly." },
      { type: "p", text: "Once the fundamentals are secure, I suggest following the projects in the order presented. More experienced upholsterers can, of course, go directly to the project or technique most relevant to them and use the book as a reference." },
      { type: "h3", text: "Which traditional technique is most at risk of being lost in UK workshops, and why does it matter?" },
      { type: "p", text: "In my view, hand-stitched edges are the traditional technique most at risk. The work is slow, physically demanding and requires patience that can be difficult to sustain under modern commercial pressures. Yet it is fundamental. A stitched edge gives a chair its shape, durability and comfort, turning padding and fabric into a properly constructed seat, back or arm. As workshops seek to reduce time and cost, pre-formed materials and faster methods increasingly replace this process, leaving fewer upholsterers with the chance to learn how to build and shape an edge correctly by hand." },
      { type: "p", text: "This matters because stitched edges distinguish upholstery as a structural craft rather than mere decoration. Without the technique, heritage furniture cannot be restored faithfully, and the skill, discipline and judgement behind traditional upholstery begin to disappear." },
      { type: "h3", text: "Where do modern materials earn their place in a traditional job, and where do they not?" },
      { type: "p", text: "Modern materials have a place when they improve safety, durability or practicality without changing the character of the work. Suitable foams, polyester fibres, fire-retardant barrier fabrics, synthetic webbing and certain adhesives can help meet regulations and everyday demands for hygiene, weight and reliability." },
      { type: "p", text: "Modern materials are inappropriate when they compromise the authenticity or construction of a traditional antique. Replacing hair with foam or stitched edges with manufactured shortcuts changes the nature of the piece. For important or historically significant chairs, the original construction should guide the work, using compatible materials and reversible methods wherever possible. The key question is not whether a material is old or new, but whether it suits the chair, is used honestly and will perform well over time." },
      { type: "h3", text: "Your training came through City and Guilds and the Worshipful Company of Upholders. What did that route give you that is hard for a new upholsterer to find today?" },
      { type: "p", text: "My training was entirely workshop-based. At the bench, I worked on real commissions with real materials and solved the practical problems that arise when a customer is waiting for a chair. City and Guilds and the Worshipful Company of Upholders formally recognised my training, and I received the Masters Upholder Certificate, confirming the standard I had reached through years of disciplined practice." },
      { type: "p", text: "What is harder for new upholsterers to find today is this combination of sustained workshop experience and structured recognition from established institutions. Short courses and online resources can be useful, but they do not always develop the judgement, hand skills and professional identity that come from prolonged practical training." },
      { type: "h3", text: "What is the most common fault you find when you strip back a chair that someone else has upholstered?" },
      { type: "p", text: "The fault I encounter most often is weak foundation work hidden beneath a presentable cover. The webbing may be uneven or poorly tensioned, the springs inadequately tied, and the fillings used to disguise an incorrect shape rather than build it properly. A chair is only as sound as the work beneath its fabric: poor foundations cause the seat to lose shape, become uncomfortable and fail too soon." },
      { type: "p", text: "Another common problem is using foam where traditional materials are needed. Foam may conceal structural faults temporarily, but it cannot reproduce the resilience or sculpted form created by hair and stitched edges. Even on modern furniture designed for foam, I often find inadequate foundations that allow it to sag between the springs." },
      { type: "h3", text: "Which one tool could you not work without, and what should someone look for when buying it?" },
      { type: "p", text: "The one tool I could not work without is a regulator. It reaches where fingers cannot, allowing stuffing to be positioned, adjusted and refined precisely. When choosing one, look for strength, a smooth finish and comfortable balance; it should pass through stuffing without snagging and feel precise rather than heavy." },
      { type: "p", text: "A well-balanced tack hammer is another essential. Choose one for balance, comfort and control rather than appearance, with a secure head and a handle that sits comfortably in the hand. That said, no upholsterer can rely on a single tool: the craft requires a basic kit of tack hammer, mallet, ripping chisel, web stretcher, lifters, scissors and a dependable set of needles." },
      { type: "h3", text: "What advice would you give someone in their first year at the bench?" },
      { type: "p", text: "Focus on learning the foundations properly rather than working too quickly. Your first year is about building habits that will support your whole career, not chasing speed. Give equal care to assessment, preparation and neatness, because the hidden work is as important as the finished surface. Study each chair before stripping it; the original construction can teach you a great deal." },
      { type: "p", text: "Seek feedback from experienced upholsterers whenever possible. Ask questions, accept correction and investigate mistakes rather than hiding them. Build good habits from the start: speed will come with practice, but sound judgement and pride in your work must come first." },
      { type: "divider" },
      { type: "p", text: "Chair Upholstery: A modern guide to traditional techniques is published by The Crowood Press on 27 October. A full review follows after publication." },
      { type: "link", href: "https://www.crowood.com/book/chair-upholstery/", text: "The book at The Crowood Press" },
      { type: "source", text: "Answers supplied by Franco Marinelli in writing, 18 September 2026, in response to questions from The Furniture Magazine. Portrait and workshop photographs: Carol Marinelli, supplied by the author for this purpose." },
    ],
  },
  {
    slug: "uk-furniture-skills-crisis-2026",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "There is a pattern that tells you almost everything you need to know about where the UK furniture trade is heading: more experienced upholsterers are leaving the trade each year than trained ones are entering it. No official body publishes a reliable count of upholstery apprentices, which is part of the problem, but every employer we speak to describes the same gap, and it is widening rather than closing.",
      },
      {
        type: "h2",
        text: "The Vacancy Data Is Getting Harder to Ignore",
      },
      {
        type: "p",
        text: "The Talent Branch, the specialist furniture recruitment agency which publishes this magazine, tracks live vacancy data across the UK upholstery and furniture manufacturing sector. Roles that once filled in a few weeks now routinely stay open for months, and employers in rural counties tell us they can go half a year without a single suitable applicant. We will publish precise time-to-fill figures once enough placements sit behind them to stand up; until then they belong in the anecdote column, not the data column.",
      },
      {
        type: "p",
        text: "The problem is not confined to upholstery. Cabinet makers, frame builders, cutting machinists and finishing technicians are all in short supply. But upholstery is where the numbers are most acute, partly because the apprenticeship infrastructure that once fed the trade was dismantled faster than anyone anticipated.",
      },
      {
        type: "h2",
        text: "What Happened to the Apprenticeships?",
      },
      {
        type: "p",
        text: "The Advanced Upholsterer apprenticeship (Level 3) was approved in September 2019, and a Level 2 Furniture Manufacturer standard with a modern upholstery option has existed since 2016, but uptake has stayed low. The British Furniture Confederation's Plan for Growth 2025 found that only 40% of furniture businesses employ apprentices, 45% find the current funding inadequate, and 57% expect skills shortages in the next five years. This is a manufacturing sector that FIRA puts at 72,000 employees and £10.8 billion of sales.",
      },
      {
        type: "p",
        text: "Part of the issue is structural. Most furniture businesses in the UK are small: FIRA's January 2026 digest counts around 6,700 enterprises sharing 72,000 employees, an average of roughly eleven people each, and upholstery workshops sit at the smaller end. The administrative burden of taking on an apprentice, managing apprenticeship funding claims and coordinating with a training provider can be prohibitive for a sole trader or micro-business. The businesses that most need to bring new talent through the door are often the least equipped to navigate the system.",
      },
      {
        type: "highlight",
        text: "Only 40% of furniture businesses employ an apprentice, and 57% expect skills shortages in the next five years. Source: British Furniture Confederation, Plan for Growth 2025.",
      },
      {
        type: "h2",
        text: "The Regional Dimension",
      },
      {
        type: "p",
        text: "Skills shortages are not evenly distributed. London, the South East and the major cities can draw on a broader pool — including recent graduates from furniture design and craft courses — and can offer salaries that attract workers willing to relocate. In rural England, Scotland and Wales, employers are competing for a tiny local pool with no realistic prospect of recruitment from elsewhere.",
      },
      {
        type: "p",
        text: "Northern Ireland, where The Talent Branch recruits for furniture repair and restoration roles, is a case in point: specialist restoration upholsterers are among the hardest roles we fill anywhere in the UK, and small workshops with a retiring principal often have nobody to hand over to.",
      },
      {
        type: "h2",
        text: "What Employers Are Doing About It",
      },
      {
        type: "p",
        text: "The more progressive businesses in the sector are not waiting for a policy solution. Several approaches are gaining traction:",
      },
      {
        type: "list",
        items: [
          "Cross-training from adjacent trades: Firms are increasingly training frame builders and cutters in basic upholstery, building internal flexibility.",
          "Partnering directly with colleges: A small number of larger manufacturers have funded dedicated training programmes at local further education colleges, ensuring a pipeline of semi-skilled entry-level workers.",
          "Retaining older workers longer: Phased retirement arrangements and part-time senior roles are keeping experienced upholsterers in the workforce beyond traditional retirement age.",
          "Structured wage progression: In our experience, adverts that state a pay band and a route to progress draw noticeably more applications than adverts that do not.",
        ],
      },
      {
        type: "h2",
        text: "The Salary Effect",
      },
      {
        type: "p",
        text: "One factor that receives less attention than it should is pay. The Office for National Statistics puts median full-time pay for upholsterers at £27,909 (Annual Survey of Hours and Earnings 2025, provisional), and Talent.com's advertised average is £27,560, with experienced roles reaching about £37,700. Set against what a skilled worker can earn in logistics, construction or engineering, furniture businesses are often asking people to choose a passion over a pay cheque.",
      },
      {
        type: "p",
        text: "The businesses seeing the most success in attracting talent are not necessarily the largest. They are the ones paying above-market rates, offering regular skill-based pay reviews, and treating upholstery as the skilled trade it is rather than a cost to be minimised.",
      },
      {
        type: "h2",
        text: "The Path Forward",
      },
      {
        type: "p",
        text: "The British Furniture Confederation and the Furniture Makers' Company have both called for greater investment in furniture skills at a national level. Skills England lists a new Upholstery Operative standard as in development, and from January 2026 government apprenticeship funding is being redirected towards Level 2 and Level 3 qualifications. Progress is slow.",
      },
      {
        type: "p",
        text: "In the meantime, the businesses that will survive and grow are those that treat recruitment and retention as a strategic priority rather than an administrative function. That means paying properly, investing in training, and — perhaps most importantly — making it clear to the next generation that furniture making is a skilled, well-compensated career worth choosing.",
      },
      {
        type: "source",
        text: "Sources: British Furniture Confederation, Plan for Growth 2025; Skills England apprenticeship standards ST0656 (Advanced Upholsterer) and ST0203 (Furniture Manufacturer); FIRA Statistics Digest, January 2026; ONS Annual Survey of Hours and Earnings 2025 (provisional); The Talent Branch recruitment experience.",
      },
    ],
  },
  {
    slug: "upholstery-salary-report-2026",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "Ask ten different upholsterers what the job pays and you will get ten different answers. Ask their employers what the market rate is and you will get ten more. The UK furniture industry has never had a reliable, up-to-date salary benchmark. This report draws on advertised salaries across Reed, Indeed, Glassdoor and Talent.com for upholstery and furniture manufacturing roles, read alongside The Talent Branch's own placement experience, to give the trade a working benchmark.",
      },
      {
        type: "h2",
        text: "How We Built This Data",
      },
      {
        type: "p",
        text: "The figures in this report draw on two sources: advertised salaries for upholstery and furniture manufacturing roles across Reed, Indeed, Glassdoor and Talent.com, and The Talent Branch's placement experience over the past twelve months. Advertised salaries are not the same as salaries paid, and where listings were sparse, particularly for senior and specialist roles, we say so and give a wider range.",
      },
      {
        type: "highlight",
        text: "The Office for National Statistics puts median annual pay for upholsterers at £26,966 in 2025, up 11.7% on the year. Source: ASHE 2025, provisional.",
      },
      {
        type: "h2",
        text: "Salary by Role: The Full Picture",
      },
      {
        type: "h3",
        text: "Trainee / Entry-Level Upholsterer (0–2 years)",
      },
      {
        type: "p",
        text: "Entry-level roles — typically apprentices in their second year or recent college leavers — are advertising between £18,500 and £22,000 nationally. London and the South East push this figure to £22,000–£26,000 to compensate for living costs. Most employer-funded training agreements include a formal review at 12 months with a structured pay step.",
      },
      {
        type: "h3",
        text: "Skilled Upholsterer (2–5 years)",
      },
      {
        type: "p",
        text: "The mid-tier is where the data is most consistent. Upholsterers with two to five years of hands-on experience and a solid general skill set — traditional methods, modern foam work, sewing and cutting — are typically earning between £25,000 and £32,000. The lower end of this range often reflects businesses in lower cost-of-living areas; the upper end reflects employers in London, or those offering shift premiums and overtime.",
      },
      {
        type: "h3",
        text: "Senior Upholsterer (5–10 years)",
      },
      {
        type: "p",
        text: "At this level, the salary spread is wider and more dependent on specialism. A senior upholsterer with strong deep buttoning, leather and antique restoration skills can command between £32,000 and £40,000. The same experience without specialist skills sits closer to £30,000–£35,000. Leather specialism consistently adds a premium of £2,000–£4,000 to base salary.",
      },
      {
        type: "h3",
        text: "Head Upholsterer / Workshop Lead",
      },
      {
        type: "p",
        text: "Workshop leads and production heads with managerial responsibility are advertised at £38,000 to £48,000 in the listings we see, with a small number of London bespoke workshops going above £50,000 for the most experienced candidates. At this level, salary is strongly correlated with business size and the ability to manage workflows, train junior staff and communicate directly with clients.",
      },
      {
        type: "h3",
        text: "Self-Employed / Sole Trader Upholsterers",
      },
      {
        type: "p",
        text: "The self-employed picture is harder to pin down because nobody publishes it. Self-employed upholsterers we place or speak to describe incomes from under £20,000 for part-time or early-stage businesses to well over £50,000 for established sole traders in busy urban areas. Treat any single figure with caution; the spread is the point.",
      },
      {
        type: "h2",
        text: "Regional Variation",
      },
      {
        type: "p",
        text: "Geography remains one of the strongest predictors of upholstery salary in the UK. In the roles we see, London and the South East sit clearly above the national figure at every experience level; Scotland, Wales, Northern Ireland and the North of England generally sit below it; and the Midlands, historically the heartland of UK furniture manufacturing, sits close to it, with pockets of demand around High Wycombe and Long Eaton pushing wages higher. We will publish regional bands with percentages once the Salary Board has enough data points behind each region.",
      },
      {
        type: "h2",
        text: "What the Data Tells Employers",
      },
      {
        type: "p",
        text: "The most consistent thing we see is the relationship between salary and hiring success. Roles advertised at the top of the range for their region fill in weeks. Roles advertised below it take months, if they fill at all.",
      },
      {
        type: "p",
        text: "In a skills shortage, salary is no longer just a cost. It is a competitive advantage. Businesses that recognise this and price their roles accordingly are building teams while their competitors are still writing job adverts.",
      },
      {
        type: "source",
        text: "Sources: Reed.co.uk, Indeed UK, Glassdoor UK and Talent.com advertised salary data for upholstery and furniture roles (2025 to 2026); The Talent Branch placement experience; ONS Annual Survey of Hours and Earnings.",
      },
    ],
  },
  {
    slug: "deep-buttoning-technique-guide",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "Deep buttoning is one of the most recognisable — and most unforgiving — techniques in upholstery. Get it right and the result is a piece of furniture that will draw admiring attention for decades. Get the measurements wrong and no amount of skill in the tying will save you. The diamonds will be uneven, the fabric will pull at odd angles, and the whole piece will advertise the error every time someone looks at it.",
      },
      {
        type: "p",
        text: "The good news is that perfect deep buttoning is entirely learnable. It is a technique that rewards systematic thinking over instinct. This guide covers the measurement method that consistently produces even diamonds, the foam preparation that underpins everything, the correct thread and needle setup, and the tying technique that locks buttons without crushing the foam.",
      },
      {
        type: "h2",
        text: "Understanding the Geometry",
      },
      {
        type: "p",
        text: "Before touching a needle, you need to understand what you are creating. Deep buttoning creates a series of diamond shapes across the surface of the upholstery by pulling fabric down to fixed points — the buttons — which are anchored through the foam and into the base. The fabric between the button points pleats into diagonal folds, forming the characteristic ridges.",
      },
      {
        type: "p",
        text: "The key geometric insight is this: on the fabric, button positions are measured from the tack line (the line where fabric meets the base at the edge), not from the fabric edge itself. This is the single most common measurement error, and it causes the entire diamond grid to be offset — particularly at the borders where diamonds meet the edge.",
      },
      {
        type: "highlight",
        text: "Always measure button positions on both foam and fabric from the tack line — not the fabric edge. This single rule prevents the majority of deep buttoning errors.",
      },
      {
        type: "h2",
        text: "Foam Preparation",
      },
      {
        type: "p",
        text: "The foam must be prepared before you can mark any button positions. For traditional deep buttoning you need a firm foam, a grade such as RX39/200 (39 kg/m³ density, 200 N hardness) or firmer, that will hold its shape under the tension of the pulled buttons. Using foam that is too soft produces buttons that sink too deeply and lose their definition over time.",
      },
      {
        type: "p",
        text: "Mark your button grid on the foam using a fabric marker or chalk. The grid lines should be clearly visible and measured precisely. A standard diamond grid for a chair back might use 7cm horizontal spacing and 9cm vertical spacing, but this varies significantly with the piece — always check your pattern dimensions against the finished panel size before committing.",
      },
      {
        type: "p",
        text: "Use a sharp skewer or bradawl to pierce the foam cleanly at each button point, making a channel that your needle will follow later. Ragged holes cause the button to sit unevenly — they are worth the extra care.",
      },
      {
        type: "h2",
        text: "Marking the Fabric",
      },
      {
        type: "p",
        text: "The fabric grid must mirror the foam grid but with one critical difference: the spacing on the fabric must be larger than the spacing on the foam. This is because the fabric needs enough material to form the pleats between buttons. The standard rule of thumb is to add approximately 20% to your foam spacing for fabric positioning — so a 7cm foam horizontal spacing becomes approximately 8.5cm on the fabric.",
      },
      {
        type: "p",
        text: "Chalk or tailor's chalk works well for marking fabric positions. Mark the tack line on your fabric first — this is your reference point for all other measurements, not the raw edge.",
      },
      {
        type: "h2",
        text: "The Tying Method",
      },
      {
        type: "p",
        text: "The needle for deep buttoning should be long — 18 to 25cm is typical — and double-ended or curved depending on your preference. Waxed linen twine remains the professional standard for the hidden tie; it grips the button shank reliably and does not stretch under tension the way synthetic threads can.",
      },
      {
        type: "numbered",
        items: [
          "Thread your needle with a length of twine approximately 50cm long. Fold the twine so both ends are at the needle eye and you are working with a doubled strand.",
          "Pass the needle through the fabric at your first marked point, through the foam channel, and through a small washer or piece of calico on the reverse side — this distributes the pressure and prevents the twine cutting through the base.",
          "Thread your button onto the twine loop at the front.",
          "Pull the twine firmly but not aggressively — you want the button to sit in the foam, not crush it flat. For most foam densities, a depression of roughly one-third of the foam thickness is correct.",
          "Tie off at the back with a slip knot initially. Come back and make final adjustments to all buttons before tying permanent knots.",
        ],
      },
      {
        type: "h2",
        text: "Managing the Pleats",
      },
      {
        type: "p",
        text: "The pleats that form between buttons are not incidental — they are part of the design and must be managed deliberately. Each pleat should run diagonally to the nearest button, and all pleats in the same row should run in the same direction (typically towards the bottom of the piece). A regulator is useful here for teasing fabric into position before the button tension locks it in place.",
      },
      {
        type: "p",
        text: "Work from the centre of the panel outwards, tying the centre button first, then the immediately adjacent buttons, expanding in a consistent pattern. Working from one edge creates unequal tension that will show as irregular diamond sizes.",
      },
      {
        type: "h2",
        text: "Common Mistakes and How to Avoid Them",
      },
      {
        type: "list",
        items: [
          "Measuring from the fabric edge rather than the tack line: Always establish the tack line on both foam and fabric before measuring button positions.",
          "Using foam that is too soft: A firm grade of around 39 kg/m³ and 200 N (RX39/200 or firmer) is recommended for traditional deep buttoning. Softer foam allows buttons to over-sink.",
          "Tying too tight too early: Always use slip knots for the first pass and adjust all buttons before making permanent ties.",
          "Ignoring pleat direction: Inconsistent pleat direction makes diamonds appear uneven even when the grid is perfect.",
          "Not leaving enough fabric at the edges: Your tack line calculations must account for the fabric needed to pull around the frame edge cleanly.",
        ],
      },
      {
        type: "p",
        text: "Deep buttoning rewards patience. A complex chair back might take four to six hours the first time. With practice and a reliable measurement system, the same job comes in at two to three. The time investment in getting the process right the first time pays back on every subsequent piece.",
      },
      {
        type: "source",
        text: "Sources: Guild of Traditional Upholsterers; UK foam grading conventions (density in kg/m³, hardness in Newtons, as published by UK foam suppliers); practical input from upholsterers registered with The Talent Branch. Technique reviewed by the editor.",
      },
    ],
  },
  {
    slug: "pricing-guide-self-employed-upholsterers",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "The most common financial mistake self-employed upholsterers make is not charging enough — and they make it consistently, across years and decades of otherwise successful businesses. In our experience most self-employed upholsterers charge well below what the market would support and what their real costs require; work through the numbers below and the gap is often a quarter or more. That gap — often invisible until a business hits a wall — is the difference between a craft that sustains a comfortable living and one that slowly depletes the person doing it.",
      },
      {
        type: "h2",
        text: "Why Undercharging Happens",
      },
      {
        type: "p",
        text: "Undercharging is rarely about ignorance of the market. Most upholsterers know roughly what competitors charge. The problem is almost always psychological: a discomfort with quoting prices that 'feel high', a fear of losing the job, and a tendency to see labour as a residual (whatever is left after materials) rather than the primary component of value being sold.",
      },
      {
        type: "p",
        text: "There is also a structural issue. Most upholsterers quote by feel — they look at a job, estimate how long it will take, and multiply by a loose hourly rate in their head. This process systematically underestimates time and ignores a range of real costs that do not appear on any single invoice.",
      },
      {
        type: "h2",
        text: "The True Cost of an Hour",
      },
      {
        type: "p",
        text: "The starting point for any pricing framework is knowing what an hour of your time actually costs your business — not what you want to earn, but what you must earn to cover your real costs and pay yourself fairly. For a typical sole-trader upholsterer in England in 2026, the calculation looks roughly like this. The figures are illustrative; substitute your own:",
      },
      {
        type: "list",
        items: [
          "Target net annual income: £32,000 (equivalent to a mid-level employed upholsterer)",
          "Income tax and National Insurance on £32,000 net: approximately £8,500",
          "Workshop rent or home-working costs: £3,600–£8,400 per year depending on location",
          "Tools, maintenance and replacement: £1,200–£2,400 per year",
          "Vehicle and fuel (collection/delivery): £2,400–£4,800 per year",
          "Insurance (public liability, tools, income protection): £800–£1,400 per year",
          "Sundries, materials waste, admin: £1,200–£2,000 per year",
          "Total required revenue: approximately £49,700–£59,500 per year",
        ],
      },
      {
        type: "p",
        text: "Now consider billable hours. A full-time upholsterer working 48 weeks per year does not have 48 × 40 = 1,920 billable hours. Quoting, admin, collection and delivery, machine maintenance, sourcing materials, and unbillable travel will consume at least 30% of working time. Realistic billable hours: 1,200–1,350 per year.",
      },
      {
        type: "highlight",
        text: "Required hourly rate = Total required revenue ÷ billable hours = £49,700 ÷ 1,275 ≈ £39/hour minimum. Many self-employed upholsterers we speak to are charging £20 to £28.",
      },
      {
        type: "h2",
        text: "Building a Quote from First Principles",
      },
      {
        type: "p",
        text: "Once you know your hourly rate, quoting becomes a time estimation exercise rather than a guessing game. The framework is straightforward:",
      },
      {
        type: "numbered",
        items: [
          "Inspect the piece in person and identify all work required: stripping, frame repairs, webbing, springs, foam, fabric, finishing.",
          "Estimate time for each stage honestly, then add 20% for unexpected issues — because there are always unexpected issues.",
          "Calculate material costs from actual supplier prices, not memory.",
          "Apply your hourly rate to the total time estimate.",
          "Add material costs. The total is your base quote.",
          "Apply a complexity premium for specialist work (deep buttoning, leather, antique restoration): typically 15–25% on the labour element.",
        ],
      },
      {
        type: "p",
        text: "Write the quote down, line by line, even if you only show the client the total. The discipline of itemising forces accuracy and creates a paper trail if a dispute arises.",
      },
      {
        type: "h2",
        text: "Presenting Prices with Confidence",
      },
      {
        type: "p",
        text: "Price presentation is a skill as distinct from price calculation. The most important rule: never apologise for your price. Upholstery is a skilled trade. A chair that takes twelve hours of professional work, materials and delivery is worth significantly more than a client's mental model of 'a bit of re-covering'. Your job is not to justify that; it is to describe the work clearly and state the price without hesitation.",
      },
      {
        type: "p",
        text: "If a client pushes back, the useful response is to explain what comes out of the quote if the price is reduced — cheaper fabric options, exclusion of collection, simplified techniques. What does not work is quietly absorbing the margin yourself. That way lies the undercharging trap.",
      },
      {
        type: "h2",
        text: "When to Review Your Rates",
      },
      {
        type: "p",
        text: "Rates should be reviewed at minimum annually, and whenever a material cost changes significantly (British furniture manufacturers reported compound rises of up to 100% on materials including foam between 2020 and 2022, and foam producers announced further increases of 12% to over 20% in spring 2026). A simple rule: if your supplier invoice for a standard job has increased, your quote price must increase by at least the same percentage. There is no sustainable model in which material costs rise and labour rates stay flat.",
      },
      {
        type: "source",
        text: "Sources: HMRC self-assessment guidance; Furniture News, April 2022 (British Furniture Manufacturers on material cost rises); Interior Daily, April 2026 (foam price increases); The Talent Branch experience with self-employed upholsterers.",
      },
    ],
  },
  {
    slug: "uk-foam-material-costs-2026",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "For anyone who has been quoting upholstery jobs from memory rather than live supplier prices over the past three years, the reckoning is uncomfortable. UK material costs in the furniture sector have shifted substantially since 2021 — not uniformly, and not in ways that follow general inflation headlines. Some materials are dramatically more expensive. Others have stabilised or even softened. Getting your quotes right in 2026 means knowing which is which.",
      },
      {
        type: "h2",
        text: "Flexible Foam: Elevated, and Rising Again",
      },
      {
        type: "p",
        text: "Flexible polyurethane foam, the most widely used core material in domestic upholstery, saw dramatic price increases from 2021 onwards, driven by petrochemical supply disruptions, energy costs at manufacturing plants and logistics pressures. In April 2022 the British Furniture Manufacturers association told Furniture News that compound price rises of up to 100% on materials including foam were not unusual.",
      },
      {
        type: "p",
        text: "Prices did not fall back, and in 2026 they are rising again: foam producers announced increases ranging from 12% to more than 20% in the spring, citing raw material shortages, and UK sofa and mattress makers have described the increases as aggressive. CMHR (combustion modified high resilience) fire-rated foam, required for domestic upholstery under the UK furniture fire regulations, follows the same pattern.",
      },
      {
        type: "highlight",
        text: "Foam producers announced increases of 12% to over 20% in spring 2026. Price every job from a current supplier quote, never from last year's list.",
      },
      {
        type: "h2",
        text: "Timber and Frame Materials: Back to Near-Normal",
      },
      {
        type: "p",
        text: "Kiln-dried softwood for furniture frames, primarily the 50mm by 25mm and 50mm by 50mm sections used in basic upholstery framing, spiked in 2021 and 2022 as global construction demand collided with supply disruptions, then fell back. Timber Development UK's price index rose again from 107 to 130 in a demand bubble in the first half of 2025 and had eased to 125 by the autumn; going into 2026 it reports log prices across Scandinavia, the Baltics and Central Europe still high while weak UK construction demand pushes prices down.",
      },
      {
        type: "p",
        text: "Hardwoods for visible frame elements — beech, oak, and birch ply for show-wood furniture — remain somewhat elevated, partly due to European supply constraints, but the extreme volatility of 2021–22 has passed.",
      },
      {
        type: "h2",
        text: "Webbing and Springs",
      },
      {
        type: "p",
        text: "Elasticated webbing, the dominant support system in modern domestic upholstery, tracks polymer and elastomer prices; traditional jute webbing, used in period and restoration work, has become more expensive as falling UK demand leaves fewer suppliers competing. We have found no published UK index for either, so the only reliable figure is the one on your supplier's current price list.",
      },
      {
        type: "p",
        text: "Coil springs and sinuous (zig-zag) wire springs track steel prices, which rose sharply in 2022 and have partially retreated since. Again, no published UK index exists for spring units; ask your supplier for a dated price.",
      },
      {
        type: "h2",
        text: "Fabric: The Complex Picture",
      },
      {
        type: "p",
        text: "Fabric pricing is complicated by the sheer range of the market. At the lower end, synthetics and polyester blends have tracked petrochemical prices and sit modestly above 2020 levels. Natural fibres — wool, linen, and cotton — have seen more significant increases, partly from farm-gate pricing and partly from energy costs at UK and European weaving mills.",
      },
      {
        type: "p",
        text: "Designer fabrics at the high end have followed a different logic: many suppliers have taken the opportunity of the inflationary period to rebase prices, and there is limited prospect of significant reduction. Clients specifying premium upholstery fabrics should expect to pay meaningfully more than pre-2021 prices and budget accordingly.",
      },
      {
        type: "h2",
        text: "What This Means for Quoting",
      },
      {
        type: "p",
        text: "Across furniture manufacturing as a whole, the Office for National Statistics reports output prices up 2.1% year on year (August 2026) while input prices are up 4.2% (June 2026): costs are rising faster than selling prices. The practical implication is straightforward: always price from current supplier invoices or recently confirmed pricing, not from memory or historical estimates. For jobs being quoted in autumn 2026, the key positions are:",
      },
      {
        type: "list",
        items: [
          "Foam (all grades): get a dated quote; producers announced 12% to 20%-plus increases in spring 2026",
          "Softwood timber (frame work): off its mid-2025 peak but still above pre-2021 levels; check current price",
          "Elasticated webbing: no published index; use your supplier's current list",
          "Jute webbing and natural fibre materials: rising; confirm with supplier",
          "Standard synthetic fabric: modest increase on 2020",
          "Premium and natural fibre fabric: significant increases; confirm with supplier",
        ],
      },
      {
        type: "p",
        text: "The businesses consistently quoting accurately are those with active supplier relationships and regular price checks built into their workflow. In a volatile materials environment, guessing is not a business strategy.",
      },
      {
        type: "source",
        text: "Sources: ONS Producer Price Index, furniture output prices (series G75I, August 2026) and furniture input prices (series GHHF, June 2026); Timber Development UK, Market Review 2026; Furniture News, April 2022; Interior Daily, April 2026; supplier commentary collected by The Talent Branch.",
      },
    ],
  },
  {
    slug: "sofa-seat-diagnosis-guide",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "A sagging sofa seat is one of the most common upholstery repair jobs in the UK — and one of the most frequently misdiagnosed. Clients describe the symptom (sinking too far, uneven seat height, cushions sliding forward) and assume they know the cause (worn-out springs, collapsed foam). Sometimes they are right. More often they are not. Getting the diagnosis right before quoting is the difference between a job that takes three hours and one that takes seven.",
      },
      {
        type: "h2",
        text: "The Three-Step Diagnosis",
      },
      {
        type: "p",
        text: "Remove all cushions from the seat and press firmly on the seat deck with both hands in the centre, then at each corner, then mid-way along each edge. You are feeling for three distinct things.",
      },
      {
        type: "h3",
        text: "Step 1: Assess the Support Platform",
      },
      {
        type: "p",
        text: "Press down firmly on the seat deck with the flat of your hand. If the base gives significantly — more than 3–4cm before resistance — the primary support system has failed. This is either the webbing (if the sofa uses elasticated or jute webbing stretched between the front and back rails) or the sinuous springs (if the sofa uses zig-zag wire spring units). Both feel similar under hand pressure: the base sags and then rebounds sluggishly rather than returning crisply.",
      },
      {
        type: "p",
        text: "Turn the sofa upside down and remove the dust cover if there is one. Failed elasticated webbing is immediately visible — stretched, loose, or broken straps are obvious. Failed sinuous springs will show as wires that have detatched from their clips at the front or rear rail, or wires that have broken mid-span (less common but it happens).",
      },
      {
        type: "highlight",
        text: "In our experience most sagging sofa seats are a webbing or sinuous spring problem, not a foam problem. The foam looks compressed because the platform underneath it has dropped.",
      },
      {
        type: "h3",
        text: "Step 2: Assess the Foam",
      },
      {
        type: "p",
        text: "If the support platform feels solid and correctly tensioned, the issue is almost certainly in the seat cushions. Remove a cushion and compress it firmly with both hands. Good foam springs back promptly and completely. Degraded foam shows characteristic signs: it compresses with little resistance, recovers slowly, or has begun to break down at the edges and corners while the centre remains relatively firm.",
      },
      {
        type: "p",
        text: "Check the foam grade label if one exists (often stitched into the inner cover). Standard domestic sofas typically use foam in the HR30–HR35 range for seat cushions with a reflex or fibre wrap. Quality varies enormously — budget sofas use foam grades that can begin to break down within three to five years of regular use.",
      },
      {
        type: "h3",
        text: "Step 3: Assess the Seat Deck Padding",
      },
      {
        type: "p",
        text: "The seat deck — the platform that the cushions rest on — often has its own layer of padding: typically dacron or a bonded fibre quilt stapled or tacked over the base. If this layer has shifted, bunched or thinned, cushions will rock or sit unevenly even if the support structure and foam are both intact. Press the seat deck and look for areas where cushion contact is uneven.",
      },
      {
        type: "h2",
        text: "Quoting the Job",
      },
      {
        type: "p",
        text: "The diagnosis determines the quote, and they are very different jobs:",
      },
      {
        type: "list",
        items: [
          "Webbing re-strapping (elasticated): typically 1–2 hours labour plus webbing materials. The sofa base must be accessible, which on some modern sofas requires partial frame disassembly.",
          "Sinuous spring repair/replacement: typically 2–3 hours, depending on the number of failed units and clip condition. Spring sets are relatively low cost (£40–£90 for a standard 3-seat sofa) but the labour is the significant element.",
          "Seat cushion foam replacement: quote per cushion. A standard seat cushion in HR35 CMHR foam typically costs £35–£60 in materials; cutting, wrapping in dacron and re-covering the inner in calico adds 45–60 minutes per cushion.",
          "Seat deck padding refresh: typically 1–1.5 hours plus materials. Often a worthwhile addition when re-doing either of the above.",
        ],
      },
      {
        type: "h2",
        text: "A Note on Combination Failures",
      },
      {
        type: "p",
        text: "Older sofas — particularly those more than ten years old — frequently have multiple concurrent failures. The webbing has stretched and the foam has degraded and the seat deck padding has shifted. When this happens, quoting the repair correctly requires identifying all three issues and including them in the estimate. A client who was told 'just the springs' and then finds the cushions still feel soft after the repair is unlikely to recommend you to anyone.",
      },
      {
        type: "source",
        text: "Sources: Guild of Traditional Upholsterers; practical diagnostic input from working upholsterers registered with The Talent Branch. Technique reviewed by the editor.",
      },
    ],
  },
  {
    slug: "finding-clients-self-employed-upholsterer",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "Word of mouth is how most self-employed upholsterers get their work. It is also why most of them have an unpredictable order book: feast for three months, then quiet for six weeks, then two jobs arrive on the same day. Word of mouth is genuine and it converts at a very high rate — but it is passive, it is slow to build, and you cannot turn it on when you need it. The businesses with consistently full order books treat word of mouth as the floor, not the ceiling.",
      },
      {
        type: "h2",
        text: "Source One: Interior Designers",
      },
      {
        type: "p",
        text: "Interior designers are arguably the highest-value referral channel available to an upholsterer. A designer working on a residential or commercial project controls all the furniture decisions — and those decisions include upholstery. The volume per project can be substantial, the specifications are often detailed (which suits skilled upholsterers), and designers who like your work come back repeatedly.",
      },
      {
        type: "p",
        text: "The barrier is getting in front of them. Cold calling interior designers rarely works. What does work: attending industry events (Decorex, regional design weeks), getting included in designer trade directories, and — most practically — turning up in the right places on Instagram. Interior designers are heavy Instagram users professionally. A feed showing clean, well-photographed finished work in a consistent style is the single most effective thing an upholsterer can do to attract designer clients.",
      },
      {
        type: "h2",
        text: "Source Two: Antique Dealers and Auction Houses",
      },
      {
        type: "p",
        text: "Antique dealers and smaller auction houses have a recurring need for upholstery work that is often underserved in their area. They are buying chairs and sofas at auction that need to be presentable before sale, and they need someone reliable, technically capable, and — crucially — fast. They are also less price-sensitive than private clients because the upholstery cost is part of a trade calculation they understand.",
      },
      {
        type: "p",
        text: "To build relationships with dealers, introduce yourself directly — either in person or by email with photographs of relevant work (period upholstery, traditional techniques, antique restoration). Offer a quick turnaround for small jobs as a way to establish the relationship before taking on larger commissions.",
      },
      {
        type: "h2",
        text: "Source Three: Furniture Retailers and Showrooms",
      },
      {
        type: "p",
        text: "Independent furniture retailers and showrooms frequently need a trusted local upholsterer for customer repairs, alterations (shortening chair legs, reupholstering a purchase the client has changed their mind about), and made-to-order work. The relationship requires consistent reliability — a retailer who puts you in front of their customers is extending their own reputation — but the volume can be reliable and the jobs are often well-defined.",
      },
      {
        type: "h2",
        text: "Source Four: Local Online Presence",
      },
      {
        type: "p",
        text: "Google Business Profile (formerly Google My Business) is, in our view, underused by upholsterers relative to its effectiveness. A correctly completed and actively maintained profile — with photographs of work, accurate service descriptions, a current phone number, and regular responses to reviews — reliably generates enquiries from local clients searching for 'upholsterer near me'. This search behaviour exists in volume; the upholsterers ranking in the top three results for their area receive a disproportionate share of it.",
      },
      {
        type: "highlight",
        text: "A fully optimised Google Business Profile costs nothing and generates genuine local enquiries. It is the most cost-effective marketing channel available to a self-employed upholsterer.",
      },
      {
        type: "p",
        text: "The minimum requirement for ranking well: a complete profile with photographs of finished work, genuine reviews (BrightLocal's 2026 survey found 97% of consumers read reviews for local businesses and 68% want to see four stars or more), regular updates, and correct categorisation (Upholsterer; Furniture Repair Shop).",
      },
      {
        type: "h2",
        text: "Source Five: Staging and Property Companies",
      },
      {
        type: "p",
        text: "Property staging — furnishing homes for sale or rental photography — has grown significantly as a market, and staging companies need upholstery to keep their furniture inventory in presentable condition. They also occasionally commission bespoke pieces. These relationships take longer to build than the other sources on this list, but once established they can provide a reliable stream of batch work.",
      },
      {
        type: "h2",
        text: "Building the System",
      },
      {
        type: "p",
        text: "The upholsterers with the most stable businesses are not necessarily doing more marketing than their competitors — they are doing it more consistently. The practical approach is to identify which two or three sources on this list are most realistic for your location and skill set, invest time in building them properly, and then maintain them. An Instagram account updated once a month is less effective than one updated twice a week. A Google profile set up and abandoned is worse than one never created.",
      },
      {
        type: "p",
        text: "Consistency over time is the lever. The businesses that feel like they 'just get referrals' have usually been showing up consistently in the right places for long enough that the referrals have become self-reinforcing.",
      },
      {
        type: "source",
        text: "Sources: BrightLocal, Local Consumer Review Survey 2026; practical input from self-employed upholsterers registered with The Talent Branch.",
      },
    ],
  },
  {
    slug: "leather-colour-matching-guide",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "Leather repair is one of the few skills in upholstery where a competent practitioner can genuinely command a premium that the market will willingly pay. Clients who have expensive leather furniture — a designer sofa, a classic car seat, a boardroom chair — are acutely aware that a bad repair is often more visible than the original damage. An upholsterer who can restore leather to a standard that is invisible under normal viewing conditions has something rare and worth charging for.",
      },
      {
        type: "p",
        text: "The core of that rarity is colour matching. Everything else in leather repair — filler application, grain embossing, sealing — is learnable in a relatively short time. Colour matching well is what separates the practitioners who get referrals from high-end clients from those who don't.",
      },
      {
        type: "h2",
        text: "Understanding Leather Finishes",
      },
      {
        type: "p",
        text: "The starting point is understanding what you are working with. Leather used in upholstery falls into two broad categories: aniline and semi-aniline (with a light topcoat or none, and significant colour variation visible in the surface), and pigmented or protected leather (a uniform topcoat that makes colour matching more straightforward but requires careful matching to avoid sheen differences).",
      },
      {
        type: "p",
        text: "Identifying the finish type before mixing any colour is essential. The simplest test: apply a few drops of water to an inconspicuous area. Aniline leather absorbs water and darkens immediately. Protected leather beads the water. The repair approach differs significantly for each.",
      },
      {
        type: "h2",
        text: "The Colour Matching Process",
      },
      {
        type: "h3",
        text: "Step 1: Assess the Base Colour",
      },
      {
        type: "p",
        text: "Leather colour is rarely uniform — it fades at wear points, oxidises over time, and may have been treated at various points. The colour you are matching to is the current, aged colour of the undamaged surrounding area — not the original colour of the hide. Work in natural light wherever possible; artificial lighting distorts perceived hue significantly.",
      },
      {
        type: "h3",
        text: "Step 2: Identify the Undertones",
      },
      {
        type: "p",
        text: "Every leather colour has primary undertones that are not always obvious in the finished surface. A tan leather may have strong yellow or orange undertones; a grey may pull blue or green. The fastest way to identify these is to mix a small quantity of what you believe to be the base colour and apply a test patch to the area. The error the test reveals — too warm, too cool, too yellow — tells you precisely what to adjust.",
      },
      {
        type: "p",
        text: "Professional leather colourant ranges (Uniters, Leather Magic and others) provide a workable set of base colours and additives. Starting from a close base and adjusting is significantly more controllable than mixing from primaries.",
      },
      {
        type: "h3",
        text: "Step 3: Test on the Actual Leather",
      },
      {
        type: "p",
        text: "Every leather substrate takes colour slightly differently based on its porosity and preparation. Test patches on the actual repair area (after any filling and preparation work is done) are mandatory — a colour that looked right on your mixing palette will behave differently on the leather surface. Multiple test passes are normal, not a sign of poor skill.",
      },
      {
        type: "highlight",
        text: "The final test for any leather repair: view it from all angles in both natural and artificial light, then from a sitting position. If you cannot see the repair under normal use conditions, the job is done.",
      },
      {
        type: "h2",
        text: "Application Technique",
      },
      {
        type: "p",
        text: "Professional leather colourants are applied in very thin coats, built up gradually. A single heavy coat almost always shows as a paint-like surface sheen that signals repair. Two to four thin coats — each fully dried before the next — produce a result that is much closer to the original finish depth.",
      },
      {
        type: "p",
        text: "For surface repairs (scuffs, fading, light scratches with no material removal), a sponge or soft brush application in thin coats is standard. For areas where leather has been lost and a filler has been applied, a stippling technique that partially replicates the leather grain texture is needed before colouring — otherwise the repair has a different surface quality to the surrounding leather even if the colour is perfect.",
      },
      {
        type: "h2",
        text: "Charging for Leather Repair",
      },
      {
        type: "p",
        text: "Leather repair commands a genuine premium because of the skill barrier it represents. Among the repairers we work with, a scuff repair on a car seat that takes 45 minutes of skilled work is quoted at £80 to £150 depending on difficulty and location, and full recolouring of a three-seat sofa from £350 to £600. These rates are justifiable and clients pay them; the key is delivering a result that is genuinely invisible.",
      },
      {
        type: "p",
        text: "Upholsterers who build leather repair as a specialism alongside their core work report that it becomes one of the most reliable revenue streams in their business — high value per hour, relatively low materials cost, and a clientele who appreciate visible quality.",
      },
      {
        type: "source",
        text: "Sources: The Leather Conservation Centre, Northampton; manufacturers' product documentation (Uniters, Leather Magic); practical input from leather repair technicians and upholsterers registered with The Talent Branch.",
      },
    ],
  },
  {
    slug: "the-year-the-sofa-trade-changed-hands",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "In six months the ownership of a large part of British upholstery and bed manufacturing has been rearranged, much of it through administrators' offices. This is the sequence, from the primary documents.",
      },
      {
        type: "timeline",
        items: [
          {
            label: "March",
            text: "Interpath was appointed administrator of Westbridge Furniture in Holywell and Belfield Leisure in Ilkeston, both part of The Belfield Group, which had bought them out of a pre-pack only a year earlier. 291 of Westbridge's roughly 300 staff were made redundant and the creditors' shortfall across the two companies was later put at £19.6m.",
          },
          {
            label: "April",
            text: "Whitemeadow bought the Westbridge designs and IP for £150,000 and has been reintroducing the models since May.",
          },
          {
            label: "May",
            text: "PwC was appointed to Airsprung, the Trowbridge bed maker, with 71 of 202 jobs lost on the day; the administrators' report later put the group shortfall at £61.6m, including a £22.7m pension liability.",
          },
          {
            label: "June",
            text: "Howdens completed the £390m acquisition of DIY Kitchens.",
          },
          {
            label: "July",
            text: "NVM Private Equity sold Buoyant Upholstery of Nelson, 117 years old and more than 550 staff, to Ashwood Designs Group, which described the combined business as the UK's largest sofa manufacturing group. Also in July, John Lewis of Hungerford was sold by pre-pack for £100,000, with HMRC owed £1.9m.",
          },
          {
            label: "August",
            text: "Tetrad's management, with former owner Janus Cooper and a consortium of investors, bought the company out of Belfield, taking Clinchplain Foam and Fibre with it and ending Blandford Capital's involvement. Between 13 July and 25 August, Man Wah Holdings raised its stake in DFS from 4.1% to 8.1% in three stock exchange notifications; DFS reports full-year results on 24 September.",
          },
          {
            label: "September",
            text: "Headlam, the flooring distributor, entered administration with 154 jobs and 28 trade counters gone in the first week.",
          },
        ],
      },
      {
        type: "p",
        text: "The pattern is the same in each case: the designs and the order book survive, the factory and the jobs do not always. For anyone working in upholstery, the practical reading is that the employers with the widest range of work are now the groups that bought, not the ones that sold, and the people who know the Westbridge and Belfield ranges are worth more to Whitemeadow and Tetrad than they were in February.",
      },
      {
        type: "source",
        text: "Sources: Interpath, 24 March; Big Furniture Group, 13 May and 27 August; Furniture News, 16 April and 13 July; PwC, 1 May; Howden Joinery Group half year report (RNS), 23 July; bk plus, 15 July; DFS Furniture holdings notifications (RNS), 14 July, 30 July and 26 August; Furniture News, 1 September; The Furnishing Report, 9 September.",
      },
      {
        type: "sources",
        items: [
          { label: "Interpath, administrators appointed to Westbridge Furniture and Belfield Leisure, 24 March 2026", url: "https://interpath.com/media-hub/articles/administrators-appointed-to-westbridge-furniture-limited-and-belfield-leisure-limited/" },
          { label: "Big Furniture Group, creditors of Westbridge and Belfield face shortfall, 13 May 2026", url: "https://bigfurnituregroup.com/creditors-of-westbridge-and-belfield-face-shortfall-of-almost-20m/" },
          { label: "Furniture News, Whitemeadow acquires rights to Westbridge lines, 16 April 2026", url: "https://furniturenews.net/news/whitemeadow-acquires-rights-to-westbridge-lines" },
          { label: "PwC, Airsprung Group plc and Airsprung Furniture Limited in administration, 1 May 2026", url: "https://www.pwc.co.uk/press-room/press-releases/administrations/airsprung-group-plc-and-airsprung-furniture-limited---in-adminis.html" },
          { label: "Interior Daily, creditors face major shortfall as UK bed maker enters administration, June 2026", url: "https://www.interiordaily.com/article/9849856/creditors-face-major-shortfall-as-uk-bed-maker-enters-administration/" },
          { label: "Howden Joinery Group half year report (RNS), 23 July 2026", url: "https://www.investegate.co.uk/announcement/rns/howden-joinery-group--hwdn/half-year-report/9682948" },
          { label: "Furniture News, Ashwood owner acquires Buoyant, 13 July 2026", url: "https://furniturenews.net/news/ashwood-owner-acquires-buoyant" },
          { label: "bk plus, pre-pack sale of John Lewis of Hungerford, 15 July 2026", url: "https://bkplus.co.uk/bk-plus-secures-future-for-john-lewis-of-hungerford-brand-and-22-jobs-through-pre-pack-sale/" },
          { label: "Big Furniture Group, Tetrad enters a new chapter under new ownership, 27 August 2026", url: "https://bigfurnituregroup.com/tetrad-enters-a-new-chapter-under-new-ownership/" },
          { label: "DFS Furniture plc, holdings in company (RNS), 26 August 2026", url: "https://www.investegate.co.uk/announcement/rns/dfs-furniture--dfs/holding-s-in-company/9741737" },
        ],
      },
    ],
  },
  {
    slug: "hlf-group-revenue-up-40-per-cent",
    author: "HLF Group",
    body: [
      {
        type: "highlight",
        text: "Press release, supplied by HLF Group.",
      },
      {
        type: "p",
        text: "HLF Group, the Blaydon contract furniture supplier to hotels, serviced apartments and holiday parks, says revenue is up 40% on the prior year and projects turnover of £3.5m over the next twelve months. The company has added an account manager, extra vehicles and a new North East warehouse; customers include Hoseasons, Landal, Parkdean Resorts and Center Parcs. Owner Rachel Conroy was named in Insider Media's North East 42 Under 42.",
      },
      {
        type: "sources",
        items: [
          { label: "HLF Group press release, 15 September 2026", url: "https://www.thehlfgroup.com/" },
        ],
      },
    ],
  },
  {
    slug: "nbf-consumer-bed-buying-survey-2026",
    author: "National Bed Federation",
    body: [
      {
        type: "highlight",
        text: "Press release, supplied by the National Bed Federation. Issued 9 September 2026. Edited for length; figures and quotes as issued. Source linked at the end.",
      },
      {
        type: "p",
        text: "The National Bed Federation's 18th annual Consumer Bed-Buying Survey, carried out by Censuswide in August 2026 among 1,000 adults who bought a mattress in the previous year, finds a clear squeeze on what people are prepared to spend.",
      },
      {
        type: "p",
        text: "The mean price paid for a mattress fell 16% year on year to £543. Nearly half of buyers paid under £400, against 40% in the previous survey, while the share spending £800 or more dropped from 28% to 20%.",
      },
      {
        type: "quote",
        text: "This is a clear indication of the challenges facing our members and bed retailers across the country.",
        attribution: "Tristine Hargreaves, NBF Executive Director",
      },
      { type: "h3", text: "What people bought" },
      {
        type: "p",
        text: "Mattresses bought on their own, rather than with a bedstead, rose to 64.5% of all purchases. Roll-up mattresses jumped to 33% of purchases from 23.5%, with uptake ranging from 22.5% among 25 to 34 year olds to nearly 40% among 45 to 54 year olds. Flat mattresses accounted for 32%, and mattress and bedstead combinations fell to 22%.",
      },
      { type: "h3", text: "How often they replace" },
      {
        type: "p",
        text: "The average age of a mattress at replacement fell to 6.84 years from 7.28. More than three quarters were replaced before reaching ten years old. Younger buyers replace soonest: 56.5% of 16 to 24 year olds and 60% of 25 to 34 year olds had replaced within five years.",
      },
      { type: "h3", text: "Sustainability and price" },
      {
        type: "p",
        text: "Seventy percent of respondents said they would pay more for a fully recyclable, sustainably designed mattress, at an average premium of 8%. The 25 to 34 age group was the most willing, at 81%.",
      },
      { type: "h3", text: "Where they bought" },
      {
        type: "p",
        text: "Online purchases reached 55%, up from 52.5%, led by 45 to 54 year olds at 63% and 35 to 44 year olds at 60%.",
      },
      {
        type: "p",
        text: "Forty percent of buyers could not recall the brand of mattress they bought. The most recalled brands were Silentnight, Dreams and Emma.",
      },
      {
        type: "p",
        text: "NBF members can access the full survey data through the federation's Market Intelligence hub.",
      },
      {
        type: "sources",
        items: [
          { label: "National Bed Federation, Latest NBF Research Confirms Squeeze on Consumer Spending, 9 September 2026", url: "https://www.bedfed.org.uk/latest-nbf-research-confirms-squeeze-on-consumer-spending/" },
        ],
      },
      { type: "h3", text: "Editor's note" },
      {
        type: "p",
        text: "What this means for makers: a 16% fall in the average price paid and a rise in roll-up purchases is pressure on margin and on construction choices for every UK bed manufacturer. The 8% premium that 70% of buyers say they would pay for a recyclable design is the one number in this survey that points the other way.",
      },
    ],
  },
  {
    slug: "digital-product-records-call-for-evidence-2026",
    author: "FIRA",
    body: [
      {
        type: "highlight",
        text: "Press release, supplied by FIRA. Issued 13 August 2026, with a further notice on 8 September 2026. Edited for length; meaning unchanged. Sources linked at the end.",
      },
      {
        type: "p",
        text: "The Department for Business, Innovation, Science and Trade is seeking input on Digital Product Records to shape future UK policy and to gauge the potential effects on businesses, consumers and supply chains.",
      },
      {
        type: "p",
        text: "The Call for Evidence asks whether a UK policy framework for Digital Product Records could streamline how product information is distributed while improving transparency and traceability for consumers and for market surveillance bodies.",
      },
      {
        type: "p",
        text: "A Digital Product Record could hold safety information, composition details, sustainability metrics and end-of-life guidance, including refurbishment, repair and reuse. The Government presents the measure as supporting product circularity and wider sustainability goals, and as part of a broader effort to digitalise compliance for businesses and consumers.",
      },
      {
        type: "quote",
        text: "We encourage all our Members to submit their own responses to ensure the views of the furniture sector are fully represented.",
        attribution: "FIRA",
      },
      {
        type: "p",
        text: "The EU has already begun implementing a comparable requirement through Digital Product Passports under its Ecodesign for Sustainable Products Regulation.",
      },
      {
        type: "p",
        text: "Ahead of the deadline FIRA hosted a free webinar on 15 September with Chris Hayward, General Manager of FIRA, journalist Matthew Valentine as moderator, Joanna Knight, Chair of the FISP Steering Group, Tristine Hargreaves, Executive Director of the National Bed Federation, and Dr Dorothy Maxwell, Principal and Head of Sustainability at The Sustainable Business Group.",
      },
      {
        type: "quote",
        text: "Taking part in the UK government's Call for Evidence is an opportunity for our industry to shape policy that works for it.",
        attribution: "Chris Hayward, General Manager, FIRA",
      },
      {
        type: "p",
        text: "Deadline for responses: 11:59 pm, Monday 21 September 2026. FIRA contact: John Hubbard, info@fira.co.uk.",
      },
      {
        type: "link",
        href: "https://www.gov.uk/government/calls-for-evidence/call-for-evidence-digital-product-record-policy",
        text: "Respond to the Call for Evidence on gov.uk",
      },
      {
        type: "sources",
        items: [
          { label: "FIRA, UK Government Industry Consultation on Digital Product Records, 13 August 2026", url: "https://www.fira.co.uk/news/article/uk-government-industry-consultation-on-digital-product-records" },
          { label: "FIRA, Free Webinar: Digital Product Records, 8 September 2026", url: "https://www.fira.co.uk/news/article/free-webinar-digital-product-records-dpr-tuesday-15-september-215pm" },
        ],
      },
      { type: "h3", text: "Editor's note" },
      {
        type: "p",
        text: "If you make, repair or reupholster furniture and have never answered a Government consultation, this is the one to answer. The record that ends up attached to a sofa or a mattress will be filled in by the people who make it, and the questions asked now decide how much of that work lands on a small workshop.",
      },
    ],
  },
  {
    slug: "bfa-uk-furniture-market-review-2026",
    author: "British Furniture Association",
    body: [
      {
        type: "highlight",
        text: "Press release, supplied by the British Furniture Association. Issued 13 August 2026. Edited for length; figures and quotes as issued. Source linked at the end.",
      },
      {
        type: "p",
        text: "The British Furniture Association has published its UK Furniture Market Review, a report on market trends built from Government statistics.",
      },
      {
        type: "p",
        text: "By value, 62% of the UK domestic furniture market is UK-made, compared with 65% in 2019.",
      },
      {
        type: "p",
        text: "In the wooden upholstered seating market, the share held by UK-manufactured sales has fallen by more than 20 percentage points over the last decade.",
      },
      {
        type: "p",
        text: "Kitchen furniture accounts for almost half of all general furniture sales by value, and wooden kitchen furniture commands 89% of the UK market.",
      },
      {
        type: "p",
        text: "The analysis draws on data from the Office for National Statistics, HMRC, and average unit price data for UK-manufactured products.",
      },
      {
        type: "quote",
        text: "The UK Furniture Market Review is one of several industry reports that offers BFA members a detailed view of trends in the market.",
        attribution: "Phil Spademan, Managing Director, BFA",
      },
      {
        type: "p",
        text: "He added: \"While the reporting we undertake is a useful tool for our members in aiding decision-making, it also feeds into our work as a trade body.\"",
      },
      {
        type: "p",
        text: "The review is available to BFA members. Media enquiries: Jane@Shepherd-PR.com",
      },
      {
        type: "sources",
        items: [
          { label: "British Furniture Association, BFA analysis offers key insight to furniture market trends, 13 August 2026", url: "https://www.bfa.org.uk/news-and-blogs/bfa-analysis-offers-key-insight-to-furniture-market-trends/" },
        ],
      },
      { type: "h3", text: "Editor's note" },
      {
        type: "p",
        text: "The wooden-frame upholstery figure is the one for our readers. A 20-point fall in the UK-made share of that market over ten years is the background to every conversation about why upholstery wages have been slow to move.",
      },
    ],
  },
  {
    slug: "chair-upholstery-franco-marinelli",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "The Crowood Press publishes Chair Upholstery: A modern guide to traditional techniques on 27 October (£24, 160 pages, paperback). Seven chair projects take the reader from basic repairs to advanced work, with each stage photographed, and the publisher pitches it at both beginners and upholsterers looking to extend their range.",
      },
      { type: "h3", text: "The author" },
      {
        type: "p",
        text: "Franco Marinelli has worked as an upholsterer and university tutor in Italy and England. He is certified as a Master Upholsterer by City and Guilds and the Worshipful Company of Upholders, is a Fellow of the Association of Master Upholsterers, and holds the Freedom of the City of London and the Livery of the Worshipful Company of Upholders. He answered eight questions for The Furniture Magazine on stitched edges, modern materials and his own training; a full review follows after publication.",
      },
      {
        type: "link",
        href: "/articles/franco-marinelli-qa-chair-upholstery",
        text: "Read the Franco Marinelli Q and A",
      },
      {
        type: "link",
        href: "https://www.crowood.com/book/chair-upholstery/",
        text: "The book at The Crowood Press",
      },
      {
        type: "source",
        text: "Publisher details and author biography supplied by The Crowood Press, 17 September. Cover image reproduced with the publisher's permission.",
      },
    ],
  },
  {
    slug: "wood-awards-2026-furniture-shortlist",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "The Wood Awards has unveiled its 2026 shortlist for furniture and objects, fourteen entries across four categories, from a student bench to a mirror made from hazel stems. The furniture and objects jury is led by designer and maker Sebastian Cox RDI, alongside design consultant Caroline Till, curator Hugo Macdonald, woodworker Sophie Sellu and Ercol chairman Henry Tadros. Winners are announced on 25 November.",
      },
      { type: "h3", text: "Bespoke" },
      {
        type: "list",
        items: [
          "Portal of Seedlings, by Filippo Muzi Falconi",
          "BespOak, by students and staff of the Design + Make course, Architectural Association",
          "Kontur Series, by Anna Maria Øfstedal Eng",
        ],
      },
      { type: "h3", text: "Production" },
      {
        type: "list",
        items: [
          "Black House Stools, by Ashen Co",
          "Wattle Mirror, by Jacob Marks",
          "Patchwork Pina Lamp, by Jacob Marks",
          "Common Room, by Daniel Schofield Studio",
        ],
      },
      { type: "h3", text: "Sculpted Objects" },
      {
        type: "list",
        items: [
          "Afterlife, by Zeller & Moye with Katie Paterson",
          "Hollow Bodies, by Max Bainbridge",
          "A Drop in Time, by Olly Fathers",
        ],
      },
      { type: "h3", text: "Student" },
      {
        type: "list",
        items: [
          "Dagwood Bench, by Lewis Duckworth",
          "Butterfly Shelf, by Jack Allfrey",
          "The Ocean Screen, by Eleanor Pickin",
          "Our Grandchildren's World, by Henry Chantler",
        ],
      },
      {
        type: "p",
        text: "No images of the shortlisted pieces are cleared for reproduction here; we have asked the Wood Awards for credited images. The panel's full reasoning and further detail on each piece is on the Wood Awards site, linked below.",
      },
      {
        type: "sources",
        items: [
          { label: "Wood Awards unveils 2026 shortlist of furniture, objects and buildings", url: "https://www.woodawards.com/wood-awards-unveils-2026-shortlist-of-furniture-objects-and-buildings/" },
          { label: "Wood Awards, winners announcement 25 November 2026", url: "https://www.woodawards.com/" },
        ],
      },
    ],
  },
  {
    slug: "festival-of-upholstery-2026-preview",
    author: "The Furniture Magazine",
    body: [
      { type: "p", text: "The Festival of Upholstery returns on 2 and 3 October 2026 at the National Conference Centre and Motorcycle Museum, Birmingham, and organiser Kirsty Lockwood says interest has ramped up significantly in the run-up." },
      { type: "p", text: "Her case for making the trip is a simple one. It is a rare chance to step away from the bench and spend time with people who understand the job: to see techniques up close, discover new materials and suppliers, ask honest business questions and connect with the wider upholstery community. Birmingham was chosen for its transport links, and Lockwood notes that hotel prices for the night of the event have dropped significantly in the last couple of weeks." },
      { type: "p", text: "The exhibitor list mixes major suppliers, including Martins, Livedale and Warwick, with specialist British manufacturers such as John Boyd Textiles, Isle Mill and Cable and Blake. The AMUSF, the Guild of Traditional Upholsterers, the Worshipful Company of Upholders, the British Furniture Association and SATRA will all be there, and accountants, marketing experts and business advisers will be on hand to take questions." },
      { type: "p", text: "The session Lockwood is most looking forward to is Elsie Hutcheon's live demonstration on reusing existing upholstery, showing how to assess what is already inside a piece and retain materials where appropriate. Vanessa Butt will speak on sustainable materials in upholstery with real examples, and Rohan Blacker of Schplendid Sofas is also on the programme." },
      { type: "p", text: "New this year is a much broader practical programme, with live demonstrations filmed close-up and projected onto a large screen. The awards from the AMUSF, the Guild of Traditional Upholsterers and the Worshipful Company of Upholders return, and the Upholders have again donated an adjustable bench, along with a compressor. The evening social is professionally organised this year, with a two-course meal, a stocked bar with plenty of non-alcoholic options and a live band, giving people more time to meet and talk beyond the exhibition itself." },
      { type: "p", text: "Tickets and full details are at festivalofupholstery.co.uk. With only days to go, the organisers strongly recommend booking soon." },
      { type: "link", href: "https://www.thefurnituremagazine.com/go/festival-of-upholstery-2026", text: "Festival of Upholstery: tickets and details" },
      { type: "source", text: "Built from answers supplied in writing by Kirsty Lockwood, organiser, 22 September 2026; text approved by the organisers on 23 September 2026. This preview is editorial and was not paid for." },
    ],
  },
  {
    slug: "bfa-ai-summit-2026",
    author: "British Furniture Association",
    body: [
      {
        type: "highlight",
        text: "Press release, supplied by the British Furniture Association via Shepherd PR. Wording as issued; nothing added or inferred.",
      },
      {
        type: "p",
        text: "The British Furniture Association (BFA) hosted a major sell-out event dedicated to exploring the opportunities and challenges of AI technology in furniture manufacturing, wholesale and retail. Experts from Google, Chick Digital, Autonomate, Push Group, Furniture Connect and ACID were on the agenda at the BFA AI Summit: Efficiency-Productivity-Possibility, sharing tailored advice for the industry to a packed room at Coventry Building Society Stadium.",
      },
      {
        type: "p",
        text: "The event gave delegates the chance to explore the technology as well as offering deeper insight into evaluating the potential benefits of AI and how to incorporate it into a business strategy with confidence.",
      },
      {
        type: "quote",
        text: "It is our mission, as the national trade body representing the interests of the UK furniture industry, to champion the success of British furniture manufacturers, suppliers and retailers by driving innovation and growth. The demand for an event of this type is evident. The BFA AI Summit was a sell-out event, attracting a wide range of delegates to hear from expert speakers and discuss practical applications for this new technology.",
        attribution: "Phil Spademan, BFA Managing Director",
      },
      {
        type: "p",
        text: "Fatou Fall, a customer engineer at Google Cloud, opened the day with a session on designing the future of AI in furniture manufacturing and retail. Jamie Claret, CEO of Autonomate, followed on why most AI projects stall and how to build momentum that lasts, and Dids Macdonald of Anti-Copying in Design (ACID) closed the morning with a discussion of AI and intellectual property.",
      },
      {
        type: "p",
        text: "The afternoon opened with Steve Hyde, CEO and co-founder of Push Group, on the role of AI and automation in reaching customers and improving marketing. Pavir Patel of Furniture Connect ran a practical session on taking a product from supplier information to a live listing, and the day closed with Matt Chick, founder of Chick Digital, on where AI is heading next.",
      },
      {
        type: "quote",
        text: "AI is no longer a distant prospect. It is here now and our summit was designed to ensure all delegates were able to access the expert information and insight needed to plan for the future. Alongside networking with other forward-thinking businesses across the sector, the event provided practical and relevant discourse around AI, its uses in manufacturing and retail, and its potential implications for future decision-making.",
        attribution: "Phil Spademan, BFA Managing Director",
      },
      {
        type: "p",
        text: "The BFA has represented the interests of the UK furniture industry for more than 75 years, with member benefits including discounts at the January Furniture Show, access to affinity services and help with regulatory cost avoidance.",
      },
      {
        type: "source",
        text: "Press release supplied by the British Furniture Association via Shepherd PR, 18 September 2026. Caption: Fatou Fall, customer engineer at Google Cloud, speaks at BFA's AI Summit. Credit: British Furniture Association.",
      },
      {
        type: "link",
        href: "https://www.bfa.org.uk/home/",
        text: "British Furniture Association",
      },
    ],
  },
  {
    slug: "upholsterers-pricing-guide-valerie-hayes",
    author: "Valerie Hayes",
    body: [
      {"type": "p", "text": "The Upholsterer's Pricing Guide, by Valerie Hayes of Atelier Valérie Hayes Upholstery, launches at the Festival of Upholstery on 2 October. After around 30 years in accountancy, Hayes retrained as a professional upholsterer, bringing a head for numbers together with a love of chairs. As those two worlds came together, she began developing a practical business model for understanding what upholstery work really needs to earn."},
      {"type": "p", "text": "She also wanted the guide to start a wider conversation in the trade: not about competing on price, but about more openness and trust around how the work is valued."},
      {"type": "p", "text": "The 68-page guide looks at true costs, pricing structure, billable time, profit, logistics, market testing and the boundaries that help make the work sustainable. RRP £49; pre-order £42.75 including UK P&P; £40 when collected at the festival. She answered eight questions for The Furniture Magazine, in her own words."},
      {"type": "h3", "text": "You spent around 30 years in accountancy before becoming an upholsterer. What did each profession teach you about the other?"},
      {"type": "p", "text": "Accountancy taught me that numbers tell you what is really happening in a business, whether you like the answer or not. Upholstery taught me that the numbers also have to allow for the reality of skilled, physical, creative work."},
      {"type": "p", "text": "When the two collided, I realised I already had the bones of a business model. I understood costs, margins and cash flow, but now I was applying them to something I loved doing with my hands."},
      {"type": "p", "text": "What surprised me was how often very skilled upholsterers knew exactly how to construct a chair but had never been taught how to construct a price."},
      {"type": "h3", "text": "Why can an upholsterer have a busy workshop and a full diary but still not be particularly profitable?"},
      {"type": "p", "text": "Because busy and profitable are not the same thing."},
      {"type": "p", "text": "You can have work booked months ahead and still be absorbing costs yourself: collection and delivery, sourcing, admin, conversations with clients, ordering materials, unexpected problems and all those little pieces of time that never appear on the invoice."},
      {"type": "p", "text": "If the price only covers the hours spent physically upholstering the furniture, the business is quietly paying for everything else."},
      {"type": "p", "text": "A full diary can actually hide underpricing very effectively."},
      {"type": "h3", "text": "Say an upholsterer wants a take-home income of around £35,000. What does the business actually need to earn to produce that?"},
      {"type": "p", "text": "This is where people often confuse what they want to earn with what the business needs to earn."},
      {"type": "p", "text": "If you want a personal income of around £35,000, the business has to generate considerably more than £35,000. It first has to pay for the workshop, insurance, tools, machinery, utilities, bookkeeping, marketing, vehicle costs, holidays, sickness, training and all the other costs of trading, while still leaving room for profit and contingency."},
      {"type": "p", "text": "Then you have to spread that requirement across the hours you can genuinely sell."},
      {"type": "p", "text": "The guide works through that calculation in detail, because understanding the difference between working hours and billable hours is one of the foundations of sustainable pricing. That calculation can completely change what somebody thinks their hourly rate needs to be."},
      {"type": "h3", "text": "Your guide encourages upholsterers to compare what they quoted with what a job actually cost. What can that exercise reveal?"},
      {"type": "p", "text": "Almost everything."},
      {"type": "p", "text": "I think every completed job gives you data."},
      {"type": "p", "text": "Look at what you thought the job would take, what it actually took, what materials you used, what you forgot to charge for and what happened around the edges."},
      {"type": "p", "text": "Perhaps stripping took twice as long as expected. Perhaps there were six hours of sourcing and client communication. Maybe collection and delivery swallowed half a day. Or perhaps you priced it beautifully and it worked exactly as intended."},
      {"type": "p", "text": "That information should feed directly into the next quote."},
      {"type": "p", "text": "Pricing becomes much easier when you stop guessing from memory and start learning from finished jobs."},
      {"type": "h3", "text": "You distinguish between what a job needs to return and what the market will bear. How should an upholsterer use those two numbers?"},
      {"type": "p", "text": "They are two different pieces of information."},
      {"type": "p", "text": "First, work out what the job actually needs to return for your business. That number comes from your costs, your time, the complexity of the work and the profit the business requires."},
      {"type": "p", "text": "Then look at what your market will bear."},
      {"type": "p", "text": "If the market will comfortably support your price, wonderful."},
      {"type": "p", "text": "If it won't, simply reducing the price does not make the underlying cost disappear. You then have a business decision to make: change the service, become more efficient, work with a different market or decide that particular type of work is not commercially viable for you."},
      {"type": "p", "text": "What I wouldn't do is use somebody else's price as the starting point for mine."},
      {"type": "h3", "text": "Where do good boundaries become financial controls rather than simply customer-service rules?"},
      {"type": "p", "text": "Very quickly."},
      {"type": "p", "text": "A written scope, deposits, clear approvals, distinguishing an estimate from a quote, charging properly for additional work and documenting changes are all boundaries, but they are also financial controls."},
      {"type": "p", "text": "If a chair is stripped and you discover something unexpected, there needs to be a process for stopping, explaining it to the client and agreeing the additional work before continuing."},
      {"type": "p", "text": "Without that boundary, the upholsterer often absorbs the time and cost."},
      {"type": "p", "text": "Good boundaries aren't about becoming rigid with customers. They create enough clarity for everybody to know what has been agreed and allow the upholsterer to do the work properly without giving pieces of the job away."},
      {"type": "h3", "text": "If an upholsterer changed just one business habit after reading this interview, what would you want it to be?"},
      {"type": "p", "text": "Review every finished job."},
      {"type": "p", "text": "Take ten minutes before you mentally move on to the next chair and ask: What did I quote? What did it actually cost me? How long did it really take? What did I give away? What would I charge next time?"},
      {"type": "p", "text": "You don't need to transform your pricing overnight."},
      {"type": "p", "text": "If you make every completed job teach you something about the next one, your pricing becomes progressively more accurate and your business becomes stronger with it."},
      {"type": "h3", "text": "Who is the guide for, and who is it not for?"},
      {"type": "p", "text": "It's for upholsterers who want to understand whether their business is really working financially, whether they're newly self-employed, established but undercharging, or simply ready to look at their numbers more seriously."},
      {"type": "p", "text": "It's for people who are good at the craft but were never really taught the business side: hourly rates, billable time, overheads, logistics, profit and reviewing whether a job actually performed as expected."},
      {"type": "p", "text": "It's not for someone looking for a universal price list, a set of prescribed rates or a shortcut that tells them exactly what to charge. Every workshop, market and business is different, so judgement still matters."},
      {"type": "p", "text": "The guide is there to help upholsterers work out what their own business needs to earn and make pricing decisions with more confidence."},
      {"type": "divider"},
      {"type": "p", "text": "The Upholsterer's Pricing Guide launches at the Festival of Upholstery, Birmingham, on 2 October. RRP £49; pre-order £42.75 including UK P&P; £40 when collected at the festival."},
      {"type": "link", "href": "https://www.thefurnituremagazine.com/go/upholsterers-pricing-guide", "text": "The Upholsterer's Pricing Guide: pre-order"},
      {"type": "source", "text": "Answers supplied by Valerie Hayes in writing, 23 September 2026; final text approved by her on 24 September 2026. Photograph: Sion Edwards. This piece is editorial and was not paid for."},
    ],
  },
  {
    slug: "autumn-long-point-2026-round-up",
    author: "The Furniture Magazine",
    body: [
      {"type": "brief", "items": ["Autumn Long Point ran from 14 to 16 September 2026, with 30 furniture brands across 15 showrooms.", "The Long Eaton Guild of Furniture Manufacturers reports registrations up 40 per cent on the spring event.", "HTL showed in its new Long Eaton showroom, and The English Chesterfield Company exhibited for the first time."]},
      {"type": "p", "text": "Autumn Long Point, the trade exhibition hosted twice a year by the Long Eaton Guild of Furniture Manufacturers, ran from 14 to 16 September. Thirty leading and emerging furniture brands opened 15 showrooms, fourteen of them within a few minutes of one another in and around Long Eaton, the town recognised as the UK Centre of Quality Upholstery Manufacture, and one, Sofa Brands International, a short drive away in Sutton-in-Ashfield."},
      {"type": "stat", "value": "+40%", "label": "registrations for Autumn Long Point, compared with the spring event.", "source": "Long Eaton Guild of Furniture Manufacturers, September 2026"},
      {"type": "h3", "text": "New faces"},
      {"type": "p", "text": "HTL used the autumn edition to open its new Long Eaton showroom on Wilsthorpe Road, showing its latest upholstery collections and leather work. The English Chesterfield Company, which makes every piece to order in its UK workshop, joined the exhibition for the first time, exhibiting on the first two days."},
      {"type": "p", "text": "Other exhibitors included Parker Knoll, G Plan, Duresta, Buoyant, Tetrad, Wallace and Howe, Gascoigne Designs, Siren Furniture and Iain James Furniture."},
      {"type": "h3", "text": "A first-evening reception"},
      {"type": "p", "text": "New this year was a Chairman's networking reception at the close of the first day, open to exhibitors and invited guests. David Gascoigne, Chairman of the Guild, said:"},
      {"type": "quote", "text": "We were delighted with Autumn Long Point this year. One of the most encouraging things for us is seeing the audience continue to broaden, with the event now attracting visitors from across the wider interiors and furniture industry, rather than predominantly furniture retailers. The reception on the first evening was a real success. It was very well attended and created a great opportunity for exhibitors and visitors to come together in a more informal setting, catch up with existing contacts and make new connections. Long Point has always been about bringing the industry together in Long Eaton, and it was fantastic to see that happening across the three days.", "attribution": "David Gascoigne, Chairman, Long Eaton Guild of Furniture Manufacturers"},
      {"type": "p", "text": "Long Point will have a standing place in The Furniture Magazine's events diary, and the spring 2027 dates will be listed as soon as the Guild announces them."},
      {"type": "link", "href": "https://www.thefurnituremagazine.com/go/long-eaton-guild", "text": "The Long Eaton Guild of Furniture Manufacturers"},
      {"type": "source", "text": "Built from the Guild's Autumn Long Point 2026 exhibition brochure and from information and a quote supplied for publication by Catseye Marketing on behalf of the Long Eaton Guild of Furniture Manufacturers, 17 to 24 September 2026. This round-up is editorial and was not paid for."},
    ],
  },
]

export function getArticleContent(slug: string): ArticleContent | undefined {
  return articleContent.find((a) => a.slug === slug)
}
