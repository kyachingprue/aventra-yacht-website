export default function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className={`w-6 h-px ${light ? 'bg-gold-400' : 'bg-gold-500'}`} />
      <span className="eyebrow-gold text-xs tracking-[0.14em] uppercase">{children}</span>
    </div>
  )
}
