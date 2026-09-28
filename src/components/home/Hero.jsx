import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { PlayCircle, ArrowRight, Crown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-end bg-navy-950 overflow-hidden">
      <motion.img
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=2000&q=80"
        alt="Luxury yacht cruising at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/10 to-transparent" />

      <div className="relative container-px max-w-[1440px] mx-auto w-full pb-16 sm:pb-24 pt-40">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="eyebrow-gold text-xs sm:text-sm tracking-[0.14em] uppercase mb-4"
          >
            Luxury Yacht Charter
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08]"
          >
            Explore the World in{' '}
            <span className="text-gold-400">Absolute Luxury</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.6 }}
            className="text-white/70 mt-6 max-w-md leading-relaxed"
          >
            Premium yacht charters for unforgettable journeys across the world's most beautiful destinations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 mt-9"
          >
            <Link to="/yachts" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm">
              Explore Yachts <ArrowRight size={15} />
            </Link>
            <button className="flex items-center gap-2.5 text-white text-sm font-medium group">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-white/10 border border-white/25 group-hover:bg-white/20 transition-colors duration-300">
                <PlayCircle size={19} />
              </span>
              Watch Video
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 inline-flex items-center gap-3 bg-navy-900/70 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4"
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-gold-500/20 text-gold-400">
            <Crown size={16} />
          </span>
          <div className="text-white text-xs sm:text-sm leading-snug">
            <p className="font-semibold">World-Class Fleet</p>
            <p className="text-white/50">Global Destinations &nbsp;·&nbsp; Unforgettable Experiences</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
