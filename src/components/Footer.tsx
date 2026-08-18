import { NAV_LINKS } from '../data/navigation'
import { SERVICES } from '../data/services'
import type { Page } from '../types'
import Icon from './Icon'

interface FooterProps {
  onNavigate: (page: Page) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  function navigate(page: Page) {
    onNavigate(page)
  }

  const contactDetails = [
    {
      icon: 'mapPin' as const,
      text: 'Kampung Manggis, 89100 Pitas, Sabah',
    },
    {
      icon: 'phone' as const,
      text: '018-2400723 / 013-9942430',
    },
    {
      icon: 'email' as const,
      text: 'tomborneosb@gmail.com',
    },
  ]

  return (
    <footer className="bg-[#0f1835] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Company */}
          <div>
            <button
              onClick={() => navigate('home')}
              aria-label="TOMBORNEO Sdn. Bhd. — go to homepage"
              className="flex items-center gap-3 mb-5 text-left group"
            >
              {/* Logo */}
              <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/images/tomborneo-logo.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Company name */}
              <div className="flex flex-col items-start leading-none">
                <span className="font-display text-[1.15rem] font-bold text-white tracking-tight">
                  TOMBORNEO
                </span>

                <span className="text-[9px] font-semibold tracking-[0.28em] text-[#149BE8] uppercase mt-1">
                  Sdn. Bhd.
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A locally owned and operated Sabah company specialising in
              solar photovoltaic installation, construction, and mechanical
              and electrical work.
            </p>

            <span className="inline-block text-xs text-slate-400 border border-slate-700 rounded px-2.5 py-1">
              CIDB G3 Registered
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">
              Navigation
            </h3>

            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-slate-300 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => navigate('services')}
                    className="text-slate-300 hover:text-white text-sm text-left transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">
              Contact
            </h3>

            <ul className="space-y-4">
              {contactDetails.map(({ icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3"
                >
                  <Icon
                    name={icon}
                    className="w-4 h-4 text-[#149BE8] mt-0.5 shrink-0"
                  />

                  <span className="text-slate-300 text-sm">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} TOMBORNEO Sdn. Bhd.
            All rights reserved.
          </p>

          <p className="text-slate-600 text-xs">
            SSM 202401010100 (1555950-T)
            <span className="mx-2">•</span>
            CIDB G3
            <span className="mx-2">•</span>
            Pitas, Sabah
          </p>

        </div>
      </div>
    </footer>
  )
}