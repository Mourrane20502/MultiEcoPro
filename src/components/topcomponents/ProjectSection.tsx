import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import constructionImg from "../../assets/construction.jpg";
import energyImg from "../../assets/energy.jpg";
import digitalImg from "../../assets/digital.jpg";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const projects = [
    {
      id: 1,
      title: "Rénovation Complète Villa Moderne",
      category: "Travaux & Construction",
      location: "Maroc",
      date: "2024",
      image: constructionImg,
      description:
        "Rénovation complète d'une villa de 300m² incluant modernisation, isolation et aménagement intérieur.",
      tags: ["Rénovation", "Design", "Isolation"],
    },
    {
      id: 2,
      title: "Installation Panneaux Solaires",
      category: "Efficacité Énergétique",
      location: "Maroc",
      date: "2024",
      image: energyImg,
      description:
        "Installation de système photovoltaïque 15kW avec optimisation énergétique complète.",
      tags: ["Solaire", "Économie", "Écologique"],
    },
    {
      id: 3,
      title: "Digitalisation Processus Entreprise",
      category: "Transformation Digitale",
      location: "Maroc",
      date: "2024",
      image: digitalImg,
      description:
        "Automatisation complète des processus métier et développement d'une plateforme web sur-mesure.",
      tags: ["Automatisation", "Web", "CRM"],
    },
    {
      id: 4,
      title: "Réhabilitation Énergétique Immeuble",
      category: "Efficacité Énergétique",
      location: "Maroc",
      date: "2023",
      image: energyImg,
      description:
        "Audit énergétique et travaux d'isolation pour un immeuble de bureaux de 8 étages.",
      tags: ["Audit", "Isolation", "Bureaux"],
    },
    {
      id: 5,
      title: "Extension Maison Traditionnelle",
      category: "Travaux & Construction",
      location: "Maroc",
      date: "2023",
      image: constructionImg,
      description:
        "Extension et modernisation d'une maison traditionnelle avec respect du style architectural.",
      tags: ["Extension", "Traditionnel", "Architecture"],
    },
    {
      id: 6,
      title: "Plateforme E-commerce Artisanat",
      category: "Transformation Digitale",
      location: "Maroc",
      date: "2023",
      image: digitalImg,
      description:
        "Création d'une plateforme e-commerce pour la vente d'artisanat local avec système de paiement intégré.",
      tags: ["E-commerce", "Artisanat", "Paiement"],
    },
  ];

  const categories = [
    "Tous",
    "Travaux & Construction",
    "Efficacité Énergétique",
    "Transformation Digitale",
  ];

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="realisations" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Découvrez quelques-uns de nos projets récents qui illustrent notre
            expertise et notre engagement envers l'excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 max-w-5xl mx-auto justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>

                {/* View Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <FaEye className="text-sm" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-blue-600" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Voir plus de projets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
