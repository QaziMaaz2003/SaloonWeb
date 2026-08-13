import Button from './Button.jsx'
import RazorDivider from './RazorDivider.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* ambient background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-bronze/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-bronze-deep/10 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="#BC9257" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="fade-up font-mono text-xs tracking-[0.35em] uppercase text-bronze mb-6">
              Est. 2016 — Men&rsquo;s Grooming House
            </p>

            <h1 className="fade-up fade-up-delay-1 font-display text-balance text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ivory">
              Precision is a
              <span className="block italic text-bronze-bright">gentleman&rsquo;s</span>
              signature.
            </h1>

            <div className="fade-up fade-up-delay-2">
              <RazorDivider className="mt-8 mb-8" />
            </div>

            <p className="fade-up fade-up-delay-2 text-lg text-ivory-dim leading-relaxed max-w-lg">
              Gentry Salon is a private grooming house where classic
              barbering technique meets modern refinement — every cut, shave,
              and treatment measured to the millimetre.
            </p>

            <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row gap-4 mt-10">
              <Button to="/contact" variant="primary">
                Book Appointment
              </Button>
              <Button to="/services" variant="outline">
                View Services
              </Button>
            </div>

            <div className="fade-up fade-up-delay-4 flex items-center gap-10 mt-14 pt-10 border-t border-line">
              <div>
                <p className="font-display text-3xl text-bronze-bright">9+</p>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory-dim mt-1">
                  Years Refined
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-bronze-bright">12k</p>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory-dim mt-1">
                  Gentlemen Groomed
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-bronze-bright">4.9</p>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory-dim mt-1">
                  Average Rating
                </p>
              </div>
            </div>
          </div>

          <div className="fade-up fade-up-delay-2 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-bronze-deep/60" />
              <div className="absolute inset-6 rounded-full border border-bronze-deep/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 240 300"
                  className="w-3/4 h-3/4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Straight razor illustration */}
                  <g stroke="#E3BE84" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M40 90 L150 60 C165 56 178 66 176 80 L173 96 L52 122 Z" />
                    <path d="M52 122 L44 140 L36 122 Z" fill="#E3BE84" />
                    <line x1="176" y1="80" x2="200" y2="76" />
                    <path d="M200 76 C214 74 224 84 222 96 L216 118 C214 128 204 134 194 130 L170 120" />
                  </g>
                  {/* Scissors illustration below */}
                  <g stroke="#BC9257" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                    <circle cx="60" cy="220" r="12" />
                    <circle cx="60" cy="260" r="12" />
                    <path d="M70 214 L190 170" />
                    <path d="M70 266 L190 210" />
                  </g>
                  <line x1="20" y1="180" x2="220" y2="180" stroke="#7C5A32" strokeWidth="0.5" strokeDasharray="2 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
