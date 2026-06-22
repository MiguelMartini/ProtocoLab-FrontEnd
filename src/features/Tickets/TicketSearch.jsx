import { Search } from "lucide-react";
import { useState } from "react";

function TicketSearch() {
  const [status, setStatus] = useState("Todos");

  const filters = ["Todos", "Aberto", "Em andamento", "Resolvido", "Fechado"];

  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Buscar por título ou descrição..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setStatus(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition
              ${
                status === filter
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicketSearch;
