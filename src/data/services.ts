import type { Service } from '../types'
import { img } from '../utils/image'

/* ── Main services from TOMBORNEO SDN. BHD. Company Profile 2025 ─────────── */

export const SERVICES: Service[] = [
  {
    id: 'solar-installation',
    index: '01',
    title: 'Solar Installation',
    subtitle: 'Residential, Commercial & Industrial',
    iconName: 'sun',
    image: '/images/project-references/solar-ref-14.jpg',
    description:
      'Designing and installing solar photovoltaic systems for residential, commercial, and industrial clients.',
    capabilities: [
      'Residential solar photovoltaic systems',
      'Commercial solar photovoltaic systems',
      'Industrial solar photovoltaic systems',
      'Solar PV system design',
      'Solar PV installation',
    ],
  },
  {
    id: 'civil-contracting-work',
    index: '02',
    title: 'Civil Contracting Work',
    subtitle: 'Civil & Structural Works',
    iconName: 'civil',
    image: img('1515674744565-0d7112cd179a'),
    description:
      'Civil contracting work including road construction, slope protection, drainage, fencing, buildings and structures, piling services, and tunnel works.',
    capabilities: [
      'Road construction',
      'Slope protection',
      'Drainage and fencing works',
      'Buildings and structures',
      'Piling services',
      'Tunnel works',
    ],
  },
  {
    id: 'mechanical-and-electrical',
    index: '03',
    title: 'Mechanical and Electrical',
    subtitle: 'M&E Engineering',
    iconName: 'lightning',
    image: img('1635335874521-7987db781153'),
    description:
      'Providing expertise in M&E engineering, including installation, maintenance, and repair of electrical systems, HVAC, plumbing, and more.',
    capabilities: [
      'Electrical systems',
      'HVAC',
      'Plumbing',
      'Installation works',
      'Maintenance',
      'Repair works',
    ],
  },
  {
    id: 'supply-of-manpower',
    index: '04',
    title: 'Supply of Manpower',
    subtitle: 'Construction & Engineering Disciplines',
    iconName: 'users',
    image: img('1614127938540-a1139bee1841'),
    description:
      'Supplying skilled and experienced manpower across various construction and engineering disciplines.',
    capabilities: [
      'Skilled manpower',
      'Experienced manpower',
      'Construction disciplines',
      'Engineering disciplines',
    ],
  },
]
