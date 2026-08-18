import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, capacity, contractType, image } = project

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="aspect-video bg-slate-100 overflow-hidden shrink-0">
        <img
          src={image}
          alt="Solar photovoltaic project reference from the TOMBORNEO company profile"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-xs font-medium bg-[#eff6ff] text-[#2563EB] px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs font-semibold text-slate-500 border border-slate-100 px-2 py-1 rounded whitespace-nowrap">
            {capacity}
          </span>
        </div>

        <h3 className="font-display font-semibold text-[#18244E] text-xl mb-4">
          {title}
        </h3>

        <div className="mt-auto pt-4 border-t border-slate-100 space-y-2">
          <p className="text-slate-500 text-xs leading-relaxed">{contractType}</p>
        </div>
      </div>
    </article>
  )
}
