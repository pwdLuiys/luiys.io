import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Smartphone, Search, Palette, MessageCircle, Video, LifeBuoy } from "lucide-react";

const services = [
  { icon: Smartphone, key: "web" },
  { icon: Search, key: "seo" },
  { icon: Palette, key: "branding" },
  { icon: MessageCircle, key: "whatsapp" },
  { icon: Video, key: "reels" },
  { icon: LifeBuoy, key: "support" }
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-hand text-6xl md:text-8xl font-bold mb-16 text-center"
        >
          {t("services.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-background p-8 rounded-3xl border border-accent/10 shadow-xl hover:shadow-accent/20 transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="font-hand text-4xl font-bold mb-4">
                {t(`services.${service.key}.title`)}
              </h3>

              <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                {t(`services.${service.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
