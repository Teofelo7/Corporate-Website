import type { Project } from '../types'
import { img } from '../utils/image'

/* ── Projects data ───────────────────────────────────────────────────────────
   To add a new project, append an object here — no component changes needed.
   ─────────────────────────────────────────────────────────────────────────── */

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Taman Kinabalu Residences',
    location: 'Kota Kinabalu, Sabah',
    category: 'Building Construction',
    year: 2023,
    image: img('1744965874640-f3d670a7a923'),
    description:
      '48-unit residential complex with modern amenities and landscaped communal grounds, completed on schedule.',
  },
  {
    id: 2,
    title: 'Sandakan Bypass Road',
    location: 'Sandakan, Sabah',
    category: 'Civil Engineering',
    year: 2023,
    image: img('1515674744565-0d7112cd179a'),
    description:
      '4.8 km dual carriageway with reinforced bridge crossings and integrated stormwater drainage systems.',
  },
  {
    id: 3,
    title: 'KKIA Terminal Electrical Works',
    location: 'Kota Kinabalu, Sabah',
    category: 'Electrical Installation',
    year: 2022,
    image: img('1635335874521-7987db781153'),
    description:
      'Full HV/LV electrical system upgrade and panel installation for the international terminal expansion.',
  },
  {
    id: 4,
    title: 'Tawau Industrial Solar Farm',
    location: 'Tawau, Sabah',
    category: 'Solar Solutions',
    year: 2024,
    image: img('1726866492047-7f9516558c6e'),
    description:
      '500 kWp rooftop solar PV system delivering clean energy to a major manufacturing facility.',
  },
  {
    id: 5,
    title: 'Penampang District Office',
    location: 'Penampang, Sabah',
    category: 'Building Construction',
    year: 2022,
    image: img('1741242950211-0a45907918a7'),
    description:
      'Five-storey government administrative complex with integrated public service facilities and car park.',
  },
  {
    id: 6,
    title: 'Keningau Water Treatment Plant',
    location: 'Keningau, Sabah',
    category: 'Civil Engineering',
    year: 2021,
    image: img('1593195200151-5fb30336a40d'),
    description:
      'Civil infrastructure works for a treatment facility now serving over 50,000 residents in Keningau.',
  },
]