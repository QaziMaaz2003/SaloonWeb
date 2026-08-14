import SectionHeading from './SectionHeading.jsx'

const reasons = [
  {
    mark: 'I',
    title: 'Master Barbers',
    description:
      'Every stylist completes a multi-year apprenticeship rooted in classic razor technique before joining the floor.',
  },
  {
    mark: 'II',
    title: 'Bespoke Consultation',
    description:
      'No two faces are the same. We map your bone structure and hair growth before a single cut is made.',
  },
  {
    mark: 'III',
    title: 'Premium Products',
    description:
      'We use only professional-grade oils, pomades, and tonics sourced for men who notice the difference.',
  },
  {
    mark: 'IV',
    title: 'Private, Unhurried',
    description:
      'Appointments are spaced for calm — no rushing, no crowded waiting room, just your session.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <SectionHeading
          eyebrow="Why Gentry"
          title="The details most salons skip."
          align="center"
          description="Four commitments that separate a haircut from a Gentry experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line mt-16">
          {reasons.map((reason) => (
            <div key={reason.mark} className="bg-obsidian p-8 group hover:bg-obsidian-2 transition-colors duration-500">
              <span className="font-mono text-sm text-bronze-deep group-hover:text-bronze transition-colors">
                {reason.mark}
              </span>
              <h3 className="font-display text-xl text-ivory mt-4 mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-ivory-dim leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
