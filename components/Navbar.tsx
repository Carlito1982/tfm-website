"use client"

import Link from "next/link"
import { useState } from "react"

const links = [
  { href: "/issues", label: "Issues" },
  { href: "/jobs", label: "Jobs" },
  { href: "/events", label: "Events" },
  { href: "/advertise", label: "Advertise" },
  { href: "/about", label: "About" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        backgroundColor: "#F5F1ED",
        borderBottom: "1px solid #E2DDD8",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#1A1A1A",
                letterSpacing: "0.04em",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              The Furniture
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "9px",
                color: "#8B7355",
                letterSpacing: "0.28em",
                lineHeight: 1,
                marginTop: "4px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Magazine
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: "32px", alignItems: "center" }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                color: "#2C2C2C",
                letterSpacing: "0.03em",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#subscribe"
            style={{
              backgroundColor: "#1A1A1A",
              color: "#F5F1ED",
              padding: "9px 20px",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Subscribe Free
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Toggle menu"
        >
          <div style={{ width: "22px", height: "2px", background: "#1A1A1A" }} />
          <div style={{ width: "22px", height: "2px", background: "#1A1A1A" }} />
          <div style={{ width: "22px", height: "2px", background: "#1A1A1A" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "#1A1A1A",
            padding: "16px 28px 28px",
            borderTop: "1px solid #333",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "#F5F1ED",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "15px",
                padding: "12px 0",
                borderBottom: "1px solid #2C2C2C",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#subscribe"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              backgroundColor: "#8B7355",
              color: "#fff",
              padding: "13px 20px",
              marginTop: "20px",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Subscribe Free
          </Link>
        </div>
      )}
    </header>
  )
}
