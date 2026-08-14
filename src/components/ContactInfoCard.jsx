export default function ContactInfoCard({ label, value, sub }) {
  return (
    <div className="border-l border-line pl-6 py-1">
      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-bronze mb-2">
        {label}
      </p>
      <p className="font-display text-xl text-ivory">{value}</p>
      {sub && <p className="text-sm text-ivory-dim mt-1">{sub}</p>}
    </div>
  )
}
