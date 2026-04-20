"use client"

const COPPER = "#B07040"
const GREEN  = "#2A4A35"
const CREAM  = "#F2EBD9"

interface SubscribeFormProps {
  variant?: "hero" | "footer"
}

export default function SubscribeForm({ variant = "hero" }: SubscribeFormProps) {
  const isFooter = variant === "footer"

  return (
    <form
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0",
        ...(isFooter ? { maxWidth: "480px", margin: "0 auto" } : {}),
      }}
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.currentTarget
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
        if (email) {
          // TODO: connect to Beehiiv subscribe API
          alert(`Thanks! We'll be in touch at ${email}`)
          form.reset()
        }
      }}
    >
      <input
        name="email"
        type="email"
        placeholder="Your email address"
        required
        style={{
          flex: 1,
          minWidth: "220px",
          padding: "14px 16px",
          fontFamily: "Calibri, Arial, sans-serif",
          fontSize: "15px",
          border: "none",
          outline: "none",
          backgroundColor: isFooter ? "#fff" : "rgba(255,255,255,0.15)",
          color: isFooter ? GREEN : CREAM,
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: isFooter ? GREEN : COPPER,
          color: "#fff",
          padding: "14px 28px",
          border: "none",
          fontFamily: "Calibri, Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "14px",
          letterSpacing: "0.05em",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        SUBSCRIBE FREE
      </button>
    </form>
  )
}
