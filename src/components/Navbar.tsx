import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#draw", label: "DRAW/MORE" },
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[80%] z-[999] py-4 transition-all duration-300`}
    >
      <div
        className={`
          // Fondo oscuro translúcido con efecto blur
          backdrop-blur-none border 
          rounded-2xl 
          shadow-2xl
          flex items-center justify-between px-6 
          h-14 
          transition-all duration-300
          
          // Estilos que cambian al hacer scroll
          ${
            scrolled
              ? "bg-black/40 border-white/10 h-11"
              : "bg-black/60 border-white/20"
          }
        `}
      >

        <motion.a
          href="#draw"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-extrabold tracking-tighter text-white"
        >
          draw<span className="text-indigo-400">IA</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/90">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group transition-colors hover:text-indigo-400"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`
            hidden md:flex 
            items-center justify-center
            bg-indigo-600 hover:bg-indigo-700
            px-4 py-1.5 
            rounded-full 
            shadow-lg 
            text-sm font-semibold text-white 
            transition transform
            ${scrolled ? 'scale-90 opacity-90' : 'scale-100 opacity-100'} // Más sutil al scrollear
          `}
        >
          START NOW
        </motion.button>
        
        <div className="md:hidden">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>

      </div>
    </nav>
  );
}