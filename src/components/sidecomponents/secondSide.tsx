import bigConstruction from "../../assets/bigConstruction.jpg"
import { motion } from "framer-motion";

export default function SecondSide() {
  return (
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
  )
}
