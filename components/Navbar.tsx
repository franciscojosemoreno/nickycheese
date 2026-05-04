'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#menu', label: 'Menú' },
  { href: '#locales', label: 'Locales' },
  { href: '#seguinos', label: 'Seguinos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-cream-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={`font-display text-2xl md:text-3xl leading-none transition-colors ${
              scrolled ? 'text-burgundy-900' : 'text-cream-200'
            }`}
          >
            Nicky Cheese
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-sans text-xs font-bold tracking-[0.25em] uppercase transition-colors ${
                  scrolled
                    ? 'text-burgundy-900 hover:text-burgundy-950'
                    : 'text-cream-200/80 hover:text-cream-200'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-1 ${scrolled ? 'text-burgundy-900' : 'text-cream-200'}`}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-cream-200 border-t border-cream-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-sans text-xs font-bold tracking-[0.25em] uppercase text-burgundy-900 hover:bg-cream-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
