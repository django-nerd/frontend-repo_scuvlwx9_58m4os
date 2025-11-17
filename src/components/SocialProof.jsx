import React from 'react'

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
]

const ProjectCard = ({ status, title, mw, mwh }) => (
  <div className="card p-6">
    <div className="text-xs uppercase tracking-wider text-[#BC2649]">{status}</div>
    <h3 className="mt-2 text-lg font-medium text-[#450C1B]">{title}</h3>
    <div className="mt-3 flex gap-6 text-sm text-[#555555]">
      <div><span className="font-semibold text-[#450C1B]">{mw}</span> MW</div>
      <div><span className="font-semibold text-[#450C1B]">{mwh}</span> MWh</div>
    </div>
  </div>
)

const SocialProof = () => {
  return (
    <section className="section-y container-px">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#450C1B]">References & Projects</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-70">
          {logos.map((src,i)=> (
            <img key={i} src={src} alt="logo" className="h-8 object-contain" />
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ProjectCard status="Under Construction" title="GridFlex North" mw={50} mwh={100} />
          <ProjectCard status="In Operation" title="Stability West" mw={30} mwh={60} />
          <ProjectCard status="In Operation" title="PeakGuard East" mw={20} mwh={40} />
        </div>
      </div>
    </section>
  )
}

export default SocialProof