import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { blogPosts } from '../data/content'

export default function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <Seo title="Blog" description="Travel tips, destination guides, and the latest from the world of luxury yachting." />
      <PageHero
        eyebrow="Our Journal"
        title="Travel Tips, Destinations & Yacht Life"
        subtitle="Notes from our charter specialists and captains — practical, opinionated, and written for people who actually plan to sail."
        image="https://images.unsplash.com/photo-1523365154350-5257f75cea8b?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-px max-w-[1440px] mx-auto">
          <Reveal>
            <Link to={`/blog/${featured.id}`} className="group grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-ink-900/5 bg-sand-50 mb-16">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7 lg:p-2 lg:pr-10">
                <p className="text-ink-400 text-xs">{featured.date}</p>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 mt-2 leading-tight group-hover:text-gold-500 transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-ink-600 mt-4 leading-relaxed">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-navy-800">
                  Read Full Article <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.08}>
                <Link to={`/blog/${post.id}`} className="group block h-full">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <p className="text-ink-400 text-xs mt-4">{post.date}</p>
                  <h3 className="font-display font-semibold text-ink-900 mt-1.5 leading-snug group-hover:text-gold-500 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-ink-500 text-sm mt-2 leading-relaxed">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
