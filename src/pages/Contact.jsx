import PageHeader from '../components/PageHeader.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactInfoCard from '../components/ContactInfoCard.jsx'
import MapPanel from '../components/MapPanel.jsx'
import RazorDivider from '../components/RazorDivider.jsx'

const hours = [
  { day: 'Monday — Friday', time: '9:00 AM — 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM — 7:00 PM' },
  { day: 'Sunday', time: '10:00 AM — 5:00 PM' },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Reserve your chair."
        description="Reach out by phone, email, or the form below — our front desk typically replies within a few hours."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-bronze mb-8">
                Send a Request
              </p>

              <ContactForm />
            </div>

            <div className="space-y-12">

              <div className="grid sm:grid-cols-2 gap-8">

                <ContactInfoCard
                  label="Phone"
                  value="+1 (214) 555-0187"
                  sub="Front desk, 9am – 7pm"
                />

                <ContactInfoCard
                  label="Email"
                  value="hello@gentrysalondallas.com"
                  sub="Replies within 24 hours"
                />

                <ContactInfoCard
                  label="Location"
                  value="1847 Cedar Springs Road"
                  sub="Dallas, TX 75201"
                />

                <ContactInfoCard
                  label="Appointments"
                  value="Preferred"
                  sub="Walk-ins welcome when available"
                />

              </div>

              <div>
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-bronze mb-6">
                  Opening Hours
                </p>

                <div className="border border-line divide-y divide-line">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between px-6 py-4"
                    >
                      <span className="text-sm text-ivory-dim">
                        {h.day}
                      </span>

                      <span className="font-mono text-xs text-ivory">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">

            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                Find Us
              </p>

              <h2 className="font-display text-3xl text-ivory">
                Dallas, Texas
              </h2>

              <p className="text-sm text-ivory-dim mt-3">
                1847 Cedar Springs Road, Dallas, TX 75201
              </p>

              <RazorDivider className="mt-4" />
            </div>

            <a
              href="https://maps.google.com/?q=1847+Cedar+Springs+Road,+Dallas,+TX+75201"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-[0.15em] uppercase text-bronze hover:text-bronze-bright transition-colors"
            >
              Open in Maps →
            </a>

          </div>

          <MapPanel />

        </div>
      </section>
    </>
  )
}