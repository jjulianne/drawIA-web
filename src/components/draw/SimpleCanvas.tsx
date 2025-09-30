import { useEffect, useRef, useState } from "react";
import { Canvas, PencilBrush } from "fabric";

export default function SimpleCanvas() {
  // Ref para el elemento <canvas> del DOM
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Usamos useState con una función para crear la instancia de Fabric
  // Se inicializa sin un elemento DOM al principio.
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  const [color, setColor] = useState("#000000");

  // Este useEffect se encarga de la inicialización y limpieza
  useEffect(() => {
    // Solo se ejecuta si tenemos el elemento <canvas> en el DOM
    if (canvasRef.current) {
      // Creamos la instancia de Fabric y la guardamos en el estado
      const fabCanvas = new Canvas(canvasRef.current, {
        width: 800,
        height: 500,
        backgroundColor: '#ffffff',
        isDrawingMode: true,
      });
      setCanvas(fabCanvas);

      // La función de limpieza se ejecutará cuando el componente se desmonte
      return () => {
        // Hacemos una comprobación para estar seguros
        if (fabCanvas) {
          fabCanvas.dispose();
        }
      };
    }
  }, []); // El array vacío asegura que esto solo intente ejecutarse una vez al montar

  // Este useEffect se encarga de ACTUALIZAR el pincel cuando el color o el canvas cambien
  useEffect(() => {
    // Si no hay canvas, no hagas nada
    if (!canvas) return;

    // Creamos y configuramos un nuevo pincel
    const brush = new PencilBrush(canvas);
    brush.width = 5;
    brush.color = color;

    // Asignamos el pincel al canvas
    canvas.freeDrawingBrush = brush;
    // Nos aseguramos de que el modo de dibujo esté activo
    canvas.isDrawingMode = true;

  }, [color, canvas]); // Se ejecuta si 'color' o la instancia de 'canvas' cambian

  const clearCanvas = () => {
    if (canvas) {
      canvas.clear();
      canvas.backgroundColor = '#ffffff';
      canvas.renderAll();
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="flex flex-col gap-6 items-center">
        <canvas
          ref={canvasRef}
          className="border-2 border-gray-300 bg-white shadow-2xl rounded-lg"
        />
        
        <div className="flex gap-6 items-center bg-white px-6 py-4 rounded-full shadow-lg">
          {/* JSX de botones */}
          <div className="flex gap-3">
            <button
              className={`w-10 h-10 bg-black rounded-full border-2 transition-all hover:scale-110 ${
                color === "#000000" ? "border-gray-800 ring-2 ring-gray-400" : "border-gray-300"
              }`}
              onClick={() => setColor("#000000")}
              title="Negro"
            />
            <button
              className={`w-10 h-10 bg-red-500 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#ef4444" ? "border-red-700 ring-2 ring-red-300" : "border-gray-300"
              }`}
              onClick={() => setColor("#ef4444")}
              title="Rojo"
            />
            <button
              className={`w-10 h-10 bg-blue-500 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#3b82f6" ? "border-blue-700 ring-2 ring-blue-300" : "border-gray-300"
              }`}
              onClick={() => setColor("#3b82f6")}
              title="Azul"
            />
            <button
              className={`w-10 h-10 bg-green-500 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#22c55e" ? "border-green-700 ring-2 ring-green-300" : "border-gray-300"
              }`}
              onClick={() => setColor("#22c55e")}
              title="Verde"
            />
            <button
              className={`w-10 h-10 bg-yellow-400 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#facc15" ? "border-yellow-600 ring-2 ring-yellow-300" : "border-gray-300"
              }`}
              onClick={() => setColor("#facc15")}
              title="Amarillo"
            />
            <button
              className={`w-10 h-10 bg-purple-500 rounded-full border-2 transition-all hover:scale-110 ${
                color === "#a855f7" ? "border-purple-700 ring-2 ring-purple-300" : "border-gray-300"
              }`}
              onClick={() => setColor("#a855f7")}
              title="Morado"
            />
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
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