import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldCheck, Sparkles, Users2, Globe2, Search } from 'lucide-react'
import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'

const features = [
  { icon: Sparkles, title: 'Premium Fleet', text: 'World-class yachts' },
  { icon: ShieldCheck, title: 'Trusted & Safe', text: 'Fully insured & licensed' },
  { icon: Users2, title: 'Personalized Service', text: 'Tailored to your needs' },
  { icon: Globe2, title: 'Global Destinations', text: 'Iconic locations worldwide' },
]

export default function WhyChooseUs() {
  const [destination, setDestination] = useState('')
  const navigate = useNavigate()

  const onSearch = (e) => {
    e.preventDefault()
    navigate('/yachts', { state: { search: destination } })
  }

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-px max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight max-w-md">
            Your Dream Yacht Experience, Made Simple
          </h2>
          <p className="text-ink-600 mt-5 max-w-md leading-relaxed">
            At Antixor Yacht, we make luxury yacht charters effortless. From handpicked yachts to personalized itineraries, we handle every detail so you can simply enjoy the journey.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-navy-950/5 text-navy-800 shrink-0">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="font-display font-semibold text-ink-900 text-sm">{title}</p>
                  <p className="text-ink-400 text-xs mt-0.5">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={onSearch}
            className="bg-sand-50 border border-ink-900/5 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(10,28,48,0.15)]"
          >
            <h3 className="font-display font-semibold text-xl text-ink-900 mb-1">Find Your Perfect Yacht</h3>
            <p className="text-ink-400 text-sm mb-6">Select your preferred destination, dates and yacht type.</p>

            <label className="block text-xs font-semibold text-ink-600 mb-1.5">Destination</label>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Dubai, Maldives, Greece"
              className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm mb-4 outline-none focus:border-gold-400 transition-colors duration-300"
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-ink-600 mb-1.5">Check-in</label>
                <input type="date" className="w-full rounded-xl border border-ink-900/10 bg-white px-3 py-3 text-sm outline-none focus:border-gold-400 transition-colors duration-300" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-600 mb-1.5">Check-out</label>
                <input type="date" className="w-full rounded-xl border border-ink-900/10 bg-white px-3 py-3 text-sm outline-none focus:border-gold-400 transition-colors duration-300" />
              </div>
            </div>

            <label className="block text-xs font-semibold text-ink-600 mb-1.5">Guests</label>
            <select className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm mb-6 outline-none focus:border-gold-400 transition-colors duration-300">
              {[2, 4, 6, 8, 10, 12].map((g) => (
                <option key={g}>{g} Guests</option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-semibold py-3.5 text-sm transition-colors duration-300"
            >
              <Search size={15} /> Search Yachts
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
