import { FaLightbulb, FaTrophy, FaLeaf, FaUsers } from "react-icons/fa";

export default function NosValeursCards() {
  const valeurs = [
    {
      icon: <FaLightbulb size={36} className="text-blue-500 mb-4" />,
      title: "Innovation",
      description:
        "Intégrer des solutions modernes pour répondre aux défis actuels en matière de travaux, énergie et digital.",
    },
    {
      icon: <FaTrophy size={36} className="text-blue-500 mb-4" />,
      title: "Excellence",
      description:
        "Offrir un service de haute qualité grâce à une expertise éprouvée et une attention au détail.",
    },
    {
      icon: <FaLeaf size={36} className="text-blue-500 mb-4" />,
      title: "Responsabilité",
      description:
        "Agir avec intégrité et engagement envers nos clients, l’environnement et nos collaborateurs.",
    },
    {
      icon: <FaUsers size={36} className="text-blue-500 mb-4" />,
      title: "Collaboration",
      description:
        "Travailler ensemble pour atteindre les meilleurs résultats en créant des partenariats durables.",
    },
  ];

  return (
    <>
     <section className="bg-white py-10 px-6" id="valeurs">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {valeurs.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            {icon}
            <h3 className="text-xl font-semibold text-blue-600 mb-3">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
    
 

    </>
  );
}
