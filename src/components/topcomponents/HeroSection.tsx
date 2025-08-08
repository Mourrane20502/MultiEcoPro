import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { motion } from "framer-motion";

import HeroSectionImage from "../../assets/HeroSectionB.jpg"
import Header from '@/navigation/Header';


export default function HeroSection() {
  return (
    <div className="relative w-full h-[110vh] max-md:h-[80vh] overflow-hidden">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap mt-2"
          >
            <button className="px-8 py-3 cursor-pointer bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform">
              Demandez un devis
            </button>
            <button className="px-8 py-3 cursor-pointer  border-white text-black bg-white font-medium rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 transform ">
              Découvrir nos services
            </button>
          </motion.div>
        </div>
      </div>

    <Header  />

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
  )

}

