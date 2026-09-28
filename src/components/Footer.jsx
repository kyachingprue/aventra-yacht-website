import { Link } from 'react-router-dom'
import { Anchor, ArrowRight } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { destinations } from '../data/destinations'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70 pt-16 pb-8">
      <div className="container-px max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400">
              <Anchor size={17} />
            </span>
            <span className="font-display leading-none">
              <span className="block text-white font-bold tracking-wide text-base">
                AVENTRA
              </span>
              <span className="block text-gold-400 text-[10px] tracking-[0.2em]">
                YACHT.COM
              </span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Luxury yacht charters for unforgettable journeys across the globe.
            Handpicked fleets, real crews, effortless planning.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[
              FaFacebookF,
              FaInstagram,
              FaYoutube,
              FaLinkedinIn,
              FaXTwitter
            ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid place-items-center w-9 h-9 rounded-full border border-white/15 hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-4 text-sm tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ['/', 'Home'],
              ['/yachts', 'Yachts'],
              ['/destinations', 'Destinations'],
              ['/experiences', 'Experiences'],
              ['/about', 'About'],
              ['/contact', 'Contact']
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-4 text-sm tracking-wide">
            Destinations
          </h4>
          <ul className="space-y-2.5 text-sm">
            {destinations.slice(0, 5).map(d => (
              <li key={d.id}>
                <Link
                  to={`/destinations/${d.id}`}
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  {d.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/destinations"
                className="text-gold-400 inline-flex items-center gap-1 hover:gap-1.5 transition-all duration-300"
              >
                View All <ArrowRight size={13} />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-4 text-sm tracking-wide">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-sm mb-4">
            Get the latest offers and travel inspiration.
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex items-center bg-white/5 border border-white/15 rounded-full p-1 pl-4 max-w-xs focus-within:border-gold-400/60 transition-colors duration-300"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/40 text-white min-w-0"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="btn-gold grid place-items-center w-8 h-8 rounded-full shrink-0"
            >
              <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </div>

      <div className="container-px max-w-[1440px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} AntixorYacht.com. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hover:text-gold-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-gold-400 transition-colors duration-300"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
