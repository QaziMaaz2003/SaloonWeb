import Button from './Button.jsx'
import RazorDivider from './RazorDivider.jsx'

export default function CTASection({
  eyebrow = 'Reserve Your Chair',
  title = 'Your next look starts with one appointment.',
  description = 'Sessions are limited daily to protect the calm, unhurried pace every client deserves.',
  buttonLabel = 'Book Appointment',
  buttonTo = '/contact',
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-obsidian-3 via-obsidian to-obsidian" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-bronze/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 py-24 text-center">
        <p className="font-mono text-xs tracking-[0.35em] uppercase text-bronze mb-6">
          {eyebrow}
        </p>
        <h2 className="font-display text-balance text-4xl sm:text-5xl leading-tight text-ivory">
          {title}
        </h2>
        <RazorDivider align="center" className="mt-6 mb-6" />
        <p className="text-lg text-ivory-dim leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
        <div className="mt-10">
          <Button to={buttonTo} variant="primary">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
