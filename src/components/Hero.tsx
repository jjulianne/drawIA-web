import { useState } from "react";
import TopBar from "./draw/TopBar";
import SideToolbar from "./draw/SideToolbar";
import RightPanel from "./draw/RightPanel";
import CanvasArea from "./draw/CanvasArea";
import SimpleCanvas from "./draw/SimpleCanvas";
import MagicBento from './MagicBento'
import ModeToggle from './ModeToggle'; 


export default function Hero() {
  const [proMode, setProMode] = useState(false);

  const handleScrollToCanvas = () => {
    const canvasSection = document.getElementById("canvas-section");
    if (canvasSection) {
      canvasSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero inicial */}
      <section
        id="draw"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          draw<span className="text-pink-600">IA</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl">
          You imagine it. <span className="font-semibold">We draw it.</span>
        </p>

        <button
          onClick={handleScrollToCanvas}
          className="mt-10 px-8 py-3 rounded-full bg-pink-600 text-white text-lg shadow-md hover:bg-pink-700 hover:scale-[1.03] transition transform"
        >
          START
        </button>
      </section>

      {/* Sección Canvas */}
      <section
        id="canvas-section"
        className="max-w-6xl mx-auto px-6 pb-24 pt-8"
      >
        {/* Switch Mode mejorado */}
        <ModeToggle proMode={proMode} setProMode={setProMode} />


        {/* Canvas real */}
        <div className="flex flex-col h-[80vh] w-full shadow-lg rounded-lg overflow-hidden">
          {proMode ? (
            <>
              {/* Barra superior */}
              <TopBar />

              <div className="flex flex-1 overflow-hidden">
                {/* Toolbar izquierda */}
                <SideToolbar />

                {/* Área central de dibujo */}
                <div className="flex-1 flex justify-center items-center bg-white">
                  <CanvasArea />
                </div>

                {/* Panel derecho */}
                <RightPanel />
              </div>
            </>
          ) : (
            <SimpleCanvas />
          )}
        </div>
      </section>

          
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          More more more!
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="255, 0, 255"
          />
        </div>
      </section>
      
      
      {/* Footer Preview */}
      <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 max-w-6xl mx-auto">
        <a id="about" className="text-xl md:text-2xl font-semibold">
          ABOUT US
        </a>
        <a id="contact" className="text-xl md:text-2xl font-semibold">
          CONTACT
        </a>
      </div>
    </>
  );
}
