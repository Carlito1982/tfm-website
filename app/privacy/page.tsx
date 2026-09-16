import type { Metadata } from "next"

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
            Last updated 16 September 2026
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <h2 style={h2}>Who we are</h2>
        <p style={p}>
          The Furniture Magazine is a trading name of The Talent Branch Ltd, registered in England and Wales under company number 09615777, registered office 23a High Street, Weaverham, Northwich CW8 3HA. The Talent Branch Ltd is the data controller for the personal data described here. You can contact us at editor@thefurnituremagazine.com.
        </p>

        <h2 style={h2}>What we collect and why</h2>
        <p style={p}>
          When you subscribe to the newsletter we collect your email address and, if you choose to give it, your name and the type of work you do. We use this to send you the newsletter you asked for and to understand which parts of it readers find useful. The lawful basis is your consent, which you give by subscribing and confirming your email address, and which you can withdraw at any time using the unsubscribe link in every email.
        </p>
        <p style={p}>
          When you contact us by email, enquire about a vacancy or an advertiser, or submit an event or a contribution, we keep your message and contact details for as long as needed to deal with it. The lawful basis is our legitimate interest in responding to you and running the publication.
        </p>
        <p style={p}>
          The website uses Google Analytics to count visits and see which pages are read. Google Analytics sets cookies and processes a pseudonymous identifier and your IP address; we have IP anonymisation switched on and do not link analytics data to named individuals. We do not sell personal data and we do not use it for automated decisions about you.
        </p>

        <h2 style={h2}>Who processes it for us</h2>
        <p style={p}>
          The newsletter is sent through beehiiv, which stores subscriber data on our behalf. Our website is hosted on Vercel and our records are held on Supabase, both under contracts that meet UK GDPR requirements. Email to and from us is handled by Google Workspace and ImprovMX. Some of these providers process data outside the UK under recognised safeguards such as the UK International Data Transfer Agreement or adequacy decisions.
        </p>

        <h2 style={h2}>Advertisers and tracked links</h2>
        <p style={p}>
          Links to advertisers in the newsletter pass through our own link service so that we can tell an advertiser how many readers clicked. We record the time of the click, a hashed form of your IP address, your browser type and, where available, your subscriber reference. Advertisers receive counts, never your identity, unless you choose to fill in an enquiry form that names them as the recipient.
        </p>

        <h2 style={h2}>Job listings</h2>
        <p style={p}>
          Vacancies on this site are managed by The Talent Branch Ltd. If you respond to one, your details are handled under The Talent Branch privacy notice at thetalentbranch.com and used only for that recruitment purpose.
        </p>

        <h2 style={h2}>How long we keep it</h2>
        <p style={p}>
          Subscriber data is kept while you are subscribed and removed within 30 days of you unsubscribing, apart from a suppression record so that we do not email you again. Correspondence is kept for up to two years. Click data is kept for 24 months in aggregate form.
        </p>

        <h2 style={h2}>Your rights</h2>
        <p style={p}>
          You can ask for a copy of the personal data we hold about you, ask us to correct or delete it, object to our use of it, or withdraw consent at any time by emailing editor@thefurnituremagazine.com. If you are unhappy with how we handle your data you can complain to the Information Commissioner's Office at ico.org.uk.
        </p>

        <h2 style={h2}>Cookies</h2>
        <p style={p}>
          The site sets cookies needed for it to work and Google Analytics cookies for visit counting. No advertising cookies are set by this site. You can block analytics cookies in your browser settings or with the Google Analytics opt-out add-on, and the site will work normally.
        </p>
      </div>
    </div>
  )
}
