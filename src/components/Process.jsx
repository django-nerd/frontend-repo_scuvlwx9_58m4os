import React from 'react'
import { Calendar, FileCheck, Shield, Wrench, TrendingUp } from 'lucide-react'

const Step = ({ icon: Icon, title, desc }) => (
  <div className="card p-6 text-center">
    <div className="mx-auto h-10 w-10 rounded-full flex items-center justify-center mb-4" style={{background:'#FEF2F3'}}>
      <Icon className="h-5 w-5" color="#BC2649" />
    </div>
    <h3 className="text-base font-medium text-[#450C1B]">{title}</h3>
    <p className="mt-2 text-sm text-[#555555]">{desc}</p>
  </div>
)

const Process = () => {
  return (
    <section className="section-y container-px">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#450C1B]">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <Step icon={Calendar} title="Planning" desc="Scope targets, risk, and timelines." />
          <Step icon={FileCheck} title="IAB" desc="Structure investment allowance properly." />
          <Step icon={Shield} title="Secure Tax Advantage" desc="Optimize depreciation & shields." />
          <Step icon={Wrench} title="Implementation" desc="Execute EPC and operations." />
          <Step icon={TrendingUp} title="Profit Twice" desc="Yield + tax efficiency delivered." />
        </div>
      </div>
    </section>
  )
}

export default Process