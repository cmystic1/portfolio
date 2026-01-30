'use client'

import dynamic from 'next/dynamic'
import Navigation from './components/navigation'
import HeroSection from './sections/heroSection'
import AboutSection from './sections/aboutSection'
import ProjectsSection from './sections/projectsSection'
import SkillsSection from './sections/skillsSection'
import ContactSection from './sections/contactSection'
import Footer from './components/footer'

const Scene3D = dynamic(() => import('./components/scene3d'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="relative">
      <Scene3D />
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}