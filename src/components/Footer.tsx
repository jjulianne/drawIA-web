import GradientText from "./GradientText";

// Datos del footer basados en tu concepto y tu información
const FOOTER_DATA = {
  // Información de contacto del concepto de la imagen
  contact: {
    email: "drawia@gmail.com",
    phone: "+54 9 11 3278 1162",
  },
  // Enlaces de navegación comunes
  links: [
    { title: "Inicio", href: "#home" },
    { title: "Productos", href: "/productos" }, // Manteniendo el enlace de tu concepto
    { title: "Sobre Nosotros", href: "/sobre-nosotros" }, // Manteniendo el enlace de tu concepto
    { title: "Servicios", href: "/servicios" },
    { title: "Términos", href: "/terminos" },
    { title: "Privacidad", href: "/privacidad" },
  ],
  // Tu información de desarrollador
  developer: {
    name: "jjulianne",
    githubUrl: "https://github.com/jjulianne", // Tu GitHub
  },
  // Información de copyright de tu proyecto original
  copyright: `© ${new Date().getFullYear()} DRAWIA`,
  builtWith: "Built with Vite, React, TypeScript & TailwindCSS.",
};

const Footer: React.FC = () => {
  const { contact, links, developer, copyright, builtWith } = FOOTER_DATA;

  return (
    // Contenedor principal del footer con fondo oscuro (como tu concepto)
    <footer className="bg-gray-900 border-t border-gray-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sección Superior: Logo, Contacto y Navegación */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-8 border-b border-gray-800">
          
          {/* Columna 1: Logo y Contacto */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
                <span className="text-pink-500 text-3xl font-extrabold tracking-widest">Let's</span>
                <span className="text-2xl font-bold">drawIA</span>
            </div>
            
            <div className="text-sm text-gray-400 space-y-1 mt-4">
              <p>Email: <a href={`mailto:${contact.email}`} className="hover:text-pink-500 transition">{contact.email}</a></p>
              <p>Tel.: <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-pink-500 transition">{contact.phone}</a></p>
            </div>
          </div>

          {/* Columna 2 & 3: Enlaces de Navegación */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-pink-500">Navegación</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {links.slice(0, 3).map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-pink-500 transition">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-pink-500">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {links.slice(3).map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-pink-500 transition">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Columna 4 (lg:col-span-1): Placeholder o Redes Sociales */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
             <h3 className="text-lg font-semibold mb-3 text-pink-500">Síguenos</h3>
             <div className="flex space-x-3 text-2xl">
                {/* Íconos de redes sociales aquí (ej. FontAwesome o Lucide) */}
                <a href="#" className="hover:text-pink-500 transition">
                    {/* Icono de X/Twitter */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.1-1.4 3.4-3.5 3.5-6.6-4.5 1.7-8.1-1.7-6.2-6.1"/></svg>
                </a>
                <a href="#" className="hover:text-pink-500 transition">
                    {/* Icono de Instagram */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
            </div>
          </div>

        </div>
        
        {/* Sección Inferior: Copyright y Desarrollador */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-sm text-gray-500">
          
          {/* Copyright y Stack */}
          <div className="text-center md:text-left space-y-1 mb-2 md:mb-0">
             <p>{copyright} — {builtWith}</p>
          </div>

          {/* Enlace al Desarrollador con ShinyText */}
          <p className="text-center md:text-right">
            Página Web desarrollada por{' '}
            <a 
              href={developer.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold hover:text-pink-500 transition"
            >
              {/* Aplicando la animación GradientText */}
              <GradientText
                colors={["#fa74f3ff", "#ffffffff", "#fa74f3ff", "#ffffffff", "#fa74f3ff"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                {developer.name} 
              </GradientText>
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;