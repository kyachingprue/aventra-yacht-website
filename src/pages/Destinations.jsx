import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'

export default function Destinations() {
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
    </>
  )
}
