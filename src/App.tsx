import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { AnimatePresence } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}
