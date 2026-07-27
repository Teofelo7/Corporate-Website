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
  { iconName: 'shield' as IconName, title: 'CIDB G3 Registered', desc: 'Fully licensed and accredited for construction contracts up to RM 10 million.' },
  { iconName: 'star'   as IconName, title: 'Local Sabah Expertise', desc: 'Deep knowledge of local regulations, terrain, and community needs across Sabah.' },
  { iconName: 'cog'    as IconName, title: 'End-to-End Delivery', desc: 'From feasibility study to handover — we manage every phase of your project.' },
  { iconName: 'leaf'   as IconName, title: 'Sustainable Practices', desc: 'Green engineering principles are integrated into every build we undertake.' },
  { iconName: 'clock'  as IconName, title: 'On-Time Commitment', desc: 'Proven track record of meeting milestones without compromising quality.' },
  { iconName: 'users'  as IconName, title: 'Dedicated Team', desc: 'Experienced engineers, supervisors, and PMs ready for your project.' },
]

export default function Home({ onNavigate }: HomeProps) {
  function navigate(page: Page) {
    onNavigate(page)
  }

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection onNavigate={onNavigate} />

      {/* ── Company Introduction ── */}
      <section className="py-24 lg:py-32" aria-labelledby="intro-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <SectionLabel index="01" label="Who We Are" />
              <h2 id="intro-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E] leading-tight mb-6">
                Rooted in Borneo,<br />Built for the Future
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                TOMBORNEO takes its name from two sources of pride — the <em>Tombonuo</em>, one of Sabah&apos;s indigenous communities known for their craftsmanship and resilience, and <em>Borneo</em>, the island we call home.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Founded in Kota Kinabalu, we have spent over a decade building infrastructure that serves communities across Sabah — from residential developments to civil works and renewable energy installations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" withArrow onClick={() => navigate('about')}>
                  Our Story
                </Button>
                <Button variant="outline" onClick={() => navigate('services')}>
                  Our Services
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  src={IMAGES.about}
                  alt="Construction workers in Kota Kinabalu"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#18244E] text-white rounded-xl px-6 py-5 shadow-xl">
                <div className="font-display text-3xl font-bold">15+</div>
                <div className="text-xs text-slate-300 mt-1">Years Serving Sabah</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-24 bg-slate-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel index="02" label="What We Do" />
            <h2 id="services-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E]">
              Our Core Services
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Four disciplines. One trusted partner. Complete construction and engineering solutions across Sabah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => navigate('services')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 lg:py-32" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  src={IMAGES.worker}
                  alt="TOMBORNEO site engineer on an active construction project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-6 -right-6 hidden lg:block bg-[#2563EB] text-white rounded-xl px-6 py-5 shadow-xl text-center">
                <div className="font-display text-3xl font-bold">200+</div>
                <div className="text-xs text-blue-100 mt-1">Projects Completed</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <SectionLabel index="03" label="Why TOMBORNEO" />
              <h2 id="why-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E] leading-tight mb-8">
                Engineering You Can Trust
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

      {/* ── Featured Projects ── */}
      <section className="py-24 bg-slate-50" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel index="04" label="Our Work" />
              <h2 id="projects-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E]">
                Featured Projects
              </h2>
            </div>
            <button
              onClick={() => navigate('projects')}
              className="inline-flex items-center gap-2 text-[#2563EB] font-medium text-sm hover:gap-3 transition-all cursor-pointer"
            >
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

      {/* ── CTA Banner ── */}
      <section className="relative py-24 bg-[#18244E] overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.construction} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#93c5fd] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Ready to Build?
          </p>
          <h2 id="cta-heading" className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you have a detailed brief or just an idea, our team is ready to help you plan, engineer, and build it in Sabah.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="white" size="lg" onClick={() => navigate('contact')} withArrow>
              Get in Touch
            </Button>
            <Button variant="ghost-white" size="lg" onClick={() => navigate('projects')}>
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}