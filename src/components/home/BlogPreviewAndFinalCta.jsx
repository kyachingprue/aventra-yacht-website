import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal'
import Eyebrow from '../Eyebrow'
import { blogPosts } from '../../data/content'

export function BlogPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Latest From Our Blog</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 leading-tight max-w-lg">
              Travel Tips, Destinations & Yacht Life
            </h2>
            <p className="text-ink-600 mt-4 max-w-md leading-relaxed">
              Get inspired with expert tips, destination guides and the latest from the world of luxury yachting.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold border border-ink-900/15 rounded-full px-5 py-3 hover:border-gold-400 hover:text-gold-500 transition-colors duration-300 shrink-0"
          >
            View All Posts <ArrowRight size={15} />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.07}>
              <Link to={`/blog/${post.id}`} className="group block h-full">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <p className="text-ink-400 text-xs mt-4">{post.date}</p>
                <h3 className="font-display font-semibold text-ink-900 mt-1.5 leading-snug group-hover:text-gold-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-navy-800">
                  Read More <ArrowUpRight size={13} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="relative py-28 sm:py-36 bg-navy-950 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500052667470-7005393692ff?auto=format&fit=crop&w=2000&q=80"
        alt="Yacht bow at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/65 to-navy-950/10" />

      <div className="relative container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-lg">
          <Eyebrow light>Ready to Sail?</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Book Your Dream Yacht Today
          </h2>
          <p className="text-white/65 mt-5 leading-relaxed">
            Let us create your perfect journey. Get in touch with our team for personalized support and exclusive offers.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm mt-8"
          >
            Contact Us <ArrowRight size={15} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
