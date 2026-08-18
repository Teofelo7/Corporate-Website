import type { Project } from '../types'

/* ── Completed projects from TOMBORNEO SDN. BHD. Company Profile 2025 ────── */

const projectImage = (index: number) =>
  `/images/project-references/solar-ref-${String(index).padStart(2, '0')}.jpg`

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'First Engineering Plastic (M) Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '1342.2 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(1),
  },
  {
    id: 2,
    title: 'Tai Sin Electric Cables Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '630.375 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(2),
  },
  {
    id: 3,
    title: 'Jstar Motion Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '1140.21 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(3),
  },
  {
    id: 4,
    title: 'Megahock Pipes & Profiles Manufacturing Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '1040.58 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(4),
  },
  {
    id: 5,
    title: 'JAIS Selangor',
    category: 'Solar PV Installation Works',
    capacity: '701.01 kWp · 12 Sites',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(5),
  },
  {
    id: 6,
    title: 'PKT Logistic (M) Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '1117.35 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(6),
  },
  {
    id: 7,
    title: 'Furutec Electrical Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '132.21 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(7),
  },
  {
    id: 8,
    title: 'QL Foods Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '1577.745 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(8),
  },
  {
    id: 9,
    title: 'Tomei Gold & Jewellery Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '215.28 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(9),
  },
  {
    id: 10,
    title: 'Durasafe Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '91.50 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(10),
  },
  {
    id: 11,
    title: 'Miaw Fresh Mart Enterprise',
    category: 'Solar PV Installation Works',
    capacity: '24.57 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(11),
  },
  {
    id: 12,
    title: 'BRC Industries Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '162.63 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(12),
  },
  {
    id: 13,
    title: 'Selia-Tek Holdings Sdn Bhd',
    category: 'Solar PV Installation Works',
    capacity: '500.99 kWp',
    contractType: 'Solar PV Installation Works (Subcon)',
    image: projectImage(13),
  },
]
