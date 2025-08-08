import { motion } from "framer-motion";
import bigEnergy from "../../assets/bigEnergy.jpg"

export default function ThirdSide() {
  return (
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
  )
}
