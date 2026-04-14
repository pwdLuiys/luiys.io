import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Layout, Bot, Video } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Portfolio() {
  const { t } = useTranslation();

  const mockups = [
    { id: 1, key: "landingPage", color: "bg-blue-100", icon: Layout },
    { id: 2, key: "automation", color: "bg-green-100", icon: Bot },
    { id: 3, key: "reels", color: "bg-purple-100", icon: Video }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Layout className="w-6 h-6" />
          <span className="font-bold uppercase tracking-widest text-sm">{t("portfolio.badge")}</span>
        </div>
        <h2 className="font-hand text-6xl md:text-8xl font-bold mb-6">{t("portfolio.title")}</h2>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
          {t("portfolio.desc")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockups.map((mockup, index) => (
          <motion.div
            key={mockup.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={cn(
              "aspect-[4/3] rounded-3xl flex items-center justify-center p-8 border border-accent/10 shadow-lg overflow-hidden relative group",
              mockup.color
            )}
          >
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="bg-white text-accent px-6 py-2 rounded-full font-bold shadow-xl">{t("portfolio.itemBadge")}</span>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white/50 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-inner">
                <mockup.icon className="w-10 h-10 text-accent/40" />
              </div>
              <h3 className="font-hand text-3xl font-bold text-accent/80">{t(`portfolio.items.${mockup.key}`)}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
