import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { issues } from "@/data/issues"
import { getIssueContents, type IssueItem, type IssueLink } from "@/data/issueContents"
import SideRail from "@/components/SideRail"
import AdPanel from "@/components/AdPanel"
import { isFutureDate } from "@/lib/publishDate"

const INK = "#1A1A1A"
const CHARCOAL = "#2C2C2C"
const CREAM = "#F5F1ED"
const COPPER = "#8B7355"
const MUTED = "#6B6866"
const BORDER = "#E2DDD8"
const PAPER = "#FAFAF8"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const issue = issues.find((i) => i.slug === slug)
  if (!issue) return { title: "Issue not found" }
  return {
    title: issue.title,
    description: issue.excerpt,
    // Not sent yet: keep the page reachable directly but out of search until it sends.
    ...(isFutureDate(issue.date) ? { robots: { index: false, follow: false } } : {}),
  }
}

export function generateStaticParams() {
  return issues.map((i) => ({ slug: i.slug }))
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

function ItemLink({ link }: { link: IssueLink }) {
  const style = {
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    color: COPPER,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  } as const
  if (link.external || link.href.startsWith("mailto:")) {
    return (
      <a href={link.href} style={style} {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {link.text}
      </a>
    )
  }
  return (
    <Link href={link.href} style={style}>
      {link.text}
    </Link>
  )
}

function Item({ item }: { item: IssueItem }) {
  return (
    <div style={{ padding: "18px 0", borderTop: `1px solid ${BORDER}` }}>
      <p
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "20px",
          fontWeight: 400,
          color: INK,
          lineHeight: 1.3,
          marginBottom: item.text || item.link ? "8px" : 0,
        }}
      >
        {item.title}
      </p>
      {item.text?.map((t, i) => (
        <p
          key={i}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "15px",
            lineHeight: 1.7,
            color: CHARCOAL,
            marginBottom: "10px",
          }}
        >
          {t}
        </p>
      ))}
      {item.link && <ItemLink link={item.link} />}
      {item.sources && (
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: MUTED, lineHeight: 1.6, marginTop: "10px" }}>
          {item.sources}
        </p>
      )}
    </div>
  )
}

export default async function IssuePage({ params }: Props) {
  const { slug } = await params
  const issue = issues.find((i) => i.slug === slug)
  if (!issue) notFound()
  const contents = getIssueContents(slug)

  return (
    <div style={{ backgroundColor: CREAM }}>
      <div style={{ backgroundColor: INK, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <Link
            href="/issues"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COPPER,
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "16px",
            }}
          >
            All issues
          </Link>
          <h1
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 400,
              color: CREAM,
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            {issue.title}
          </h1>
          {contents && (
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(17px, 2.2vw, 22px)", fontWeight: 400, color: "rgba(245,241,237,0.85)", lineHeight: 1.4, maxWidth: "760px", marginBottom: "12px" }}>
              {contents.subject}
            </p>
          )}
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "rgba(245,241,237,0.6)" }}>
            {issue.beehiivUrl ? `Sent ${formatDate(issue.date)}` : "Launching autumn 2026"}
            {issue.beehiivUrl && (
              <>
                {" · "}
                <a href={issue.beehiivUrl} target="_blank" rel="noopener noreferrer" style={{ color: COPPER, textDecoration: "underline" }}>
                  Read the email version
                </a>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="two-col">
        <div className="two-col-main">
          {!contents ? (
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", color: CHARCOAL, lineHeight: 1.7 }}>
              The contents of this issue will appear here once it has been sent.
            </p>
          ) : (
            <>
              {contents.opening.map((t, i) => (
                <p key={i} style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", lineHeight: 1.75, color: CHARCOAL, marginBottom: "16px" }}>
                  {t}
                </p>
              ))}

              {contents.sections.map((section) => (
                <div key={section.label}>
                  <section style={{ backgroundColor: PAPER, border: `1px solid ${BORDER}`, padding: "20px 24px 6px", marginTop: "28px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: COPPER,
                        marginBottom: "12px",
                      }}
                    >
                      {section.label}
                    </p>
                    {section.items.map((item, i) => (
                      <Item key={i} item={item} />
                    ))}
                    {section.note && (
                      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: MUTED, lineHeight: 1.6, padding: "12px 0 14px", borderTop: `1px solid ${BORDER}` }}>
                        {section.note}
                      </p>
                    )}
                  </section>
                  {section.adAfter && (
                    <div style={{ marginTop: "28px" }}>
                      <AdPanel />
                    </div>
                  )}
                </div>
              ))}

              <div style={{ marginTop: "36px", paddingTop: "24px", borderTop: `1px solid ${BORDER}` }}>
                {contents.signoff.map((t, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px", lineHeight: 1.7, color: CHARCOAL, marginBottom: "10px" }}>
                    {t}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>

        <SideRail />
      </div>
    </div>
  )
}
