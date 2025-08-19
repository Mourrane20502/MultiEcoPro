import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Building, FileText, Phone, ClipboardCheck, Hammer, Award, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import heroImage from "../../assets/2151908063.jpg";
import expertImage from "../../assets/2151908063.jpg";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => (
  <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
    <CardHeader>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </div>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const ProcessStep = ({ step, title, description, icon: Icon }: ProcessStepProps) => (
  <div className="flex gap-5 p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
    <div className="flex-shrink-0">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
        {step}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-5 w-5 text-yellow-500" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

interface ExpertCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

const ExpertCard = ({ name, title, description, image }: ExpertCardProps) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="p-6 text-center">
      <img src={image} alt={name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-yellow-200" />
      <h3 className="font-bold text-lg text-gray-900">{name}</h3>
      <p className="text-yellow-600 font-medium">{title}</p>
      <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Panneau = () => {
    const openWhatsApp = () => {
  const phoneNumber = "212706589031";
  const message = encodeURIComponent(
    "Bonjour, je souhaite obtenir un devis ou des informations pour l'installation de panneaux solaires avec Multiecopro. Merci de me contacter."
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank"); 
};
  const services = [
    {
      icon: Sun,
      title: "Installation Résidentielle",
      description: "Systèmes photovoltaïques sur mesure pour maisons",
      features: ["Conception personnalisée", "Optimisation du rendement", "Maintenance et suivi", "Réduction facture d'électricité"]
    },
    {
      icon: Building,
      title: "Solutions pour Entreprises",
      description: "Économies d'énergie pour bâtiments professionnels",
      features: ["Dimensionnement industriel", "Étude de rentabilité", "Suivi technique", "Conformité réglementaire"]
    },
    {
      icon: FileText,
      title: "Conseil & Études",
      description: "Analyse et recommandations pour vos projets solaires",
      features: ["Audit énergétique", "Simulation PV*Sol / PVSyst", "Retour sur investissement", "Accompagnement administratif"]
    }
  ];

  const processSteps = [
    { step: 1, title: "Contact initial", description: "Nous discutons de vos besoins et planifions une visite.", icon: Phone },
    { step: 2, title: "Étude du site", description: "Analyse détaillée de votre bâtiment ou terrain.", icon: Settings },
    { step: 3, title: "Proposition personnalisée", description: "Devis clair et plan technique adapté.", icon: ClipboardCheck },
    { step: 4, title: "Installation", description: "Pose des panneaux par nos techniciens qualifiés.", icon: Hammer },
    { step: 5, title: "Suivi & Garantie", description: "Maintenance et suivi des performances.", icon: Award }
  ];

  const experts = [
    {
      name: "Mehdi Naimi",
      title: "Ingénieur en Énergie Solaire",
      description: "Expert en conception et installation de systèmes photovoltaïques performants.",
      image: expertImage
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-orange-500/90" />
        </div>
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Passez à l’énergie <span className="block text-orange-300">solaire</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Réduisez vos factures et contribuez à un futur durable avec nos solutions photovoltaïques fiables et performantes.
          </p>
          <Button variant="default" size="lg" className="text-lg px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg">
            <Phone className="mr-2 h-5 w-5" /> Demandez votre devis
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions solaires sur mesure pour particuliers et entreprises
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => <ServiceCard key={idx} {...s} />)}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">Comment ça marche ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Votre projet solaire en 5 étapes simples</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {processSteps.map((p, idx) => <ProcessStep key={idx} {...p} />)}
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">Nos Experts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Une équipe expérimentée pour vos projets solaires</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((e, idx) => <ExpertCard key={idx} {...e} />)}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à passer au solaire ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit et personnalisé.</p>
          <Button onClick={openWhatsApp} variant="default" size="lg" className="text-lg cursor-pointer px-8 py-4 bg-white text-yellow-600 hover:bg-gray-100 shadow-lg">
            <Phone className="mr-2 h-5 w-5" /> Contactez-nous
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Panneau;
