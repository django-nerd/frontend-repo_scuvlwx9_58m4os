import React from 'react'
import { Shield, TrendingUp, Percent, Leaf } from 'lucide-react'

const Tile = ({ icon: Icon, title, desc }) => (
  <div className="subtle-card p-6">
    <Icon className="h-6 w-6 mb-3" color="#BC2649" />
    <h3 className="text-lg font-medium text-[#450C1B]">{title}</h3>
    <p className="mt-2 text-sm text-[#555555]">{desc}</p>
  </div>
)

const Advantages = () => {
  return (
    <section className="section-y container-px" aria-labelledby="advantages">
      <div className="max-w-6xl mx-auto">
        <h2 id="advantages" className="text-3xl sm:text-4xl font-semibold">Advantages with NOVATT</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Tile icon={Shield} title="Secure Investment" desc="Institutional-grade structures, audited SPVs, bankable contracts." />
          <Tile icon={TrendingUp} title="Stable Returns" desc="Stacked revenue model from arbitrage, balancing, and capacity." />
          <Tile icon={Percent} title="Tax Advantages" desc="Leverage IAB and accelerated depreciation for efficient capital." />
          <Tile icon={Leaf} title="Energy Transition & Diversification" desc="Real climate impact while diversifying beyond equities and bonds." />
        </div>
      </div>
    </section>
  )
}

export default Advantages