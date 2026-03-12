import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/JREB Logo_Light.png";
import logoDark from "@/assets/JREB Logo_Dark.png";

// Utility to match your auto-gen routing (lower-casing paths)
const createPageUrl = (page) => page === "Home" ? "/" : `/${page.toLowerCase()}`;

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "About", page: "About" },
  { label: "Services", page: "Services" },
  { label: "Contact", page: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="flex items-center">
            <img
              src={scrolled ? logoDark : logoLight}
              alt="JREB Logistics"
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-10 md:h-12" : "h-20 md:h-24 mt-6"
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const url = createPageUrl(link.page);
              const isActive = location.pathname === url;
              return (
                <Link
                  key={link.page}
                  to={url}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? scrolled ? "bg-teal-800 text-white" : "bg-white/20 text-white backdrop-blur-sm"
                      : scrolled ? "text-gray-600 hover:text-teal-800 hover:bg-teal-50" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-teal-800" : "text-white"}`}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden shadow-xl"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-teal-50 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}