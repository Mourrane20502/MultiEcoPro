import FirstSide from '@/components/sidecomponents/firstSide'
import SecondSide from '@/components/sidecomponents/secondSide'
import ThirdSide from '@/components/sidecomponents/thirdSide'
import AboutSectionPage from '@/components/topcomponents/AboutSection'
import ContactSection from '@/components/topcomponents/ContactSection'
import FAQSection from '@/components/topcomponents/FaqSection'
import HeroSection from '@/components/topcomponents/HeroSection'
import HowItWorksSection from '@/components/topcomponents/HowItWorks'
import ProjectsSection from '@/components/topcomponents/ProjectSection'
import ServicesSection from '@/components/topcomponents/ServicesSection'
import Footer from '@/navigation/Footer'
import MissionValeurs from "../components/topcomponents/Missions";

export default function HomePage() {
  return (
     <div className="overflow-hidden relative min-h-screen ">
     <HeroSection />
     <AboutSectionPage />
     <MissionValeurs />
     <FirstSide />
    <ServicesSection />
     <SecondSide />
    <ProjectsSection />
    <ThirdSide />
    <HowItWorksSection />
     <FAQSection />
     <ContactSection />
     <Footer />
    </div>
  )
}
