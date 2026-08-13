import SectionHeading from './SectionHeading.jsx'
import ServiceCard from './ServiceCard.jsx'
import Button from './Button.jsx'
import { services } from '../data/services.js'

export default function FeaturedServices() {
  const featured = services.slice(0, 3)

  return (
    <section className="border-b border-line bg-obsidian-2/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Signature Services"
            title="Crafted rituals, precise results."
            description="A selection from our full menu — each service performed to the same exacting standard."
          />
          <Button to="/services" variant="outline" className="w-fit">
            View Full Menu
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
