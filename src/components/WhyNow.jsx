import React from 'react'
import { ArrowRight, Battery, Wallet, Timer } from 'lucide-react'

const Benefit = ({ icon: Icon, title, desc }) => (
  <div className="card p-6">
    <div className="h-10 w-10 rounded-full flex items-center justify-center mb-4" style={{background:'#FEF2F3'}}>
      <Icon className="h-5 w-5" color="#BC2649" />
    </div>
    <h3 className="text-lg font-medium text-[#450C1B]">{title}</h3>
    <p className="mt-2 text-sm text-[#555555]">{desc}</p>
  </div>
)

const WhyNow = () => {
  return (
    <section className="section-y container-px" aria-labelledby="why-now">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#BC2649]/70">Capital Works Instead of Being Parked</p>
        <div className="mt-3 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 id="why-now" className="text-3xl sm:text-4xl font-semibold text-[#450C1B]">Why now?</h2>
          <a href="#models" className="btn-secondary whitespace-nowrap">Continue to Model Comparison <ArrowRight className="ml-2 h-4 w-4"/></a>
        </div>
        <p className="mt-4 max-w-3xl text-[#555555]">Grid volatility, accelerating renewable targets and attractive depreciation allowances create a unique entry window. Battery storage monetizes volatility instead of fearing it, turning grid services and price spreads into stable revenue.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Benefit icon={Timer} title="Timing Advantage" desc="Policy tailwinds and rising flexibility premiums reward early movers."/>
          <Benefit icon={Wallet} title="Cashflow Focus" desc="Multi-revenue stack models with hedges for predictable distributions."/>
          <Benefit icon={Battery} title="Real Asset" desc="Infrastructure-backed, inflation-linked, with measurable downside protection."/>
        </div>
      </div>
    </section>
  )
}

export default WhyNow