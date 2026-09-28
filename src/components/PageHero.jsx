import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, subtitle, image, crumb }) {
  return (
    <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-24 bg-navy-950 overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />

      <div className="relative container-px max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-1.5 text-xs text-white/50 mb-4">
            <Link to="/" className="hover:text-gold-400 transition-colors duration-300">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">{crumb || title}</span>
          </div>
          {eyebrow && <p className="eyebrow-gold text-xs tracking-[0.14em] uppercase mb-3">{eyebrow}</p>}
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            {title}
          </h1>
          {subtitle && <p className="text-white/60 mt-5 max-w-xl leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
