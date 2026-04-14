import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const isPt = i18n.language.startsWith("pt");

  return (
    <footer className="py-12 px-6 bg-bg-dark text-bg-light/50 border-t border-bg-light/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="font-hand text-4xl font-bold text-accent">Luiys.io</Link>
          <p className="text-sm font-medium">
            © {year} Luiys.io. {t("footer.rights")}
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          <Link to="/privacy" className="hover:text-accent transition-colors">
            {isPt ? "Privacidade" : "Privacy"}
          </Link>
          <Link to="/terms" className="hover:text-accent transition-colors">
            {isPt ? "Termos" : "Terms"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
