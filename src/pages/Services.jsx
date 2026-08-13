import PageHeader from '../components/PageHeader.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="The Menu"
        title="Every service, one standard."
        description="From a clean weekly trim to the full grooming ritual — each service is priced clearly and performed with the same precision."
      />

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <ServicesGrid />
        </div>
      </section>

      <CTASection
        eyebrow="Ready When You Are"
        title="Pick a service. We'll handle the rest."
        description="Book online in under a minute, or call the front desk to reserve your preferred barber."
      />
    </>
  )
}
