import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { UserCheck } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
          <img
            src="https://i.postimg.cc/YqL3ZKfS/my-notion-face-transparent.png"
            alt="Luiys Notion Face"
            className="relative w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2"
      >
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
          <UserCheck className="w-4 h-4" />
          {t("about.badge")}
        </div>

        <h2 className="font-hand text-5xl md:text-7xl font-bold mb-8 leading-tight">
          {t("about.title")}
        </h2>

        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 font-medium">
          {t("about.content")}
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <div>
            <p className="font-bold text-lg">Luiys</p>
            <p className="text-sm text-foreground/60">Digital Presence Specialist</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
