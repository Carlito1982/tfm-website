import Link from "next/link"

const INK = "#1A1A1A"
const CHARCOAL = "#2C2C2C"
const COPPER = "#8B7355"
const MUTED = "#6B6866"
const BORDER = "#E2DDD8"
const PAPER = "#FAFAF8"

// Founding Partner copy, from issue_001_content.py (PARTNER, PARTNER_LINK).
export const PARTNER_TITLE = "Founding Partner slot"
export const PARTNER_TEXT =
  "This space is reserved for the ten Founding Partners of The Furniture Magazine: one fabric house, one foam converter, one machinery supplier, one tools and sundries supplier, one timber merchant, one finishing brand, one training provider, one software or services firm, one event and one publisher. Founding Partners appear here in every issue for the first twelve issues and three long-form editions, and receive a monthly report of the clicks and enquiries their placement produced. Details at the link below."
export const PARTNER_LINK_TEXT = "Founding Partner Programme: the one-page terms"

type Props = {
  size?: "standard" | "small"
}

export default function AdPanel({ size = "standard" }: Props) {
  const small = size === "small"
  return (
    <div
      style={{
        backgroundColor: PAPER,
        border: `1px solid ${BORDER}`,
        padding: small ? "18px 20px" : "24px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: MUTED,
          marginBottom: "12px",
        }}
      >
        Advertisement
      </p>
      <p
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: small ? "17px" : "20px",
          fontWeight: 400,
          color: INK,
          lineHeight: 1.3,
          marginBottom: "10px",
        }}
      >
        {PARTNER_TITLE}
      </p>
      {!small && (
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            color: CHARCOAL,
            lineHeight: 1.65,
            marginBottom: "14px",
          }}
        >
          {PARTNER_TEXT}
        </p>
      )}
      {small && (
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            color: CHARCOAL,
            lineHeight: 1.6,
            marginBottom: "12px",
          }}
        >
          Ten places, one per category, for the first twelve issues and three long-form editions.
        </p>
      )}
      <Link
        href="/founding-partners"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          color: COPPER,
          textDecoration: "none",
          letterSpacing: "0.03em",
        }}
      >
        {PARTNER_LINK_TEXT}
      </Link>
    </div>
  )
}
