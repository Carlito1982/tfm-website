export default function SectionHeader({ kicker, title, intro }: { kicker: string; title: string; intro: string }) {
  return (
    <div style={{ backgroundColor: "#1A1A1A", padding: "56px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "#B8977A", textTransform: "uppercase", marginBottom: "10px" }}>
          {kicker}
        </p>
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, color: "#F5F1ED", lineHeight: 1.1 }}>
          {title}
        </h1>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", color: "rgba(245,241,237,0.75)", marginTop: "14px", maxWidth: "660px", lineHeight: 1.65 }}>
          {intro}
        </p>
      </div>
    </div>
  )
}
