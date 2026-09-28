import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { MapPin } from 'lucide-react'

export default function DestinationCard({ destination, size = 'md' }) {
  return (
    <motion.div whileHover={{ scale: 1.015 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="h-full">
      <Link
        to={`/destinations/${destination.id}`}
        className={`group relative block rounded-2xl overflow-hidden h-full ${size === 'lg' ? 'aspect-[16/10]' : 'aspect-[4/5] sm:aspect-square'}`}
      >
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display font-semibold text-white text-lg flex items-center gap-1.5">
            <MapPin size={15} className="text-gold-400 shrink-0" />
            {destination.name}
          </h3>
          <p className="text-white/70 text-xs mt-1 line-clamp-1">{destination.tagline}</p>
        </div>
      </Link>
    </motion.div>
  )
}
