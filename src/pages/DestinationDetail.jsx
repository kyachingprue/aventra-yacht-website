import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, Sailboat, MapPin, ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import YachtCard from '../components/YachtCard'
import { getDestinationById, destinations } from '../data/destinations'
import { yachts } from '../data/yachts'

export default function DestinationDetail() {
  const { id } = useParams()
  const destination = getDestinationById(id)

  if (!destination) return <Navigate to="/destinations" replace />

  const matchingYachts = yachts.filter((y) => destination.yachtTypes.includes(y.type)).slice(0, 3)
  const others = destinations.filter((d) => d.id !== destination.id).slice(0, 3)

  return (
    <>
      <Seo title={destination.name} description={destination.description} />

      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 bg-navy-950 overflow-hidden">
        <img src={destination.image} alt={destination.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/40" />

        <div className="relative container-px max-w-[1440px] mx-auto">
          <div className="flex items-center gap-1.5 text-xs text-white/60 mb-5">
            <Link to="/" className="hover:text-gold-400 transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-gold-400 transition-colors duration-300">Destinations</Link>
            <span>/</span>
            <span className="text-white/90">{destination.name}</span>
          </div>
          <p className="eyebrow-gold text-xs tracking-[0.14em] uppercase mb-3 flex items-center gap-1.5">
            <MapPin size={13} /> Destination
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white max-w-xl leading-tight">{destination.name}</h1>
          <p className="text-white/70 mt-4 max-w-lg leading-relaxed">{destination.tagline}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-px max-w-[1440px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-14">
          <Reveal>
            <h2 className="font-display font-semibold text-2xl text-ink-900 mb-4">Why Charter Here</h2>
            <p className="text-ink-600 leading-relaxed">{destination.description}</p>

            <h3 className="font-display font-semibold text-lg text-ink-900 mt-9 mb-4">Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {destination.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2.5 text-sm text-ink-700">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 shrink-0">
                    <Check size={13} />
                  </span>
                  {h}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {destination.gallery.slice(1).map((img) => (
                <div key={img} className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-fit rounded-3xl bg-sand-50 border border-ink-900/5 p-7">
            <h3 className="font-display font-semibold text-lg text-ink-900 mb-5">At a Glance</h3>
            <div className="flex items-start gap-3 mb-5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-navy-950/5 text-navy-800 shrink-0">
                <Calendar size={17} />
              </span>
              <div>
                <p className="text-xs text-ink-400">Best Time to Visit</p>
                <p className="font-display font-semibold text-ink-900 text-sm">{destination.bestTime}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-7">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-navy-950/5 text-navy-800 shrink-0">
                <Sailboat size={17} />
              </span>
              <div>
                <p className="text-xs text-ink-400">Recommended Yacht Types</p>
                <p className="font-display font-semibold text-ink-900 text-sm">{destination.yachtTypes.join(', ')}</p>
              </div>
            </div>
            <Link to="/contact" className="btn-gold w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm">
              Plan a Charter Here <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {matchingYachts.length > 0 && (
        <section className="py-16 sm:py-24 bg-sand-50">
          <div className="container-px max-w-[1440px] mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 mb-10">Yachts Suited for {destination.name}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingYachts.map((y) => (
                <YachtCard key={y.id} yacht={y} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-px max-w-[1440px] mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 mb-10">More Destinations</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((d) => (
              <DestinationCardLite key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function DestinationCardLite({ destination }) {
  return (
    <Link to={`/destinations/${destination.id}`} className="group block rounded-2xl overflow-hidden relative aspect-[4/5]">
      <img src={destination.image} alt={destination.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display font-semibold text-white text-lg">{destination.name}</h3>
        <p className="text-white/70 text-xs mt-1">{destination.tagline}</p>
      </div>
    </Link>
  )
}
