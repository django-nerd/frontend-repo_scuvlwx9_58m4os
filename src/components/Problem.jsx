import React from 'react'
import { AlertTriangle } from 'lucide-react'

const ProblemCard = ({ title, desc }) => (
  <div className="card p-5">
    <div className="flex items-center gap-2 text-[#450C1B] font-medium"><AlertTriangle className="h-4 w-4" color="#BC2649" /> {title}</div>
    <p className="mt-2 text-sm text-[#555555]">{desc}</p>
  </div>
)

const Problem = () => {
  return (
    <section className="section-y container-px">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-[0.2em] uppercase text-[#BC2649]/70">For decision-makers & CFOs</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#450C1B]">Not Investing Means Loss.</h2>
          <p className="mt-4 text-[#555555]">Idle liquidity erodes via inflation and taxation. Battery storage converts volatility into income while securing tax advantages. The alternative is predictable: rising burden, missed spreads, opportunity cost.</p>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/9] subtle-card overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#450C1B] mb-2">Costs of Not Investing</h3>
                <video className="mx-auto rounded-xl" autoPlay loop muted playsInline>
                  <source src="https://cdn.jsdelivr.net/gh/itsrealfarhan/cdn-files/public/falling-graph.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProblemCard title="Tax Burden" desc="Capital taxed without productive offset."/>
            <ProblemCard title="Weak Returns" desc="Cash trapped in low-yield instruments."/>
            <ProblemCard title="Uncertain Decisions" desc="No framework for timing and risk."/>
            <ProblemCard title="Volatility Unused" desc="Spread opportunities left on the table."/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem