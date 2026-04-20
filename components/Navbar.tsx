"use client"

import Link from "next/link"
import { useState } from "react"

const links = [
  { href: "/", label: "Home" },
  { href: "/issues", label: "Issues" },
  { href: "/jobs", label: "Jobs" },
  { href: "/events", label: "Events" },
  { href: "/advertise", label: "Advertise" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ backgroundColor: "#F2EBD9", borderBottom: "1px solid #D4C9B0" }}>
      {/* Top bar */}
      <div
        style={{
          backgroundColor: "#2A4A35",
          color: "#F2EBD9",
          fontSize: "12px",
          textAlign: "center",
          padding: "6px 16px",
          letterSpacing: "0.05em",
          fontFamily: "Calibri, Arial, sans-serif",
        }}
      >
        The UK&rsquo;s trade publication for the furniture and upholstery industry
      </div>

      {/* Main nav */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                fontWeight: "bold",
                color: "#2A4A35",
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              THE FURNITURE
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "13px",
                color: "#B07040",
                letterSpacing: "0.18em",
                lineHeight: 1,
                marginTop: "2px",
              }}
            >
              MAGAZINE
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <nav
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "14px",
                color: "#1A1A1A",
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
              backgroundColor: "#2A4A35",
              color: "#F2EBD9",
              padding: "8px 20px",
              fontFamily: "Calibri, Arial, sans-serif",
              fontSize: "13px",
              fontWeight: "bold",
              letterSpacing: "0.05em",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            SUBSCRIBE FREE
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
          }}
          aria-label="Toggle menu"
        >
          <div style={{ width: "24px", height: "2px", background: "#2A4A35", marginBottom: "5px" }} />
          <div style={{ width: "24px", height: "2px", background: "#2A4A35", marginBottom: "5px" }} />
          <div style={{ width: "24px", height: "2px", background: "#2A4A35" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "#2A4A35",
            padding: "16px 24px 24px",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "#F2EBD9",
                fontFamily: "Calibri, Arial, sans-serif",
                fontSize: "16px",
                padding: "10px 0",
                borderBottom: "1px solid #3D6B4F",
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
              backgroundColor: "#B07040",
              color: "#fff",
              padding: "12px 20px",
              marginTop: "16px",
              fontFamily: "Calibri, Arial, sans-serif",
              fontWeight: "bold",
              letterSpacing: "0.05em",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            SUBSCRIBE FREE
          </Link>
        </div>
      )}
    </header>
  )
}
