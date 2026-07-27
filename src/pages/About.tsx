import { IMAGES } from '../utils/image'
import type { Page } from '../types'
import type { IconName } from '../components/Icon'
import PageBanner from '../components/PageBanner'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/Button'
import Icon from '../components/Icon'

interface AboutProps {
  onNavigate: (page: Page) => void
}

const CORE_VALUES: { iconName: IconName; title: string; desc: string }[] = [
  { iconName: 'shield', title: 'Quality First',       desc: 'Every project meets the highest engineering and safety standards — because our work stands long after we leave.' },
  { iconName: 'users',  title: 'People & Community', desc: 'Built by Sabahans, for Sabah. Empowering local talent and serving our communities drives everything we do.' },
  { iconName: 'leaf',   title: 'Sustainability',      desc: 'From solar installations to green site practices, we build with tomorrow in mind.' },
  { iconName: 'chart',  title: 'Accountability',      desc: 'We own our commitments. Every milestone, every deliverable, every promise.' },
  { iconName: 'clock',  title: 'Reliability',         desc: 'Our clients trust us with their most important projects — we honour that trust every time.' },
  { iconName: 'cog',    title: 'Innovation',          desc: 'We embrace new technologies and engineering methods to deliver smarter, more efficient solutions.' },
]

export default function About({ onNavigate }: AboutProps) {
  function navigate(page: Page) {
    onNavigate(page)
  }

  return (
    <>
      <PageBanner
        title="About TOMBORNEO"
        eyebrow="Our Story"
        image={IMAGES.about}
      />

      {/* ── Company Story ── */}
      <section className="py-24 lg:py-32" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <SectionLabel index="01" label="The Name & the Story" />
              <h2 id="story-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E] leading-tight mb-6">
                Born from Sabah,<br />Built on Heritage
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  The name <strong className="text-[#18244E]">TOMBORNEO</strong> carries two layers of meaning. <em>Tombonuo</em> is one of the native peoples of Sabah — a community celebrated for their craftsmanship, resilience, and deep connection to the land. <em>Borneo</em> is the island that has shaped our identity and our purpose.
                </p>
                <p>
                  When we founded this company in Kota Kinabalu, we did so with a belief that the best construction comes from people who are genuinely invested in the place they build. Sabah is our home. Every road we lay, every building we erect, every solar panel we install is part of our commitment to the communities that live here.
                </p>
                <p>
                  Over 15 years of operation, we have grown from a small civil works contractor into a multi-discipline engineering company with a proven portfolio spanning building construction, civil infrastructure, electrical installation, and clean energy solutions.
                </p>
              </div>
            </div>

            {/* Image + stats */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  src={IMAGES.skyscrapers}
                  alt="TOMBORNEO high-rise construction project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2009',  label: 'Year Founded' },
                  { value: 'G3',    label: 'CIDB Grade' },
                  { value: 'Sabah', label: 'Headquartered' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="font-display text-xl font-bold text-[#18244E]">{value}</div>
                    <div className="text-xs text-slate-400 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-24 bg-[#18244E]" aria-labelledby="vision-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel index="02" label="Our Direction" />
            <h2 id="vision-heading" className="font-display text-4xl lg:text-5xl font-bold text-white">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                iconName: 'star' as IconName,
                title: 'Our Vision',
                text: "To be Sabah's most trusted construction and engineering company — recognized for quality, integrity, and a genuine commitment to the sustainable development of Borneo.",
              },
              {
                iconName: 'cog' as IconName,
                title: 'Our Mission',
                text: 'To deliver engineering projects that exceed client expectations in quality, safety, and timeliness — while nurturing local talent, upholding sustainable practices, and contributing to the growth of Sabah.',
              },
            ].map(({ iconName, title, text }) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center mb-6">
                  <Icon name={iconName} className="w-6 h-6 text-[#93c5fd]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-slate-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 lg:py-32" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel index="03" label="What Guides Us" />
            <h2 id="values-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E]">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map(({ iconName, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-5">
                  <Icon name={iconName} className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="font-display font-semibold text-[#18244E] text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#18244E] mb-4">
            Work With a Team That Cares
          </h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Ready to discuss your next project? We&apos;re proud to be building Sabah — let&apos;s build it together.
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate('contact')} withArrow>
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}