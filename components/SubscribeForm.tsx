"use client"

import { useState } from "react"

interface SubscribeFormProps {
  variant?: "hero" | "footer"
}

export default function SubscribeForm({ variant = "hero" }: SubscribeFormProps) {
  const isFooter = variant === "footer"
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
    if (!email) return

    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        const data = await res.json()
        setErrorMsg(data.error || "Something went wrong. Try again.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          padding: "14px 20px",
          backgroundColor: isFooter ? "rgba(74,107,92,0.15)" : "rgba(245,241,237,0.12)",
          borderLeft: "3px solid #4A6B5C",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            color: isFooter ? "#1A1A1A" : "#F5F1ED",
            lineHeight: 1.5,
          }}
        >
          You&rsquo;re subscribed. First issue lands in your inbox shortly.
        </p>
      </div>
    )
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexWrap: "wrap", gap: "0" }}
      >
        <input
          name="email"
          type="email"
          placeholder="Your email address"
          required
          disabled={status === "loading"}
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
            opacity: status === "loading" ? 0.6 : 1,
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            backgroundColor: status === "loading" ? "#6B6B5A" : "#8B7355",
            color: "#fff",
            padding: "13px 24px",
            border: "none",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? "Subscribing…" : "Subscribe Free"}
        </button>
      </form>

      {status === "error" && (
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "12px",
            color: "#C0392B",
            marginTop: "8px",
          }}
        >
          {errorMsg}
        </p>
      )}
    </div>
  )
}
