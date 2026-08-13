import SectionHeading from '../components/SectionHeading.jsx'

export default function StorySection() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built by barbers who missed the old craft."
            />
            <div className="mt-8 space-y-6 text-lg text-ivory-dim leading-relaxed">
              <p>
                Gentry Salon opened in 2016 in a converted tailor&rsquo;s
                workshop, founded by three barbers who felt the industry had
                started chasing speed over skill. They wanted a room where the
                straight razor still mattered.
              </p>
              <p>
                What began as a four-chair studio has grown into Karachi&rsquo;s
                reference point for classic men&rsquo;s grooming — but the
                original rule still holds: no appointment is rushed, no
                detail is skipped.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/5 w-full max-w-md mx-auto border border-line bg-obsidian-2 flex items-center justify-center">
              <svg viewBox="0 0 220 280" className="w-2/3 h-2/3" fill="none">
                <g stroke="#BC9257" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M60 40 L160 40 L160 90 L110 240 L60 90 Z" />
                  <line x1="60" y1="90" x2="160" y2="90" />
                  <circle cx="110" cy="65" r="10" />
                </g>
                <text
                  x="110"
                  y="270"
                  textAnchor="middle"
                  fontFamily="Space Mono, monospace"
                  fontSize="10"
                  letterSpacing="3"
                  fill="#7C5A32"
                >
                  EST. 2016
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
