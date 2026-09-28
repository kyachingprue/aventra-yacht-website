import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { blogPosts } from '../data/content'

export default function BlogDetail() {
  const { id } = useParams()
  const index = blogPosts.findIndex((p) => p.id === id)
  const post = blogPosts[index]

  if (!post) return <Navigate to="/blog" replace />

  const next = blogPosts[(index + 1) % blogPosts.length]

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />

      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 bg-navy-950 overflow-hidden">
        <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        <div className="relative container-px max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-white/60 text-xs hover:text-gold-400 transition-colors duration-300 mb-6">
            <ArrowLeft size={13} /> Back to Blog
          </Link>
          <p className="flex items-center gap-1.5 text-gold-400 text-xs mb-3">
            <Calendar size={13} /> {post.date}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">{post.title}</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-px max-w-3xl mx-auto">
          <Reveal className="rounded-3xl overflow-hidden mb-10 aspect-[16/9]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </Reveal>

          <div className="space-y-6">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-ink-700 leading-relaxed text-[15px]">{para}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-ink-900/10 flex items-center justify-between gap-4 flex-wrap">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold border border-ink-900/15 rounded-full px-5 py-3 hover:border-gold-400 hover:text-gold-500 transition-colors duration-300">
              <ArrowLeft size={14} /> All Articles
            </Link>
            <Link to={`/blog/${next.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-navy-950 rounded-full px-5 py-3 hover:bg-navy-900 transition-colors duration-300">
              Next: {next.title} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
