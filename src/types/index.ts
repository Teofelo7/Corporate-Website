/* ── Application-wide TypeScript types ───────────────────────────────────── */

export type Page = 'home' | 'about' | 'services' | 'projects' | 'contact'

export type ServiceCategory =
  | 'Building Construction'
  | 'Civil Engineering'
  | 'Electrical Installation'
  | 'Solar Solutions'

export type ProjectFilter = 'All' | ServiceCategory

export interface NavLink {
  label: string
  page: Page
}

export interface Project {
  id: number
  title: string
  location: string
  category: ServiceCategory
  year: number
  image: string
  description: string
}

export interface Service {
  id: string
  index: string
  title: string
  subtitle: string
  iconName: string
  image: string
  description: string
  capabilities: string[]
}

export interface WhyItem {
  iconName: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface ContactInfo {
  iconName: string
  label: string
  value: string
  subValue?: string
}