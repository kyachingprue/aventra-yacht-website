import * as Icons from 'lucide-react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { experiences } from '../data/content'

export default function Experiences() {
  return (
    <>
      <Seo title="Experiences" description="Private parties, corporate events, water sports and sunset cruises aboard an Antixor charter." />
      <PageHero
        eyebrow="Onboard Experiences"
        title="More Than a Trip — It's an Experience"
        subtitle="Every charter is shaped around what you want the day to feel like. Here's what we build most often."
        image="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=2000&q=80"
      />

      {experiences.map((exp, i) => {
        const Icon = Icons[exp.icon] || Icons.Sparkles
        const reversed = i % 2 === 1
        return (
          <section key={exp.id} id={exp.id} className={`py-16 sm:py-24 scroll-mt-24 ${i % 2 === 0 ? 'bg-white' : 'bg-sand-50'}`}>
            <div className="container-px max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <Reveal className={reversed ? 'lg:order-2' : ''}>
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-navy-950/5 text-navy-800 mb-5">
                  <Icon size={22} />
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 leading-tight">{exp.title}</h2>
                <p className="text-ink-600 mt-4 max-w-md leading-relaxed">{exp.description}</p>

                <div className="grid sm:grid-cols-2 gap-3 mt-8">
                  {exp.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-ink-700">
                      <span className="grid place-items-center w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 shrink-0">
                        <Check size={13} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-white bg-navy-950 rounded-full px-6 py-3.5 hover:bg-navy-900 transition-colors duration-300"
                >
                  Enquire About This <ArrowRight size={15} />
                </Link>
              </Reveal>

              <Reveal delay={0.1} className={`rounded-3xl overflow-hidden aspect-[4/3] ${reversed ? 'lg:order-1' : ''}`}>
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
              </Reveal>
            </div>
          </section>
        )
      })}
    </>
  )
}
