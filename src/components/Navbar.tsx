import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <button 
        onClick={onClick} 
        className="w-6 h-6 flex flex-col justify-around items-center transition-all duration-300 z-50 relative"
        aria-label="Toggle Menu"
    >
        <motion.span 
            className="block w-full h-0.5 bg-white rounded"
            variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 5 } }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
        />
        <motion.span 
            className="block w-full h-0.5 bg-white rounded"
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.1 }}
        />
        <motion.span 
            className="block w-full h-0.5 bg-white rounded"
            variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -5 } }}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
        />
    </button>
);
// ----------------------------------

interface LinkItem {
  href: string;
  label: string;
}

const links: LinkItem[] = [
  { href: "#draw", label: "Lets draw!" },
  { href: "#tutorial-section", label: "TUTORIAL" },
  { href: "#about", label: "ABOUT US" },
  { href: "#contact", label: "CONTACT" },
];

// Componente para el Selector de Lenguaje
const LanguageSwitcher = () => {
    const [language, setLanguage] = useState<'EN' | 'ES'>('EN');

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'EN' ? 'ES' : 'EN'));
        // SOON: Logica para cambiar idioma
        console.log(`Cambiando a idioma: ${language === 'EN' ? 'ES' : 'EN'}`);
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className={`
                flex items-center justify-center
                h-8 px-3 rounded-full 
                shadow-xl text-sm font-bold transition duration-300
                // Estilo basado en el idioma activo
                bg-white/10 text-white border border-white/30
                hover:bg-pink-600 hover:text-white
            `}
        >
            <span className={language === 'EN' ? 'text-pink-400' : 'opacity-70'}>EN</span>
            <span className="mx-1 opacity-50">|</span>
            <span className={language === 'ES' ? 'text-pink-400' : 'opacity-70'}>ES</span>
        </motion.button>
    );
};


const SCROLL_THRESHOLD = 200; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CLASES PARA GLASSMORPHISM
  const contentClasses = `
    flex items-center justify-between px-4 md:px-8 h-14 
    rounded-full shadow-2xl transition-all duration-300 border
    backdrop-blur-xl 
    bg-black/20 border-white/30 
    w-full
  `;

  return (
    <motion.nav 
      className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[999] p-2 md:p-4 pointer-events-none"
      animate={{ 
        y: scrolled ? -200 : 0, 
        opacity: scrolled ? 0 : 1 
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
        <motion.div 
            className={contentClasses + " pointer-events-auto"}
            initial={{ y: 0 }}
            animate={{ 
                y: scrolled ? -20 : 0, 
            }}
            transition={{ duration: 0.3 }}
        >
        
        {/* Logo/Título */}
        <motion.a
            href="#top"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-extrabold tracking-tighter text-white"
        >
            draw<span className="text-pink-400">IA</span>
        </motion.a>

        {/* Enlaces de navegación (Desktop) */}
        <div className="hidden md:flex items-center gap-10 text-sm font-bold text-white/90">
            {links.map((link) => (
                <motion.a
                    key={link.href}
                    href={link.href}
                    className="relative group transition-colors hover:text-pink-400 uppercase tracking-wider"
                    whileHover={{ scale: 1.05, y: -2 }}
                >
                    {link.label}
                    <motion.span
                        className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-400"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.a>
            ))}
        </div>

        {/* Selector de Lenguaje (Desktop) */}
        <div className="hidden md:block">
            <LanguageSwitcher />
        </div>
        
        {/* Botón de Menú (Mobile) */}
        <div className="md:hidden">
            <HamburgerButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </div>

      </motion.div>
      
      {/* Menú Móvil Animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            className="absolute top-full left-0 w-full mt-2 bg-black/80 backdrop-blur-md rounded-xl shadow-2xl p-4 origin-top pointer-events-auto"
          >
            {/* Contenido del menú móvil */}
            <div className="flex flex-col space-y-4 text-center">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg font-semibold uppercase tracking-wider py-2 hover:text-pink-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {/* Selector de Lenguaje */}
              <div className="pt-4">
                  <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}