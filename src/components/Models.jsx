import React from 'react'

const ModelCard = ({ title, points }) => (
  <div className="card p-6">
    <h3 className="text-xl font-semibold text-[#450C1B]">{title}</h3>
    <ul className="mt-4 space-y-2 text-sm text-[#555555]">
      {points.map((p,i)=> <li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full" style={{background:'#BC2649'}}></span>{p}</li>)}
    </ul>
  </div>
)

const Table = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <caption className="text-left text-xs uppercase tracking-wider text-[#BC2649] mb-3">Cooperation Models at a Glance</caption>
      <thead>
        <tr className="text-[#450C1B]">
          <th className="text-left py-3">Criteria</th>
          <th className="text-left py-3">Leasing</th>
          <th className="text-left py-3">Co-Invest</th>
          <th className="text-left py-3">Self-Invest</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {[
          ['CapEx commitment','Low','Medium','High'],
          ['Cashflow participation','Fixed','Shared','Full'],
          ['Operational control','Low','Shared','Full'],
          ['Tax benefits (IAB, AfA)','Limited','Good','Maximum'],
        ].map((row, idx)=> (
          <tr key={idx} className="text-[#555555]">
            <td className="py-3 font-medium text-[#450C1B]">{row[0]}</td>
            <td className="py-3">{row[1]}</td>
            <td className="py-3">{row[2]}</td>
            <td className="py-3">{row[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const Models = () => {
  return (
    <section id="models" className="section-y container-px">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#450C1B]">Cooperation Models</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ModelCard title="Leasing" points={["No CapEx on balance sheet","Fixed lease payments","Simple administration"]} />
          <ModelCard title="Co-Invest" points={["Aligned incentives","Shared governance","Balanced risk / return"]} />
          <ModelCard title="Self-Invest" points={["Full ownership","Maximum tax effects","Highest cashflow participation"]} />
        </div>

        <div className="mt-10 subtle-card p-6">
          <Table />
        </div>
      </div>
    </section>
  )
}

export default Models