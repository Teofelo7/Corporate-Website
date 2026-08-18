/* ── Application-wide TypeScript types ───────────────────────────────────── */

export type Page = 'home' | 'about' | 'services' | 'projects' | 'contact'

export type ServiceCategory =
  | 'Solar Installation'
  | 'Civil Contracting Work'
  | 'Mechanical and Electrical'
  | 'Supply of Manpower'

export interface NavLink {
  label: string
  page: Page
}

export interface Project {
  id: number
  title: string
  category: 'Solar PV Installation Works'
  capacity: string
  contractType: string
  image: string
  description?: string
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
