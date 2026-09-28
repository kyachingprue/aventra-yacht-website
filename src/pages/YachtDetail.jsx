import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Users, BedDouble, Ruler, Gauge, MapPin, Check, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import YachtCard from '../components/YachtCard'
import { getYachtById, yachts } from '../data/yachts'

export default function YachtDetail() {
  const { id } = useParams()
  const yacht = getYachtById(id)
  const [activeImage, setActiveImage] = useState(0)

  if (!yacht) return <Navigate to="/yachts" replace />

  const related = yachts.filter((y) => y.id !== yacht.id).slice(0, 3)

  return (
    <>
      <Seo title={yacht.name} description={yacht.description} />

      <section className="pt-32 pb-6 sm:pt-36 bg-white">
        <div className="container-px max-w-[1440px] mx-auto">
          <div className="flex items-center gap-1.5 text-xs text-ink-400 mb-6">
            <Link to="/" className="hover:text-gold-500 transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link to="/yachts" className="hover:text-gold-500 transition-colors duration-300">Yachts</Link>
            <span>/</span>
            <span className="text-ink-700">{yacht.name}</span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-semibold tracking-wide bg-gold-500/15 text-gold-600 px-2.5 py-1 rounded-full">
                {yacht.type}
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 mt-3">{yacht.name}</h1>
              <p className="flex items-center gap-1.5 text-ink-500 text-sm mt-2">
                <MapPin size={14} /> {yacht.location}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display font-bold text-3xl text-navy-950">${yacht.price.toLocaleString()}</p>
              <p className="text-ink-400 text-xs">per day, all-inclusive</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="container-px max-w-[1440px] mx-auto">
          <Reveal className="rounded-3xl overflow-hidden mb-4">
            <img src={yacht.gallery[activeImage]} alt={yacht.name} className="w-full aspect-[16/9] object-cover" />
          </Reveal>
          <div className="grid grid-cols-3 gap-4 mb-16">
            {yacht.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`rounded-xl overflow-hidden aspect-video border-2 transition-colors duration-300 ${
                  activeImage === i ? 'border-gold-500' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-14">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {[
                  [Users, `${yacht.guests}`, 'Guests'],
                  [BedDouble, `${yacht.cabins}`, 'Cabins'],
                  [Ruler, yacht.length, 'Length'],
                  [Gauge, yacht.speed, 'Top Speed'],
                ].map(([Icon, val, label]) => (
                  <div key={label} className="rounded-2xl bg-sand-50 border border-ink-900/5 p-4 text-center">
                    <Icon size={18} className="mx-auto text-navy-800 mb-2" />
                    <p className="font-display font-bold text-ink-900">{val}</p>
                    <p className="text-ink-400 text-xs">{label}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-semibold text-xl text-ink-900 mb-3">About This Yacht</h2>
              <p className="text-ink-600 leading-relaxed">{yacht.description}</p>

              <h2 className="font-display font-semibold text-xl text-ink-900 mt-10 mb-4">Amenities & Services</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {yacht.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2.5 text-sm text-ink-700">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 shrink-0">
                      <Check size={13} />
                    </span>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            <Reveal delay={0.1} className="h-fit sticky top-28 rounded-3xl bg-navy-950 p-7">
              <h3 className="font-display font-semibold text-white text-lg mb-1">Reserve This Yacht</h3>
              <p className="text-white/50 text-sm mb-6">Speak with a charter specialist to lock in your dates.</p>

              <label className="block text-xs font-semibold text-white/70 mb-1.5">Check-in</label>
              <input type="date" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white mb-4 outline-none focus:border-gold-400 transition-colors duration-300" />

              <label className="block text-xs font-semibold text-white/70 mb-1.5">Check-out</label>
              <input type="date" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white mb-4 outline-none focus:border-gold-400 transition-colors duration-300" />

              <label className="block text-xs font-semibold text-white/70 mb-1.5">Guests</label>
              <select className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-white mb-6 outline-none focus:border-gold-400 transition-colors duration-300">
                {Array.from({ length: yacht.guests }, (_, i) => i + 1).map((g) => (
                  <option key={g} className="text-navy-950">{g} Guests</option>
                ))}
              </select>

              <div className="flex items-center justify-between text-white/70 text-sm mb-6 pb-6 border-b border-white/10">
                <span>Rate</span>
                <span className="font-display font-bold text-white text-lg">${yacht.price.toLocaleString()} / day</span>
              </div>

              <Link to="/contact" className="btn-gold w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm">
                Request to Book <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-sand-50">
        <div className="container-px max-w-[1440px] mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 mb-10">You May Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((y) => (
              <YachtCard key={y.id} yacht={y} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
