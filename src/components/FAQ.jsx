import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b">
      <button onClick={()=>setOpen(!open)} className="w-full py-4 flex items-center justify-between text-left">
        <span className="text-[#450C1B] font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 text-[#450C1B] transition-transform ${open? 'rotate-180':''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-[#555555]">{a}</div>
      )}
    </div>
  )
}

const FAQ = () => {
  const items = [
    ['How is financing structured?', 'SPVs with bankable contracts and audited reporting.'],
    ['What is IAB and how do I benefit?', 'Investment allowance reducing taxable income in the setup year.'],
    ['What about admin effort?', 'We manage EPC, O&M and reporting end-to-end.'],
    ['What returns are realistic?', 'Depends on revenue stack and hedges; we target stable mid-to-high single digits post-tax.'],
    ['Is my capital secure?', 'Real-asset collateral with tested counter-parties and risk allocations.'],
    ['Are there deadlines?', 'Yes, policy and depreciation windows make timing relevant.'],
  ]
  return (
    <section id="faq" className="section-y container-px">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#450C1B]">FAQ</h2>
        <div className="mt-6 divide-y">
          {items.map(([q,a], i)=> <Item key={i} q={q} a={a} />)}
        </div>
      </div>
    </section>
  )
}

export default FAQ