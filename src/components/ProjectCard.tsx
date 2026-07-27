import type { Project } from '../types'
import Icon from './Icon'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, location, category, year, image, description } = project

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="aspect-video bg-slate-100 overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium bg-[#eff6ff] text-[#2563EB] px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs font-semibold text-slate-400 border border-slate-100 px-2 py-1 rounded">
            {year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-[#18244E] text-xl mb-2">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-4">
          <Icon name="mapPin" className="w-3.5 h-3.5 shrink-0" />
          <span>{location}</span>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mt-auto">
          {description}
        </p>
      </div>
    </article>
  )
}