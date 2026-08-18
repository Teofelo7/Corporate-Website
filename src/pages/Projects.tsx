import { PROJECTS } from '../data/projects'
import { IMAGES } from '../utils/image'
import PageBanner from '../components/PageBanner'
import ProjectCard from '../components/ProjectCard'
import SectionLabel from '../components/SectionLabel'

export default function Projects() {
  return (
    <>
      <PageBanner title="Our Projects" eyebrow="Completed Work" image={IMAGES.solar} />

      <section className="py-24 lg:py-32" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel index="01" label="Company Profile 2025" />
            <h2 id="portfolio-heading" className="font-display text-4xl font-bold text-[#18244E] mb-5">
              Completed Solar PV Installation Works
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              The projects below are the completed Solar PV Installation Works listed in TOMBORNEO Sdn. Bhd.&apos;s 2025 company profile. Project photos are genuine reference photographs from the same company profile; the document does not map each photograph to a specific client entry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-10">
            {PROJECTS.length} completed Solar PV projects listed in the 2025 company profile
          </p>
        </div>
      </section>
    </>
  )
}
