import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'

const fleetTypes = [
  { label: 'Motor Yachts', desc: 'Speed & luxury', filter: 'Motor Yacht', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80' },
  { label: 'Sailing Yachts', desc: 'Freedom on the waves', filter: 'Sailing Yacht', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80' },
  { label: 'Catamarans', desc: 'More space, more fun', filter: 'Catamaran', image: 'https://images.unsplash.com/photo-1610914957713-5ce596dee5e3?auto=format&fit=crop&w=900&q=80' },
  { label: 'Super Yachts', desc: 'The ultimate luxury', filter: 'Super Yacht', image: 'https://images.unsplash.com/photo-1568430462989-44163eb1b109?auto=format&fit=crop&w=900&q=80' },
]

export default function OurFleet() {
  return (
    <section className="py-20 sm:py-28 bg-navy-950">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow light>Our Fleet</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight max-w-lg">
              Handpicked Yachts. World-Class Comfort.
            </h2>
            <p className="text-white/60 mt-4 max-w-md leading-relaxed">
              Explore our premium fleet, designed for ultimate comfort, style and performance.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {fleetTypes.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <Link
                to="/yachts"
                state={{ type: f.filter }}
                className="group block rounded-2xl overflow-hidden bg-navy-900 border border-white/10 hover:border-gold-400/40 transition-colors duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={f.image} alt={f.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-display font-semibold text-white text-sm">{f.label}</p>
                    <p className="text-white/45 text-xs mt-0.5">{f.desc}</p>
                  </div>
                  <ArrowRight size={15} className="text-gold-400 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
