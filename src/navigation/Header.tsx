import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/multiecoprologo.png";
import useScroll from "../hooks/useScroll"

export default function Header() {
  const { scrolledPast50 } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-40 h-20 p-6 transition-all duration-300"
      animate={{
        backgroundColor: scrolledPast50
          ? "rgba(255, 255, 255, 0.95)"
          : "transparent",
        boxShadow: scrolledPast50 ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center h-full">
        <a href="/" className="h-full flex items-center">
          <img
            src={logo}
            alt="Logo de l'entreprise"
            className="size-52 object-contain"
          />
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
          className="sm:hidden focus:outline-none transition-colors duration-300"
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
                <HiMenu size={28} color={scrolledPast50 ? "black" : "white"} />
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
  );
}
