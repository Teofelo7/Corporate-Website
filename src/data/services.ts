import type { Service } from '../types'
import { img } from '../utils/image'

/* ── Services data ───────────────────────────────────────────────────────────
   To add a new service, append an object here — no component changes needed.
   ─────────────────────────────────────────────────────────────────────────── */

export const SERVICES: Service[] = [
  {
    id: 'building-construction',
    index: '01',
    title: 'Building Construction',
    subtitle: 'Residential, Commercial & Institutional',
    iconName: 'building',
    image: img('1744965874640-f3d670a7a923'),
    description:
      'We design and construct buildings that are built to last — from landed residential properties and high-rise developments to commercial shophouses and government facilities. Our team manages the full construction lifecycle from structural engineering and foundations to roofing, finishing, and M&E integration.',
    capabilities: [
      'Residential developments (landed & multi-storey)',
      'Commercial and retail buildings',
      'Institutional buildings (schools, clinics, government offices)',
      'Industrial structures and warehouses',
      'Renovation and upgrading works',
      'CIDB G3 certification — contracts up to RM 10 million',
    ],
  },
  {
    id: 'civil-engineering',
    index: '02',
    title: 'Civil Engineering',
    subtitle: 'Infrastructure & Earthworks',
    iconName: 'civil',
    image: img('1515674744565-0d7112cd179a'),
    description:
      'Our civil engineering division handles the critical infrastructure communities depend on every day. From road and highway construction to drainage systems, retaining structures, and earthworks — we bring technical precision and robust project management to every engagement.',
    capabilities: [
      'Road construction and rehabilitation',
      'Drainage and flood mitigation systems',
      'Bridge and culvert construction',
      'Slope stabilisation and retaining walls',
      'Earthworks and site preparation',
      'Utility infrastructure installation',
    ],
  },
  {
    id: 'electrical-installation',
    index: '03',
    title: 'Electrical Installation',
    subtitle: 'HV/LV Systems & Wiring Works',
    iconName: 'lightning',
    image: img('1635335874521-7987db781153'),
    description:
      'Our licensed electrical engineers deliver safe, compliant, and efficient electrical systems for commercial, industrial, and infrastructure projects. We handle everything from design and supply to installation, testing, and commissioning — ensuring full compliance with TNB and Suruhanjaya Tenaga requirements.',
    capabilities: [
      'HV/LV switchgear and panel installation',
      'Power distribution and wiring systems',
      'Street lighting and external electrical works',
      'Industrial machinery electrical connections',
      'Surge protection and earthing systems',
      'Compliance testing and ST certification',
    ],
  },
  {
    id: 'solar-solutions',
    index: '04',
    title: 'Solar Solutions',
    subtitle: 'Photovoltaic Systems & Clean Energy',
    iconName: 'sun',
    image: img('1726866492047-7f9516558c6e'),
    description:
      'We design and install grid-tied and off-grid solar photovoltaic systems that reduce energy costs and carbon footprint for homes, businesses, and government facilities. As a registered solar contractor, we handle the full process from site assessment and system design to installation and TNB NEM application.',
    capabilities: [
      'Rooftop solar PV system design and installation',
      'Grid-tied systems with NEM net metering',
      'Commercial and industrial solar farms',
      'Off-grid and hybrid battery storage systems',
      'Solar street lighting',
      'TNB interconnection and regulatory compliance',
    ],
  },
]