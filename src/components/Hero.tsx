import { useState } from "react";
import TopBar from "./draw/TopBar";
import SideToolbar from "./draw/SideToolbar";
import RightPanel from "./draw/RightPanel";
import CanvasArea from "./draw/CanvasArea";
import SimpleCanvas from "./draw/SimpleCanvas";
import MagicBento from './snippets/MagicBento'
import ModeToggle from './snippets/ModeToggle'; 
import Stepper, { Step } from './snippets/Stepper';

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

      {/* Stepper */}
      <section
        id="tutorial-section"
        className="max-w-6xl mx-auto px-6 pb-2 pt-2 flex flex-col items-center"
      >

        <div className="mt-24 w-full max-w-3xl">
        {/* Titulo del tutorial */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-1">
            Quick Tutorial
          </h2>
          <p className="text-slate-400 mb-12 text-center">
            Follow these steps to create your AI-enhanced drawing in no time.
          </p>

          <Stepper
            initialStep={1}
            backButtonText="Back"
            nextButtonText="Next"
          >
            <Step>
              <div className="text-center py-4">
                <h3 className="text-lg font-semibold">Select mode</h3>
                <p className="text-sm text-slate-500">Choose Simple or Pro mode below the canvas.</p>
              </div>
            </Step>

            <Step>
              <div className="text-center py-4">
                <h3 className="text-lg font-semibold">Draw</h3>
                <p className="text-sm text-slate-500">Make your sketch on the canvas.</p>
              </div>
            </Step>

            <Step>
              <div className="text-center py-4">
                <h3 className="text-lg font-semibold">Add prompt (opcional)</h3>
                <p className="text-sm text-slate-500">Describe how you want the AI to improve or color your sketch.</p>
              </div>
            </Step>

            <Step>
              <div className="text-center py-4">
                <h3 className="text-lg font-semibold">Enjoy it!</h3>
                <p className="text-sm text-slate-500">Done — see the results below.</p>
              </div>
            </Step>
          </Stepper>
        </div>
      </section>

      {/* Seccion Canvas */}
      <section
        id="canvas-section"
        className="max-w-6xl mx-auto px-6 pb-24 pt-8"
      >
        {/* Switch Mode arriba del canvas */}
        <div className="mb-1 flex justify-center">
          <ModeToggle proMode={proMode} setProMode={setProMode} />
        </div>

        {/* Canvas real con renderizado persistente */}
        <div className="flex flex-col h-[80vh] w-full shadow-lg rounded-lg overflow-hidden">
          {/* MODO PRO */}
          <div className={proMode ? 'contents' : 'hidden'}>
            <>
              <TopBar />
              <div className="flex flex-1 overflow-hidden">
                <SideToolbar />
                <div className="flex-1 flex justify-center items-center bg-white">
                  <CanvasArea />
                </div>
                <RightPanel />
              </div>
            </>
          </div>

          {/* MODO SIMPLE */}
          <div className={!proMode ? 'contents' : 'hidden'}>
            <SimpleCanvas />
          </div>
        </div>

        {/* Prompt */}
      <div id="prompt-section" className="max-w-3xl mx-auto px-6 mt-8">
        <label className="block text-sm font-medium text-slate-700 mb-2">Prompt (opcional)</label>
        <input
          placeholder="Describe lo que querés que la IA haga con tu boceto..."
          className="w-full rounded-md border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-pink-400"
        />
      </div>
      </section>

      {/* Extra Section */}
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
