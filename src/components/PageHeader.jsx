import RazorDivider from './RazorDivider.jsx'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative border-b border-line overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-bronze/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <p className="fade-up font-mono text-xs tracking-[0.35em] uppercase text-bronze mb-6">
          {eyebrow}
        </p>
        <h1 className="fade-up fade-up-delay-1 font-display text-balance text-5xl sm:text-6xl leading-[1.05] text-ivory max-w-2xl">
          {title}
        </h1>
        <div className="fade-up fade-up-delay-2">
          <RazorDivider className="mt-8 mb-8" />
        </div>
        {description && (
          <p className="fade-up fade-up-delay-2 text-lg text-ivory-dim leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
