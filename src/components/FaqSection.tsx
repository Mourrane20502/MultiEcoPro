import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto py-7 px-6 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
        Foire aux questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-300 shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              className="w-full px-6 py-5 flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>{item.question}</span>
              <span className="ml-4 text-2xl font-bold text-blue-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1, marginTop: 12 },
                    collapsed: { height: 0, opacity: 0, marginTop: 0 },
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden px-6 pb-6 text-gray-700"
                >
                  <p className="leading-relaxed">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
