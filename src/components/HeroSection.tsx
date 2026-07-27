import { IMAGES } from '../utils/image'
import type { Page } from '../types'
import Button from './Button'

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '15+',   label: 'Years Experience' },
  { value: '200+',  label: 'Projects Delivered' },
  { value: 'G3',    label: 'CIDB Registered' },
  { value: '4',     label: 'Core Disciplines' },
]

interface HeroSectionProps {
  onNavigate: (page: Page) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  function navigate(page: Page) {
    onNavigate(page)
  }

  return (
    <section
      className="relative h-screen min-h-[600px] bg-[#18244E] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <img
        src={IMAGES.hero}
        alt="TOMBORNEO construction project in Sabah"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="eager"
        fetchPriority="high"
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#18244E] via-[#18244E]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#18244E]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 lg:px-16 max-w-7xl mx-auto pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#2563EB]" aria-hidden="true" />
            <span className="text-[#93c5fd] text-xs font-semibold tracking-[0.25em] uppercase">
              CIDB G3 Registered Contractor &mdash; Sabah
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-6">
            Building Sabah&apos;s Future Through Engineering Excellence
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
            TOMBORNEO Sdn. Bhd. delivers building construction, civil engineering, electrical installation, and solar solutions across Sabah with precision and pride.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="white"
              size="lg"
              onClick={() => navigate('projects')}
              withArrow
            >
              View Projects
            </Button>
            <Button
              variant="ghost-white"
              size="lg"
              onClick={() => navigate('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center lg:text-left">
              <div className="font-display text-2xl lg:text-3xl font-bold text-white">
                {value}
              </div>
              <div className="text-xs text-slate-300 mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}