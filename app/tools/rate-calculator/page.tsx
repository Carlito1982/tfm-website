import type { Metadata } from "next"
import Link from "next/link"
import RateCalculator from "@/components/RateCalculator"
import SectionHeader from "@/components/SectionHeader"

export const metadata: Metadata = {
  title: "Upholstery rate calculator",
  description:
    "Work out the hourly rate that covers your pay, your workshop costs and a margin, then price a job. Free, for upholsterers and furniture makers.",
  alternates: { canonical: "/tools/rate-calculator" },
}

export default function RateCalculatorPage() {
  return (
    <div style={{ backgroundColor: "#F5F1ED" }}>
      <SectionHeader
        kicker="Tool"
        title="What should you charge an hour?"
        intro="Put in what you want to earn, what the workshop costs to run and the hours you can really bill. The calculator does the rest. Nothing you type leaves your browser."
      />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 16px 24px" }}>
        <p className="calc-example">The figures shown are examples only. Replace every one with your own.</p>
        <RateCalculator />
      </div>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "24px 16px 80px" }}>
        <h2 className="section-rule">How the sum works</h2>
        <p className="calc-prose">
          Add the income you want to the cost of running the workshop for a year. Divide by the hours you can bill in that year. That is
          your break-even rate: the least an hour can earn before the business goes backwards. Add your profit margin on top and you have
          your hourly rate.
        </p>
        <p className="calc-prose">
          The number that moves the answer most is billable hours. Most of a working week goes on things nobody pays for directly:
          quoting, collecting and delivering, buying materials, chasing invoices. Count only the hours spent on paid work.
        </p>
        <p className="calc-prose">
          The rate is before tax and before VAT. If you are VAT-registered, VAT is added to the quote on top.
        </p>
        <p className="calc-prose">
          More on pricing: <Link href="/articles/pricing-guide-self-employed-upholsterers" style={{ color: "#735C42" }}>most self-employed upholsterers undercharge, and how to fix it</Link>.
        </p>
      </div>
    </div>
  )
}
