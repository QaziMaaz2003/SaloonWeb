import SectionHeading from './SectionHeading.jsx'

const pillars = [
  {
    title: 'Craft Over Speed',
    text: 'We schedule fewer appointments per day than most salons, on purpose. Precision needs time.',
  },
  {
    title: 'Discretion',
    text: 'A quiet, private room where you can think, disconnect, or talk shop — your session, your pace.',
  },
  {
    title: 'Continual Training',
    text: 'Our barbers train with visiting master craftsmen twice a year to keep their technique sharp.',
  },
]

export default function PhilosophySection() {
  return (
    <section className="border-b border-line bg-obsidian-2/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="Grooming, treated as a discipline."
          align="center"
          description="Three principles guide every decision we make, from hiring to the products on our shelves."
        />

        <div className="grid sm:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="relative pl-8">
              <span className="absolute left-0 top-1 font-mono text-xs text-bronze-deep">
                0{index + 1}
              </span>
              <div className="absolute left-3 top-2 bottom-0 w-px bg-line" />
              <h3 className="font-display text-xl text-ivory mb-3">{pillar.title}</h3>
              <p className="text-sm text-ivory-dim leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
