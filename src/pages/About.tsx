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
  { iconName: 'star', title: 'Quality', desc: 'We uphold the highest standards in all our projects, ensuring exceptional results that meet and exceed client expectations.' },
  { iconName: 'cog', title: 'Innovation', desc: 'Our forward-thinking approach drives continuous improvement and the development of cutting-edge solutions.' },
  { iconName: 'shield', title: 'Integrity', desc: 'We conduct our business with honesty, transparency, and ethical practices.' },
  { iconName: 'leaf', title: 'Sustainability', desc: 'We prioritize eco-friendly practices and solutions that contribute to a healthier planet.' },
  { iconName: 'users', title: 'Customer-Centricity', desc: "Our clients' needs and satisfaction are at the heart of everything we do." },
]

export default function About({ onNavigate }: AboutProps) {
  function navigate(page: Page) {
    onNavigate(page)
  }

  return (
    <>
      <PageBanner title="About TOMBORNEO" eyebrow="Company Profile" image={IMAGES.about} />

      <section className="py-24 lg:py-32" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel index="01" label="About Company" />
              <h2 id="story-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E] leading-tight mb-6">
                Sabah Based.<br />Focused on Sustainable Solutions.
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  TOMBORNEO Sdn. Bhd. is a locally owned and operated company based in Sabah, Malaysia, and has operated since its inception in 2019.
                </p>
                <p>
                  The company officially incorporated in 2024 to enhance its commitment to delivering top-quality services. Its work specialises in solar photovoltaic installation, construction, and a comprehensive range of mechanical and electrical work.
                </p>
                <p>
                  TOMBORNEO is dedicated to fostering innovation and sustainability in every project it undertakes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  src={IMAGES.solar}
                  alt="Solar photovoltaic project reference from the TOMBORNEO company profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2019', label: 'Operating Since' },
                  { value: '2024', label: 'Incorporated' },
                  { value: 'G3', label: 'CIDB Grade' },
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

      <section className="py-24 bg-[#18244E]" aria-labelledby="vision-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel index="02" label="Our Direction" />
            <h2 id="vision-heading" className="font-display text-4xl lg:text-5xl font-bold text-white">Vision &amp; Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                iconName: 'star' as IconName,
                title: 'Our Vision',
                text: 'To be a leading provider of integrated construction and renewable energy solutions, recognized for our commitment to excellence, sustainability, and customer satisfaction.',
              },
              {
                iconName: 'cog' as IconName,
                title: 'Our Mission',
                text: 'To pioneer sustainable solutions in the construction and renewable energy sectors, empowering communities and businesses through innovative services and ethical practices.',
              },
            ].map(({ iconName, title, text }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/10">
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

      <section className="py-24 lg:py-32" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel index="03" label="What Guides Us" />
            <h2 id="values-heading" className="font-display text-4xl lg:text-5xl font-bold text-[#18244E]">Our Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map(({ iconName, title, desc }) => (
              <div key={title} className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#18244E] mb-4">Discuss Your Next Project</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Contact our team to discuss how TOMBORNEO can assist with your solar, construction, M&amp;E, or manpower requirements.
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate('contact')} withArrow>Get in Touch</Button>
        </div>
      </section>
    </>
  )
}
