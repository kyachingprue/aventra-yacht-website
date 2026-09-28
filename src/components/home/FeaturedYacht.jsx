import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Users, BedDouble, Ruler, ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import { yachts } from '../../data/yachts'

export default function FeaturedYacht() {
  const [index, setIndex] = useState(0)
  const featured = yachts.slice(0, 3)
  const yacht = featured[index]

  const step = (dir) => setIndex((i) => (i + dir + featured.length) % featured.length)

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="container-px max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow>Our Fleet</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight max-w-md">
            Exclusive Yachts for Extraordinary Journeys
          </h2>
          <p className="text-ink-600 mt-5 max-w-md leading-relaxed">
            Choose from a handpicked selection of luxury yachts, from sleek motor yachts to elegant sailing vessels.
          </p>
          <Link
            to="/yachts"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-white bg-navy-950 rounded-full px-6 py-3.5 hover:bg-navy-900 transition-colors duration-300"
          >
            View All Yachts <ArrowRight size={15} />
          </Link>
        </Reveal>

        <Reveal delay={0.12} className="relative rounded-3xl overflow-hidden bg-sand-50 border border-ink-900/5">
          <div className="relative aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.img
                key={yacht.id}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                src={yacht.image}
                alt={yacht.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <button
              onClick={() => step(-1)}
              aria-label="Previous yacht"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-white/90 text-navy-950 hover:bg-white transition-colors duration-300"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => step(1)}
              aria-label="Next yacht"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-white/90 text-navy-950 hover:bg-white transition-colors duration-300"
            >
              <ChevronRight size={17} />
            </button>
          </div>

          <div className="p-6 sm:p-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-xl text-ink-900">{yacht.name}</h3>
              <div className="flex items-center gap-4 mt-2 text-xs text-ink-600">
                <span className="flex items-center gap-1"><Users size={13} /> {yacht.guests} Guests</span>
                <span className="flex items-center gap-1"><BedDouble size={13} /> {yacht.cabins} Cabins</span>
                <span className="flex items-center gap-1"><Ruler size={13} /> {yacht.length}</span>
              </div>
            </div>
            <Link
              to={`/yachts/${yacht.id}`}
              className="btn-gold rounded-full px-5 py-2.5 text-xs font-semibold"
            >
              View Details
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
