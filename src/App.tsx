import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import HeroSectionImage from "./assets/HeroSectionB.jpg";
import useScroll from "./hooks/useScroll";
import Footer from "./navigation/Footer";
import MissionValeurs from "./components/Missions";
import ServicesSection from "./components/ServicesSection";
import AboutSectionPage from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectSection";
import bigDigital from "./assets/digitalLarge.jpg"
import bigConstruction from "./assets/bigConstruction.jpg"
import bigEnergy from "./assets/bigEnergy.jpg"
import FAQSection from "./components/FaqSection";
import HowItWorksSection from "./components/HowItWorks";

export default function App() {
  const { scrolledPast50 } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <div className="overflow-hidden relative min-h-screen  ">
      <div className="relative w-full h-[110vh] max-md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroSectionImage}
        className="absolute inset-0 w-full h-full object-cover"
        alt="hero section"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/70 to-black/50 z-10"></div>

      <div className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-4 md:px-8 z-20">
        <div className="flex flex-col max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-7xl leading-tight font-semibold text-white mb-4 drop-shadow-lg">
              Solutions Intégrées en Travaux, Énergie & Digital
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl drop-shadow-md">
              Expertise et innovation pour optimiser vos projets de rénovation,
              d’efficacité énergétique et de transformation digitale.
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap mt-2"
          >
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
              Demandez un devis
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 transform hover:scale-105">
              Découvrir nos services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated Header */}
      <motion.header
        className="fixed top-0 left-0 w-full z-40 p-6 transition-all duration-300"
        animate={{
          backgroundColor: scrolledPast50 ? "rgba(255, 255, 255, 0.95)" : "transparent",
          boxShadow: scrolledPast50 ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <a href="/" className="block">
            <h1
              className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                scrolledPast50 ? "text-blue-600" : "text-white"
              }`}
            >
              MultiEcoPro
            </h1>
          </a>
          <nav
            className={`space-x-8 transition-colors duration-300 ${
              scrolledPast50 ? "text-gray-900" : "text-white"
            } hidden sm:flex`}
          >
            <a href="#about" className="hover:text-blue-400 font-medium">
              Qui sommes-nous
            </a>
            <a href="#services" className="hover:text-blue-400 font-medium">
              Services
            </a>
            <a href="#realisations" className="hover:text-blue-400 font-medium">
              Réalisations
            </a>
            <a href="#contact" className="hover:text-blue-400 font-medium">
              Contact
            </a>
          </nav>
          <button
            className={`sm:hidden focus:outline-none transition-colors duration-300`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <AnimatePresence initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiX size={28} color={scrolledPast50 ? "black" : "white"} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMenu
                    size={28}
                    color={scrolledPast50 ? "black" : "white"}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black z-30"
              />
              <motion.nav
                key="menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-full h-full bg-blue-700 z-40 p-8 flex flex-col space-y-8 text-white text-right"
              >
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="self-end text-white text-4xl font-bold hover:text-blue-300 transition-colors"
                >
                  &times;
                </button>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-2xl hover:text-blue-300 transition"
                >
                  Qui sommes-nous
                </a>
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-2xl hover:text-blue-300 transition"
                >
                  Services
                </a>
                <a
                  href="#realisations"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-2xl hover:text-blue-300 transition"
                >
                  Réalisations
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-2xl hover:text-blue-300 transition"
                >
                  Contact
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Stats Section (Desktop only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-1/4 right-8 transform -translate-y-1/4 max-w-sm text-right text-white drop-shadow-md hidden sm:grid grid-cols-2 gap-x-12 gap-y-10 z-20"
      >
        <div className="text-center">
          <p className="text-5xl font-bold text-blue-300">3+</p>
          <p className="text-base text-blue-100 mt-1">Ans d'expérience</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-blue-300">70+</p>
          <p className="text-base text-blue-100 mt-1">Projets réalisés</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-blue-300">98%</p>
          <p className="text-base text-blue-100 mt-1">Clients satisfaits</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-blue-300">10+</p>
          <p className="text-base text-blue-100 mt-1">Experts dédiés</p>
        </div>
      </motion.div>

      {/* Social Media (Desktop) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-6 z-40 hidden md:flex">
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="TikTok"
        >
          <FaTiktok size={28} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram size={28} />
        </a>
      </div>

      {/* Social Media (Mobile) */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-8 z-50 sm:hidden bg-blue-900 bg-opacity-70 backdrop-blur-sm rounded-full px-6 py-2">
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 hover:text-blue-300 transition-colors duration-300"
          aria-label="TikTok"
        >
          <FaTiktok size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 hover:text-blue-300 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 hover:text-blue-300 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>

     <AboutSectionPage />
   




     <MissionValeurs />
     <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
  <motion.img
    src={bigDigital}
    alt="Innovation digitale"
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60"></div>

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
    className="absolute z-10 text-left px-6 md:px-12 text-white max-w-4xl"
  >
    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-200 leading-snug md:leading-tight tracking-tight mb-4">
      Libérez le potentiel du digital<br className="hidden md:block" /> pour votre entreprise
    </h2>
    <p className="text-base md:text-lg text-gray-200 max-w-2xl">
      Des solutions numériques sur-mesure pour transformer vos idées<br className="hidden md:block" />
      en résultats concrets et mesurables.
    </p>
  </motion.div>
</section>

    <ServicesSection />
 <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
  <motion.img
    src={bigConstruction} 
    alt="Travaux & construction"
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60"></div>

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
    className="absolute z-10 px-6 text-left max-w-4xl text-white"
  >
    <h2 className="text-3xl md:text-5xl font-extrabold  text-blue-200 leading-snug md:leading-tight tracking-tight mb-4">
      Réalisez vos projets de construction<br className="hidden md:block" /> en toute confiance
    </h2>
    <p className="text-base md:text-lg text-gray-200 max-w-2xl">
      Une expertise terrain pour des chantiers maîtrisés, durables et conformes aux normes.
    </p>
  </motion.div>
</section>


    <ProjectsSection />
    <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center">
  <motion.img
    src={bigEnergy}
    alt="Solutions énergétiques"
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60"></div>

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
    className="absolute z-10 text-left px-6 md:px-12 text-white max-w-4xl"
  >
    <h2 className="text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight tracking-tight mb-4 text-blue-200">
      Optimisez votre consommation<br className="hidden md:block" /> énergétique durablement
    </h2>
    <p className="text-base md:text-lg text-gray-200 max-w-2xl">
      Des audits précis et des solutions intelligentes pour un habitat plus économique,<br className="hidden md:block" />
      performant et respectueux de l’environnement.
    </p>
  </motion.div>
</section>
  <HowItWorksSection />
  <FAQSection />
    <ContactSection />
     <Footer />
    </div>
  );
}
