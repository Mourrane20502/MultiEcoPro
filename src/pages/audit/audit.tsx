import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Building, 
  FileText, 
  Hammer,
  Thermometer,
  Wind,
  Sun,
  Phone,
  ClipboardCheck,
  FileBarChart,
  Settings,
  Award
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import heroImage from "../../assets/2151908063.jpg";
import insulationImage from "../../assets/2151908063.jpg";
import sofiaImage from "../../assets/2151908063.jpg";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-green-100">
            <Icon className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  objective?: string;
}

const ProcessStep = ({ step, title, description, icon: Icon, objective }: ProcessStepProps) => {
  return (
    <div className="flex gap-4 p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
          {step}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="h-5 w-5 text-green-600" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600 mb-2">{description}</p>
        {objective && (
          <p className="text-sm text-blue-600 font-medium">🎯 {objective}</p>
        )}
      </div>
    </div>
  );
};

interface ExpertCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  expertise: string[];
}

const ExpertCard = ({ name, title, description, image, expertise }: ExpertCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={image} 
            alt={`Portrait de ${name}`}
            className="w-20 h-20 rounded-full object-cover border-2 border-green-200"
          />
          <div>
            <h3 className="font-bold text-lg text-gray-900">{name}</h3>
            <p className="text-green-600 font-medium">{title}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="space-y-2">
          {expertise.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-gray-900">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const auditServices = [
    {
      icon: Building,
      title: "Audit énergétique bâtiments",
      description: "Analyse complète pour villas, immeubles, hôtels et bureaux",
      features: [
        "Audit énergétique détaillé",
        "Étude thermique selon RTCM",
        "Diagnostic des consommations",
        "Rapport avec ROI calculé"
      ]
    },
    {
      icon: Sun,
      title: "Études photovoltaïques",
      description: "Faisabilité et simulation pour projets solaires",
      features: [
        "Étude de faisabilité complète",
        "Simulation PvSyst, PV*Sol",
        "Calcul de rentabilité",
        "Dimensionnement optimal"
      ]
    },
    {
      icon: FileText,
      title: "Études réglementaires",
      description: "Conformité aux normes françaises et marocaines",
      features: [
        "RT2012, RE2020 (France)",
        "RTCM (Maroc)",
        "Études ACV",
        "Accompagnement financements"
      ]
    }
  ];

  const renovationServices = [
    {
      icon: Thermometer,
      title: "Isolation thermique",
      description: "Solutions d'isolation performantes",
      features: [
        "Isolation toiture et combles",
        "Murs (ITI/ITE)",
        "Traitement ponts thermiques",
        "Étanchéité à l'air"
      ]
    },
    {
      icon: Wind,
      title: "Systèmes énergétiques",
      description: "Modernisation des équipements",
      features: [
        "Remplacement fenêtres/portes",
        "PAC, VRV, climatisation",
        "Éclairage LED basse consommation",
        "Chauffe-eaux solaires"
      ]
    },
    {
      icon: Settings,
      title: "Maîtrise d'ouvrage",
      description: "Accompagnement complet des travaux",
      features: [
        "Conseil technique et matériaux",
        "Coordination des artisans",
        "Suivi qualité et conformité",
        "Optimisation énergétique industrie"
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Prise de contact",
      description: "Vous nous contactez par téléphone, WhatsApp ou via notre formulaire en ligne.",
      icon: Phone,
      objective: "comprendre vos besoins et fixer un rendez-vous."
    },
    {
      step: 2,
      title: "Visite et diagnostic sur site",
      description: "Un de nos experts se déplace pour analyser votre bâtiment : mesures précises, photos et relevés, échanges sur vos objectifs.",
      icon: Search,
    },
    {
      step: 3,
      title: "Audit et étude personnalisée",
      description: "Nous réalisons un rapport complet avec analyse thermique, identification des pertes et proposition de solutions adaptées.",
      icon: FileBarChart,
      objective: "estimation des économies possibles en dirhams par an."
    },
    {
      step: 4,
      title: "Devis et plan de travaux",
      description: "Nous préparons un devis clair pour isolation, menuiseries, chauffage et énergies renouvelables.",
      icon: ClipboardCheck,
      objective: "possibilité de proposer plusieurs scénarios pour comparer."
    },
    {
      step: 5,
      title: "Réalisation et suivi",
      description: "Nos équipes qualifiées réalisent les travaux avec coordination, suivi régulier et contrôle qualité.",
      icon: Hammer,
    },
    {
      step: 6,
      title: "Livraison et garanties",
      description: "Réception avec le client et remise d'un rapport final avec les améliorations mesurées.",
      icon: Award,
    }
  ];

 const experts = [
  {
    name: "Anass HAMIDI",
    title: "Fondateur & Ingénieur Énergétique",
    description:
      "Expert en audits énergétiques et études thermiques, Anass possède une solide expérience dans l’application du Règlement Thermique Marocain (RTCM) mais aussi simulations thermiques (Pléiades, Bâti-Audit) et en montage de dossiers CEE. Il accompagne ses clients du diagnostic à la réalisation des travaux. Il réalise des diagnostics complets pour tous types de bâtiments (villas, hôtels, bureaux), incluant l’étude de faisabilité pour projets photovoltaïques et le calcul du retour sur investissement. Passionné par les solutions durables, il accompagne chaque client vers des choix performants et rentables.",
    image: sofiaImage,
    expertise: [
      "Audits énergétiques complets",
      "Application du RTCM",
      "Simulations thermiques (Pléiades, Bâti-Audit)",
      "Montage dossiers CEE",
      "Étude faisabilité photovoltaïque",
      "Calcul retour sur investissement"
    ]
  },
  {
    name: "Sofia El Amrani",
    title: "Responsable Isolation & Rénovation Énergétique",
    description:
      "Sofia est spécialiste des travaux d’isolation thermique (toiture, murs, combles) et du remplacement de menuiseries (double vitrage). Elle maîtrise les techniques d’étanchéité à l’air et le traitement des ponts thermiques, ainsi que l’amélioration des systèmes de chauffage et climatisation (pompes à chaleur, VRV). Elle supervise également les installations d’éclairage LED basse consommation et les solutions solaires (chauffe-eau, panneaux PV) pour maximiser l’efficacité énergétique.",
    image: sofiaImage,
    expertise: [
      "Isolation toiture, murs et combles",
      "Remplacement menuiseries double vitrage",
      "Étanchéité à l’air et traitement ponts thermiques",
      "Amélioration systèmes CVC",
      "Installation éclairage LED basse conso",
      "Solutions solaires (chauffe-eau, PV)"
    ]
  },
  {
    name: "Mehdi Rayane Naimi",
    title: "Chargé d’Assistance & Suivi de Projets (AMO)",
    description:
      "Mehdi Rayane coordonne les projets de rénovation de A à Z, assurant une gestion rigoureuse des appels d’offres et le choix des meilleurs fournisseurs. Il organise et contrôle les interventions des artisans, garantit la qualité des travaux et veille au respect des délais. Après réalisation, il procède à la vérification des performances énergétiques grâce à des mesures et tests précis pour valider les économies promises.",
    image: sofiaImage,
    expertise: [
      "Gestion appels d’offres",
      "Sélection fournisseurs",
      "Organisation interventions artisans",
      "Contrôle qualité travaux",
      "Respect des délais",
      "Mesures et tests de performance énergétique"
    ]
  }
];
const openWhatsApp = () => {
  const phoneNumber = "212706589031";
  const message = encodeURIComponent(
    "Salut ! 😊 Je voudrais en savoir plus sur vos services et obtenir un devis. Merci !"
  );
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
};



  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90" />
        </div>
        <div className="relative container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Audit Énergétique & 
            <span className="block text-orange-400">Rénovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Optimisez votre confort et réduisez vos factures d'énergie avec nos solutions d'audit et de rénovation énergétique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Button
  onClick={openWhatsApp}
  variant="default"
  size="lg"
  className="text-lg cursor-pointer px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
>
  <Phone className="mr-2 h-5 w-5" />
  Contactez-nous
</Button>

         
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              Audit et Études
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions d'audit énergétique professionnelles pour tous types de bâtiments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              Travaux d'Isolation & Rénovation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mise en œuvre de solutions énergétiques performantes et durables
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {renovationServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img 
              src={insulationImage} 
              alt="Travaux d'isolation en cours"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Expertise Terrain
                </h3>
                <p className="text-gray-200">
                  Nos équipes qualifiées interviennent avec les dernières technologies d'isolation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Optimiser votre confort et réduire vos factures d'énergie en 6 étapes simples
            </p>
          </div>
          <div className="space-y-6 grid grid-cols-1 md:grid-cols-2  gap-3.5">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              Nos Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une équipe de professionnels expérimentés à votre service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {experts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </div>
     
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à optimiser votre consommation énergétique ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un audit personnalisé et découvrez vos économies potentielles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openWhatsApp} variant="default" size="lg" className="text-lg cursor-pointer px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              Contactez-nous
            </Button>
            
          </div>
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              💡 <strong>Conseils pour entretenir vos installations et maximiser les économies</strong> - Nous vous accompagnons également après les travaux
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;