import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import { experiences } from '../../data/content'

export default function TopExperiences() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-px max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>Top Experiences</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight max-w-md">
            More Than a Trip — It's an Experience
          </h2>
          <p className="text-ink-600 mt-5 max-w-md leading-relaxed">
            From private parties to special celebrations, our yachts are the perfect setting for life's most memorable moments.
          </p>

          <div className="mt-9 space-y-1">
            {experiences.map((exp) => {
              const Icon = Icons[exp.icon] || Icons.Sparkles
              return (
                <Link
                  key={exp.id}
                  to={`/experiences#${exp.id}`}
                  className="group flex items-center gap-4 py-3.5 border-b border-ink-900/8 last:border-0"
                >
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-navy-950/5 text-navy-800 shrink-0 group-hover:bg-gold-500/15 group-hover:text-gold-500 transition-colors duration-300">
                    <Icon size={19} />
                  </span>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-ink-900 text-sm">{exp.title}</p>
                    <p className="text-ink-400 text-xs mt-0.5">{exp.short}</p>
                  </div>
                  <ArrowRight size={15} className="text-ink-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              )
            })}
          </div>

          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold border border-ink-900/15 rounded-full px-6 py-3.5 hover:border-gold-400 hover:text-gold-500 transition-colors duration-300"
          >
            Explore Experiences <ArrowRight size={15} />
          </Link>
        </Reveal>

        <Reveal delay={0.12} className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden row-span-2">
            <img src={experiences[0].image} alt={experiences[0].title} className="w-full h-full object-cover aspect-[4/5] sm:aspect-auto" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={experiences[2].image} alt={experiences[2].title} className="w-full h-full object-cover aspect-square" />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src={experiences[3].image} alt={experiences[3].title} className="w-full h-full object-cover aspect-square" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
