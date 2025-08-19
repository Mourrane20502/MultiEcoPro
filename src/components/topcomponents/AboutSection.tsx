import { motion } from "framer-motion";
import { FaUsers, FaAward, FaHandshake, FaRocket } from "react-icons/fa";

const AboutSectionPage = () => {
  const openWhatsApp = () => {
  const phoneNumber = "212706589031";
  const message = encodeURIComponent(
    "Salut ! 😊 Je voudrais en savoir plus sur vos services et obtenir un devis. Merci !"
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
};

  const stats = [
    { number: "3+", label: "Ans d'expérience", icon: FaRocket },
    { number: "70+", label: "Projets réalisés", icon: FaAward },
    { number: "98%", label: "Clients satisfaits", icon: FaHandshake },
    { number: "10+", label: "Experts dédiés", icon: FaUsers }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Nous nous engageons à livrer des solutions de la plus haute qualité.",
      icon: FaAward
    },
    {
      title: "Innovation",
      description: "Nous adoptons les dernières technologies pour rester à la pointe.",
      icon: FaRocket
    },
    {
      title: "Partenariat",
      description: "Nous collaborons étroitement avec nos clients pour leur succès.",
      icon: FaHandshake
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Qui <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Sommes-Nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            MultiEcoPro est votre partenaire de confiance pour tous vos projets de travaux, 
            d'efficacité énergétique et de transformation digitale.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Depuis notre création, nous nous sommes spécialisés dans l'accompagnement 
              des particuliers et entreprises dans leurs projets de rénovation, 
              d'optimisation énergétique et de digitalisation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Notre équipe d'experts multidisciplinaires combine savoir-faire traditionnel 
              et technologies innovantes pour vous offrir des solutions complètes et durables.
            </p>
            
            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Prêt à commencer votre projet ?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <motion.button    onClick={openWhatsApp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300"
          >
            Nous contacter
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionPage;