import { Brush, Eraser, Square, Circle, Type, MousePointer } from "lucide-react";

export default function SideToolbar() {
  return (
    <div className="w-16 bg-gray-800 text-white flex flex-col items-center py-4 gap-4 shadow-md">
      <button className="p-2 hover:bg-gray-700 rounded">
        <Brush size={20} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded">
        <Eraser size={20} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded">
        <Square size={20} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded">
        <Circle size={20} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded">
        <Type size={20} />
      </button>
      <button className="p-2 hover:bg-gray-700 rounded">
        <MousePointer size={20} />
      </button>
    </div>
  );
}
