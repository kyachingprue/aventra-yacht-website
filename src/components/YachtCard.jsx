import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight, Users, BedDouble, Ruler } from 'lucide-react'

export default function YachtCard({ yacht, dark = false }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
      <Link
        to={`/yachts/${yacht.id}`}
        className={`group block rounded-2xl overflow-hidden border transition-colors duration-300 h-full ${
          dark ? 'bg-navy-900 border-white/10 hover:border-gold-400/50' : 'bg-white border-ink-900/5 shadow-[0_10px_30px_-15px_rgba(10,28,48,0.25)] hover:border-gold-400/40'
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={yacht.image}
            alt={yacht.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wide bg-gold-500 text-navy-950 px-2.5 py-1 rounded-full">
            {yacht.type}
          </span>
          <span className="absolute bottom-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-white/90 text-navy-950 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-display font-semibold text-lg ${dark ? 'text-white' : 'text-ink-900'}`}>{yacht.name}</h3>
          </div>
          <p className={`text-xs mt-0.5 ${dark ? 'text-white/50' : 'text-ink-400'}`}>{yacht.location}</p>
          <div className={`flex items-center gap-4 mt-4 pt-4 border-t text-xs ${dark ? 'border-white/10 text-white/60' : 'border-ink-900/10 text-ink-600'}`}>
            <span className="flex items-center gap-1"><Users size={13} /> {yacht.guests}</span>
            <span className="flex items-center gap-1"><BedDouble size={13} /> {yacht.cabins}</span>
            <span className="flex items-center gap-1"><Ruler size={13} /> {yacht.length}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className={dark ? 'text-white' : 'text-ink-900'}>
              <span className="font-display font-bold">${yacht.price.toLocaleString()}</span>
              <span className={`text-xs ${dark ? 'text-white/50' : 'text-ink-400'}`}> /day</span>
            </p>
            <span className="text-xs font-semibold text-gold-500">View Details</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
