import React from 'react'
import Hero from './components/Hero'
import WhyNow from './components/WhyNow'
import Advantages from './components/Advantages'
import Models from './components/Models'
import Problem from './components/Problem'
import Difference from './components/Difference'
import Process from './components/Process'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal, light header */}
      <header className="container-px py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg" style={{background:'#BC2649'}}></div>
            <span className="font-semibold text-[#450C1B]">NOVATT</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#advantages" className="text-[#450C1B]/80 hover:text-[#450C1B]">Advantages</a>
            <a href="#models" className="text-[#450C1B]/80 hover:text-[#450C1B]">Models</a>
            <a href="#faq" className="text-[#450C1B]/80 hover:text-[#450C1B]">FAQ</a>
            <a href="#contact" className="btn-primary">Free Consultation</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <WhyNow />
        <Advantages />
        <Models />
        <Problem />
        <Difference />
        <Process />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="container-px py-10 border-t">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#555555]">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md" style={{background:'#BC2649'}}></div>
            <span className="font-medium text-[#450C1B]">NOVATT</span>
          </div>
          <p>© {new Date().getFullYear()} NOVATT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App