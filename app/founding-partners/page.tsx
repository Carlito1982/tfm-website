import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Founding Partner Programme",
  description: "The one-page terms of The Furniture Magazine's Founding Partner Programme: ten supplier partners, one per category, twelve weekly issues and three monthly editions at no charge, with a monthly report built from the magazine's own tracking.",
}

const INK    = "#1A1A1A"
const CREAM  = "#F5F1ED"
const COPPER = "#8B7355"

const h2: React.CSSProperties = { fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px", color: INK, margin: "36px 0 12px" }
const p: React.CSSProperties = { fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#333", lineHeight: 1.75, marginBottom: "14px" }
const li: React.CSSProperties = { ...p, marginBottom: "10px" }
const th: React.CSSProperties = { fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: INK, textAlign: "left", padding: "10px 12px", background: CREAM, borderBottom: "1px solid #E6E0D8" }
const td: React.CSSProperties = { fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "#333", padding: "10px 12px", borderBottom: "1px solid #E6E0D8", verticalAlign: "top" }

export default function FoundingPartnersPage() {
  return (
    <div>
      <div style={{ backgroundColor: INK, padding: "72px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: COPPER, fontWeight: "bold", textTransform: "uppercase", marginBottom: "10px" }}>
            Advertising
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", color: CREAM }}>
            Founding Partner Programme
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#BDB5AA", marginTop: "12px" }}>
            One page. Ten partners, one per category. Valid for agreements made before 31 October 2026.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <p style={p}>
          The Furniture Magazine launches on Tuesday 29 September 2026 to a list built by invitation from The Talent Branch's network of more than 570 tradespeople and 180 furniture businesses. We do not quote readership figures we cannot evidence. Instead, ten suppliers, one per category, are offered a free term in exchange for the data that proves what a placement is worth.
        </p>
        <p style={p}>
          Categories: upholstery fabric, foam and fillings, machinery, tools and sundries, timber and board, finishing, training, software and services, events, publishing.
        </p>

        <h2 style={h2}>What the partner receives</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={li}>A placement in every weekly issue for twelve consecutive issues from the first issue after signing, and in the next three monthly editions: fifty words, one image, one tracked link and one promo code, labelled Advertisement at the top of the item.</li>
          <li style={li}>Category exclusivity for the term: no other company in the same category appears in the same issue.</li>
          <li style={li}>A monthly report on the first working day showing sends, opens, clicks on the partner link, enquiries received through the magazine, promo-code redemptions and cost per lead at rate-card price. The report is generated from the magazine's own tracking, not from screenshots.</li>
          <li style={li}>A review call at week six and at week twelve.</li>
          <li style={li}>Every invoice shows the published rate-card price for each placement and a 100% Founding Partner discount. Amount payable for the term: nil.</li>
        </ul>

        <h2 style={h2}>What the partner agrees to</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={li}>Supply a destination web page, a promo code the partner will honour, and the fifty words and image, or approve the magazine's draft, at least three working days before the first issue.</li>
          <li style={li}>Complete a three-question return each month (enquiries received, orders attributed, approximate value). Where no return is made, the report uses the magazine's tracked data only.</li>
          <li style={li}>Send one email about The Furniture Magazine to the partner's own trade customers during the term, using wording supplied by the magazine.</li>
          <li style={li}>Permit the magazine to name the partner as a Founding Partner and to quote the week-twelve results, subject to the partner's approval of the exact wording.</li>
        </ul>

        <h2 style={h2}>What happens at week twelve</h2>
        <p style={p}>
          The week-twelve report states cost per lead at rate-card price. Where that figure beats the partner's cost per lead on any comparable channel the partner chooses to share, or the placement has produced five or more enquiries attributable through the tracked link, promo code or magazine enquiry form, the partner may continue at the founder rate below for a further twelve months. Where it has not, the arrangement ends with no charge and no obligation on either side. Nothing renews automatically and nothing is invoiced without the partner's written agreement.
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 12px" }}>
          <thead>
            <tr><th style={th}>Placement</th><th style={th}>Published rate (current)</th><th style={th}>Founder rate after week twelve</th></tr>
          </thead>
          <tbody>
            <tr><td style={td}>Weekly partner slot, per issue</td><td style={td}>£150</td><td style={td}>£112.50 (25% below the published rate for twelve months)</td></tr>
            <tr><td style={td}>Monthly edition feature, per edition</td><td style={td}>Published with the full rate card</td><td style={td}>25% below the published rate for twelve months</td></tr>
            <tr><td style={td}>Job listing, 30 days</td><td style={td}>£95</td><td style={td}>£71.25</td></tr>
            <tr><td style={td}>Event promotion package</td><td style={td}>£200</td><td style={td}>£150</td></tr>
          </tbody>
        </table>
        <p style={{ ...p, fontSize: "13px", color: "#6B6B6B" }}>
          Published rates are those shown on the Advertise page on 16 September 2026 and apply to the subscriber tier in force when the full rate card is published. Rates exclude VAT where applicable.
        </p>

        <h2 style={h2}>Second cohort</h2>
        <p style={p}>
          Once ten Founding Partners are in place, further partners are offered the same placements and reporting at a nominal £25 per month for the twelve-week term, on the same conditions.
        </p>

        <h2 style={h2}>Standards</h2>
        <p style={p}>
          All paid items are labelled in line with the CAP Code. The magazine does not publish claims it cannot source, and will not run partner copy containing statistics, awards or endorsements that cannot be evidenced. Reader data is never shared with partners; the report contains counts, not names. Either party may end the arrangement on fourteen days' written notice.
        </p>

        <h2 style={h2}>To take a place</h2>
        <p style={p}>
          Email editor@thefurnituremagazine.com with the category you want. A yes by reply is enough; the copy deadline and your tracked link follow.
        </p>
      </div>
    </div>
  )
}
