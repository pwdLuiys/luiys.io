import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { MessageCircle, Mail, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-bg-dark text-bg-light">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-6xl md:text-9xl font-bold mb-12"
        >
          {t("contact.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-12"
        >
          <a
            href="https://wa.me/553484432432"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-accent hover:bg-hover text-white px-12 py-6 rounded-full text-2xl md:text-3xl font-bold transition-all duration-300 shadow-2xl hover:shadow-accent/40 active:scale-95"
          >
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform" />
            {t("contact.cta")}
          </a>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a
              href="mailto:Luiysh@pm.me"
              className="flex items-center gap-3 text-xl hover:text-accent transition-colors group"
            >
              <Mail className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              <span>Luiysh@pm.me</span>
            </a>
            <a
              href="https://www.instagram.com/luiys.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl hover:text-accent transition-colors group"
            >
              <Instagram className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              <span>@luiys.io</span>
            </a>
            <a
              href="https://www.youtube.com/@thatsMeLuiys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl hover:text-accent transition-colors group"
            >
              <Youtube className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              <span>YouTube</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
