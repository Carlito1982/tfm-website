import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "The Furniture Magazine — UK Trade Publication",
    template: "%s | The Furniture Magazine",
  },
  description:
    "The UK's dedicated trade publication for the furniture and upholstery industry. Salary data, craft technique, industry news and business advice — free weekly newsletter.",
  keywords: [
    "furniture industry UK",
    "upholstery trade magazine",
    "UK furniture jobs",
    "upholstery salary UK",
    "furniture news",
    "cabinet making UK",
    "upholstery apprenticeship",
    "furniture trade publication",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.thefurnituremagazine.com",
    siteName: "The Furniture Magazine",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
