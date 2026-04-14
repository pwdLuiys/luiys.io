import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.pexels.com/photos/30727826/pexels-photo-30727826.jpeg"
          alt="Clinic Background"
          className="w-full h-full object-cover opacity-60 dark:opacity-40"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content Box (Inspired by save.design) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 max-w-4xl w-full mx-4"
      >
        <div className="bg-background text-foreground p-8 md:p-16 rounded-2xl shadow-2xl border border-accent/20">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="font-hand text-5xl md:text-8xl font-bold mb-6 leading-tight"
          >
            {t("hero.tagline")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <a
              href="https://wa.me/553484432432"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 bg-accent hover:bg-hover text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-accent/40 active:scale-95"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              {t("hero.cta")}
            </a>

            <div className="flex items-center gap-2 text-inherit opacity-80 font-medium">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>{t("hero.guarantee")}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-accent/30" />
        <span className="text-xs uppercase tracking-widest text-accent/50 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}
