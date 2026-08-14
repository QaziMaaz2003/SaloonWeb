import RazorDivider from './RazorDivider.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const isCenter = align === 'center'

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-bronze mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-balance text-4xl sm:text-5xl leading-[1.1] ${
          light ? 'text-obsidian' : 'text-ivory'
        }`}
      >
        {title}
      </h2>
      <RazorDivider align={isCenter ? 'center' : 'left'} className="mt-6" />
      {description && (
        <p
          className={`mt-6 text-base sm:text-lg leading-relaxed ${
            light ? 'text-obsidian-2/80' : 'text-ivory-dim'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
