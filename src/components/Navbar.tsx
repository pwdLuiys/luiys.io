import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  const isPt = i18n.language.startsWith("pt");

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleLanguage = () => {
    const nextLang = isPt ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-accent/10"
    >
      <Link to="/" className="flex items-center gap-2">
        <span className="font-hand text-3xl font-bold text-accent">Luiys.io</span>
      </Link>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-accent/10 transition-colors overflow-hidden p-1"
          aria-label="Toggle Language"
        >
          <img 
            src={isPt ? "https://i.postimg.cc/YC9rfH5f/3_cutout.png" : "https://i.postimg.cc/VkVYKh11/2_cutout.png"} 
            alt={isPt ? "English" : "Português"}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-accent/10 transition-colors"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </motion.nav>
  );
}
