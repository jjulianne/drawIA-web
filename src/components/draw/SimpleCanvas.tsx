import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";

export default function SimpleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
    });

    const brush = new fabric.PencilBrush(canvas);
    brush.width = 5;
    brush.color = color;
    canvas.freeDrawingBrush = brush;

    return () => {
      canvas.dispose();
    };
  }, [color]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 p-4">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="border border-gray-400 bg-white shadow-md"
      />
      <div className="flex gap-2 mt-4">
        <button
          className="w-6 h-6 bg-black rounded-full border"
          onClick={() => setColor("#000000")}
        />
        <button
          className="w-6 h-6 bg-red-500 rounded-full border"
          onClick={() => setColor("#ef4444")}
        />
        <button
          className="w-6 h-6 bg-blue-500 rounded-full border"
          onClick={() => setColor("#3b82f6")}
        />
        <button
          className="w-6 h-6 bg-green-500 rounded-full border"
          onClick={() => setColor("#22c55e")}
        />
        <button
          className="w-6 h-6 bg-yellow-400 rounded-full border"
          onClick={() => setColor("#facc15")}
        />
      </div>
    </div>
  );
}
