import { useMemo, useState } from 'react'
import ServiceCard from './ServiceCard.jsx'
import { services } from '../data/services.js'

export default function ServicesGrid() {
  const categories = useMemo(
    () => ['All', ...new Set(services.map((s) => s.category))],
    []
  )
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? services : services.filter((s) => s.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`font-mono text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors duration-300 ${
              active === category
                ? 'bg-bronze text-obsidian border-bronze'
                : 'border-line text-ivory-dim hover:border-bronze-deep hover:text-ivory'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}
