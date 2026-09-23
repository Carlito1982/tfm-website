import Link from "next/link"

// Two highlighted boxes under Start Here: the first issue, and the rate calculator.
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
          <p className="tfm-callout__kicker">Tool</p>
          <p className="tfm-callout__title">What should you charge an hour?</p>
          <p className="tfm-callout__body" style={{ flex: 1 }}>
            Put in the income you want to take home, what the workshop costs to run and the hours you can actually bill.
            The rate calculator shows the hourly rate that covers all three, and what a job should cost.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href="/tools/rate-calculator" className="tfm-button tfm-button--outline">Work out your rate</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
