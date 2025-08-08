import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: "Téléphone",
      details: ["+212 6 00 00 00 00", "+212 5 22 00 00 00"],
      description: "Appelez-nous directement"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["contact@multiecopro.ma", "info@multiecopro.ma"],
      description: "Écrivez-nous un message"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Adresse",
      details: ["123 Avenue Mohammed V", "Casablanca, Maroc"],
      description: "Visitez notre bureau"
    },
    {
      icon: FaClock,
      title: "Horaires",
      details: ["Lun - Ven: 8h00 - 18h00", "Sam: 9h00 - 13h00"],
      description: "Heures d'ouverture"
    }
  ];

  const socialLinks = [
    { icon: FaTiktok, url: "https://www.tiktok.com", color: "hover:text-pink-500" },
    { icon: FaLinkedin, url: "https://www.linkedin.com", color: "hover:text-blue-600" },
    { icon: FaInstagram, url: "https://www.instagram.com", color: "hover:text-pink-400" }
  ];

  return (
    <section id="contact" className="py-10 relative overflow-hidden">
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
            Contactez-<span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prêt à démarrer votre projet ? Notre équipe d'experts est là pour vous accompagner 
            et répondre à toutes vos questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8"
          >
        
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre prénom"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </motion.div>
              </div>
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="+212 6 00 00 00 00"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de projet
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                  <option>Sélectionnez un type de projet</option>
                  <option>Travaux & Construction</option>
                  <option>Efficacité Énergétique</option>
                  <option>Transformation Digitale</option>
                  <option>Projet mixte</option>
                </select>
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet en détail..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Envoyer ma demande
              </motion.button>
            </form>
          </motion.div>
          

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
          
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-sm text-gray-500 mb-2">{info.description}</p>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white"
            >
              <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
              <p className="text-blue-100 mb-6">
                Restez connecté avec nous sur les réseaux sociaux pour découvrir nos derniers projets et actualités.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                    >
                      <IconComponent className="text-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

        
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;