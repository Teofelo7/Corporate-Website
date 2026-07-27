import { useState, useEffect } from 'react'
import type { Page } from './types'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import About    from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact  from './pages/Contact'

const PAGE_MAP: Record<Page, React.ComponentType<{ onNavigate: (page: Page) => void }>> = {
  home:     Home,
  about:    About,
  services: Services,
  projects: Projects,
  contact:  Contact,
}

// Map page keys to clean, professional tab titles
const PAGE_TITLES: Record<Page, string> = {
  home:     'TOMBORNEO SDN. BHD | Engineering & Construction',
  about:    'About Us | TOMBORNEO SDN. BHD',
  services: 'Our Services | TOMBORNEO SDN. BHD',
  projects: 'Featured Projects | TOMBORNEO SDN. BHD',
  contact:  'Contact Us | TOMBORNEO SDN. BHD',
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  // Dynamically update document title whenever currentPage changes
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || 'TOMBORNEO SDN. BHD'
  }, [currentPage])

  function navigate(page: Page) {
    setCurrentPage(page)
    // Smooth scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const PageComponent = PAGE_MAP[currentPage]

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main className="flex-1 pt-[60px]">
        <PageComponent onNavigate={navigate} />
      </main>

      <Footer onNavigate={navigate} />
    </div>
  )
}