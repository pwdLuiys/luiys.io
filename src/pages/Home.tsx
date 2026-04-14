import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
