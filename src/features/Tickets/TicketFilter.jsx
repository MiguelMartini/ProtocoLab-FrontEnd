import { useState } from "react";

function TicketFilter() {
  const [status, setStatus] = useState("Todos");
  const filters = ["Todas", "Urgente", "Alta", "Médio", "Baixa"];

  return (
    <div className="mx-4 my-6">
      <div className="flex flex-row gap-4 items-center">
        <p>Prioridade: </p>
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
    </div>
  );
}

export default TicketFilter;
