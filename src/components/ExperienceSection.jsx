import SectionHeading from './SectionHeading.jsx'

const steps = [
  { step: '01', title: 'Consultation', text: 'A five-minute conversation about your goals, face shape, and lifestyle.' },
  { step: '02', title: 'The Ritual', text: 'Hot towel, precision cutting or shaving, and a scalp or skin treatment.' },
  { step: '03', title: 'The Finish', text: 'Styling with premium product and a final mirror check, together.' },
]

export default function ExperienceSection() {
  return (
    <section className="border-b border-line bg-obsidian-2/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square w-full max-w-md mx-auto relative">
              <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
                <circle cx="150" cy="150" r="140" stroke="#322B21" strokeWidth="1" />
                <circle cx="150" cy="150" r="110" stroke="#322B21" strokeWidth="1" strokeDasharray="1 8" />
                <g stroke="#BC9257" strokeWidth="1.3" strokeLinecap="round">
                  <path d="M90 150 Q150 70 210 150 Q150 230 90 150 Z" />
                  <circle cx="150" cy="150" r="26" stroke="#E3BE84" />
                  <line x1="150" y1="60" x2="150" y2="90" />
                  <line x1="150" y1="210" x2="150" y2="240" />
                  <line x1="60" y1="150" x2="90" y2="150" />
                  <line x1="210" y1="150" x2="240" y2="150" />
                </g>
              </svg>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The Experience"
              title="Three acts. One outcome."
              description="Every Gentry appointment follows the same disciplined structure, regardless of which service you book."
            />

            <div className="mt-10 space-y-8">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <span className="font-mono text-sm text-bronze-deep pt-1">{item.step}</span>
                  <div>
                    <h3 className="font-display text-xl text-ivory mb-1">{item.title}</h3>
                    <p className="text-sm text-ivory-dim leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
