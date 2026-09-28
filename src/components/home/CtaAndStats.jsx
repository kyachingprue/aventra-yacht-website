import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import { stats } from '../../data/content'

export function CtaBanner() {
  return (
    <section className="relative py-28 sm:py-36 bg-navy-950 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80"
        alt="Coastal village at dusk"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/20" />

      <div className="relative container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-lg">
          <Eyebrow light>More Than a Charter</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Luxury, Adventure, Unforgettable Moments
          </h2>
          <p className="text-white/65 mt-5 leading-relaxed">
            Whether it's a romantic getaway, a family vacation, or a corporate event — we create experiences that last a lifetime.
          </p>
          <Link
            to="/experiences"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm mt-8"
          >
            Plan Your Journey <ArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export function StatsBar() {
  return (
    <section className="bg-sand-50 border-t border-ink-900/5">
      <div className="container-px max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-ink-900/10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center py-10 px-3">
            <p className="font-display font-bold text-3xl sm:text-4xl text-navy-950">{s.value}</p>
            <p className="text-ink-500 text-xs sm:text-sm mt-1.5">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
