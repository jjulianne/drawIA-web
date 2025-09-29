import { useRef, useEffect } from "react";
import * as fabric from "fabric";

export default function CanvasArea() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="border border-gray-700 shadow-lg bg-white"
    />
  );
}