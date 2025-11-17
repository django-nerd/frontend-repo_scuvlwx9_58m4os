import React from 'react'
import { ArrowRight, ShieldCheck, LineChart } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px] pointer-events-none" />
      </div>

      <div className="relative container-px section-y">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.2em] uppercase text-[#BC2649]/70 mb-4">Investment in Battery Storage</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#450C1B]">
              Category-leading battery investments for decisive capital
            </h1>
            <p className="mt-5 text-base sm:text-lg max-w-2xl text-[#555555]">
              We structure and operate institutional-grade battery storage projects that protect capital, stabilize returns, and leverage tax advantages. Minimal volatility. Maximum clarity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
              <a href="#models" className="btn-secondary">Continue to Model Comparison</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-[#450C1B]/70">
              <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#BC2649]"/> Regulated partners</div>
              <div className="inline-flex items-center gap-2"><LineChart className="h-4 w-4 text-[#BC2649]"/> Stress-tested models</div>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

export default Hero