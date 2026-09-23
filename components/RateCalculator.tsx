"use client"

import { useMemo, useState } from "react"

const gbp = (n: number, dp = 2) =>
  isFinite(n) && n > 0 ? `£${n.toLocaleString("en-GB", { minimumFractionDigits: dp, maximumFractionDigits: dp })}` : "–"

function Field({
  id, label, hint, value, onChange, prefix, suffix, step = 1,
}: {
  id: string; label: string; hint: string; value: number; onChange: (n: number) => void
  prefix?: string; suffix?: string; step?: number
}) {
  return (
    <div className="calc-field">
      <label htmlFor={id} className="calc-label">{label}</label>
      <div className="calc-input-wrap">
        {prefix && <span className="calc-affix">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(e.target.value === "" ? NaN : Number(e.target.value))}
          className="calc-input"
        />
        {suffix && <span className="calc-affix">{suffix}</span>}
      </div>
      <p className="calc-hint">{hint}</p>
    </div>
  )
}

export default function RateCalculator() {
  // Example figures only; the page says so. Replace with your own.
  const [income, setIncome] = useState(30000)
  const [costs, setCosts] = useState(9000)
  const [weeks, setWeeks] = useState(46)
  const [hours, setHours] = useState(28)
  const [profit, setProfit] = useState(10)
  const [jobHours, setJobHours] = useState(12)
  const [materials, setMaterials] = useState(180)
  const [markup, setMarkup] = useState(20)

  const r = useMemo(() => {
    const billable = weeks * hours
    const minimum = (income + costs) / billable
    const rate = minimum * (1 + (profit || 0) / 100)
    const dayHours = hours / 5
    const labour = rate * jobHours
    const mats = materials * (1 + (markup || 0) / 100)
    return { billable, minimum, rate, day: rate * dayHours, dayHours, labour, mats, quote: labour + mats }
  }, [income, costs, weeks, hours, profit, jobHours, materials, markup])

  return (
    <div className="calc">
      <div className="calc-grid">
        <div>
          <h2 className="calc-h">Your year</h2>
          <Field id="income" label="Income you want to take" hint="What you want to pay yourself in a year, before tax." value={income} onChange={setIncome} prefix="£" step={500} />
          <Field id="costs" label="What the workshop costs to run" hint="A year of rent, insurance, van, tools, utilities, software and accountant." value={costs} onChange={setCosts} prefix="£" step={100} />
          <Field id="weeks" label="Weeks you will work" hint="Take off holidays, bank holidays and a few weeks for illness and quiet spells." value={weeks} onChange={setWeeks} suffix="weeks" />
          <Field id="hours" label="Hours a week you can bill" hint="Only time spent on paid jobs. Quoting, buying, driving and admin do not count." value={hours} onChange={setHours} suffix="hours" />
          <Field id="profit" label="Profit to keep in the business" hint="For new tools, slow months and growth, on top of your own pay." value={profit} onChange={setProfit} suffix="%" />
        </div>
        <div className="calc-results" aria-live="polite">
          <p className="calc-kicker">Your hourly rate</p>
          <p className="calc-big">{gbp(r.rate)}</p>
          <p className="calc-sub">an hour, before VAT</p>
          <dl className="calc-list">
            <div><dt>Break-even rate</dt><dd>{gbp(r.minimum)}</dd></div>
            <div><dt>Day rate ({Number.isFinite(r.dayHours) ? r.dayHours.toLocaleString("en-GB", { maximumFractionDigits: 1 }) : "–"} billable hours)</dt><dd>{gbp(r.day)}</dd></div>
            <div><dt>Billable hours a year</dt><dd>{Number.isFinite(r.billable) && r.billable > 0 ? r.billable.toLocaleString("en-GB") : "–"}</dd></div>
          </dl>
          <p className="calc-note">
            The break-even rate covers your pay and your costs and nothing else. Charge less than it and every hour at the bench loses money.
          </p>
        </div>
      </div>

      <div className="calc-grid" style={{ marginTop: 40 }}>
        <div>
          <h2 className="calc-h">Price a job</h2>
          <Field id="jobHours" label="Hours the job will take" hint="Be honest: strip-down, frame work, cutting, sewing, fitting and finishing." value={jobHours} onChange={setJobHours} suffix="hours" step={0.5} />
          <Field id="materials" label="Materials at cost" hint="Fabric, foam, fillings, springs, webbing, trimmings and sundries." value={materials} onChange={setMaterials} prefix="£" step={10} />
          <Field id="markup" label="Mark-up on materials" hint="Covers buying time, waste, storage and the risk of an off-cut you cannot use." value={markup} onChange={setMarkup} suffix="%" />
        </div>
        <div className="calc-results">
          <p className="calc-kicker">Quote</p>
          <p className="calc-big">{gbp(r.quote)}</p>
          <p className="calc-sub">before VAT</p>
          <dl className="calc-list">
            <div><dt>Labour</dt><dd>{gbp(r.labour)}</dd></div>
            <div><dt>Materials with mark-up</dt><dd>{gbp(r.mats)}</dd></div>
          </dl>
        </div>
      </div>
    </div>
  )
}
