import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorksSection from './components/WorksSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream font-noto">
      <Navbar />
      <HeroSection />
      <WorksSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
