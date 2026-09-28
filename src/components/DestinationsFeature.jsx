import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Calendar, MapPin, Minus, Plus, Sailboat } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'

/* ---------- local data (no changes needed in /data) ---------- */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// month indexes (0 = Jan) when each destination is at its best
const SEASONS = {
  maldives: [10, 11, 0, 1, 2, 3],
  dubai: [9, 10, 11, 0, 1, 2],
  greece: [4, 5, 6, 7, 8, 9],
  thailand: [10, 11, 0, 1, 2, 3],
  italy: [4, 5, 6, 7, 8],
  'french-riviera': [5, 6, 7, 8],
}

const ROUTES = {
  maldives: [
    { day: 'Day 1–2', title: 'Malé to North Malé Atoll', text: 'Board in Malé, then cruise to a sandbank for a private beach lunch.' },
    { day: 'Day 3–4', title: 'Baa Atoll Reefs', text: 'Snorkel among manta rays in the Hanifaru Bay biosphere reserve.' },
    { day: 'Day 5', title: 'Dhigurah Whale Sharks', text: 'Early departure to swim alongside gentle whale sharks.' },
    { day: 'Day 6–7', title: 'Sunset Sandbank Farewell', text: 'Slow drift back with a final sunset dinner on the aft deck.' },
  ],
  greece: [
    { day: 'Day 1–2', title: 'Athens to Hydra', text: 'Leave Piraeus and anchor in Hydra, a car-free island of stone mansions.' },
    { day: 'Day 3', title: 'Milos Hidden Coves', text: 'Swim inside Sarakiniko\'s white volcanic cliffs and sea caves.' },
    { day: 'Day 4–5', title: 'Santorini Caldera', text: 'Anchor beneath the caldera and dine in Oia at golden hour.' },
    { day: 'Day 6–7', title: 'Mykonos Finale', text: 'Beach clubs by day, windmill views at night, then return sail.' },
  ],
  dubai: [
    { day: 'Day 1', title: 'Dubai Marina Departure', text: 'Board at sunset and glide past the marina skyline.' },
    { day: 'Day 2', title: 'Palm Jumeirah', text: 'Swim stops off the Palm with a full watersports set-up.' },
    { day: 'Day 3', title: 'Burj Al Arab Cruise', text: 'A slow golden-hour run past the world\'s most photographed hotel.' },
    { day: 'Day 4', title: 'Abu Dhabi Overnight', text: 'Cruise the coast and dock beside Yas Island for a night out.' },
  ],
}

const FAQS = [
  { q: 'How far in advance should I book a charter?', a: 'For peak season (July–August in the Mediterranean, December–March in the Maldives) book 6–9 months ahead. Shoulder seasons often have availability within 4–8 weeks.' },
  { q: 'Can I customize the route?', a: 'Yes. The sample routes are starting points; your captain and charter specialist will reshape stops around weather, your pace, and the group.' },
  { q: 'Are crew, fuel and provisions included?', a: 'Crew is always included. Fuel and provisions vary by yacht and destination, and your quote lists them clearly before you commit.' },
  { q: 'Do I need sailing experience?', a: 'None at all. Every charter comes with a professional captain and crew who run the boat while you relax.' },
  { q: 'What happens if the weather turns?', a: 'Your captain adjusts the route to keep the sea comfortable, and we can rebook or reroute dates for major weather events under our flexible terms.' },
]

/* ---------- 1. Season planner ---------- */

