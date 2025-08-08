import mobileImg from "../../../assets/mobile.jpg";
import webImg from "../../../assets/web.jpg";
import marketingImg from "../../../assets/marketing.jpg";
import contentImg from "../../../assets/content.jpg";
import { FaMobileAlt, FaLaptopCode, FaChartLine, FaPencilRuler } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Applications Mobiles",
      description: `Développement d'apps mobiles performantes pour iOS et Android. Nos solutions sont optimisées pour une expérience utilisateur fluide et intuitive.`,
      icon: FaMobileAlt,
      image: mobileImg,
    },
    {
      title: "Applications Web",
      description: `Sites et plateformes web modernes, rapides et sécurisés. Nous assurons une architecture scalable et un design responsive adapté à tous les écrans.`,
      icon: FaLaptopCode,
      image: webImg,
    },
    {
      title: "Marketing Digital",
      description: `SEO, campagnes PPC, réseaux sociaux, branding & plus. Nous développons des stratégies personnalisées pour maximiser votre visibilité en ligne.`,
      icon: FaChartLine,
      image: marketingImg,
    },
    {
      title: "Création de Contenu",
      description: `Visuels, vidéos, textes, storytelling engageant et professionnel. Attirez et fidélisez votre audience grâce à un contenu de qualité.`,
      icon: FaPencilRuler,
      image: contentImg,
    },
  ];

  return (
    <section className="py-10" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2
          id="services-heading"
          className="text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight"
        >
          Nos Services
        </h2>
        <p className="max-w-3xl mx-auto text-center text-xl text-gray-700 mb-16">
          Nous créons des solutions sur mesure pour propulser votre entreprise dans l'ère du numérique.
        </p>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ title, description, icon: IconComponent, image }, index) => (
            <article
              key={index}
              tabIndex={0}
              role="region"
              aria-label={title}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition-shadow duration-300
                overflow-hidden
                flex flex-col
                cursor-pointer
                focus:outline-none focus:ring-4 focus:ring-blue-300
              "
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={image}
                  alt={`Illustration pour ${title}`}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-t-3xl"></div>
              </div>

              <div className="p-8 flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-6 w-20 h-20 rounded-full bg-blue-100 text-blue-600 shadow-md">
                  <IconComponent className="text-5xl" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
