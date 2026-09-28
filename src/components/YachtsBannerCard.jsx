import { motion } from 'motion/react'
import { Anchor, Clock, Gauge, ShieldCheck, Sailboat, Sparkles, Star, Users } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const highlights = [
  { icon: ShieldCheck, title: 'Fully Insured & Licensed', text: 'Every vessel inspected before it joins the fleet.' },
  { icon: Sparkles, title: 'Professional Crew Onboard', text: 'Captain, chef and hosts included on every charter.' },
  { icon: Clock, title: 'Flexible Charter Windows', text: 'Half-day, full-day or week-long journeys.' },
]

const fleetTypes = [
  { label: 'Motor Yachts', count: 210, width: '84%' },
  { label: 'Sailing Yachts', count: 140, width: '58%' },
  { label: 'Catamarans', count: 95, width: '40%' },
  { label: 'Super Yachts', count: 55, width: '24%' },
]

const stats = [
  { icon: Sailboat, value: '500+', label: 'Yachts' },
  { icon: Users, value: '12', label: 'Max guests' },
  { icon: Gauge, value: '32 kn', label: 'Top speed' },
]

export default function YachtsBannerCard() {
  return (
    <section className="relative overflow-hidden bg-navy-950 isolate">
      {/* background */}
      <motion.img
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease }}
        src="https://images.unsplash.com/photo-1568430462989-44163eb1b109?auto=format&fit=crop&w=2200&q=80"
        alt=""
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30" />
      <div className="absolute -top-24 -left-24 -z-10 w-72 h-72 rounded-full bg-gold-500/15 blur-3xl" />

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        {/* LEFT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-300 backdrop-blur-sm"
          >
            <Anchor size={13} /> Our Fleet
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] mt-5 max-w-xl"
          >
            Find the Yacht That Fits Your <span className="text-gold-400">Perfect Journey</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease }}
            className="text-white/70 mt-5 max-w-lg leading-relaxed"
          >
            From sleek motor yachts to graceful sailing vessels, every boat in our fleet is handpicked for comfort, style and performance.
          </motion.p>

          <ul className="mt-9 space-y-4 max-w-lg">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.5 + i * 0.1, ease }}
                className="flex items-start gap-4 group"
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-gold-400 backdrop-blur-sm shrink-0 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="font-display font-semibold text-white text-sm">{title}</p>
                  <p className="text-white/55 text-sm mt-0.5">{text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 sm:p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/50 text-xs">Fleet at a glance</p>
                <p className="font-display font-bold text-white text-xl mt-0.5">500+ Luxury Yachts</p>
              </div>
              <span className="grid place-items-center w-11 h-11 rounded-full bg-gold-500 text-navy-950">
                <Sailboat size={20} />
              </span>
            </div>

            <div className="space-y-4">
              {fleetTypes.map((t, i) => (
                <div key={t.label}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-white/85 font-medium">{t.label}</span>
                    <span className="text-white/50">{t.count}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: t.width }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.12, ease }}
                      className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mt-7 pt-6 border-t border-white/10">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon size={16} className="mx-auto text-gold-400 mb-1.5" />
                  <p className="font-display font-bold text-white text-sm sm:text-base">{value}</p>
                  <p className="text-white/45 text-[11px]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* floating rating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-3 sm:-left-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
          >
            <span className="grid place-items-center w-10 h-10 rounded-full bg-gold-500/15 text-gold-600">
              <Star size={18} fill="currentColor" strokeWidth={0} />
            </span>
            <div>
              <p className="font-display font-bold text-ink-900 text-sm leading-none">4.9 / 5</p>
              <p className="text-ink-400 text-[11px] mt-1">10K+ happy guests</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
