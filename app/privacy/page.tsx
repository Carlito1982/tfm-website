import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Furniture Magazine, a trading name of The Talent Branch Ltd, collects and uses personal data for its newsletter and website.",
}

const GREEN  = "#1A1A1A"
const CREAM  = "#F5F1ED"
const COPPER = "#8B7355"
const BLACK  = "#1A1A1A"

const h2: React.CSSProperties = { fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "22px", color: BLACK, margin: "36px 0 12px" }
const p: React.CSSProperties = { fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#333", lineHeight: 1.75, marginBottom: "14px" }

export default function PrivacyPage() {
  return (
    <div>
      <div style={{ backgroundColor: GREEN, padding: "72px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: COPPER, fontWeight: "bold", textTransform: "uppercase", marginBottom: "10px" }}>
            Legal
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", color: CREAM }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", color: "#8BA895", marginTop: "12px" }}>
            Last updated 25 September 2026
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <h2 style={h2}>Who we are</h2>
        <p style={p}>
          The Furniture Magazine is a trading name of The Talent Branch Ltd, registered in England and Wales under company number 09615777, registered office 23a High Street, Weaverham, Northwich CW8 3HA. The Talent Branch Ltd is the data controller for the personal data described here. You can contact us at editor@thefurnituremagazine.com.
        </p>
        {/* TODO(Carlos): add "The Talent Branch Ltd is registered with the Information Commissioner's Office, registration number ZA..." here once the number is confirmed.
            On 25 Sep 2026 the ICO register search (ico.org.uk, ESDWebPages/Search) returned no entry for "The Talent Branch", "The Talent Branch Ltd",
            "Talent Branch" or "The Furniture Magazine", and none of the 9 entries at postcode CW8 3HA is The Talent Branch Ltd. Do not publish a number that has not been seen on the register. */}

        <h2 style={h2}>What we collect and why</h2>
        <p style={p}>
          When you subscribe to the newsletter on this website we collect your email address only. It is passed to beehiiv, our newsletter service, together with a note that the sign-up came from this website. beehiiv then emails you a link to confirm, and you are not added to the list until you confirm. We use your address to send you the newsletter you asked for, and beehiiv's reports on opens and clicks to understand which parts of it readers find useful. The lawful basis is your consent, which you give by subscribing and confirming your email address, and which you can withdraw at any time using the one-click unsubscribe link at the foot of every issue.
        </p>
        <p style={p}>
          The website has no contact or enquiry forms. When you contact us by email, enquire about a vacancy or about advertising, or send us an event or a contribution, we keep your message and contact details for as long as needed to deal with it. The lawful basis is our legitimate interest in responding to you and running the publication.
        </p>
        <p style={p}>
          The website uses Vercel Web Analytics to count visits and see which pages are read. It does not set cookies and does not store your IP address; it records a temporary, anonymous hash of the visit that cannot be linked to a named individual. We do not sell personal data and we do not use it for automated decisions about you.
        </p>

        <h2 style={h2}>Who processes it for us</h2>
        <p style={p}>
          The newsletter is sent through beehiiv, which stores subscriber data on our behalf. Our website is hosted on Vercel and our records are held on Supabase, both under contracts that meet UK GDPR requirements. Email to and from us is handled by Google Workspace. Some of these providers process data outside the UK under recognised safeguards such as the UK International Data Transfer Agreement or adequacy decisions.
        </p>

        <h2 style={h2}>Advertisers and tracked links</h2>
        <p style={p}>
          Links to other websites in the newsletter and on this site pass through our own link service (addresses beginning thefurnituremagazine.com/go/) so that we can count clicks and tell an advertiser how many readers clicked. For every click we record the time, the link, the type of device (mobile, tablet or desktop, worked out from your browser but without keeping the browser details themselves), the website you came from and your country. For clicks on advertisements we also record a scrambled (hashed) form of your IP address, using a value that changes every day so it cannot be used to follow you over time, and, where the link in your newsletter carries it, your beehiiv subscriber reference. For other links we record no IP address and no subscriber reference. Advertisers receive counts, never your identity.
        </p>

        <h2 style={h2}>Job listings</h2>
        <p style={p}>
          Vacancies on this site are managed by The Talent Branch Ltd and the job pages read them from The Talent Branch's vacancy records. Reading a job page does not send anything about you to those records. If you respond to a vacancy you do so by email to The Talent Branch, and your details are used only for that recruitment purpose.
        </p>

        <h2 style={h2}>How long we keep it</h2>
        <p style={p}>
          Subscriber data is kept while you are subscribed and removed within 30 days of you unsubscribing, apart from a suppression record so that we do not email you again. Correspondence is kept for up to two years. Click records are kept for up to 24 months.
        </p>

        <h2 style={h2}>Your rights</h2>
        <p style={p}>
          You can ask for a copy of the personal data we hold about you, ask us to correct or delete it, object to our use of it, or withdraw consent at any time by emailing editor@thefurnituremagazine.com. If you are unhappy with how we handle your data you can complain to the Information Commissioner's Office at ico.org.uk.
        </p>

        <h2 style={h2}>Cookies</h2>
        <p style={p}>
          This site does not set cookies. Visit counting is cookieless, and no advertising or analytics cookies are used. The home page keeps a small number in your browser so that it can show you a different story next time; it is not a cookie and is never sent to us. Videos on our Bench pages are played from YouTube in its privacy-enhanced mode, and YouTube may store information in your browser when you play one. Full details are on our <Link href="/cookies" style={{ color: COPPER }}>cookies page</Link>.
        </p>
      </div>
    </div>
  )
}
