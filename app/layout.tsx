import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Replace with your real GA4 Measurement ID once created in Google Analytics
// Create at: analytics.google.com → Admin → Create Property → Web stream
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""

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
        {/* Google Analytics 4 — fires only when GA_ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
