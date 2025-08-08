import {motion} from "framer-motion"
import bigDigital from "../../assets/digitalLarge.jpg"

export default function FirstSide() {
  return (
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
  )
}
