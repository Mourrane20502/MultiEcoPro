export default function PricingPackages() {
  const packages = [
    {
      name: "Basique",
      price: "4 000 MAD",
      description: "Page d'atterrissage simple et efficace pour présenter votre activité.",
      features: [
        "Page d'atterrissage (Landing page)",
        "Design responsive et moderne",
        "Formulaire de contact simple",
        "Intégration réseaux sociaux",
        "Optimisation SEO de base",
        "Hébergement et maintenance 1 an",
        "Configuration Google My Business",
        "SSL basique pour sécurité",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "7 000 MAD",
      description: "Site web multi-pages professionnel pour une présence en ligne complète.",
      features: [
        "Site multi-pages (jusqu’à 7 pages)",
        "Design personnalisé et UX optimisé",
        "Formulaire de contact avancé avec notifications",
        "Optimisation SEO avancée",
        "Intégration Google Analytics & Search Console",
        "Nom de domaine inclus (1 an)",
        "Hébergement et maintenance 6 mois",
        "Support par email & chat",
        "Formation à la gestion du site",
        "Intégration CRM simple",
        "Backup automatique hebdomadaire",
      ],
      popular: true,
    },
    {
      name: "Avancé",
      price: "15 000 MAD",
      description: "Solution e-commerce complète avec fonctionnalités avancées et support dédié.",
      features: [
        "Boutique en ligne complète avec paiement sécurisé",
        "Nombre illimité de pages & produits",
        "Optimisation SEO avancée + Audit SEO trimestriel",
        "Gestion produits, commandes & clients",
        "Intégration passerelles de paiement multiples",
        "Nom de domaine + SSL avancé inclus",
        "Hébergement & maintenance 1 an",
        "Support 24/7 & formation personnalisée",
        "Intégration marketing avancée (emailing, réseaux sociaux)",
        "Analyse avancée avec Google Analytics 4",
        "Configuration multi-langues et devises",
        "Sauvegardes journalières & monitoring sécurité",
      ],
      popular: false,
    },
  ];

  const openWhatsApp = (packName: string) => {
    const phoneNumber = "212695592907";
    const message = encodeURIComponent(
      `Bonjour, je souhaite obtenir un devis pour le pack "${packName}" avec Multiecopro. Merci de me contacter.`
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Nos Packs & Tarifs</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Choisissez le pack qui correspond à vos besoins et votre budget.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {packages.map(({ name, price, description, features, popular }, idx) => (
            <div
              key={idx}
              className={`
                bg-white rounded-3xl p-8 shadow-lg
                flex flex-col
                border-2
                ${popular ? "border-blue-600 shadow-lg scale-105" : "border-transparent"}
                transition-transform duration-300
              `}
              tabIndex={0}
              aria-label={`${name} pack`}
            >
              {popular && (
                <div className="mb-4 inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold uppercase tracking-wide">
                  Le plus populaire
                </div>
              )}
              <h3 className="text-3xl font-semibold mb-2 text-gray-900">{name}</h3>
              <p className="text-xl text-blue-600 font-bold mb-6">{price}</p>
              <p className="text-gray-700 mb-6">{description}</p>
              <ul className="mb-8 text-left flex-grow space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsApp(name)}
                className={`mt-auto inline-block px-8 py-3 rounded-full font-semibold text-white ${
                  popular ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
                } transition-colors`}
                aria-label={`Choisir le pack ${name}`}
              >
                Choisir
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
