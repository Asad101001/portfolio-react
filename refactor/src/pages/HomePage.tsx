import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ProjectsSection from '../components/home/ProjectsSection'
import ExperienceSection from '../components/home/ExperienceSection'
import TechStackSection from '../components/home/TechStackSection'
import EducationSection from '../components/home/EducationSection'
import ContactSection from '../components/home/ContactSection'

function SectionDivider() {
  return <div className="section-divider" aria-hidden="true" />
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <TechStackSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <ContactSection />
    </div>
  )
}
