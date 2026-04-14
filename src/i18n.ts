import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        tagline: "Digital presence that doesn't disappear, just like you need.",
        cta: "Talk on WhatsApp",
        guarantee: "30-day money-back guarantee"
      },
      about: {
        title: "Who is Luiys.io?",
        content: "Luiys.io is a solo digital presence agency specialized in local businesses and service providers. I'm your partner who never disappears, makes changes on the spot, and follows your growth closely.",
        badge: "Your Digital Partner"
      },
      services: {
        title: "Specialized Services",
        web: {
          title: "Mobile-First Website",
          desc: "Professional website optimized for smartphones, where your clients are."
        },
        seo: {
          title: "Local SEO",
          desc: "Be found by people in your city looking for your services."
        },
        branding: {
          title: "Exclusive Identity",
          desc: "Visual identity that conveys the authority and trust your business deserves."
        },
        whatsapp: {
          title: "WhatsApp Integration",
          desc: "Direct channel for appointments, integrated and easy to use."
        },
        reels: {
          title: "4 Reels/Month",
          desc: "Edited content for your Instagram to keep your brand active."
        },
        support: {
          title: "Unlimited Support",
          desc: "Maintenance and support without extra cost. I'm always available."
        }
      },
      faq: {
        title: "Common Questions",
        q1: "Do I need to understand technology?",
        a1: "Not at all. I handle everything technical, from hosting and domain setup to SEO and security—so you can focus 100% on your clients. You don't need to touch a single line of code or deal with complex dashboards.",
        q2: "What if I want to change something?",
        a2: "I make changes on the spot. Unlike big agencies where you wait weeks for a simple text update, you can just send me a WhatsApp message and I'll handle it immediately. My goal is to be a real partner for your business.",
        q3: "How long does it take?",
        a3: "The complete setup usually takes between 7 to 15 days. This includes the professional website, local SEO configuration, and your first set of edited reels. We move fast so you can start seeing results as soon as possible.",
        q4: "What if I don't like it?",
        a4: "I offer a 30-day total satisfaction guarantee. If for any reason you feel that the service isn't a perfect fit for your business within the first month, I will refund 100% of your investment. No questions asked, no hard feelings."
      },
      portfolio: {
        badge: "Portfolio",
        title: "Most Requested Projects",
        desc: "Examples of how we transform the digital presence of local businesses.",
        itemBadge: "Top Request",
        items: {
          landingPage: "Landing Page",
          automation: "Automated Customer Service",
          reels: "Perfect Videos for Reels"
        }
      },
      contact: {
        title: "Ready to transform your business?",
        cta: "Start now via WhatsApp",
        email: "Email me",
        social: "Follow me"
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  },
  pt: {
    translation: {
      hero: {
        tagline: "Presença digital que não some, igual você precisa.",
        cta: "Conversar no WhatsApp",
        guarantee: "Garantia de 30 dias ou seu dinheiro de volta"
      },
      about: {
        title: "Quem é a Luiys.io?",
        content: "A Luiys.io é uma agência solo de presença digital especializada em negócios locais e prestadores de serviço. Sou seu parceiro que nunca some, faz alterações na hora e acompanha seu crescimento de perto.",
        badge: "Seu Parceiro Digital"
      },
      services: {
        title: "Serviços Especializados",
        web: {
          title: "Site Mobile-First",
          desc: "Site profissional otimizado para celulares, onde seus clientes estão."
        },
        seo: {
          title: "SEO Local",
          desc: "Seja encontrado por pessoas da sua cidade procurando pelos seus serviços."
        },
        branding: {
          title: "Identidade Exclusiva",
          desc: "Identidade visual que transmite a autoridade e confiança que seu negócio merece."
        },
        whatsapp: {
          title: "WhatsApp Integrado",
          desc: "Canal direto para agendamentos, integrado e fácil de usar."
        },
        reels: {
          title: "4 Reels/Mês",
          desc: "Conteúdo editado para seu Instagram para manter sua marca ativa."
        },
        support: {
          title: "Suporte Ilimitado",
          desc: "Manutenção e suporte sem custo extra. Estou sempre disponível."
        }
      },
      faq: {
        title: "Perguntas Frequentes",
        q1: "Preciso entender de tecnologia?",
        a1: "De jeito nenhum. Eu cuido de toda a parte técnica—desde a configuração do domínio e hospedagem até o SEO e segurança para que você possa focar 100% nos seus clientes. Você não precisará tocar em uma única linha de código ou lidar com painéis complexos.",
        q2: "E se eu quiser alterar algo?",
        a2: "Eu faço alterações na hora. Diferente de grandes agências onde você espera semanas por uma simples troca de texto, aqui você me manda um WhatsApp e eu resolvo imediatamente. Meu objetivo é ser um parceiro real do seu negócio.",
        q3: "Quanto tempo leva?",
        a3: "Geralmente entre 7 a 15 dias para o setup completo. Isso inclui o site profissional, a configuração do SEO local e o seu primeiro lote de reels editados. Trabalhamos rápido para que você comece a ver resultados o quanto antes.",
        q4: "E se eu não gostar?",
        a4: "Ofereço garantia de 30 dias de satisfação total. Se por qualquer motivo você sentir que o serviço não é o que seu negócio precisa dentro do primeiro mês, eu devolvo 100% do seu investimento. Sem perguntas, sem burocracia."
      },
      portfolio: {
        badge: "Portfólio",
        title: "Projetos Mais Procurados",
        desc: "Exemplos de como transformamos a presença digital de negócios locais e profissionais.",
        itemBadge: "Mais Pedido",
        items: {
          landingPage: "Landing Page",
          automation: "Atendimento Automatizado",
          reels: "Vídeos Perfeitos para Reels"
        }
      },
      contact: {
        title: "Pronto para transformar seu negócio?",
        cta: "Começar agora pelo WhatsApp",
        email: "Mande um e-mail",
        social: "Me acompanhe"
      },
      footer: {
        rights: "Todos os direitos reservados."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;
