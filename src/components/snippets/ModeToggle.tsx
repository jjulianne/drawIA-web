import { motion } from "framer-motion";

interface ModeToggleProps {
  proMode: boolean;
  setProMode: (mode: boolean) => void;
}

// Nuevo componente de switch de modo animado
const ModeToggle: React.FC<ModeToggleProps> = ({ proMode, setProMode }) => {
  return (
    <div className="flex justify-center mb-10">
      <motion.div
        layout // Habilita la animación de Layout (Magic Motion)
        transition={{ type: "spring", stiffness: 700, damping: 50 }} // Transición suave y con rebote
        className="relative flex p-1 rounded-full cursor-pointer w-64 md:w-80 bg-slate-200 shadow-xl"
        onClick={() => setProMode(!proMode)}
      >
        {/* Indicador de píldora activa animada */}
        {proMode ? (
          <motion.div
            layoutId="mode-pill" // ID para la animación de Layout
            className="absolute top-0.5 bottom-0.5 left-0.5 w-1/2 rounded-full bg-pink-600 shadow-md"
            transition={{ type: "spring", stiffness: 700, damping: 50 }}
            style={{ x: '100%' }} // Posición de inicio (Pro Mode está a la derecha)
          />
        ) : (
          <motion.div
            layoutId="mode-pill" // Mismo ID para que Framer Motion lo mueva
            className="absolute top-0.5 bottom-0.5 left-0.5 w-1/2 rounded-full bg-pink-600 shadow-md"
            transition={{ type: "spring", stiffness: 700, damping: 50 }}
            style={{ x: '0%' }} // Posición de inicio (Simple está a la izquierda)
          />
        )}
        
        {/* Opción 1: Simple */}
        <span
          className={`flex-1 text-center py-2 z-10 font-bold transition-colors text-sm md:text-base ${
            !proMode ? "text-white" : "text-slate-600 hover:text-pink-600"
          }`}
        >
         Simple
        </span>
        
        {/* Opción 2: Pro Mode */}
        <span
          className={`flex-1 text-center py-2 z-10 font-bold transition-colors text-sm md:text-base ${
            proMode ? "text-white" : "text-slate-600 hover:text-pink-600"
          }`}
        >
         Pro Mode
        </span>
      </motion.div>
    </div>
  );
};

export default ModeToggle; 
