import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'bg-obsidian/90 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Gentry Salon"
              className="h-24 w-auto object-contain"
            />
          </NavLink>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-300 py-2 ${isActive ? 'text-bronze-bright' : 'text-ivory-dim hover:text-ivory'
                  } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-bronze after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary">
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span
              className={`h-px bg-bronze-bright transition-all duration-300 ${open ? 'w-6 translate-y-0.75 rotate-45' : 'w-6'
                }`}
            />
            <span
              className={`h-px bg-bronze-bright transition-all duration-300 ${open ? 'w-6 -translate-y-0.75 -rotate-45' : 'w-4'
                }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out border-b ${open ? 'max-h-96 opacity-100 border-line' : 'max-h-0 opacity-0 border-transparent'
          }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 bg-obsidian">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 border-b border-line/60 font-mono text-xs tracking-[0.18em] uppercase transition-colors ${isActive ? 'text-bronze-bright' : 'text-ivory-dim'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-5">
            <Button to="/contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
