import { ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import TicketItem from "./TicketItem"


function TicketsCard({ tickets }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-5 flex items-center justify-between border-b border-slate-200">
        <h2 className="font-semibold text-xl">
          Chamados recentes
        </h2>

        <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
          Ver todos
          <ArrowRight size={16} />
        </button>
      </div>

      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          {...ticket}
        />
      ))}
    </div>
  );
}

export default TicketsCard