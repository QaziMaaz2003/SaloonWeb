import { Link, useParams } from 'react-router-dom'
import {
  getServiceBySlug,
  getRelatedServices,
} from '../data/services.js'

const serviceImages = {
  'beard-styling': '/beard styling.jpg',
  'classic-haircut': '/classic haircut.jpg',
  'facial-grooming': '/facial grooming.jpg',
  'hair-beard-package': '/hair and beard package.jpg',
  'hair-styling': '/hair styling.jpg',
  'premium-grooming-package': '/premium grooming package.jpg',
  'premium-haircut': '/premium haircut.jpg',
}

function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Service Not Found
          </h1>

          <Link
            to="/services"
            className="inline-block px-6 py-3 bg-bronze text-obsidian font-medium"
          >
            Back to Services
          </Link>
        </div>
      </section>
    )
  }

  const relatedServices = getRelatedServices(service)
  const serviceImage = serviceImages[service.slug]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Service */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Service Image */}
          <div className="overflow-hidden bg-obsidian-2 border border-line">
            <img
              src={serviceImage}
              alt={service.name}
              className="w-full aspect-4/5 object-cover"
            />
          </div>

          {/* Service Details */}
          <div>
            <p className="text-bronze uppercase tracking-[0.25em] text-sm mb-4">
              {service.category}
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              {service.name}
            </h1>

            <p className="text-ivory/70 text-lg leading-8 mb-8">
              {service.longDescription}
            </p>

            {/* What's Included */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-5">
                What's Included
              </h2>

              <ul className="space-y-3">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-ivory/70"
                  >
                    <span className="text-bronze mr-3">
                      ✓
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div>
              <p className="text-ivory/40 text-sm mb-1">
                Price
              </p>

              <p className="text-3xl font-semibold text-bronze-bright">
                {service.price}
              </p>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-24">

          <div className="mb-10">
            <p className="text-bronze uppercase tracking-[0.25em] text-sm mb-3">
              Explore More
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              You May Also Like
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                to={`/services/${related.slug}`}
                className="group"
              >
                <div className="bg-obsidian-2 border border-line overflow-hidden">

                  {/* Related Image */}
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={serviceImages[related.slug]}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Related Details */}
                  <div className="p-6">
                    <p className="text-bronze text-xs uppercase tracking-widest mb-2">
                      {related.category}
                    </p>

                    <h3 className="text-xl font-semibold group-hover:text-bronze transition">
                      {related.name}
                    </h3>

                    <p className="text-bronze-bright mt-2">
                      {related.price}
                    </p>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServiceDetail