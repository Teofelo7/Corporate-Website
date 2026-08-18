import { IMAGES } from '../utils/image'
import type { Page } from '../types'
import Button from './Button'

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '2019', label: 'Operating Since' },
  { value: '2024', label: 'Incorporated' },
  { value: 'G3',   label: 'CIDB Registered' },
  { value: '4',    label: 'Main Services' },
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
      <img
        src={IMAGES.hero}
        alt="Solar photovoltaic project reference from the TOMBORNEO company profile"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        loading="eager"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#18244E] via-[#18244E]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#18244E]/60 via-transparent to-transparent" />

      <div className="relative h-full flex flex-col justify-center px-6 lg:px-16 max-w-7xl mx-auto pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#2563EB]" aria-hidden="true" />
            <span className="text-[#93c5fd] text-xs font-semibold tracking-[0.25em] uppercase">
              CIDB G3 Registered Contractor &mdash; Sabah, Malaysia
            </span>
          </div>

          <h1 className="font-display text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-6">
            Integrated Construction &amp; Renewable Energy Solutions
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">
            TOMBORNEO Sdn. Bhd. specialises in solar photovoltaic installation, civil contracting, mechanical and electrical work, and skilled manpower supply.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="white" size="lg" onClick={() => navigate('projects')} withArrow>
              View Projects
            </Button>
            <Button variant="ghost-white" size="lg" onClick={() => navigate('contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center lg:text-left">
              <div className="font-display text-2xl lg:text-3xl font-bold text-white">{value}</div>
              <div className="text-xs text-slate-300 mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
