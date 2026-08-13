import SectionHeading from './SectionHeading.jsx'

export default function IntroSection() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <SectionHeading
            eyebrow="The House"
            title="Not a barbershop. A grooming house."
          />
          <div className="space-y-6 text-lg text-ivory-dim leading-relaxed">
            <p>
              Gentry Salon was founded on a simple conviction: that a man&rsquo;s
              grooming ritual deserves the same craftsmanship as his tailoring.
              Every chair, every blade, every product is chosen with that
              standard in mind.
            </p>
            <p>
              Our barbers train for years before they touch a client, studying
              the classic techniques of the straight razor alongside modern
              texture and fade work — so whatever you ask for, it&rsquo;s executed
              with total control.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
