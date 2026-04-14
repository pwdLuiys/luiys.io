import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
          <ShieldCheck className="w-8 h-8" />
          <span className="font-bold uppercase tracking-widest text-sm">Legal</span>
        </div>
        <h1 className="font-hand text-6xl md:text-8xl font-bold mb-6">
          {isPt ? "Política de Privacidade" : "Privacy Policy"}
        </h1>
        <p className="text-xl text-foreground/60 font-medium">
          {isPt 
            ? "Como cuidamos dos seus dados e do seu negócio." 
            : "How we take care of your data and your business."}
        </p>
      </header>

      <div className="space-y-12 text-lg text-foreground/80 leading-relaxed font-medium">
        <section>
          <h2 className="font-hand text-4xl font-bold text-accent mb-4">
            {isPt ? "1. Coleta de Dados" : "1. Data Collection"}
          </h2>
          <p>
            {isPt 
              ? "Coletamos apenas as informações necessárias para entrar em contato via WhatsApp e e-mail, como seu nome e o nome da sua empresa, para oferecer um atendimento personalizado."
              : "We only collect the information necessary to contact you via WhatsApp and email, such as your name and your company's name, to offer personalized service."}
          </p>
        </section>

        <section>
          <h2 className="font-hand text-4xl font-bold text-accent mb-4">
            {isPt ? "2. Uso das Informações" : "2. Use of Information"}
          </h2>
          <p>
            {isPt 
              ? "Seus dados são usados exclusivamente para a prestação dos nossos serviços de presença digital, suporte e manutenção ilimitada. Nunca compartilhamos seus dados com terceiros."
              : "Your data is used exclusively for the provision of our digital presence services, support, and unlimited maintenance. We never share your data with third parties."}
          </p>
        </section>

        <section>
          <h2 className="font-hand text-4xl font-bold text-accent mb-4">
            {isPt ? "3. Segurança" : "3. Security"}
          </h2>
          <p>
            {isPt 
              ? "Implementamos medidas de segurança modernas para proteger suas informações contra acessos não autorizados ou uso indevido."
              : "We implement modern security measures to protect your information against unauthorized access or misuse."}
          </p>
        </section>

        <section>
          <h2 className="font-hand text-4xl font-bold text-accent mb-4">
            {isPt ? "4. Seus Direitos" : "4. Your Rights"}
          </h2>
          <p>
            {isPt 
              ? "Você pode solicitar a exclusão ou alteração dos seus dados a qualquer momento entrando em contato conosco diretamente."
              : "You can request the deletion or modification of your data at any time by contacting us directly."}
          </p>
        </section>
      </div>
    </motion.div>
  );
}
