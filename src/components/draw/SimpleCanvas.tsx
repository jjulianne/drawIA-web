import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";

export default function SimpleCanvas() {
  // Ref para el <canvas> del DOM
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Estado para la instancia de Fabric
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  // Estado del color actual
  const [color, setColor] = useState("#000000");

  // 1) Inicializar el canvas por primera vez
  useEffect(() => {
    if (!canvasRef.current) return;

    // Creamos la instancia de fabric.Canvas
    const fabCanvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "#ffffff",
      isDrawingMode: true,
    });

    // Creamos el pincel (solo una vez)
    fabCanvas.freeDrawingBrush = new fabric.PencilBrush(fabCanvas);
    (fabCanvas.freeDrawingBrush as fabric.PencilBrush).width = 5;
    (fabCanvas.freeDrawingBrush as fabric.PencilBrush).color = color;

    fabCanvas.on("path:created", () => {
      fabCanvas.renderAll();
    });


    // Guardamos la instancia en el estado
    setCanvas(fabCanvas);

    // Limpieza cuando se desmonta
    return () => {
      fabCanvas.dispose();
    };
  }, []);

  // 2) Actualizar el pincel cuando cambie el color
  useEffect(() => {
    if (!canvas || !canvas.freeDrawingBrush) return;

    // Obtenemos el brush actual y solo cambiamos la propiedad
    const brush = canvas.freeDrawingBrush as fabric.PencilBrush;
    brush.color = color;

  }, [color, canvas]);

  // 3) Botón para limpiar el canvas
  const clearCanvas = () => {
    if (canvas) {
      canvas.clear();
      canvas.backgroundColor = "#ffffff";
      canvas.renderAll();
      console.log("Canvas limpiado");
    }
  };

  // Render del componente
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="flex flex-col gap-6 items-center">
        {/* IMPORTANTE: definir width/height aquí */}
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="border-2 border-gray-300 bg-white shadow-2xl rounded-lg"
        />

        {/* Panel de colores y acciones */}
        <div className="flex gap-6 items-center bg-white px-6 py-4 rounded-full shadow-lg">
          {/* Botones de colores */}
          <div className="flex gap-3">
            <button
              className={`w-10 h-10 bg-black rounded-full border-2 transition-all hover:scale-110 ${
                color === "#000000"
                  ? "border-gray-800 ring-2 ring-gray-400"
                  : "border-gray-300"
              }`}
              onClick={() => setColor("#000000")}
              title="Negro"
            />
            <button
              className={`w-10 h-10 bg-red-500 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#ef4444"
                  ? "border-red-700 ring-2 ring-red-300"
                  : "border-gray-300"
              }`}
              onClick={() => setColor("#ef4444")}
              title="Rojo"
            />
            <button
              className={`w-10 h-10 bg-blue-500 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#3b82f6"
                  ? "border-blue-700 ring-2 ring-blue-300"
                  : "border-gray-300"
              }`}
              onClick={() => setColor("#3b82f6")}
              title="Azul"
            />
            <button
              className={`w-10 h-10 bg-green-500 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#22c55e"
                  ? "border-green-700 ring-2 ring-green-300"
                  : "border-gray-300"
              }`}
              onClick={() => setColor("#22c55e")}
              title="Verde"
            />
            <button
              className={`w-10 h-10 bg-yellow-400 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#facc15"
                  ? "border-yellow-600 ring-2 ring-yellow-300"
                  : "border-gray-300"
              }`}
              onClick={() => setColor("#facc15")}
              title="Amarillo"
            />
            <button
              className={`w-10 h-10 bg-purple-500 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#a855f7"
                  ? "border-purple-700 ring-2 ring-purple-300"
                  : "border-gray-300"
              }`}
              onClick={() => setColor("#a855f7")}
              title="Morado"
            />
          </div>

          {/* Separador */}
          <div className="w-px h-8 bg-gray-300"></div>

          {/* Botón Clear */}
          <button
            onClick={clearCanvas}
            className="px-5 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:from-pink-600 hover:to-pink-700 transition-all font-medium shadow-md hover:shadow-lg"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
