import { Link } from 'react-router-dom'
import RazorDivider from './RazorDivider.jsx'

const hours = [
  { day: 'Mon — Fri', time: '9:00 — 19:00' },
  { day: 'Saturday', time: '9:00 — 19:00' },
  { day: 'Sunday', time: '10:00 — 17:00' },
]

export default function Footer() {
  return (
    <footer className="bg-obsidian-2 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="Gentry Salon"
                className="h-24 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm text-ivory-dim leading-relaxed max-w-xs">
              A private grooming house for men who understand that precision
              is its own form of confidence.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-bronze mb-5">
              Navigate
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-ivory-dim hover:text-bronze-bright transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-ivory-dim hover:text-bronze-bright transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-ivory-dim hover:text-bronze-bright transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-ivory-dim hover:text-bronze-bright transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-bronze mb-5">
              Visit
            </h3>

            <ul className="space-y-3 text-sm text-ivory-dim">
              <li>1847 Cedar Springs Road</li>
              <li>Dallas, TX 75201</li>
              <li>+1 (214) 555-0187</li>
              <li>hello@gentrysalondallas.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-bronze mb-5">
              Hours
            </h3>

            <ul className="space-y-3 text-sm">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-4 text-ivory-dim"
                >
                  <span>{h.day}</span>

                  <span className="font-mono text-xs text-ivory">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <RazorDivider className="mt-14 mb-8" />

        <div className="text-center text-xs text-ivory-dim">
          <p>
            &copy; {new Date().getFullYear()} Gentry Salon. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}