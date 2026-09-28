import { Link } from 'react-router-dom'
import { ShieldCheck, Sparkles, Users2, Globe2, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { stats } from '../data/content'

const values = [
  { icon: Sparkles, title: 'Craftsmanship', text: 'Every itinerary is built by hand, not pulled from a template — we plan around how you actually want your days to feel.' },
  { icon: ShieldCheck, title: 'Trust', text: 'Fully insured, licensed vessels and vetted crews, with transparent pricing from the first quote to the final invoice.' },
  { icon: Users2, title: 'Hospitality', text: 'Crews trained to anticipate rather than ask twice — the mark of a charter that feels effortless.' },
  { icon: Globe2, title: 'Reach', text: 'Fifteen years of relationships with marinas and captains across 100+ destinations worldwide.' },
]

const team = [
  { name: 'Elena Marchetti', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80' },
  { name: 'David Okafor', role: 'Head of Charter Operations', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80' },
  { name: 'Mei Lin', role: 'Guest Experience Director', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80' },
  { name: 'Tomás Herrera', role: 'Fleet & Safety Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
]

export default function About() {
  return (
    <>
      <Seo title="About Us" description="Antixor Yacht has spent fifteen years pairing travelers with the right yacht, crew and coastline." />
      <PageHero
        eyebrow="Our Story"
        title="Fifteen Years of Charters Built Around You"
        subtitle="Antixor Yacht started with one boat and one belief: the best charters disappear into the background so the trip can take over."
        image="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-px max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=1400&q=80" alt="Yacht crew at work" className="w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="font-display font-bold text-3xl text-ink-900 leading-tight max-w-md">
              A Charter Broker Run by People Who've Actually Crewed
            </h2>
            <p className="text-ink-600 mt-5 leading-relaxed">
              Antixor Yacht was founded in 2011 by a small crew of charter captains who kept hearing the same complaint from guests: booking a yacht was harder than it should be, and the experience rarely matched the brochure.
            </p>
            <p className="text-ink-600 mt-4 leading-relaxed">
              We built the company we wished existed — one where every yacht in the fleet has been personally inspected, every crew has been vetted for hospitality as much as seamanship, and every itinerary is built around the guest, not a fixed package.
            </p>
            <p className="text-ink-600 mt-4 leading-relaxed">
              Today that means 500+ yachts and 100+ destinations, but the standard hasn't changed: if we wouldn't book it for our own families, it doesn't join the fleet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="container-px max-w-[1440px] mx-auto">
          <Reveal className="max-w-lg mb-14">
            <Eyebrow light>What We Stand For</Eyebrow>
            <h2 className="font-display font-bold text-3xl text-white leading-tight">The Principles Behind Every Charter</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="rounded-2xl bg-navy-900 border border-white/10 p-6">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gold-500/15 text-gold-400 mb-4">
                  <Icon size={19} />
                </span>
                <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 border-t border-ink-900/5">
        <div className="container-px max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-ink-900/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center py-12 px-3">
              <p className="font-display font-bold text-3xl sm:text-4xl text-navy-950">{s.value}</p>
              <p className="text-ink-500 text-xs sm:text-sm mt-1.5">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-px max-w-[1440px] mx-auto">
          <Reveal className="max-w-lg mb-14">
            <Eyebrow>Meet The Team</Eyebrow>
            <h2 className="font-display font-bold text-3xl text-ink-900 leading-tight">The People Behind Your Journey</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.07}>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-display font-semibold text-ink-900">{member.name}</p>
                <p className="text-ink-400 text-sm">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-navy-950 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2000&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/40" />
        <div className="relative container-px max-w-[1440px] mx-auto text-center">
          <Reveal className="max-w-xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">Ready to plan your own story?</h2>
            <p className="text-white/60 mt-4">Tell us the coastline, the crowd and the mood — we'll take it from there.</p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm mt-8">
              Start Planning <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
