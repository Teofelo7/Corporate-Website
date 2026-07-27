import { SERVICES } from '../data/services'
import { IMAGES } from '../utils/image'
import type { Page } from '../types'
import type { IconName } from '../components/Icon'
import PageBanner from '../components/PageBanner'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'
import Icon from '../components/Icon'

interface ServicesProps {
  onNavigate: (page: Page) => void
}

export default function Services({ onNavigate }: ServicesProps) {
  function navigate(page: Page) {
    onNavigate(page)
  }

  return (
    <>
      <PageBanner
        title="Our Services"
        eyebrow="What We Offer"
        image={IMAGES.construction}
      />

      {/* ── Service sections (alternating layout) ── */}
      {SERVICES.map((service, i) => {
        const isEven = i % 2 === 1
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 lg:py-32 ${isEven ? 'bg-slate-50' : 'bg-white'}`}
            aria-labelledby={`service-${service.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text panel */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <SectionLabel index={service.index} label={service.subtitle} />

                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                      <Icon
                        name={service.iconName as IconName}
                        className="w-6 h-6 text-[#2563EB]"
                      />
                    </div>
                    <h2
                      id={`service-${service.id}-heading`}
                      className="font-display text-3xl lg:text-4xl font-bold text-[#18244E]"
                    >
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>

                  <ul className="space-y-3" aria-label="Capabilities">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#eff6ff] flex items-center justify-center mt-0.5 shrink-0">
                          <Icon name="check" className="w-3 h-3 text-[#2563EB]" />
                        </div>
                        <span className="text-slate-600 text-sm">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image panel */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── CTA ── */}
      <section className="py-24 bg-[#18244E]" aria-labelledby="services-cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#93c5fd] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Start a Project
          </p>
          <h2 id="services-cta-heading" className="font-display text-4xl font-bold text-white mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-slate-300 mb-10 max-w-lg mx-auto leading-relaxed">
            Reach out to our team for a consultation. We&apos;ll assess your requirements and provide a tailored proposal.
          </p>
          <Button variant="white" size="lg" onClick={() => navigate('contact')} withArrow>
            Request a Quote
          </Button>
        </div>
      </section>
    </>
  )
}