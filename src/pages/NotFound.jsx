import { Link } from 'react-router-dom'
import { Anchor, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" />
      <section className="relative min-h-[80vh] flex items-center justify-center bg-navy-950 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544644181-1484b3fdfc32?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
        <div className="relative container-px text-center max-w-md">
          <span className="grid place-items-center w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 mx-auto mb-6">
            <Anchor size={26} />
          </span>
          <p className="font-display font-bold text-6xl text-white">404</p>
          <h1 className="font-display font-semibold text-xl text-white mt-3">Looks Like You've Drifted Off Course</h1>
          <p className="text-white/60 mt-3 leading-relaxed">The page you're looking for has sailed elsewhere. Let's get you back to open water.</p>
          <Link to="/" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm mt-8">
            Back to Home <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
