import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import DestinationCard from '../DestinationCard'
import { destinations } from '../../data/destinations'

export default function PopularDestinations() {
  const featured = destinations.slice(0, 4)

  return (
    <section className="relative py-20 sm:py-28 bg-navy-950 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1544644181-1484b3fdfc32?auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/85 to-navy-950" />

      <div className="relative container-px max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
        <Reveal>
          <Eyebrow>Popular Destinations</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight max-w-sm">
            Sail to the World's Most Beautiful Places
          </h2>
          <p className="text-white/60 mt-5 max-w-sm leading-relaxed">
            From the crystal-clear waters of the Maldives to the iconic coasts of the Mediterranean, discover destinations that make every moment extraordinary.
          </p>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-white border border-white/20 rounded-full px-5 py-3 hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
          >
            View All Destinations <ArrowRight size={15} />
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="grid grid-cols-2 gap-4 sm:gap-5">
          {featured.map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
