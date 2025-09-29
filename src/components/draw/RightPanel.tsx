export default function RightPanel() {
  return (
    <div className="w-64 bg-gray-800 text-white border-l border-gray-700 flex flex-col shadow-inner">
      {/* Configuración de color */}
      <div className="p-4 border-b border-gray-700">
        <h3 className="font-semibold mb-2">Colores</h3>
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-black rounded-full cursor-pointer border" />
          <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer border" />
          <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer border" />
          <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer border" />
          <div className="w-6 h-6 bg-yellow-400 rounded-full cursor-pointer border" />
        </div>
      </div>

      {/* Grosor del pincel */}
      <div className="p-4 border-b border-gray-700">
        <h3 className="font-semibold mb-2">Grosor</h3>
        <input
          type="range"
          min="1"
          max="50"
          className="w-full accent-white"
        />
      </div>

      {/* Capas */}
      <div className="p-4 flex-1 overflow-auto">
        <h3 className="font-semibold mb-2">Capas</h3>
        <ul className="space-y-1 text-sm">
          <li className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">
            Capa 1
          </li>
          <li className="bg-gray-700 px-2 py-1 rounded cursor-pointer hover:bg-gray-600">
            Capa 2
          </li>
        </ul>
      </div>
    </div>
  );
}
