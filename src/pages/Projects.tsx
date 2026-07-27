import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import { IMAGES } from '../utils/image'
import type { ProjectFilter } from '../types'
import PageBanner from '../components/PageBanner'
import ProjectCard from '../components/ProjectCard'
import SectionLabel from '../components/SectionLabel'

const FILTERS: ProjectFilter[] = [
  'All',
  'Building Construction',
  'Civil Engineering',
  'Electrical Installation',
  'Solar Solutions',
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <>
      <PageBanner
        title="Our Projects"
        eyebrow="Portfolio"
        image={IMAGES.skyscrapers}
      />

      <section className="py-24 lg:py-32" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header + filter */}
          <div className="text-center mb-12">
            <SectionLabel index="01" label="Project Portfolio" />
            <h2 id="portfolio-heading" className="font-display text-4xl font-bold text-[#18244E] mb-8">
              Delivering Excellence Across Sabah
            </h2>

            {/* Filter tabs */}
            <div
              className="flex flex-wrap justify-center gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={[
                    'text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-150',
                    activeFilter === filter
                      ? 'bg-[#18244E] text-white border-[#18244E]'
                      : 'border-slate-200 text-slate-600 hover:border-[#18244E] hover:text-[#18244E]',
                  ].join(' ')}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center py-20 text-slate-400">
              No projects in this category yet.
            </p>
          )}

          {/* Tally */}
          <p className="text-center text-sm text-slate-400 mt-10">
            Showing {filtered.length} of {PROJECTS.length} projects
          </p>
        </div>
      </section>
    </>
  )
}