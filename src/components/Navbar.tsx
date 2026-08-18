import { useState } from 'react'
import { useScrollEffect } from '../hooks/useScrollEffect'
import { NAV_LINKS } from '../data/navigation'
import type { Page } from '../types'
import Icon from './Icon'
import Button from './Button'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const scrolled = useScrollEffect(20)
  const [mobileOpen, setMobileOpen] = useState(false)

  function navigate(page: Page) {
    onNavigate(page)
    setMobileOpen(false)
  }

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-shadow duration-300',
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/97 backdrop-blur-sm',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <button
            onClick={() => navigate('home')}
            aria-label="TOMBORNEO Sdn. Bhd. — go to homepage"
            className="flex items-center gap-3 text-left group"
          >
            <img
              src="images/Tomborneo-Logo.png"
              alt=""
              className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Company name */}
            <div className="flex flex-col items-start leading-none">
              <span className="font-display text-[1.15rem] sm:text-[1.25rem] font-bold text-[#18244E] tracking-tight">
                TOMBORNEO
              </span>

              <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.28em] text-[#149BE8] uppercase mt-1">
                Sdn. Bhd.
              </span>
            </div>
          </button>

          {/* Desktop navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={[
                  'text-sm font-medium pb-0.5 transition-colors',
                  currentPage === page
                    ? 'text-[#18244E] border-b-2 border-[#149BE8]'
                    : 'text-slate-500 hover:text-[#18244E]',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('contact')}
              withArrow
              className="hidden lg:inline-flex"
            >
              Get a Quote
            </Button>

            <button
              className="lg:hidden p-2 text-[#18244E] rounded-lg hover:bg-slate-50 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Icon
                name={mobileOpen ? 'close' : 'menu'}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1 shadow-lg">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={[
                'text-left py-3 text-sm font-medium border-b border-slate-50 transition-colors',
                currentPage === page
                  ? 'text-[#149BE8] font-semibold'
                  : 'text-slate-600 hover:text-[#18244E]',
              ].join(' ')}
            >
              {label}
            </button>
          ))}

          <Button
            variant="primary"
            size="md"
            onClick={() => navigate('contact')}
            className="mt-3 justify-center"
          >
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  )
}