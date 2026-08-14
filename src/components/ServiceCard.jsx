import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const { name, category, description, price, slug } = service

  return (
    <Link
      to={`/services/${slug}`}
      className="block group"
    >
      <div className="relative bg-obsidian-2 border border-line p-8 transition-all duration-500 hover:border-bronze-deep hover:-translate-y-1">

        <span className="absolute top-0 left-0 h-3 w-px bg-bronze-deep group-hover:bg-bronze group-hover:h-5 transition-all duration-500" />
        <span className="absolute top-0 left-0 w-3 h-px bg-bronze-deep group-hover:bg-bronze group-hover:w-5 transition-all duration-500" />

        <span className="absolute bottom-0 right-0 h-3 w-px bg-bronze-deep group-hover:bg-bronze group-hover:h-5 transition-all duration-500" />
        <span className="absolute bottom-0 right-0 w-3 h-px bg-bronze-deep group-hover:bg-bronze group-hover:w-5 transition-all duration-500" />

        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-bronze mb-4">
          {category}
        </p>

        <h3 className="font-display text-2xl text-ivory mb-3">
          {name}
        </h3>

        <p className="text-sm text-ivory-dim leading-relaxed mb-8 min-h-18">
          {description}
        </p>

        <div className="flex items-center justify-end pt-6 border-t border-line">
          <span className="font-display text-xl text-bronze-bright">
            {price}
          </span>
        </div>

      </div>
    </Link>
  )
}