import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = ["q1", "q2", "q3", "q4"];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <HelpCircle className="w-6 h-6" />
          <span className="font-bold uppercase tracking-widest text-sm">FAQ</span>
        </div>
        <h2 className="font-hand text-6xl md:text-8xl font-bold">{t("faq.title")}</h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-accent/10 rounded-2xl overflow-hidden bg-accent/5"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/10 transition-colors"
            >
              <span className="text-xl font-bold">{t(`faq.${faq}`)}</span>
              <ChevronDown
                className={`w-6 h-6 text-accent transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-lg text-foreground/70 font-medium border-t border-accent/5">
                    {t(`faq.a${index + 1}`)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