function SeasonPlanner() {
  const [month, setMonth] = useState(new Date().getMonth())
  const inSeason = destinations.filter((d) => SEASONS[d.id]?.includes(month))

  return (
    <section className="py-16 sm:py-24 bg-sand-50">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-xl mb-10">
          <Eyebrow>Season Planner</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight">
            Travelling in {MONTHS[month]}? Here's Where to Sail
          </h2>
          <p className="text-ink-600 mt-4 leading-relaxed">
            Pick your month and we'll show which coastlines are at their best.
          </p>
        </Reveal>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 mb-10">
          {MONTHS.map((m, i) => (
            <button
              key={m}
              onClick={() => setMonth(i)}
              className={`relative py-3 rounded-xl text-sm font-semibold border transition-colors duration-300 ${
                month === i
                  ? 'text-navy-950 border-gold-500'
                  : 'bg-white text-ink-600 border-ink-900/10 hover:border-gold-400'
              }`}
            >
              {month === i && (
                <motion.span
                  layoutId="month-pill"
                  className="absolute inset-0 rounded-xl bg-gold-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{m}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={month}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3"
          >
            {inSeason.length === 0 ? (
              <p className="text-ink-500 py-8">No peak-season matches this month. Ask us about quieter hidden gems.</p>
            ) : (
              inSeason.map((d) => (
                <Link
                  key={d.id}
                  to={`/destinations/${d.id}`}
                  className="group flex items-center gap-4 sm:gap-6 bg-white rounded-2xl p-3 sm:p-4 border border-ink-900/5 hover:border-gold-400/50 shadow-[0_10px_30px_-20px_rgba(10,28,48,0.3)] transition-colors duration-300"
                >
                  <img src={d.image} alt={d.name} className="w-20 h-20 sm:w-24 sm:h-20 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-ink-900">{d.name}</h3>
                    <p className="flex items-center gap-1.5 text-ink-500 text-xs mt-1">
                      <Calendar size={12} /> {d.bestTime}
                    </p>
                    <p className="hidden sm:flex items-center gap-1.5 text-ink-400 text-xs mt-1">
                      <Sailboat size={12} /> {d.yachtTypes.join(' · ')}
                    </p>
                  </div>
                  <span className="grid place-items-center w-10 h-10 rounded-full border border-ink-900/10 text-navy-800 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors duration-300 shrink-0">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/* ---------- 2. Sample route timeline ---------- */

function SampleRoutes() {
  const ids = Object.keys(ROUTES)
  const [active, setActive] = useState(ids[0])
  const dest = destinations.find((d) => d.id === active)

  return (
    <section className="py-16 sm:py-24 bg-navy-950">
      <div className="container-px max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
        <Reveal>
          <Eyebrow light>Sample Routes</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight max-w-md">
            A Week at Sea, Day by Day
          </h2>
          <p className="text-white/60 mt-4 max-w-md leading-relaxed">
            Not sure what a charter looks like? Choose a destination to preview a typical itinerary.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {ids.map((id) => {
              const d = destinations.find((x) => x.id === id)
              return (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-300 ${
                    active === id
                      ? 'bg-gold-500 text-navy-950 border-gold-500'
                      : 'text-white/75 border-white/20 hover:border-gold-400'
                  }`}
                >
                  {d.name}
                </button>
              )
            })}
          </div>

          <div className="relative rounded-3xl overflow-hidden mt-8 aspect-[16/10] hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.img
                key={dest.id}
                src={dest.image}
                alt={dest.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
            <p className="absolute bottom-4 left-5 flex items-center gap-1.5 text-white font-display font-semibold">
              <MapPin size={15} className="text-gold-400" /> {dest.name}
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <span className="absolute left-[15px] top-2 bottom-2 w-px bg-white/15" />
          <AnimatePresence mode="wait">
            <motion.ol
              key={active}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-8"
            >
              {ROUTES[active].map((stop) => (
                <motion.li
                  key={stop.title}
                  variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-0.5 grid place-items-center w-8 h-8 rounded-full bg-navy-950 border-2 border-gold-500">
                    <span className="w-2 h-2 rounded-full bg-gold-500" />
                  </span>
                  <p className="text-gold-400 text-xs font-semibold tracking-wide">{stop.day}</p>
                  <h3 className="font-display font-semibold text-white text-lg mt-1">{stop.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mt-1.5 max-w-md">{stop.text}</p>
                </motion.li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

/* ---------- 3. FAQ accordion ---------- */

function DestinationFaq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-px max-w-4xl mx-auto">
        <Reveal className="text-center mb-12">
          <div className="flex justify-center"><Eyebrow>Good to Know</Eyebrow></div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight">
            Questions Before You Set Sail
          </h2>
        </Reveal>

        <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-semibold transition-colors duration-300 ${isOpen ? 'text-gold-600' : 'text-ink-900'}`}>
                    {item.q}
                  </span>
                  <span className="grid place-items-center w-8 h-8 rounded-full border border-ink-900/15 shrink-0 text-navy-800">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-ink-600 leading-relaxed text-sm">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- page ---------- */

export default function DestinationsFeature() {
  return (
    <>
      <Seo title="Destinations" description="Discover the world's most beautiful yacht charter destinations, from the Maldives to the Mediterranean." />
      <PageHero
        eyebrow="Explore The World"
        title="Sail to Extraordinary Places"
        subtitle="From coral atolls to whitewashed cliffs, every Antixor destination is chosen for the kind of view you remember for years."
        image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-px max-w-[1440px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {destinations.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) * 0.08}>
              <DestinationCard destination={d} size="lg" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEW sections */}
      <SeasonPlanner />
      <SampleRoutes />
      <DestinationFaq />
    </>
  )
}
