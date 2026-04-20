"use client"

interface SubscribeFormProps {
  variant?: "hero" | "footer"
}

export default function SubscribeForm({ variant = "hero" }: SubscribeFormProps) {
  const isFooter = variant === "footer"

  return (
    <form
      style={{ display: "flex", flexWrap: "wrap", gap: "0" }}
      onSubmit={(e) => {
        e.preventDefault()
        const form = e.currentTarget
        const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
        if (email) {
          // TODO: connect to Beehiiv subscribe API
          alert(`Thanks! You're subscribed at ${email}`)
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
          minWidth: "200px",
          padding: "13px 16px",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "14px",
          border: "none",
          outline: "none",
          backgroundColor: isFooter ? "#fff" : "rgba(255,255,255,0.12)",
          color: isFooter ? "#1A1A1A" : "#F5F1ED",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#8B7355",
          color: "#fff",
          padding: "13px 24px",
          border: "none",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 700,
          fontSize: "12px",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Subscribe Free
      </button>
    </form>
  )
}
