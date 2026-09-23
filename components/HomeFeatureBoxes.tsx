import Link from "next/link"

// Two highlighted boxes under Start Here: the first issue, and the ONS workforce figures.
// Issue wording follows cadence rule 15: no weekday, no send time.
export default function HomeFeatureBoxes() {
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "44px 28px 8px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: 24 }}>
        <div className="tfm-callout tfm-callout--dark" style={{ display: "flex", flexDirection: "column" }}>
          <p className="tfm-callout__kicker">Issue 001</p>
          <p className="tfm-callout__title">The first issue is on its way</p>
          <p className="tfm-callout__body" style={{ flex: 1 }}>
            A conversation with Master Upholsterer Franco Marinelli, a Bench video from a working maker, the trade news that
            matters to a small workshop, and live jobs. Free, every fortnight.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href="/#subscribe" className="tfm-button">Subscribe free</Link>
          </div>
        </div>
        <div className="tfm-callout" style={{ display: "flex", flexDirection: "column" }}>
          <p className="tfm-callout__kicker">The trade in numbers</p>
          <p className="tfm-callout__title">Nearly half of the UK&rsquo;s upholsterers are self-employed</p>
          <p className="tfm-callout__body" style={{ flex: 1 }}>
            About 12,800 people work as upholsterers in the UK and 36,100 as furniture makers. Four in ten upholsterers are 55
            or older. What the official figures say about the trade.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href="/articles/uk-upholstery-workforce-ons-2026" className="tfm-button tfm-button--outline">Read the figures</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
