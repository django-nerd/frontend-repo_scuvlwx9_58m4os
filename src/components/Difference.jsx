import React from 'react'
import { CheckCircle2, Circle } from 'lucide-react'

const ListItem = ({ good=false, children }) => (
  <div className="flex items-start gap-2 text-sm">
    {good ? <CheckCircle2 className="mt-0.5 h-4 w-4" color="#BC2649"/> : <Circle className="mt-0.5 h-4 w-4 text-neutral-400"/>}
    <span className="text-[#555555]">{children}</span>
  </div>
)

const Difference = () => {
  return (
    <section className="section-y container-px">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#450C1B]">The Difference Between Planless & Strategic Investment</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="card p-6">
            <h3 className="text-lg font-medium text-[#450C1B] mb-3">Normal Approach</h3>
            <div className="space-y-3">
              <ListItem>Ad hoc offers without model transparency</ListItem>
              <ListItem>Unclear risk allocation & hidden fees</ListItem>
              <ListItem>Tax effects considered too late</ListItem>
              <ListItem>Fragmented partners and responsibilities</ListItem>
            </div>
          </div>
          <div className="subtle-card p-6">
            <h3 className="text-lg font-medium text-[#450C1B] mb-3">Invest with NOVATT</h3>
            <div className="space-y-3">
              <ListItem good>Audited structures with clear governance</ListItem>
              <ListItem good>Risk-sharing aligned with incentives</ListItem>
              <ListItem good>Upfront optimization for IAB & AfA</ListItem>
              <ListItem good>End-to-end execution and operations</ListItem>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <a href="#contact" className="btn-primary">Start Strategic Setup</a>
        </div>
      </div>
    </section>
  )
}

export default Difference