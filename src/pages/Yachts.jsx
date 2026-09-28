import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import YachtCard from '../components/YachtCard'
import { yachts } from '../data/yachts'

const types = ['All', 'Motor Yacht', 'Sailing Yacht', 'Catamaran', 'Super Yacht']

export default function Yachts() {
  const location = useLocation()
  const [activeType, setActiveType] = useState(location.state?.type || 'All')
  const [query, setQuery] = useState(location.state?.search || '')
  const [sort, setSort] = useState('recommended')

  const filtered = useMemo(() => {
    let list = yachts.filter((y) => activeType === 'All' || y.type === activeType)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter((y) => y.name.toLowerCase().includes(q) || y.location.toLowerCase().includes(q))
    }
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [activeType, query, sort])

  return (
    <>
      <Seo title="Our Yacht Fleet" description="Browse our handpicked fleet of motor yachts, sailing yachts, catamarans and super yachts available for charter." />
      <PageHero
        eyebrow="Our Fleet"
        title="Exclusive Yachts for Every Journey"
        subtitle="Handpicked motor yachts, sailing yachts, catamarans and super yachts, each with a professional crew ready to host you."
        image="https://images.unsplash.com/photo-1568430462989-44163eb1b109?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-px max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10">
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors duration-300 ${
                    activeType === t
                      ? 'bg-navy-950 text-white border-navy-950'
                      : 'border-ink-900/15 text-ink-600 hover:border-navy-950/40'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or location"
                className="rounded-full border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-gold-400 transition-colors duration-300 w-full sm:w-56"
              />
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <SlidersHorizontal size={15} className="text-ink-400" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-full border border-ink-900/15 px-3 py-2.5 text-sm outline-none focus:border-gold-400 transition-colors duration-300 bg-white"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-ink-500 text-center py-20">No yachts match your search. Try a different destination or yacht type.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filtered.map((yacht, i) => (
                <Reveal key={yacht.id} delay={(i % 3) * 0.08}>
                  <YachtCard yacht={yacht} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
