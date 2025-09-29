export default function TopBar() {
  return (
    <div className="h-12 bg-gray-800 text-white flex items-center px-4 shadow-md">
      <button className="px-3 py-1 hover:bg-gray-700 rounded">Nuevo</button>
      <button className="px-3 py-1 hover:bg-gray-700 rounded">Abrir</button>
      <button className="px-3 py-1 hover:bg-gray-700 rounded">Guardar</button>
      <button className="px-3 py-1 hover:bg-gray-700 rounded ml-auto">
        Exportar
      </button>
    </div>
  );
}
