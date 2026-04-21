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

export type ArticleContent = {
  slug: string
  author?: string
  body: ContentBlock[]
}

export const articleContent: ArticleContent[] = [
  {
    slug: "uk-furniture-skills-crisis-2026",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "There is a number that tells you almost everything you need to know about where the UK furniture trade is heading. In 2023, fewer than 400 people were enrolled in a recognised upholstery apprenticeship across the entire country. In the same year, industry estimates suggested that more than 1,200 experienced upholsterers retired or left the trade. That gap — roughly 800 people — is not being closed. It is widening.",
      },
      {
        type: "h2",
        text: "The Vacancy Data Is Getting Harder to Ignore",
      },
      {
        type: "p",
        text: "The Talent Branch, the specialist furniture recruitment agency which publishes this magazine, tracks live vacancy data across the UK upholstery and furniture manufacturing sector. In 2022, the average time to fill an experienced upholsterer role was 28 days. By mid-2024, that had extended to between 12 and 18 weeks. Some employers in rural counties — Somerset, Norfolk, Lincolnshire — reported waiting more than six months without a single suitable applicant.",
      },
      {
        type: "p",
        text: "The problem is not confined to upholstery. Cabinet makers, frame builders, cutting machinists and finishing technicians are all in short supply. But upholstery is where the numbers are most acute, partly because the apprenticeship infrastructure that once fed the trade was dismantled faster than anyone anticipated.",
      },
      {
        type: "quote",
        text: "We advertised for an experienced upholsterer for 22 weeks. We got three applications. Two couldn't do deep buttoning. One wanted a salary we couldn't stretch to. In the end we promoted from within and cross-trained someone from the cutting room.",
        attribution: "Production Manager, Midlands bespoke sofa manufacturer",
      },
      {
        type: "h2",
        text: "What Happened to the Apprenticeships?",
      },
      {
        type: "p",
        text: "The Level 2 Upholstery Apprenticeship Standard was reviewed and updated in 2019, but uptake has remained stubbornly low. The British Furniture Confederation has consistently highlighted that furniture and furnishings apprenticeships receive a fraction of the funding and promotional attention given to construction trades, despite the sector employing around 110,000 people across the UK and contributing approximately £10 billion to the economy annually.",
      },
      {
        type: "p",
        text: "Part of the issue is structural. Most upholstery businesses in the UK are small — fewer than ten employees. The administrative burden of taking on an apprentice, managing ESFA funding claims and coordinating with a training provider can be prohibitive for a sole trader or micro-business. The businesses that most need to bring new talent through the door are often the least equipped to navigate the system.",
      },
      {
        type: "highlight",
        text: "The UK upholstery sector loses roughly 800 more experienced workers per year than it trains. At current trends, the skills gap will double by 2030.",
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
        text: "Northern Ireland has a particularly severe shortage in specialist restoration and antique upholstery. Several workshops that have operated for generations are reportedly unable to find anyone to take over when the principal retires — a slow-motion closure that reflects a wider pattern.",
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
          "Structured wage progression: Businesses that publish clear pay bands — showing what a trainee can expect to earn in three, five and seven years — report higher application volumes than those that don't.",
        ],
      },
      {
        type: "h2",
        text: "The Salary Effect",
      },
      {
        type: "p",
        text: "One factor that receives less attention than it should is pay. The national average for an experienced upholsterer in the UK is still below £32,000. In a competitive job market where logistics, construction and engineering roles are advertising at £35,000 to £45,000 for workers with comparable skill and experience, furniture businesses are asking people to choose a passion over a pay cheque.",
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
        text: "The British Furniture Confederation and the Furniture Makers' Company have both called for greater investment in furniture skills at a national level. A cross-industry taskforce has been working with the Institute for Apprenticeships and Technical Education (IfATE) on potential updates to furniture apprenticeship standards. Progress is slow.",
      },
      {
        type: "p",
        text: "In the meantime, the businesses that will survive and grow are those that treat recruitment and retention as a strategic priority rather than an administrative function. That means paying properly, investing in training, and — perhaps most importantly — making it clear to the next generation that furniture making is a skilled, well-compensated career worth choosing.",
      },
      {
        type: "source",
        text: "Sources: British Furniture Confederation Skills Survey 2024; ESFA Apprenticeship Starts Data 2022–23; The Talent Branch vacancy tracking data; IfATE Upholstery Apprenticeship Standard documentation.",
      },
    ],
  },
  {
    slug: "upholstery-salary-report-2026",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "Ask ten different upholsterers what the job pays and you will get ten different answers. Ask their employers what the market rate is and you will get ten more. The UK furniture industry has never had a reliable, up-to-date salary benchmark — until now. Over the past twelve months, The Talent Branch has tracked live placements, active job postings and candidate registrations across the upholstery and furniture sector to build what we believe is the most accurate salary snapshot the UK trade has ever produced.",
      },
      {
        type: "h2",
        text: "How We Built This Data",
      },
      {
        type: "p",
        text: "The data in this report draws on three primary sources: confirmed placement salaries from The Talent Branch's recruitment activity between May 2025 and April 2026; live job posting analysis across Reed, Indeed and LinkedIn for upholstery and furniture manufacturing roles in the UK; and a direct candidate survey of 84 registered upholstery professionals asking them to self-report their current earnings. Where data points were sparse — particularly in senior and specialist roles — we have flagged this and applied wider confidence intervals.",
      },
      {
        type: "highlight",
        text: "UK upholstery salaries have increased by an average of 9.4% since 2023, outpacing general manufacturing wage growth of 6.1% in the same period.",
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
        text: "Workshop leads and production heads with managerial responsibility are earning between £38,000 and £48,000 in most UK regions, with some London bespoke workshops reaching £50,000–£55,000 for the most experienced candidates. At this level, salary is strongly correlated with business size and the ability to manage workflows, train junior staff and communicate directly with clients.",
      },
      {
        type: "h3",
        text: "Self-Employed / Sole Trader Upholsterers",
      },
      {
        type: "p",
        text: "The self-employed picture is more complex. Our candidate survey found that self-employed upholsterers report very wide income ranges — from under £20,000 (typically part-time or those still building a client base) to over £60,000 for well-established sole traders in high-demand urban areas. The median self-reported net income for full-time self-employed upholsterers in our survey was £34,500 — slightly above the employed senior tier, but with significantly higher variability.",
      },
      {
        type: "h2",
        text: "Regional Variation",
      },
      {
        type: "p",
        text: "Geography remains one of the strongest predictors of upholstery salary in the UK. London and the South East consistently sit 20–30% above the national average at every experience level. Northern England, Scotland, Wales and Northern Ireland tend to sit 10–15% below. The Midlands — historically the heartland of UK furniture manufacturing — sits close to the national average, though pockets of demand around High Wycombe and the traditional furniture belt push wages higher.",
      },
      {
        type: "list",
        items: [
          "London / South East: 20–30% above national average",
          "South West: 5–10% above national average",
          "Midlands: at or slightly above national average",
          "North of England: 5–10% below national average",
          "Scotland, Wales, Northern Ireland: 10–15% below national average",
        ],
      },
      {
        type: "h2",
        text: "What the Data Tells Employers",
      },
      {
        type: "p",
        text: "The single most consistent finding in our data is the relationship between salary and hiring success. Employers posting roles at or above the 60th percentile for their region and role type fill those positions in under six weeks on average. Employers posting below the median take three to five months — if they fill them at all.",
      },
      {
        type: "p",
        text: "In a skills shortage, salary is no longer just a cost. It is a competitive advantage. Businesses that recognise this and price their roles accordingly are building teams while their competitors are still writing job adverts.",
      },
      {
        type: "source",
        text: "Sources: The Talent Branch placement data (May 2025–April 2026); Reed, Indeed and LinkedIn job posting analysis; The Talent Branch Candidate Survey (n=84, March 2026); ONS Annual Survey of Hours and Earnings 2024.",
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
        text: "The foam must be prepared before you can mark any button positions. For traditional deep buttoning you need a firm foam — typically 1.8 density or higher — that will hold its shape under the tension of the pulled buttons. Using foam that is too soft produces buttons that sink too deeply and lose their definition over time.",
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
          "Using foam that is too soft: A minimum of 1.8 density is recommended for traditional deep buttoning. Softer foam allows buttons to over-sink.",
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
        text: "Sources: Guild of Traditional Upholsterers technical guidance; Upholstery Society workshop documentation; practical input from registered upholstery professionals.",
      },
    ],
  },
  {
    slug: "pricing-guide-self-employed-upholsterers",
    author: "The Furniture Magazine",
    body: [
      {
        type: "p",
        text: "The most common financial mistake self-employed upholsterers make is not charging enough — and they make it consistently, across years and decades of otherwise successful businesses. Our candidate survey data suggests the average self-employed upholsterer in the UK is undercharging by somewhere between 25% and 35% relative to what the market would support and what their real costs require. That gap — often invisible until a business hits a wall — is the difference between a craft that sustains a comfortable living and one that slowly depletes the person doing it.",
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
        text: "The starting point for any pricing framework is knowing what an hour of your time actually costs your business — not what you want to earn, but what you must earn to cover your real costs and pay yourself fairly. For a typical sole-trader upholsterer in England in 2026, the calculation looks roughly like this:",
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
        text: "Required hourly rate = Total required revenue ÷ billable hours = £49,700 ÷ 1,275 ≈ £39/hour minimum. Most self-employed upholsterers are charging £20–£28.",
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
        text: "Rates should be reviewed at minimum annually, and whenever a material cost changes significantly (foam prices increased by more than 40% between 2021 and 2023; fabric and filling costs have continued to rise). A simple rule: if your supplier invoice for a standard job has increased, your quote price must increase by at least the same percentage. There is no sustainable model in which material costs rise and labour rates stay flat.",
      },
      {
        type: "source",
        text: "Sources: The Talent Branch Candidate Survey 2026; Federation of Small Businesses sole trader cost data; HMRC self-assessment guidance; Furniture Makers' Company business skills resources.",
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
        text: "Flexible Foam: Still Elevated, Stabilising",
      },
      {
        type: "p",
        text: "Flexible polyurethane foam — the most widely used core material in domestic upholstery — saw dramatic price increases from 2021 through to mid-2023, driven by a combination of petrochemical supply disruptions, energy cost inflation at manufacturing facilities, and logistics pressures. UK foam prices roughly doubled between Q1 2021 and Q3 2023.",
      },
      {
        type: "p",
        text: "The good news is that since late 2023, prices have stabilised. As of Q1 2026, benchmark foam grades (HR40 and HR35, the most common seat grades) are approximately 15–20% above their 2020 baseline, but have shown no significant upward movement in the past 18 months. CMHR (Combustion Modified High Resilience) fire-rated foam, required for domestic upholstery under UK fire safety regulations, follows a similar pattern.",
      },
      {
        type: "highlight",
        text: "Flexible foam is approximately 15–20% above 2020 prices but has been stable since late 2023. Budget for the current price — don't revert to pre-2022 assumptions.",
      },
      {
        type: "h2",
        text: "Timber and Frame Materials: Back to Near-Normal",
      },
      {
        type: "p",
        text: "Kiln-dried softwood for furniture frames — primarily the 50mm × 25mm and 50mm × 50mm sections used in basic upholstery framing — spiked dramatically in 2021 and 2022 as global construction demand collided with supply disruptions. By 2024, this had substantially normalised. As of early 2026, standard construction-grade and joinery-grade timber is broadly in line with historical pricing trends, with year-on-year increases of around 2–4% — consistent with general producer price inflation.",
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
        text: "Elasticated webbing — the dominant support system in modern domestic upholstery — has tracked general polymer and elastomer price movements and sits approximately 8–12% above 2020 levels. Traditional jute webbing, used in period and restoration work, has seen higher increases due to reduced UK demand making supply less competitive; expect to pay 15–25% more than in 2020.",
      },
      {
        type: "p",
        text: "Coil springs and sinuous (zig-zag) wire springs have also tracked steel price movements. After significant increases in 2022, steel-based materials have partially retreated. Spring materials are currently around 10–15% above their 2020 baseline.",
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
        text: "The practical implication is straightforward: always price from current supplier invoices or recently confirmed pricing, not from memory or historical estimates. For jobs being quoted in spring 2026, the key positions are:",
      },
      {
        type: "list",
        items: [
          "Foam (HR40, standard grades): check current trade price — budget around 15–20% above your 2020 baseline",
          "Softwood timber (frame work): broadly normalised; standard pricing with modest annual inflation",
          "Elasticated webbing: approximately 10% above 2020 baseline",
          "Jute webbing and natural fibre materials: 15–25% above 2020",
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
        text: "Sources: UK producer price data (ONS PPI series); CPA (Construction Products Association) materials cost monitoring; trade supplier commentary collected Q1 2026; BMWA (British Woven and Knitted Fabrics Alliance) market reports.",
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
        text: "In our experience, approximately 65% of sagging sofa seats are a webbing or sinuous spring problem — not a foam problem. The foam looks compressed because the platform underneath it has dropped.",
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
        text: "Sources: Upholstery Society technical training materials; Guild of Traditional Upholsterers workshop guidance; practical diagnostic input from working upholsterers registered with The Talent Branch.",
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
        text: "The minimum requirement for ranking well: a complete profile with at least ten photographs, ten or more genuine reviews, regular updates (Google treats activity as a quality signal), and correct categorisation (Upholsterer; Furniture Repair Shop).",
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
        text: "Sources: The Talent Branch candidate and client survey data 2026; FIRA (Furniture Industry Research Association) self-employment survey; practical input from self-employed upholsterers registered with The Talent Branch.",
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
        text: "Professional leather colour kits (Renapur, Leather Magic, Uniters and others) provide a workable range of base colours and additives. Starting from a close base and adjusting is significantly more controllable than mixing from primaries.",
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
        text: "Leather repair commands a genuine premium because of the skill barrier it represents. A scuff repair on a car seat that takes 45 minutes of skilled work typically prices between £80 and £150 depending on the degree of difficulty and location. Full seat recolouring on a three-seat sofa typically runs from £350 to £600. These rates are justifiable and the market supports them — the key is delivering a result that is genuinely invisible.",
      },
      {
        type: "p",
        text: "Upholsterers who build leather repair as a specialism alongside their core work report that it becomes one of the most reliable revenue streams in their business — high value per hour, relatively low materials cost, and a clientele who appreciate visible quality.",
      },
      {
        type: "source",
        text: "Sources: Leather Conservation Centre technical guidance; Leather Repair Academy course materials; Uniters Professional leather finishing documentation; practical input from upholsterers registered with The Talent Branch.",
      },
    ],
  },
]

export function getArticleContent(slug: string): ArticleContent | undefined {
  return articleContent.find((a) => a.slug === slug)
}
