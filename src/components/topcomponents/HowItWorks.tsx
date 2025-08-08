import { motion } from "framer-motion";
import { FaClipboardList, FaTools, FaRocket, FaSmile } from "react-icons/fa";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FaClipboardList size={36} className="text-blue-600" />,
      title: "Consultation initiale",
      desc: "Nous discutons de vos besoins pour définir les objectifs et contraintes de votre projet.",
    },
    {
      icon: <FaTools size={36} className="text-blue-600" />,
      title: "Planification & Conception",
      desc: "Nos experts élaborent une stratégie détaillée et des solutions sur-mesure adaptées.",
    },
    {
      icon: <FaRocket size={36} className="text-blue-600" />,
      title: "Mise en œuvre",
      desc: "Nous réalisons les travaux avec rigueur et respect des délais convenus.",
    },
    {
      icon: <FaSmile size={36} className="text-blue-600" />,
      title: "Suivi & Satisfaction",
      desc: "Nous vous accompagnons après projet pour garantir votre entière satisfaction.",
    },
  ];

  return (
    <section
      id="process"
      className="max-w-7xl mx-auto py-16 px-6 md:px-12 bg-white"
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
        Comment ça marche ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {steps.map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 max-w-xs">{desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16  rounded-lg p-8 max-w-xl mx-auto text-center ">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Abonnez-vous à notre newsletter
        </h3>
        <p className="text-gray-700 mb-6">
          Recevez des conseils, offres exclusives et les dernières nouveautés.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci pour votre inscription !");
            e.currentTarget.reset();
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Votre email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-gray-900"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
