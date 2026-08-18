import { IMAGES } from '../utils/image'
import { SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'
import type { Page } from '../types'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'
import Icon from '../components/Icon'
import type { IconName } from '../components/Icon'

interface HomeProps {
  onNavigate: (page: Page) => void
}

const WHY_ITEMS = [
  { iconName: 'shield' as IconName, title: 'CIDB G3 Registered', desc: 'TOMBORNEO is registered with CIDB as a G3 contractor.' },
  { iconName: 'mapPin' as IconName, title: 'Sabah Based', desc: 'A locally owned and operated company based in Sabah, Malaysia.' },
  { iconName: 'cog' as IconName, title: 'Integrated Services', desc: 'Solar installation, civil contracting, M&E work, and skilled manpower supply.' },
  { iconName: 'star' as IconName, title: 'Quality', desc: 'Committed to high standards and results that meet and exceed client expectations.' },
  { iconName: 'leaf' as IconName, title: 'Sustainability', desc: 'Prioritising eco-friendly practices and solutions that contribute to a healthier planet.' },
  { iconName: 'users' as IconName, title: 'Customer-Centricity', desc: 'Client needs and satisfaction are at the heart of the company’s work.' },
]

export default function Home({ onNavigate }: HomeProps) {
  function navigate(page: Page) {
    onNavigate(page)
  }

  return (
    <>
      <HeroSection onNavigate={onNavigate} />

      <section className="py-24 lg:py-32" aria-labelledby="intro-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel index="01" label="Who We Are" />
              <h2 id="intro-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E] leading-tight mb-6">
                Locally Owned.<br />Focused on Quality &amp; Sustainability.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                TOMBORNEO Sdn. Bhd. is a locally owned and operated company based in Sabah, Malaysia. The company has operated since 2019 and officially incorporated in 2024 to strengthen its commitment to delivering top-quality services.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                TOMBORNEO specialises in solar photovoltaic installation, construction, and a comprehensive range of mechanical and electrical work, with innovation and sustainability guiding every project.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" withArrow onClick={() => navigate('about')}>About TOMBORNEO</Button>
                <Button variant="outline" onClick={() => navigate('services')}>Our Services</Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  src={IMAGES.about}
                  alt="Solar photovoltaic project reference from the TOMBORNEO company profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#18244E] text-white rounded-xl px-6 py-5 shadow-xl">
                <div className="font-display text-3xl font-bold">2019</div>
                <div className="text-xs text-slate-300 mt-1">Operating Since</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel index="02" label="What We Do" />
            <h2 id="services-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E]">Our Main Services</h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Four main service areas covering solar, civil contracting, mechanical and electrical work, and skilled manpower supply.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} onClick={() => navigate('services')} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  src={IMAGES.worker}
                  alt="Construction and engineering work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -right-6 hidden lg:block bg-[#2563EB] text-white rounded-xl px-6 py-5 shadow-xl text-center">
                <div className="font-display text-3xl font-bold">13</div>
                <div className="text-xs text-blue-100 mt-1">Completed Solar PV Projects Listed</div>
              </div>
            </div>

            <div>
              <SectionLabel index="03" label="Why TOMBORNEO" />
              <h2 id="why-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E] leading-tight mb-8">
                Built Around Quality, Innovation &amp; Integrity
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {WHY_ITEMS.map(({ iconName, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#eff6ff] flex items-center justify-center shrink-0">
                      <Icon name={iconName} className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#18244E] text-sm mb-1">{title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel index="04" label="Our Work" />
              <h2 id="projects-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E]">Completed Solar PV Projects</h2>
            </div>
            <button onClick={() => navigate('projects')} className="inline-flex items-center gap-2 text-[#2563EB] font-medium text-sm hover:gap-3 transition-all cursor-pointer">
              View all projects
              <Icon name="arrowRight" className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#18244E] overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.solar} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#93c5fd] text-xs font-semibold tracking-[0.25em] uppercase mb-4">Have a Project?</p>
          <h2 id="cta-heading" className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">Let&apos;s Discuss Your Requirements</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Contact TOMBORNEO to discuss solar, civil contracting, mechanical and electrical, or manpower requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="white" size="lg" onClick={() => navigate('contact')} withArrow>Get in Touch</Button>
            <Button variant="ghost-white" size="lg" onClick={() => navigate('projects')}>View Our Work</Button>
          </div>
        </div>
      </section>
    </>
  )
}
