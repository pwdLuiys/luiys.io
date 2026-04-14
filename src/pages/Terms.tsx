import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language.startsWith("pt");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 max-w-4xl mx-auto"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-accent hover:text-hover transition-colors mb-12 font-bold uppercase tracking-widest text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        {isPt ? "Voltar para Home" : "Back to Home"}
      </Link>

      <header className="mb-16">
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <FileText className="w-8 h-8" />
          <span className="font-bold uppercase tracking-widest text-sm">Legal</span>
        </div>
        <h1 className="font-hand text-6xl md:text-8xl font-bold mb-6">
          {isPt ? "Termos de Uso" : "Terms of Use"}
        </h1>
        <p className="text-xl text-foreground/60 font-medium">
          {isPt 
            ? "Regras claras para uma parceria de sucesso." 
            : "Clear rules for a successful partnership."}
        </p>
      </header>

      <div className="space-y-12 text-lg text-foreground/80 leading-relaxed font-medium">
        <section>
          <h2 className="font-hand text-4xl font-bold text-accent mb-4">
            {isPt ? "1. Nossos Serviços" : "1. Our Services"}
          </h2>
          <p>
            {isPt 
              ? "Oferecemos site profissional, SEO local, identidade visual, suporte ilimitado e 4 reels editados por mês. Tudo focado em negócios locais."
              : "We offer professional websites, local SEO, visual identity, unlimited support, and 4 edited reels per month. Everything focused on local businesses."}
          </p>
        </section>

        <section>
          <h2 className="font-hand text-4xl font-bold text-accent mb-4">
            {isPt ? "2. Garantia de 30 Dias" : "2. 30-Day Guarantee"}
          </h2>
          <p>
            {isPt 
              ? "Se você não estiver satisfeito com nosso trabalho nos primeiros 30 dias, devolvemos 100% do seu dinheiro. Sem perguntas."
              : "If you are not satisfied with our work in the first 30 days, we return 100% of your money. No questions asked."}
          </p>
        </section>

        <section>
          <h2 className="font-hand text-4xl font-bold text-accent mb-4">
            {isPt ? "3. Suporte Ilimitado" : "3. Unlimited Support"}
          </h2>
          <p>
            {isPt 
              ? "O suporte é contínuo e ilimitado para alterações e manutenção. O parceiro nunca some e faz alterações na hora."
              : "Support is continuous and unlimited for changes and maintenance. The partner never disappears and makes changes on the spot."}
          </p>
        </section>

        <section>
          <h2 className="font-hand text-4xl font-bold text-accent mb-4">
            {isPt ? "4. Propriedade Intelectual" : "4. Intellectual Property"}
          </h2>
          <p>
            {isPt 
              ? "Todo o conteúdo criado para sua empresa (site, identidade visual, reels) é de sua propriedade após o pagamento integral."
              : "All content created for your company (website, visual identity, reels) is your property after full payment."}
          </p>
        </section>
      </div>
    </motion.div>
  );
}
