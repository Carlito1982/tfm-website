import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

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
  verification: {
    google: "3ZpX-KmZxAco98Ehz2lYJ1CtqmJ_jqUWOFu-jGclGng",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
