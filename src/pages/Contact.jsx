import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Seo title="Contact Us" description="Get in touch with the Antixor Yacht charter team for personalized support and exclusive offers." />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Plan Your Charter"
        subtitle="Tell us your dates, your group, and your ideal coastline — a charter specialist will reply within one business day."
        image="https://images.unsplash.com/photo-1500052667470-7005393692ff?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-px max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-14">
          <Reveal>
            <h2 className="font-display font-semibold text-2xl text-ink-900 mb-6">Contact Information</h2>
            <div className="space-y-5">
              {[
                [Phone, 'Call Us', '+1 (555) 234-9080'],
                [Mail, 'Email Us', 'charters@antixoryacht.com'],
                [MapPin, 'Visit Us', 'Marina Bay Tower, Dubai, UAE'],
                [Clock, 'Office Hours', 'Mon – Sat, 9:00 AM – 7:00 PM'],
              ].map(([Icon, label, value]) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-navy-950/5 text-navy-800 shrink-0">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-ink-400 text-xs">{label}</p>
                    <p className="font-display font-semibold text-ink-900 text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden mt-10 aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80" alt="Marina at dusk" className="w-full h-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-sand-50 border border-ink-900/5 p-7 sm:p-9">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-14">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-gold-500/15 text-gold-600 mb-5">
                  <Check size={24} />
                </span>
                <h3 className="font-display font-semibold text-xl text-ink-900">Message Sent</h3>
                <p className="text-ink-500 text-sm mt-2 max-w-xs">A charter specialist will reach out within one business day to start planning your trip.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 className="font-display font-semibold text-2xl text-ink-900 mb-6">Send Us a Message</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 mb-1.5">Full Name</label>
                    <input required placeholder="Your name" className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 mb-1.5">Email Address</label>
                    <input required type="email" placeholder="you@email.com" className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 mb-1.5">Preferred Destination</label>
                    <input placeholder="e.g. Maldives" className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 mb-1.5">Guests</label>
                    <select className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold-400 transition-colors duration-300">
                      {[2, 4, 6, 8, 10, 12, '12+'].map((g) => (
                        <option key={g}>{g} Guests</option>
                      ))}
                    </select>
                  </div>
                </div>
                <label className="block text-xs font-semibold text-ink-600 mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about the trip you're picturing..."
                  className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold-400 transition-colors duration-300 mb-6 resize-none"
                />
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm">
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
