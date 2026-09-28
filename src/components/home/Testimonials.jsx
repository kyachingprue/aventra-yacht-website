import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  const [start, setStart] = useState(0)
  const perPage = 3
  const maxStart = Math.max(0, testimonials.length - perPage)

  const move = (dir) => setStart((s) => Math.min(Math.max(s + dir, 0), maxStart))
  const visible = testimonials.slice(start, start + perPage)

  return (
    <section className="py-20 sm:py-28 bg-sand-50">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Client Testimonials</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight max-w-lg">
              Real Stories. Unforgettable Journeys.
            </h2>
            <p className="text-ink-600 mt-4 max-w-md leading-relaxed">
              Our clients say it best. Here's what they have to say about their Antixor Yacht experience.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => move(-1)}
              disabled={start === 0}
              className="grid place-items-center w-10 h-10 rounded-full border border-ink-900/15 hover:border-gold-400 hover:text-gold-500 disabled:opacity-30 transition-colors duration-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => move(1)}
              disabled={start === maxStart}
              className="grid place-items-center w-10 h-10 rounded-full border border-ink-900/15 hover:border-gold-400 hover:text-gold-500 disabled:opacity-30 transition-colors duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t) => (
            <div key={t.name} className="relative bg-white rounded-2xl p-6 border border-ink-900/5 shadow-[0_10px_30px_-18px_rgba(10,28,48,0.25)]">
              <Quote className="absolute top-5 right-5 text-navy-950/8" size={38} />
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-display font-semibold text-ink-900 text-sm">{t.name}</p>
                  <p className="text-ink-400 text-xs">{t.location}</p>
                </div>
              </div>
              <p className="text-ink-600 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-0.5 mt-4 text-gold-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
