import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, Anchor, ArrowRight } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/90 backdrop-blur-md shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]'
            : 'bg-navy-950/40 backdrop-blur-sm'
        }`}
      >
        <nav className="container-px flex items-center justify-between py-4 max-w-[1440px] mx-auto">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400">
              <Anchor size={17} strokeWidth={2} />
            </span>
            <span className="font-display leading-none">
              <span className="block text-white font-bold tracking-wide text-[15px] sm:text-base">
                AVENTRA
              </span>
              <span className="block text-gold-400 text-[10px] tracking-[0.2em]">
                YACHT.COM
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-9 text-sm text-white/85 font-medium">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `link-underline pb-1 transition-colors duration-300 ${isActive ? 'text-gold-400' : 'hover:text-white'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-white/20 text-white active:scale-95 transition-transform"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-navy-950/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%', opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.6 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 z-[70] h-full w-[82%] max-w-xs bg-navy-900 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
                <span className="font-display font-bold text-white tracking-wide">
                  MENU
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid place-items-center w-9 h-9 rounded-full border border-white/20 text-white hover:bg-white/10 active:scale-95 transition-all duration-300"
                >
                  <X size={18} />
                </button>
              </div>

              <ul className="flex-1 flex flex-col justify-center gap-1 px-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-3.5 border-b border-white/5 text-lg font-display font-medium transition-colors duration-300 ${
                          isActive ? 'text-gold-400' : 'text-white/85'
                        }`
                      }
                    >
                      {link.label}
                      <ArrowRight size={16} className="opacity-40" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="px-6 pb-8">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-gold flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm w-full"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
