import mobileImg from "../../../assets/mobile.jpg";
import webImg from "../../../assets/web.jpg";
import marketingImg from "../../../assets/marketing.jpg";
import contentImg from "../../../assets/content.jpg";
import { FaMobileAlt, FaLaptopCode, FaChartLine, FaPencilRuler } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Applications Mobiles",
      description: "Développement d'apps mobiles performantes pour iOS et Android.",
      icon: FaMobileAlt,
      image: mobileImg,
    },
    {
      title: "Applications Web",
      description: "Sites et plateformes web modernes, rapides et sécurisés.",
      icon: FaLaptopCode,
      image: webImg,
    },
    {
      title: "Marketing Digital",
      description: "SEO, campagnes PPC, réseaux sociaux, branding & plus.",
      icon: FaChartLine,
      image: marketingImg,
    },
    {
      title: "Création de Contenu",
      description: "Visuels, vidéos, textes, storytelling engageant et professionnel.",
      icon: FaPencilRuler,
      image: contentImg,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          Nos Services
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Nous créons des solutions sur mesure pour propulser votre entreprise dans l'ère du numérique.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover"
                />

                {/* Content */}
                <div className="p-6 text-center">
                  <IconComponent className="text-4xl text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
