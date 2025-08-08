export default function HowItWorks() {
  const steps = [
    {
      title: "Découverte",
      description: "Comprendre vos besoins et objectifs pour créer la meilleure solution.",
    },
    {
      title: "Conception",
      description: "Design UI/UX sur mesure, axé sur l’expérience utilisateur optimale.",
    },
    {
      title: "Développement",
      description: "Coder, tester et intégrer les fonctionnalités selon vos attentes.",
    },
    {
      title: "Lancement",
      description: "Déploiement sur les stores ou web, optimisation des performances.",
    },
    {
      title: "Support",
      description: "Maintenance continue, mises à jour et assistance technique dédiée.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Comment ça marche</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Notre processus simple et transparent pour transformer vos idées en réalité.
        </p>

        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 bg-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
