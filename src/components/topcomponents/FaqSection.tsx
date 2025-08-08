import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Quels types de projets gérez-vous ?",
    answer:
      "Nous accompagnons vos projets en travaux de construction, audits énergétiques et solutions digitales adaptées à vos besoins spécifiques.",
  },
  {
    question: "Comment obtenir un devis personnalisé ?",
    answer:
      "Demandez un devis facilement via notre formulaire en ligne ou contactez-nous directement pour une consultation gratuite.",
  },
  {
    question: "Quels sont vos délais moyens d’intervention ?",
    answer:
      "Les délais varient selon la nature du projet, mais nous garantissons une estimation claire dès le début de notre collaboration.",
  },
  {
    question: "Proposez-vous un suivi après la réalisation du projet ?",
    answer:
      "Oui, notre équipe assure un accompagnement post-projet pour garantir votre satisfaction et optimiser les performances.",
  },
  {
    question: "Quels bénéfices pour mon entreprise avec vos solutions digitales ?",
    answer:
      "Nous améliorons votre visibilité en ligne, optimisons vos processus et créons des expériences clients innovantes et performantes.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="max-w-7xl mx-auto py-7 px-6 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
        Foire aux questions
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-2">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
            <AccordionTrigger className="text-lg  font-semibold text-left px-6 py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
