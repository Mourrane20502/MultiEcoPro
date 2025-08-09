import { motion } from "framer-motion";
import {  FaArrowRight, FaHammer, FaSolarPanel, FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";

import digital from "../../assets/digitalmarketing.jpg";
import construction from "../../assets/construction.jpg";
import energy from "../../assets/energy.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Audit Énergétique & Rénovation",
      description:
        "Évaluation complète de la performance énergétique de vos bâtiments et travaux de rénovation pour améliorer l'efficacité et le confort.",
      image: construction,
      icon: FaHammer,
      features: [
        "Audit énergétique complet",
        "Étude thermique du bâtiment",
        "Travaux de rénovation",
        "Amélioration de l’isolation",
      ],
      path: "/audit",
    },
    {
      id: 2,
      title: "Installation de Panneaux Solaires",
      description:
        "Solutions solaires sur-mesure pour réduire votre facture énergétique et adopter une énergie propre et durable avec une étude complète"
,
      image: energy,
      icon: FaSolarPanel,
      features: [
        "Étude de faisabilité",
        "Installation de panneaux",
        "Maintenance & suivi",
        "Optimisation de production",
      ],
      path: "/solaire",
    },
    {
      id: 3,
      title: "Marketing Digital",
      description:
        "Boostez votre présence en ligne avec des stratégies digitales efficaces : publicité, réseaux sociaux, SEO, et bien plus.",
      image: digital,
      icon: FaBullhorn,
      features: [
        "Stratégie digitale",
        "Publicité en ligne (SEA)",
        "Référencement naturel (SEO)",
        "Gestion des réseaux sociaux",
      ],
      path: "/marketing",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Solutions intégrées pour tous vos besoins en travaux, énergie et
            transformation digitale. Notre expertise multi-domaines vous garantit
            des projets réussis.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 backdrop-blur-sm">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t  opacity-80 mix-blend-multiply`}
                    ></div>

                    <motion.div
                      className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="text-white text-2xl" />
                    </motion.div>

                    <div className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:shadow-lg transition-all duration-300"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to={service.path}
                        className="w-full block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg 
                                 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <span>En savoir plus</span>
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Demander un devis gratuit
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
